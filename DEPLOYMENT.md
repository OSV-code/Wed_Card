# Deployment Guide

This guide will help you deploy your wedding invitation website to the internet so guests can access it from anywhere.

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Pros:** Free tier, automatic HTTPS, custom domain, easy deployment

**Steps:**

1. **Sign Up:**
   - Go to https://netlify.com
   - Click "Sign up"
   - Use GitHub, GitLab, Bitbucket, or email

2. **Deploy:**
   - Click "Add new site"
   - Choose "Deploy manually"
   - Drag and drop your project folder
   - OR connect your Git repository

3. **Configure Domain:**
   - Your site gets a temporary URL
   - Upgrade to custom domain (optional)
   - Enable automatic HTTPS

4. **Custom Domain:**
   - Purchase domain (godaddy.com, namecheap.com, etc.)
   - Update nameservers to Netlify
   - Configure in Netlify dashboard

**Cost:** Free to $40/month (for custom domain)

---

### Option 2: Vercel (Alternative)

**Pros:** Fast CDN, great for modern sites, automatic deployments

**Steps:**

1. **Sign Up:**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy:**
   - Connect your Git repository
   - Vercel auto-detects and deploys
   - Get live URL instantly

3. **Custom Domain:**
   - Add domain in project settings
   - Update DNS records
   - Enable HTTPS

**Cost:** Free to $10/month (for analytics)

---

### Option 3: GitHub Pages (Free)

**Pros:** Completely free, integrates with GitHub

**Steps:**

1. **Create Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/wedding-site.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch and "/" folder
   - Save

3. **Access Site:**
   - Your site is now at: `yourusername.github.io/wedding-site`

4. **Custom Domain:**
   - Add domain to "Custom domain" field in Pages settings
   - Update DNS records
   - GitHub provides automatic HTTPS

**Cost:** Free

---

### Option 4: Firebase Hosting

**Pros:** Google's platform, fast, reliable, free tier available

**Steps:**

1. **Setup Firebase:**
   ```bash
   npm install -g firebase-tools
   firebase init
   firebase deploy
   ```

2. **Configure:**
   - Choose "Hosting" option
   - Select "public" as directory
   - Don't overwrite index.html

3. **Access Site:**
   - Your site gets a firebase URL
   - Add custom domain in Firebase console

**Cost:** Free tier with 1GB/month storage

---

### Option 5: Traditional Web Hosting

**Providers:**
- Bluehost
- SiteGround
- HostGator
- GoDaddy

**Steps:**

1. **Sign Up:** Create account
2. **Upload Files:** Use FTP or File Manager
3. **Configure DNS:** Point domain to hosting IP
4. **Enable HTTPS:** Usually automatic with "Let's Encrypt"

**Cost:** $5-15/month

---

## Step-by-Step: Deploy to Netlify (Recommended)

### 1. Prepare Your Files

Make sure your project folder contains:
- `index.html`
- `styles.css`
- `script.js`
- `wedding-music.mp3` (optional)
- `.htaccess` (optional)

### 2. Create Netlify Account

1. Visit https://netlify.com
2. Click "Sign up"
3. Choose sign-up method:
   - GitHub (easiest)
   - GitLab
   - Bitbucket
   - Email

### 3. Deploy Your Site

**Method A: Drag & Drop (Easiest)**

1. After login, go to https://app.netlify.com
2. Look for "Drag and drop your site folder here"
3. Select your project folder
4. Wait for deployment to complete
5. Your site is now live!

**Method B: Git Integration (Recommended)**

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. In Netlify:
   - Click "Connect to Git"
   - Choose your repository
   - Select branch (main)
   - Click "Deploy site"

3. Netlify automatically deploys on each push!

### 4. Get Your Live URL

After deployment:
- You'll see a URL like: `YOUR_SITE_NAME.netlify.app`
- Share this with your guests!

### 5. Setup Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add domain"
3. Enter your custom domain (e.g., kabiranddiksha.com)
4. Follow instructions to update DNS

**Domain Registration:**
- Namecheap.com
- GoDaddy.com
- Google Domains
- AWS Route 53

---

## Step-by-Step: Deploy to GitHub Pages

### 1. Create GitHub Account

1. Go to https://github.com/signup
2. Complete registration

### 2. Create Repository

