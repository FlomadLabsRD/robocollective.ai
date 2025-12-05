# Strapi Setup Guide for RoboCollective.ai

## Quick Overview
You need to create a "Landing" content type in Strapi to store all the homepage content. This guide covers both the manual UI method and the automated script method.

---

## Method 1: Manual Setup via Strapi Admin UI (Recommended for First Time)

### Step 1: Access Strapi Admin
1. Go to: **https://strapi-production-58ee.up.railway.app/admin**
2. **First time only:** Create your admin account
   - Email: your-email@example.com
   - Password: (choose a strong password)
   - First name & Last name
   - Click "Let's start"

### Step 2: Create the Landing Single Type

#### 2.1 Open Content-Type Builder
1. In the left sidebar, click **"Content-Type Builder"** (looks like a puzzle piece)
2. Under "SINGLE TYPES", click **"+ Create new single type"**

#### 2.2 Configure Single Type
1. **Display name:** `Landing`
2. Click **"Continue"**

#### 2.3 Add Text Fields
Click **"+ Add another field"** for each of these:

**Text Field #1:**
- Type: **Text**
- Name: `heroHeadingPrefix`
- Click "Advanced Settings"
  - Required field: ✅
- Click **"Finish"** then **"Save"**

**Text Field #2:**
- Type: **Text**
- Name: `heroHeadingSuffix`
- Advanced Settings → Required: ✅
- Click **"Finish"** then **"Save"**

**Text Field #3:**
- Type: **Text**
- Name: `ctaHeading`
- Advanced Settings → Required: ✅
- Click **"Finish"** then **"Save"**

**Text Field #4:**
- Type: **Text**
- Name: `ctaPrimaryLabel`
- Click **"Finish"** then **"Save"**

**Text Field #5:**
- Type: **Text**
- Name: `ctaPrimaryUrl`
- Click **"Finish"** then **"Save"**

**Text Field #6:**
- Type: **Text**
- Name: `ctaSecondaryLabel`
- Click **"Finish"** then **"Save"**

**Text Field #7:**
- Type: **Text**
- Name: `ctaSecondaryUrl`
- Click **"Finish"** then **"Save"**

#### 2.4 Add Rich Text Fields
**Rich Text Field #1:**
- Type: **Rich Text**
- Name: `heroLede`
- Click **"Finish"** then **"Save"**

**Rich Text Field #2:**
- Type: **Rich Text**
- Name: `ctaBody`
- Click **"Finish"** then **"Save"**

#### 2.5 Create Components First (Required for Repeatable Components)

You need to create components before you can add them as repeatable fields.

**Creating Components:**

1. In Content-Type Builder, look for **"COMPONENTS"** section at the bottom left
2. Click **"+ Create new component"**

**Component #1: hero-dynamic-word**
- Category: `hero` (type this in)
- Name: `dynamic-word`
- Click **"Continue"**
- Add field:
  - Type: **Text**
  - Name: `word`
  - Advanced Settings → Required: ✅
  - Click **"Finish"**
- Click **"Save"** (the component is now created)

**Component #2: hero-meta-item**
- Click **"+ Create new component"** again
- Category: `hero`
- Name: `meta-item`
- Click **"Continue"**
- Add field:
  - Type: **Text**
  - Name: `text`
  - Click **"Finish"**
- Click **"Save"**

**Component #3: service-card**
- Click **"+ Create new component"**
- Category: `service`
- Name: `card`
- Click **"Continue"**
- Add field #1:
  - Type: **Text**
  - Name: `title`
  - Click **"Add another field"**
- Add field #2:
  - Type: **Text**
  - Name: `description`
  - Click **"Finish"**
- Click **"Save"**

**Component #4: process-step**
- Click **"+ Create new component"**
- Category: `process`
- Name: `step`
- Click **"Continue"**
- Add field #1:
  - Type: **Text**
  - Name: `title`
  - Click **"Add another field"**
- Add field #2:
  - Type: **Text**
  - Name: `description`
  - Click **"Finish"**
- Click **"Save"**

**Component #5: metric**
- Click **"+ Create new component"**
- Category: `metrics`
- Name: `metric`
- Click **"Continue"**
- Add field #1:
  - Type: **Text**
  - Name: `value`
  - Click **"Add another field"**
- Add field #2:
  - Type: **Text**
  - Name: `description`
  - Click **"Finish"**
- Click **"Save"**

**Component #6: case-study**
- Click **"+ Create new component"**
- Category: `case-studies`
- Name: `study`
- Click **"Continue"**
- Add field #1:
  - Type: **Text**
  - Name: `title`
  - Click **"Add another field"**
