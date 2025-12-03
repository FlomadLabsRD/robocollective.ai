import os
import smtplib
from email.message import EmailMessage
from flask import Flask, send_from_directory, request, jsonify

app = Flask(__name__, static_folder=".")

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/<path:path>")
def static_proxy(path):
    return app.send_static_file(path)

@app.route("/api/contact", methods=["POST"])
def api_contact():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()
    company = (data.get("company") or "").strip()
    role = (data.get("role") or "").strip()
    product = (data.get("product") or "").strip()
    category = (data.get("category") or "").strip()

    if not name or not email or not message:
        return jsonify({"ok": False, "error": "Name, email, and message are required."}), 400

    smtp_host = os.getenv("CONTACT_SMTP_HOST")
    smtp_port = os.getenv("CONTACT_SMTP_PORT")
    smtp_user = os.getenv("CONTACT_SMTP_USER")
    smtp_pass = os.getenv("CONTACT_SMTP_PASS")
    to_email = os.getenv("CONTACT_TO_EMAIL")

    if not all([smtp_host, smtp_port, smtp_user, smtp_pass, to_email]):
        return jsonify({"ok": False, "error": "Email service is not configured."}), 500

    subject = f"New inquiry from {name} on RoboCollective.ai"
    body_lines = [
        f"Name: {name}",
        f"Email: {email}",
        f"Company: {company or '—'}",
        f"Role: {role or '—'}",
        f"Product: {product or '—'}",
        f"Category: {category or '—'}",
        "",
        "Message:",
        message,
    ]
    body = "\n".join(body_lines)

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = smtp_user
    msg["To"] = to_email
    msg.set_content(body)

    try:
        with smtplib.SMTP_SSL(smtp_host, int(smtp_port)) as server:
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    except Exception as exc:  # pragma: no cover - best-effort logging
        return jsonify({"ok": False, "error": f"Unable to send email: {exc}"}), 500

    return jsonify({"ok": True}), 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