1. Click "+" in top right → "New repository"
2. Name: `wedding-site` (or any name)
3. Make it Public
4. Click "Create repository"

### 3. Upload Files

**Option A: Web Upload**
1. Click "Add file" → "Upload files"
2. Select all project files
3. Click "Commit changes"

**Option B: Command Line**
```bash
cd path/to/your/wedding-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/wedding-site.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to Repository → Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/" (root) folder
5. Click "Save"
6. Wait 2-3 minutes for deployment

### 5. Access Your Site

Your site is now live at:
```
https://YOURUSERNAME.github.io/wedding-site/
```

Share this URL with guests!

---

## Pre-Deployment Checklist

Before deploying, verify:

- [ ] All couple names updated
- [ ] Wedding date and time correct
- [ ] Venue information accurate
- [ ] Audio file added (wedding-music.mp3)
- [ ] All images optimized and included
- [ ] Links tested and working
- [ ] RSVP form configured
- [ ] Mobile responsiveness verified
- [ ] Audio plays correctly
- [ ] Countdown timer works
- [ ] Scratch card functions properly
- [ ] All animations load smoothly
- [ ] Page loads in under 3 seconds
- [ ] No console errors (F12 → Console)

---

## Post-Deployment Tips

### 1. Test Everything

1. Open site in different browsers
2. Test on mobile devices
3. Click all buttons
4. Test all forms
5. Verify audio plays

### 2. Share with Guests

- Copy your site URL
- Share via WhatsApp, email, or SMS
- Post on social media
- Include in traditional invitations

### 3. Monitor Traffic

**With Netlify Analytics:**
1. Go to "Analytics" in Netlify dashboard
2. View real-time visitor data
3. Track popular sections

**With Google Analytics:**
Add code snippet to index.html (see CUSTOMIZATION.md)

### 4. Keep It Updated

- Update countdown as wedding approaches
- Add new gallery photos
- Respond to form submissions
- Fix any issues quickly

### 5. Domain Best Practices

- Keep domain active after wedding
- Use as memorable URL for photo storage
- Consider keeping for future memories
- Set auto-renewal to avoid expiration

---

## Troubleshooting Deployment

### Issue: Site shows blank page

**Solutions:**
1. Hard refresh (Ctrl+Shift+R)
2. Clear browser cache
3. Check file paths in HTML
4. Verify index.html is in root

### Issue: Audio not playing on deployed site

**Solutions:**
1. Verify wedding-music.mp3 exists
2. Check file path is correct
3. Ensure file is < 10MB
4. Try different audio format (WAV, OGG)

### Issue: Custom domain not working

**Solutions:**
1. Verify DNS records updated
2. Wait 24-48 hours for propagation
3. Check domain registrar settings
4. Contact hosting support

### Issue: Site too slow

**Solutions:**
1. Compress audio file
2. Optimize image sizes
3. Enable GZIP compression
4. Use CDN (Netlify/Vercel do this automatically)

### Issue: Form submissions not working

**Solutions:**
1. Check form backend connection
2. Verify API endpoint URL
3. Test in browser console (F12)
4. Use browser's Network tab to debug

---

## SSL/HTTPS

Your site should always use HTTPS (secure connection).

**Good news:** All recommended hosting options (Netlify, Vercel, GitHub Pages, Firebase) provide FREE automatic HTTPS with Let's Encrypt.

You'll see a 🔒 lock icon in browser address bar.

---

## Performance Optimization

After deployment, optimize for speed:

### Compress Images
- Use TinyPNG or ImageOptim
- Aim for < 200KB per image

### Minify Code
```bash
# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JavaScript
uglifyjs script.js -o script.min.js
```

### Enable Caching
Netlify/Vercel handle this automatically

### Monitor with Lighthouse
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Aim for 90+ score

---

## Final Notes

- **Backup your files:** Git handles this automatically
- **Update DNS carefully:** Follow hosting provider instructions
- **Test before sharing:** Verify everything works
- **Have technical support ready:** For guest troubleshooting

## Need More Help?

- **Netlify Support:** https://docs.netlify.com
- **Vercel Support:** https://vercel.com/docs
- **GitHub Pages:** https://pages.github.com
- **Firebase Hosting:** https://firebase.google.com/docs/hosting

---

**Your wedding site is ready to go live! 🎉💍**

Share the URL with your guests and watch them get excited!