- Add field #2:
  - Type: **Text**
  - Name: `summary`
  - Click **"Add another field"**
- Add field #3:
  - Type: **Boolean**
  - Name: `highlight`
  - Click **"Finish"**
- Click **"Save"**

#### 2.6 Now Add Repeatable Components to Landing Type

Go back to **Content-Type Builder** → **SINGLE TYPES** → **Landing** → **Edit**

**Repeatable Component #1:**
- Click **"+ Add another field"**
- Type: **Component**
- Name: `heroDynamicWords`
- Select: **Use an existing component**
- Choose: `hero.dynamic-word`
- Type: **Repeatable component** (select this option)
- Click **"Finish"** then **"Save"**

**Repeatable Component #2:**
- Click **"+ Add another field"**
- Type: **Component**
- Name: `heroMeta`
- Select: **Use an existing component**
- Choose: `hero.meta-item`
- Type: **Repeatable component**
- Click **"Finish"** then **"Save"**

**Repeatable Component #3:**
- Click **"+ Add another field"**
- Type: **Component**
- Name: `services`
- Select: **Use an existing component**
- Choose: `service.card`
- Type: **Repeatable component**
- Click **"Finish"** then **"Save"**

**Repeatable Component #4:**
- Click **"+ Add another field"**
- Type: **Component**
- Name: `processSteps`
- Select: **Use an existing component**
- Choose: `process.step`
- Type: **Repeatable component**
- Click **"Finish"** then **"Save"**

**Repeatable Component #5:**
- Click **"+ Add another field"**
- Type: **Component**
- Name: `metrics`
- Select: **Use an existing component**
- Choose: `metrics.metric`
- Type: **Repeatable component**
- Click **"Finish"** then **"Save"**

**Repeatable Component #6:**
- Click **"+ Add another field"**
- Type: **Component**
- Name: `caseStudies`
- Select: **Use an existing component**
- Choose: `case-studies.study`
- Type: **Repeatable component**
- Click **"Finish"** then **"Save"**

Click the final **"Save"** button at the top right!

### Step 3: Enable Public Access (CRITICAL!)

Without this, your frontend can't fetch the data!

1. Go to **Settings** (gear icon in left sidebar)
2. Under "USERS & PERMISSIONS PLUGIN", click **"Roles"**
3. Click on **"Public"**
4. Scroll down to find **"Landing"** section
5. Check these boxes:
   - ✅ `find`
   - ✅ `findOne`
6. Click **"Save"** at the top right

### Step 4: Configure CORS (Already Done via Railway)

This was already configured with the environment variable `CORS_ORIGIN`, but you can verify:

1. Go to **Settings** → **Global settings** → **Security**
2. You should see your frontend URL in allowed origins
3. If not, add: `https://frontend-production-d810.up.railway.app`

### Step 5: Add Content

1. Click **"Content Manager"** in the left sidebar
2. Under "SINGLE TYPES", click **"Landing"**
3. Click **"Add an entry"** or edit the existing one

**Fill in the fields:**

**Hero Section:**
- `heroHeadingPrefix`: "RoboCollective.ai orchestrates "
- `heroHeadingSuffix`: " workflows so you can scale with confidence."
- `heroLede`: "We bridge strategic vision and operational precision through AI-native systems..."

**Hero Dynamic Words** (click "+ Add an entry" for each):
- Word 1: "adaptive"
- Word 2: "intelligent"
- Word 3: "human-centered"

**Hero Meta** (click "+ Add an entry" for each):
- Text 1: "Trusted by engineering, product, and operations teams"
- Text 2: "Dynamic pricing, predictable ROI"

**Services** (click "+ Add an entry" for each service):
- Service 1:
  - Title: "Intelligent automation"
  - Description: "Design, launch, and monitor AI agents that handle repetitive tasks..."
- Service 2:
  - Title: "Data storytelling"
  - Description: "Transform raw metrics into clear narratives..."
- Service 3:
  - Title: "Operational UX"
  - Description: "Architect human-centered dashboards..."

**Process Steps** (click "+ Add an entry" for each):
- Step 1:
  - Title: "Immersion"
  - Description: "We shadow your teams to understand workflows..."
- Step 2:
  - Title: "System design"
  - Description: "Our architects build automation blueprints..."
- Step 3:
  - Title: "Launch + learn"
  - Description: "We ship targeted experiences and iterate..."

