# Quick Start: Deploy to Railway

## 🚀 Deploy Flask Frontend

### Option 1: Use the Helper Script (Easiest)
```bash
./deploy-railway.sh
```
Follow the interactive prompts.

### Option 2: Manual Deployment

#### Step 1: Login to Railway
```bash
railway login
```

#### Step 2: Initialize Project
```bash
railway init
```
- Choose "Create new project"
- Give it a name like "robocollective-frontend"

#### Step 3: Deploy
```bash
railway up
```

#### Step 4: Generate Domain
```bash
railway domain
```
This will give you a URL like `https://your-app.railway.app`

#### Step 5: Set Environment Variables
```bash
# Set your Strapi URL (once you have Strapi deployed)
railway variables set STRAPI_URL=https://your-strapi-url.railway.app

# Set Flask to production mode
railway variables set FLASK_ENV=production
```

## 🎨 Deploy Strapi CMS

### Option 1: Use Railway Template (Recommended)
1. Go to https://railway.app/new
2. Search for "Strapi"
3. Click "Deploy Now"
4. Wait for deployment
5. Click on the Strapi service → "Settings" → "Generate Domain"
6. Access your Strapi admin at `https://your-strapi.railway.app/admin`

### Option 2: Manual Strapi Setup
```bash
# In a different directory
cd ..
npx create-strapi-app@latest strapi-backend --quickstart
cd strapi-backend

# Initialize Railway
railway init

# Add PostgreSQL
railway add

# Deploy
railway up

# Generate domain
railway domain
```

## 🔗 Connect Frontend to Strapi

After both are deployed:

```bash
# In your Flask frontend directory
railway variables set STRAPI_URL=https://your-strapi-url.railway.app

# Redeploy
railway up
```

## ✅ Configure Strapi

1. Open `https://your-strapi-url.railway.app/admin`
2. Create admin account
3. Build the "Landing" content type (see STRAPI.md for details)
4. Go to Settings → Roles → Public → Enable "find" and "findOne" for Landing
5. Go to Settings → Security → Add your frontend URL to CORS
6. Add your content in Content Manager

## 📝 Useful Commands

```bash
# View logs
railway logs

# Check status
railway status

# Open in browser
railway open

# List environment variables
railway variables

# Connect to service
railway connect
```

## 🐛 Troubleshooting

### Can't access the site
- Run `railway domain` to ensure a domain is generated
- Check `railway logs` for errors

### Strapi connection fails
- Verify STRAPI_URL is set correctly: `railway variables`
- Check Strapi CORS settings allow your frontend domain
- Ensure Strapi Public role has permissions enabled

### Static files not loading
- Verify deployment completed successfully with `railway status`
- Check logs with `railway logs`

## 📚 Next Steps

1. ✅ Deploy Flask frontend to Railway
2. ✅ Deploy Strapi to Railway (separate project)
3. ✅ Configure Strapi content types
4. ✅ Set STRAPI_URL environment variable in Flask app
5. ✅ Configure CORS in Strapi
6. ✅ Test the integration

## 💡 Tips

- Railway auto-deploys on git push if connected to GitHub
- Use Railway's built-in PostgreSQL for Strapi database
- Set up custom domains in Railway dashboard under Settings
- Use Railway's environment variables for secrets
