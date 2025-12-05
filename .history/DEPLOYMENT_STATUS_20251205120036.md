# RoboCollective.ai - Railway Deployment Summary

## ✅ What's Been Configured

### 1. Railway Deployment Files Created
- ✅ `Procfile` - Tells Railway how to run the app with Gunicorn
- ✅ `runtime.txt` - Specifies Python 3.11
- ✅ `railway.toml` - Railway-specific configuration
- ✅ `requirements.txt` - Updated with Gunicorn for production

### 2. Flask App Updated
- ✅ Server now uses PORT environment variable (Railway auto-assigns this)
- ✅ Production mode enabled via FLASK_ENV environment variable
- ✅ Dynamic Strapi URL injection from environment variable
- ✅ index.html updated to support dynamic Strapi configuration

### 3. Helper Scripts & Documentation
- ✅ `deploy-railway.sh` - Interactive deployment helper script
- ✅ `QUICKSTART_RAILWAY.md` - Quick deployment guide
- ✅ `RAILWAY_DEPLOYMENT.md` - Comprehensive deployment documentation
- ✅ `.gitignore` - Updated to exclude venv, .env, and Railway files

## 🎯 Current Status

**Railway Login:** ✅ Logged in as dev.team@flomad.com

## 🚀 Next Steps to Deploy

### Deploy the Flask Frontend (This Repository)

```bash
# Option 1: Use the helper script
./deploy-railway.sh

# Option 2: Manual commands
railway init          # Initialize Railway project
railway up            # Deploy the app
railway domain        # Generate a public URL
```

### Deploy Strapi CMS (Separate Project)

**Recommended:** Use Railway's Strapi template
1. Visit: https://railway.app/new
2. Search for "Strapi"
3. Click "Deploy Now"
4. Wait for deployment to complete
5. Generate a domain for the Strapi service
6. Configure the content types (see STRAPI.md)

### Connect Them Together

Once both are deployed:
```bash
# Set the Strapi URL in your Flask app
railway variables set STRAPI_URL=https://your-strapi-app.railway.app

# Redeploy to apply changes
railway up
```

## 📋 Environment Variables Needed

### Flask Frontend
- `STRAPI_URL` - Your Strapi Railway URL (required)
- `FLASK_ENV=production` - Sets production mode
- `CONTACT_SMTP_HOST` - (Optional) For contact form emails
- `CONTACT_SMTP_PORT` - (Optional) For contact form emails
- `CONTACT_SMTP_USER` - (Optional) For contact form emails
- `CONTACT_SMTP_PASS` - (Optional) For contact form emails
- `CONTACT_TO_EMAIL` - (Optional) For contact form emails

### Strapi Backend
- Automatically configured by Railway template (includes PostgreSQL)

## 🔧 Strapi Configuration Checklist

After Strapi is deployed:
1. [ ] Access admin panel at `https://your-strapi.railway.app/admin`
2. [ ] Create admin account
3. [ ] Create "Landing" single type (use Content-Type Builder)
4. [ ] Add all fields as described in STRAPI.md
5. [ ] Enable Public role permissions (Settings → Roles → Public)
6. [ ] Configure CORS to allow your frontend domain (Settings → Security)
7. [ ] Add content in Content Manager

## 📖 Documentation Reference

- **Quick Start:** `QUICKSTART_RAILWAY.md`
- **Detailed Guide:** `RAILWAY_DEPLOYMENT.md`
- **Strapi Setup:** `STRAPI.md`
- **Helper Script:** Run `./deploy-railway.sh`

## 🎉 Ready to Deploy!

You're all set! Run `./deploy-railway.sh` or follow the manual steps above.