**Metrics** (click "+ Add an entry" for each):
- Metric 1:
  - Value: "3.2x"
  - Description: "More runbooks automated within three months"
- Metric 2:
  - Value: "94%"
  - Description: "Stakeholder confidence after first sprint"
- Metric 3:
  - Value: "48"
  - Description: "Dashboards kept in sync with live AI insights"

**Case Studies** (click "+ Add an entry" for each):
- Study 1:
  - Title: "Launch intelligence for a new AI product"
  - Summary: "United product/ops teams around shared metrics..."
  - Highlight: ❌ (unchecked)
- Study 2:
  - Title: "Automation for global research"
  - Summary: "Scaled collaboration across continents..."
  - Highlight: ✅ (checked)
- Study 3:
  - Title: "Operations pulse for fintech teams"
  - Summary: "Crafted a resilient operating system..."
  - Highlight: ❌ (unchecked)

**CTA Section:**
- `ctaHeading`: "Embed RoboCollective.ai inside your next launch."
- `ctaBody`: "Share your most strategic ambition, and we'll co-create a roadmap..."
- `ctaPrimaryLabel`: "View our products"
- `ctaPrimaryUrl`: "/shop.html"
- `ctaSecondaryLabel`: "Download capability overview"
- `ctaSecondaryUrl`: "#"

Click **"Save"** then **"Publish"** at the top right!

### Step 6: Test the API

Open this URL in your browser:
```
https://strapi-production-58ee.up.railway.app/api/landing?populate=deep
```

You should see JSON with all your content!

---

## Method 2: Automated Setup via Script (Advanced)

### Prerequisites
- Strapi admin account already created
- Node.js installed locally
- Strapi admin credentials

### Step 1: Create Setup Script

Save this as `strapi-setup.js` in your project:

```javascript
const axios = require('axios');

// Configuration
const STRAPI_URL = 'https://strapi-production-58ee.up.railway.app';
const ADMIN_EMAIL = 'your-admin-email@example.com';
const ADMIN_PASSWORD = 'your-admin-password';

async function loginToStrapi() {
  const response = await axios.post(`${STRAPI_URL}/admin/login`, {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  });
  return response.data.data.token;
}

async function createContentType(token) {
  // Note: Content-Type creation via API is limited in Strapi
  // It's recommended to use the admin UI for this
  console.log('Content types must be created via Strapi Admin UI');
  console.log('Follow the manual steps in the guide');
}

async function setupPublicPermissions(token) {
  const headers = { Authorization: `Bearer ${token}` };
  
  // Get the public role
  const rolesResponse = await axios.get(
    `${STRAPI_URL}/api/users-permissions/roles`,
    { headers }
  );
  
  const publicRole = rolesResponse.data.roles.find(role => role.type === 'public');
  
  // Update permissions for Landing type
  await axios.put(
    `${STRAPI_URL}/api/users-permissions/roles/${publicRole.id}`,
    {
      permissions: {
        ...publicRole.permissions,
        'api::landing': {
          controllers: {
            landing: {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        }
      }
    },
    { headers }
  );
  
  console.log('✅ Public permissions configured');
}

async function createLandingContent(token) {
  const headers = { Authorization: `Bearer ${token}` };
  
  const landingData = {
    data: {
      heroHeadingPrefix: "RoboCollective.ai orchestrates ",
      heroHeadingSuffix: " workflows so you can scale with confidence.",
      heroLede: "We bridge strategic vision and operational precision through AI-native systems, data synthesis, and human-centered design.",
      heroDynamicWords: [
        { word: "adaptive" },
        { word: "intelligent" },
        { word: "human-centered" }
      ],
      heroMeta: [
        { text: "Trusted by engineering, product, and operations teams" },
        { text: "Dynamic pricing, predictable ROI" }
      ],
      services: [
        {
          title: "Intelligent automation",
          description: "Design, launch, and monitor AI agents that handle repetitive tasks so your team can focus on strategic initiatives."
        },
        {
          title: "Data storytelling",
          description: "Transform raw metrics into clear narratives that align stakeholders and inform decisions."
        },
        {
          title: "Operational UX",
          description: "Architect human-centered dashboards that surface insights when teams need them most."
        }
      ],
      processSteps: [
        {
          title: "Immersion",
          description: "We shadow your teams to understand workflows, pain points, and opportunities for automation."
        },
        {
          title: "System design",
          description: "Our architects build automation blueprints that integrate seamlessly with your existing tools."
        },
        {
          title: "Launch + learn",
          description: "We ship targeted experiences, gather feedback, and iterate based on real usage patterns."
        }
      ],
      metrics: [
        { value: "3.2x", description: "More runbooks automated within three months" },
        { value: "94%", description: "Stakeholder confidence after first sprint" },
        { value: "48", description: "Dashboards kept in sync with live AI insights" }
      ],
      caseStudies: [
        {
          title: "Launch intelligence for a new AI product",
          summary: "United product/ops teams around shared metrics, reducing launch delays by 40%.",
          highlight: false
        },
        {
          title: "Automation for global research",
          summary: "Scaled collaboration across continents with real-time synthesis and intelligent routing.",
          highlight: true
        },
        {
          title: "Operations pulse for fintech teams",
          summary: "Crafted a resilient operating system that surfaces critical signals without alert fatigue.",
          highlight: false
        }
      ],
      ctaHeading: "Embed RoboCollective.ai inside your next launch.",
      ctaBody: "Share your most strategic ambition, and we'll co-create a roadmap that combines automation, intelligence, and creative rigor.",
      ctaPrimaryLabel: "View our products",
      ctaPrimaryUrl: "/shop.html",
      ctaSecondaryLabel: "Download capability overview",
      ctaSecondaryUrl: "#"
    }
  };
  
  try {
    const response = await axios.put(
      `${STRAPI_URL}/api/landing`,
      landingData,
      { headers }
    );
    console.log('✅ Landing content created/updated');
    return response.data;
  } catch (error) {
    console.error('❌ Error creating content:', error.response?.data || error.message);
  }
}

async function main() {
  try {
    console.log('🚀 Starting Strapi setup...');
    
    // Step 1: Login
    console.log('Logging in...');
    const token = await loginToStrapi();
    console.log('✅ Logged in successfully');
    
    // Step 2: Setup permissions
    console.log('Setting up public permissions...');
    await setupPublicPermissions(token);
    
    // Step 3: Create content
    console.log('Creating landing page content...');
    await createLandingContent(token);
    
    console.log('🎉 Setup complete!');
    console.log(`Test the API: ${STRAPI_URL}/api/landing?populate=deep`);
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

main();
```

