#!/bin/bash

# Railway Deployment Helper Script for RoboCollective.ai

echo "🚂 RoboCollective.ai Railway Deployment"
echo "======================================="
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Please install it first:"
    echo "   npm i -g @railway/cli"
    exit 1
fi

echo "✅ Railway CLI found"
echo ""

# Check if logged in
echo "Checking Railway login status..."
if ! railway whoami &> /dev/null; then
    echo "❌ Not logged in to Railway"
    echo "Please run: railway login"
    exit 1
fi

echo "✅ Logged in to Railway"
echo ""

# Menu
echo "What would you like to do?"
echo ""
echo "1) Initialize new Railway project (first time setup)"
echo "2) Deploy Flask frontend"
echo "3) Set environment variables"
echo "4) View deployment logs"
echo "5) Open project in browser"
echo "6) Show deployment status"
echo ""
read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "Initializing Railway project..."
        railway init
        echo ""
        echo "✅ Project initialized!"
        echo ""
        echo "Next steps:"
        echo "1. Set environment variables (option 3)"
        echo "2. Deploy your app (option 2)"
        ;;
    2)
        echo ""
        echo "Deploying to Railway..."
        railway up
        echo ""
        echo "✅ Deployment complete!"
        echo ""
        echo "Generate a domain with: railway domain"
        ;;
    3)
        echo ""
        echo "Setting environment variables..."
        echo ""
        read -p "Enter your Strapi URL (e.g., https://your-strapi.railway.app): " strapi_url
        
        if [ ! -z "$strapi_url" ]; then
            railway variables set STRAPI_URL="$strapi_url"
            echo "✅ STRAPI_URL set to: $strapi_url"
        fi
        
        echo ""
        read -p "Do you want to configure email settings? (y/n): " configure_email
        
        if [ "$configure_email" = "y" ]; then
            read -p "SMTP Host (e.g., smtp.gmail.com): " smtp_host
            read -p "SMTP Port (e.g., 465): " smtp_port
            read -p "SMTP User/Email: " smtp_user
            read -s -p "SMTP Password: " smtp_pass
            echo ""
            read -p "Recipient Email (e.g., sales@robocollective.ai): " to_email
            
            railway variables set CONTACT_SMTP_HOST="$smtp_host"
            railway variables set CONTACT_SMTP_PORT="$smtp_port"
            railway variables set CONTACT_SMTP_USER="$smtp_user"
            railway variables set CONTACT_SMTP_PASS="$smtp_pass"
            railway variables set CONTACT_TO_EMAIL="$to_email"
            
            echo "✅ Email settings configured!"
        fi
        
        railway variables set FLASK_ENV="production"
        echo "✅ FLASK_ENV set to production"
        ;;
    4)
        echo ""
        echo "Fetching logs..."
        railway logs
        ;;
    5)
        echo ""
        echo "Opening project in browser..."
        railway open
        ;;
    6)
        echo ""
        echo "Project status:"
        railway status
        echo ""
        echo "Environment variables:"
        railway variables
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "Done! 🎉"
