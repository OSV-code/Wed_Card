# Quick Start Guide

Welcome to Kabir & Diksha's Wedding Invitation Website! Follow these steps to get started.

## 1. Immediate Setup (2 minutes)

### Update Basic Information

**Open `index.html` in a text editor and find/replace:**

1. **Names:**
   - Find: `Kabir & Diksha`
   - Replace with: Your names

2. **Date:**
   - Find: `18th January 2027`
   - Replace with: Your wedding date

3. **Venue:**
   - Find: `Amaara Farms, New Delhi`
   - Replace with: Your venue name

### Add Your Music (Optional but Recommended)

1. Get an MP3 music file (2-5 minutes long)
2. Rename it to: `wedding-music.mp3`
3. Place it in the project folder (same level as `index.html`)
4. **Done!** The audio player will automatically use it

## 2. Preview Locally (1 minute)

### Option A: Windows
Double-click: `dev-server.bat`

### Option B: Mac/Linux
```bash
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### Option C: Any OS with Node.js
```bash
npx http-server -p 8000
```

Then open your browser to `http://localhost:8000`

## 3. Customize Colors (Optional)

Open `styles.css` and find this section (around line 5):

```css
:root {
    --maroon: #6B0F1A;      ← Change these hex codes
    --gold: #C9A227;
    --ivory: #FBF3E3;
    --teal: #1B3A2E;
    --blush: #E8C4B8;
}
```

Need color inspiration? Try:
- https://coolors.co
- https://colorhexa.com
- https://colordot.it

## 4. Add Photos to Gallery

Open `index.html` and find the gallery section (search for "Our Journey").

Replace each SVG block with your photos:

```html
<!-- OLD - Remove this SVG block -->
<div class="gallery-item">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <!-- ... SVG code ... -->
    </svg>
    <p>First Meeting</p>
</div>

<!-- NEW - Replace with -->
<div class="gallery-item">
    <img src="your-photo.jpg" alt="First Meeting">
    <p>First Meeting</p>
</div>
```

**Tips:**
- Use JPG or PNG images
- 1000x1000px is ideal
- Keep file size under 500KB each
- Place images in the project folder

## 5. Configure Directions Button

The "Get Directions" button currently opens Google Maps for the default venue.

To change it, open `script.js` and find line ~305:

```javascript
const mapsUrl = 'https://www.google.com/maps/search/YOUR+VENUE+HERE';
```

**To get your Google Maps search URL:**
1. Go to https://google.com/maps
2. Search your venue
3. Copy the URL from address bar
4. Replace the URL in script.js

## 6. Deploy Online (2 minutes)

### Easiest Option: Netlify

1. Go to https://netlify.com/drop
2. Drag and drop your entire project folder
3. **Done!** Your site is live

Share the URL with guests!

### Alternative: GitHub Pages

1. Create a GitHub account (https://github.com)
2. Create a repository named `wedding`
3. Upload your files
4. Enable "Pages" in repository settings
5. Your site is at: `yourusername.github.io/wedding`

## 7. Share with Guests

Copy your website URL and share via:
- WhatsApp
- Email
- SMS
- Social media
- Print on invitation cards

## Customization Reference

| What to Change | Where | How |
|---|---|---|
| Names | index.html, line 16 | Search "Kabir & Diksha" |
| Date | script.js, line 99 | Change date in quotes |
| Venue | index.html, search "Amaara" | Replace with your venue |
| Colors | styles.css, lines 5-12 | Change hex color codes |
| Music | wedding-music.mp3 | Add MP3 file to folder |
| Gallery | index.html, search "Our Journey" | Replace SVG with images |
| Font | styles.css | Change serif-display/serif-body |

## Common Questions

**Q: How do I change fonts?**
A: Open styles.css, find `--serif-display` and `--serif-body`, update font names.

**Q: Can I add more sections?**
A: Yes! Copy any ceremony section and modify. Follow the same structure.

**Q: How do I know if my site works?**
A: Test:
- [ ] All text appears correctly
- [ ] Colors look good
- [ ] Audio plays when you click button
- [ ] Scratch card works (try scratching)
- [ ] Countdown timer shows numbers
- [ ] Forms can be filled
- [ ] Site works on mobile (resize browser window)

**Q: Is my data secure?**
A: Your site is just HTML/CSS/JavaScript. Form data is logged to browser console. To truly store data, connect to a backend service.

**Q: Can I add more guests?**
A: Yes! The form is unlimited. Data is shown in browser console (F12).

**Q: How do I preview on my phone?**
A: 
1. Get your computer's IP address (ipconfig on Windows)
2. Run dev server on your computer
3. On phone, visit: `http://YOUR_IP:8000`

## Next Steps

1. ✅ Update names and date (2 min)
2. ✅ Add music file (1 min)
3. ✅ Preview locally (1 min)
4. ✅ Customize colors (optional)
5. ✅ Add photos (optional)
6. ✅ Deploy online (2 min)
7. ✅ Share with guests!

## Need Help?

- **README.md** - Detailed feature guide
- **CUSTOMIZATION.md** - In-depth customization
- **DEPLOYMENT.md** - Step-by-step deployment
- **.github/copilot-instructions.md** - Technical details

## File Checklist

Before going live, you should have:

```
wedding-site/
├── index.html                    ✓
├── styles.css                    ✓
├── script.js                     ✓
├── wedding-music.mp3             ✓ (optional but recommended)
├── photo1.jpg                    ✓ (optional - gallery photos)
├── photo2.jpg                    ✓
├── README.md                     ✓
├── CUSTOMIZATION.md              ✓
├── DEPLOYMENT.md                 ✓
├── netlify.toml                  ✓
├── manifest.json                 ✓
└── dev-server.bat                ✓ (Windows only)
```

## Timeline Example

- **Right now:** Update names & date
- **Today:** Add photos & music
- **This week:** Customize colors
- **Before wedding:** Share with guests
- **After wedding:** Keep site online for memories!

---

**That's it! You're ready to go! 🎉💍**

Questions? Check the other documentation files or test everything locally first.

Good luck with your wedding! 💕
