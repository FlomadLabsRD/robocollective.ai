from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=".")

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/<path:path>")
def static_proxy(path):
    return app.send_static_file(path)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
