# Getting Started - For Team Members

## Quick Setup: Pull Latest Changes from GitHub

### If you already have the project cloned:

```bash
# Navigate to the project directory
cd /path/to/robocollective.ai

# Pull the latest changes
git pull origin main
```

### If you're setting up for the first time:

```bash
# Clone the repository
git clone https://github.com/FlomadLabsRD/robocollective.ai.git

# Navigate into the project
cd robocollective.ai

# You're ready!
```

---

## What's New in This Update

✅ **Railway Deployment** - The site is now live on Railway
✅ **Strapi CMS Integration** - Backend content management system is configured
✅ **Documentation** - Comprehensive setup and deployment guides added

### New Files Added:
- `STRAPI_SETUP_GUIDE.md` - **START HERE** for Strapi content setup
- `RAILWAY_DEPLOYMENT.md` - Detailed deployment documentation
- `QUICKSTART_RAILWAY.md` - Quick deployment reference
- `Procfile`, `railway.toml`, `runtime.txt` - Railway configuration
- `deploy-railway.sh` - Automated deployment helper script

---

## Your Main Tasks

### Option 1: Just Edit Content (Easiest)

You don't need to pull any code changes to edit website content!

**Steps:**
1. Go to: **https://strapi-production-58ee.up.railway.app/admin**
2. Log in with your admin credentials
3. Click **"Content Manager"** → **"Landing"**
4. Edit the text, headlines, descriptions, etc.
5. Click **"Save"** then **"Publish"**
6. Changes appear immediately on the live site!

👉 **See `STRAPI_SETUP_GUIDE.md` for detailed instructions**

### Option 2: Set Up Strapi from Scratch

If the Strapi content types aren't set up yet:

1. Pull the latest code: `git pull origin main`
2. Open `STRAPI_SETUP_GUIDE.md`
3. Follow **Method 1: Manual Setup via Strapi Admin UI**
4. This is a one-time setup (about 20-30 minutes)
5. After setup, use Option 1 above for all future edits

### Option 3: Work on the Code Locally

If you want to make code changes:

```bash
# Pull latest changes
git pull origin main

# Set up Python virtual environment
python3 -m venv venv
source venv/bin/activate  # On Mac/Linux
# OR
venv\Scripts\activate     # On Windows

# Install dependencies
pip install -r requirements.txt

# Run locally
python server.py
```

The local site will be at: **http://127.0.0.1:5001**

---

## Live URLs

- **Production Site:** https://frontend-production-d810.up.railway.app
- **Strapi Admin:** https://strapi-production-58ee.up.railway.app/admin
- **Strapi API:** https://strapi-production-58ee.up.railway.app/api/landing?populate=deep

---

## Common Questions

**Q: Do I need to pull code changes to edit website content?**
A: No! Just log into Strapi admin and edit directly.

**Q: How do I get Strapi admin credentials?**
A: Ask the team lead who deployed it. They created the admin account.

**Q: What if I want to change the code?**
A: Pull latest changes, make edits locally, test, then commit and push back to GitHub.

**Q: How do I deploy my code changes?**
A: Railway auto-deploys when you push to the `main` branch on GitHub. Changes appear live in ~2-3 minutes.

**Q: I'm getting git conflicts when pulling. What do I do?**
A: Run `git stash` first (saves your changes), then `git pull`, then `git stash pop` (restores your changes).

---

## Need Help?

1. Check `STRAPI_SETUP_GUIDE.md` for Strapi questions
2. Check `RAILWAY_DEPLOYMENT.md` for deployment questions
3. Ask the team on Slack/email

---

## Quick Command Reference

```bash
# Pull latest changes
git pull origin main

# See what changed
git log --oneline -5

# Run locally
python server.py

# Check Railway deployment status (if you have Railway CLI)
railway status
```

---

## For Content Editors (Non-Technical)

You only need to know this:

1. **URL:** https://strapi-production-58ee.up.railway.app/admin
2. **Login** with your credentials
3. **Click "Content Manager" → "Landing"**
4. **Edit** the content
5. **Click "Save" then "Publish"**
6. **Done!** Changes are live immediately

No code, no terminal, no git required! 🎉
