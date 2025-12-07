# Deployment Guide

This guide will help you deploy this website to GitHub and Netlify.

## 📋 Prerequisites

- A GitHub account
- A Netlify account (free tier is sufficient)
- Git installed on your local machine

## 🔧 Step 1: Set Up GitHub Repository

### Option A: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner and select **New repository**
3. Name your repository (e.g., `vanborglimited.com` or `vanborg-website`)
4. Choose **Public** or **Private** (your preference)
5. **DO NOT** initialise with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Option B: Use Existing Repository

If you already have a repository, skip to Step 2.

## 🔗 Step 2: Update Git Remote

Your project is currently connected to a test repository. You need to update it to point to your new repository.

### Check Current Remote

```bash
git remote -v
```

This will show your current remote (likely pointing to `https://github.com/VanBorg/TEST.git`).

### Update to New Repository

**Note**: Your repository is already configured to point to `https://github.com/VanBorg/Vanborglimited.com.git`. If you need to update it:

```bash
# Remove the old remote (if needed)
git remote remove origin

# Add your repository as the remote
git remote add origin https://github.com/VanBorg/Vanborglimited.com.git

# Verify the remote
git remote -v
```

## 📤 Step 3: Push Code to GitHub

Before pushing, make sure all your changes are committed:

```bash
# Check status
git status

# Add all changes (if you have uncommitted changes)
git add .

# Commit changes (if needed)
git commit -m "Initial commit for new repository"

# Push to GitHub
git push -u origin main
```

If you get an error about the branch name, try:

```bash
git push -u origin main:main
```

Or if your default branch is `master`:

```bash
git push -u origin master
```

## 🌐 Step 4: Deploy to Netlify

### Method 1: Connect via GitHub (Recommended)

1. Go to [Netlify](https://app.netlify.com) and sign in
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** as your Git provider
4. Authorise Netlify to access your GitHub account (if prompted)
5. Select your repository from the list
6. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **Deploy site**
8. Wait for the build to complete (usually 1-2 minutes)

### Method 2: Deploy via Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialise and deploy:
```bash
netlify init
netlify deploy --prod
```

Follow the prompts to connect your site.

### Method 3: Drag and Drop

1. Build your project locally:
```bash
npm run build
```

2. Go to [Netlify](https://app.netlify.com)
3. Drag and drop the `dist` folder onto the Netlify dashboard
4. Your site will be deployed instantly

**Note**: This method doesn't set up continuous deployment. Use Method 1 for automatic deployments.

## ✅ Step 5: Verify Deployment

1. After deployment, Netlify will provide you with a URL like: `https://random-name-123456.netlify.app`
2. Visit the URL to verify your site is working
3. Check that all pages load correctly
4. Test the navigation and interactive features

## 🔄 Step 6: Set Up Custom Domain (Optional)

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name (e.g., `vanborglimited.com`)
4. Follow Netlify's instructions to update your DNS records
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## 🔔 Step 7: Enable Continuous Deployment

If you used Method 1 (GitHub connection), continuous deployment is already enabled. Every time you push to your main branch, Netlify will automatically rebuild and deploy your site.

To verify:
1. Make a small change to your code
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Test deployment"
git push
```
3. Go to Netlify dashboard and watch the new deployment start automatically

## 📊 Step 8: Monitor Deployments

- View deployment history in the Netlify dashboard
- Check build logs if a deployment fails
- Set up email notifications for deployment status (optional)

## 🐛 Troubleshooting

### Build Fails on Netlify

1. Check the build logs in Netlify dashboard
2. Common issues:
   - **Node version mismatch**: Update `NODE_VERSION` in `netlify.toml` if needed
   - **Missing dependencies**: Ensure all dependencies are in `package.json`
   - **Build errors**: Fix any TypeScript or build errors locally first

### Git Push Errors

- **Authentication failed**: Set up SSH keys or use a personal access token
- **Branch name mismatch**: Ensure your local branch matches the remote branch name
- **Permission denied**: Verify you have write access to the repository

### Site Not Loading

- Check the deployment status in Netlify
- Verify the publish directory is set to `dist`
- Check browser console for JavaScript errors
- Verify all assets are loading correctly

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Documentation](https://docs.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 🆘 Need Help?

If you encounter any issues:
1. Check the build logs in Netlify
2. Review the error messages carefully
3. Ensure your local build works: `npm run build`
4. Verify your `netlify.toml` configuration is correct

