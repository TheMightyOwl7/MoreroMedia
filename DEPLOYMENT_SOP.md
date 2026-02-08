# Deployment SOP: Juvane Moonsami Portfolio

This document outlines the standard operating procedure for deploying the Juvane Moonsami portfolio website to Coolify using Nixpacks.

---

## 1. Project Assumptions

- **Framework**: Next.js 16.1.6 (Node.js 20+)
- **Deployment Target**: Production VPS via Coolify
- **Build Pack**: Nixpacks
- **Repo Host**: GitHub

---

## 2. One-Time Coolify Setup

1.  **Create Application**:
    - Source: GitHub Repository
    - Branch: `main` (or default branch)
2.  **Build Configuration**:
    - **Build Pack**: Nixpacks
    - **Build Command**: `npm run build`
    - **Start Command**: `npm run start`
    - **Install Command**: `npm ci` (managed by Nixpacks usually, but verify)
3.  **Environment Variables**:
    - Add any required secrets (e.g., API keys) in the Coolify dashboard.
4.  **Networking**:
    - Attach domain: `https://moreromedia.co.za` (or staging URL)
    - Enable HTTPS (Let's Encrypt).

---

## 3. Standard Operating Procedure (SOP)

### 3.1 Pre-Deploy (Local)

Always verify the build locally before pushing.

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies (if needed)
npm install

# 3. Run development server to check for immediate issues
npm run dev

# 4. Run production build to verify no build errors
npm run build

# 5. (Optional) Start production server locally
npm run start
```

### 3.2 Deploy (Repo + Coolify)

Once local verification passes:

```bash
# 1. Check status
git status

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "feat: [description of changes]"

# 4. Push to trigger deployment
git push origin main
```

**In Coolify Dashboard:**
1.  Navigate to the application.
2.  Confirm a new deployment has started automatically (via webhook).
    - *If not auto-deploying, click "Deploy".*
3.  **Watch Build Logs**: Ensure the build completes successfully.
4.  **Watch Runtime Logs**: Confirm Next.js starts (look for `Ready in ...`).

### 3.3 Post-Deploy Verification

1.  **Visit Domain**: Open `https://moreromedia.co.za`.
2.  **Verify Critical Paths**:
    - Home Page
    - Work / Case Studies (Dynamic Routing)
    - Contact Form
3.  **Check Assets**: Ensure images and fonts (Great Vibes, Inter) load correctly.
4.  **Check SEO**: Verify meta tags are present (View Source).

---

## 4. Environment Variables

- **Management**: Manage all production secrets within the Coolify UI ("Environment Variables" tab).
- **Updates**: If you change an environment variable in Coolify, you **must** redeploy the application for changes to take effect.

---

## 5. Troubleshooting Common Issues

### 5.1 Build Fails
- **Symptom**: "Build failed" in Coolify logs.
- **Action**:
    1. Check specific error message in Coolify build logs.
    2. Reproduce locally with `npm run build`.
    3. Fix code, commit, and push.

### 5.2 Bad Gateway (502) / Application Error
- **Symptom**: Site shows 502 error.
- **Action**:
    1. check **Runtime Logs** in Coolify.
    2. Ensure the application is listening on the correct port (Coolify usually expects 3000 for Next.js).
    3. Verify `npm run start` command is executing correctly.

### 5.3 Assets 404
- **Symptom**: Images or styles missing.
- **Action**:
    1. Verify `metadataBase` is set in `src/app/layout.tsx` (Fixed in previous step).
    2. Check if assets are in `public/` folder.
    3. Ensure `next/image` is used correctly.