### Step 2: Install Dependencies

```bash
npm install axios
```

### Step 3: Run the Script

```bash
node strapi-setup.js
```

**Note:** The script can handle permissions and content creation, but **content types must be created manually** via the Strapi Admin UI first. Strapi doesn't provide a stable API for programmatic content-type creation.

---

## Quick Reference

### Important URLs
- **Strapi Admin:** https://strapi-production-58ee.up.railway.app/admin
- **API Endpoint:** https://strapi-production-58ee.up.railway.app/api/landing?populate=deep
- **Frontend:** https://frontend-production-d810.up.railway.app

### Railway Environment Variables (Already Configured)
- `STRAPI_URL` (Frontend): Points to Strapi backend
- `CORS_ORIGIN` (Strapi): Allows frontend requests
- `DATABASE_URL` (Strapi): Postgres connection
- `APP_KEYS`, `JWT_SECRET`, etc. (Strapi): Security keys

### Troubleshooting

**Problem: Can't access Strapi admin**
- Check URL: https://strapi-production-58ee.up.railway.app/admin
- Check Railway logs: `cd /Users/elizabethstein/Projects/strapi-backend && railway logs`

**Problem: Frontend can't fetch data**
- Verify Public permissions are enabled for Landing type
- Check CORS settings include frontend URL
- Test API directly: `curl https://strapi-production-58ee.up.railway.app/api/landing?populate=deep`

**Problem: Database connection error**
- Verify `DATABASE_URL` is set in Strapi service
- Check Railway logs for Postgres connection errors

**Problem: Content not showing on frontend**
- Make sure content is **Published** (not just saved as draft)
- Check browser console for CORS errors
- Verify `STRAPI_URL` is set correctly in frontend service

---

## Next Steps After Setup

1. ✅ Create admin account
2. ✅ Build Landing content type
3. ✅ Enable Public permissions
4. ✅ Add content
5. ✅ Publish content
6. Test frontend: https://frontend-production-d810.up.railway.app
7. Customize content as needed via Content Manager

---

## For Your Coworker

**TL;DR Quick Start:**
1. Go to https://strapi-production-58ee.up.railway.app/admin
2. Log in with admin credentials
3. Click "Content Manager" → "Landing"
4. Edit the content
5. Click "Save" then "Publish"
6. Changes appear immediately on https://frontend-production-d810.up.railway.app

The content is already set up - they just need to edit it!
