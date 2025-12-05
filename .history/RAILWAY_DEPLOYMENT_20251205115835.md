# Railway Deployment Guide

## Prerequisites
- Railway CLI installed ✓
- Railway account (run `railway login` if not logged in)

## Part 1: Deploy Flask Frontend

### Step 1: Initialize Railway Project
```bash
railway login
railway init
```

### Step 2: Set Environment Variables
```bash
# Optional: Email configuration for contact form
railway variables set CONTACT_SMTP_HOST=smtp.gmail.com
railway variables set CONTACT_SMTP_PORT=465
railway variables set CONTACT_SMTP_USER=your-email@gmail.com
railway variables set CONTACT_SMTP_PASS=your-app-password
railway variables set CONTACT_TO_EMAIL=sales@robocollective.ai
```

### Step 3: Deploy
```bash
railway up
```

### Step 4: Get Your URL
```bash
railway domain
```

## Part 2: Deploy Strapi CMS

You have two options:

### Option A: Use Railway Template (Recommended)
1. Go to Railway Dashboard: https://railway.app/new
2. Search for "Strapi" in templates
3. Click "Deploy Now"
4. Railway will automatically set up Strapi with PostgreSQL
5. Once deployed, get your Strapi URL from the Railway dashboard

### Option B: Manual Strapi Setup
```bash
# Create a new directory for Strapi
cd ..
npx create-strapi-app@latest strapi-backend --quickstart

# Navigate to the Strapi project
cd strapi-backend

# Initialize Railway for Strapi
railway init

# Add PostgreSQL database
railway add

# Deploy Strapi
railway up

# Generate domain
railway domain
```

## Part 3: Configure Strapi Content Type

1. Access your Strapi admin panel at `https://your-strapi-domain/admin`
2. Create an admin account
3. Go to **Content-Type Builder** → **Create new single type** → Name it "Landing"
4. Add the fields as described in STRAPI.md
5. Go to **Settings** → **Users & Permissions plugin** → **Roles** → **Public**
6. Enable `find` and `findOne` permissions for the Landing type
7. Add your content in the Content Manager

## Part 4: Connect Frontend to Strapi

### Update Frontend Environment Variable
```bash
# In your Flask app's Railway project
railway variables set STRAPI_URL=https://your-strapi-domain
```

### Option 1: Inject via Flask (Recommended)
Update `index.html` to use an environment variable:

```html
<script>
  window.STRAPI_URL = "{{ strapi_url }}";
</script>
<script src="scripts.js"></script>
```

Then modify server.py to pass the variable.

### Option 2: Direct Configuration
Manually add before `scripts.js` in index.html:
```html
<script>
  window.STRAPI_URL = "https://your-strapi-domain";
</script>
```

## Part 5: Configure CORS in Strapi

1. In Strapi admin, go to **Settings** → **Global settings** → **Security**
2. Add your Railway frontend URL to allowed origins
3. Save

## Deployment Commands

### Deploy Flask App
```bash
railway up
```

### View Logs
```bash
railway logs
```

### Check Status
```bash
railway status
```

### Open in Browser
```bash
railway open
```

## Environment Variables Summary

### Flask App (.env or Railway variables)
- `PORT` - Auto-set by Railway
- `FLASK_ENV=production`
- `STRAPI_URL` - Your Strapi Railway URL
- `CONTACT_SMTP_HOST` - (Optional) Email server
- `CONTACT_SMTP_PORT` - (Optional) Email port
- `CONTACT_SMTP_USER` - (Optional) Email username
- `CONTACT_SMTP_PASS` - (Optional) Email password
- `CONTACT_TO_EMAIL` - (Optional) Recipient email

### Strapi App
- Automatically configured by Railway template

## Next Steps

1. Deploy Flask app first
2. Deploy Strapi separately
3. Configure Strapi content types
4. Update Flask app's STRAPI_URL environment variable
5. Test the integration

## Troubleshooting

### Build Fails
- Check `railway logs`
- Ensure all dependencies are in requirements.txt

### Can't Connect to Strapi
- Verify CORS settings in Strapi
- Check STRAPI_URL environment variable
- Ensure Public role has permissions

### Static Files Not Loading
- Verify Flask static_folder is set to "."
- Check file paths are relative
