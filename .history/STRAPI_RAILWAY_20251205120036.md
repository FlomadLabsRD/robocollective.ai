# Strapi Environment Variables for Railway

When deploying Strapi to Railway, these environment variables will be helpful:

## Automatically Set by Railway Template
- `DATABASE_URL` - PostgreSQL connection string (auto-configured)
- `PORT` - Application port (auto-configured)

## You Should Set These

### App Configuration
```bash
NODE_ENV=production
APP_KEYS=<generate-with-openssl-rand-base64-32>
API_TOKEN_SALT=<generate-with-openssl-rand-base64-32>
ADMIN_JWT_SECRET=<generate-with-openssl-rand-base64-32>
JWT_SECRET=<generate-with-openssl-rand-base64-32>
```

### Generate Secrets
Run these commands to generate secure secrets:
```bash
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
```

### CORS Configuration
Add your frontend URL to allow API access:
```bash
# This can also be done in Strapi admin UI
CORS_ENABLED=true
```

## After Deployment

1. Railway will automatically provide PostgreSQL
2. Strapi will auto-migrate the database on first run
3. Access admin at: `https://your-strapi-app.railway.app/admin`
4. Create your admin account
5. Configure CORS in Settings to allow your frontend domain

## Railway Template vs Manual Setup

### Using Template (Recommended)
- ✅ PostgreSQL automatically configured
- ✅ Environment variables pre-set
- ✅ One-click deployment
- ✅ Optimized for Railway

### Manual Setup
```bash
# Create Strapi app locally
npx create-strapi-app@latest strapi-backend --quickstart

# Navigate to directory
cd strapi-backend

# Install PostgreSQL adapter
npm install pg

# Update config/database.js for PostgreSQL
# See Strapi docs for DATABASE_URL configuration

# Deploy to Railway
railway init
railway add  # Add PostgreSQL
railway up
railway domain
```

## Connecting to Your Flask Frontend

Once both are deployed, set the STRAPI_URL in your Flask app:

```bash
# In your Flask frontend Railway project
railway variables set STRAPI_URL=https://your-strapi-app.railway.app

# Redeploy
railway up
```

## Verifying the Connection

Test the API endpoint:
```bash
curl https://your-strapi-app.railway.app/api/landing?populate=deep
```

Should return your landing page content in JSON format.
