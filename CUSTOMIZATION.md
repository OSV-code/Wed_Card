# Wedding Site Customization Guide

This guide will help you personalize the wedding invitation website with your own information, photos, and styling.

## Quick Start Customization (5 minutes)

### 1. Update Names
Replace "Kabir & Diksha" throughout the site:

**In `index.html`:**
- Line 16: `<h1 class="names-title">Kabir & Diksha</h1>` → Your names
- Line 18: `<p class="bride-groom">Kabir</p>` → Groom name
- Line 20: `<p class="bride-groom">Diksha</p>` → Bride name
- Line 473: Footer names

**In `script.js`:**
- Line 325: Console log message (optional)

### 2. Update Wedding Date & Time
**In `script.js` (Line 99):**
```javascript
// Change this line to your wedding date and time
const weddingDate = new Date('2027-01-18T06:30:00').getTime();
```

**In `index.html`, update all ceremony dates:**
- Haldi: Line 184 & 189
- Sangeet: Line 218 & 223
- Lagna: Line 252 & 257
- Reception: Line 286 & 291

### 3. Update Venue
**In `index.html`:**
- Line 114: Venue in save-the-date
- Line 405-409: Venue details section
- Line 191, 224, 258, 292: Ceremony venue lines

**In `script.js` (Line 305):**
```javascript
const mapsUrl = 'https://www.google.com/maps/search/YOUR+VENUE+ADDRESS';
```

## Detailed Customization

### Colors

**In `styles.css` (Lines 5-12):**
```css
:root {
    --maroon: #6B0F1A;      /* Primary text color */
    --gold: #C9A227;        /* Highlights and accents */
    --ivory: #FBF3E3;       /* Light backgrounds */
    --teal: #1B3A2E;        /* Dark accents */
    --blush: #E8C4B8;       /* Soft highlights */
}
```

**Recommended Color Palettes:**

*Royal Purple Wedding:*
```css
--maroon: #4B0082;       /* Indigo */
--gold: #FFD700;         /* Gold */
--ivory: #F5F5F5;        /* Off-white */
--teal: #8B008B;         /* Dark magenta */
--blush: #DDA0DD;        /* Plum */
```

*Ocean Blue Wedding:*
```css
--maroon: #003366;       /* Dark blue */
--gold: #00CED1;         /* Turquoise */
--ivory: #F0F8FF;        /* Alice blue */
--teal: #006B9E;         /* Steel blue */
--blush: #87CEEB;        /* Sky blue */
```

*Rose Gold Wedding:*
```css
--maroon: #8B4C5C;       /* Mauve */
--gold: #D4AF37;         /* Gold */
--ivory: #FFF8F0;        /* Floral white */
--teal: #6B5B95;         /* Purple */
--blush: #E8B4C8;        /* Rose pink */
```

### Adding Photos

#### Replace Gallery Images

Find each `<div class="gallery-item">` containing SVG code and replace with:

```html
<div class="gallery-item">
    <img src="your-photo.jpg" alt="Photo Description">
    <p>Photo Caption</p>
</div>
```

**Tips:**
- Use square images (1000x1000px recommended)
- Optimize file size (< 500KB each)
- Keep 6 images for balanced grid

#### Add Hero Section Background Image

In the `.hero` section styling in `styles.css`, modify:

```css
.hero {
    background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('your-bg-image.jpg');
    background-size: cover;
    background-position: center;
}
```

#### Replace Venue Map

In `index.html` (around line 407), replace the SVG with:

```html
<img src="venue-map.jpg" alt="Venue Map">
```

Or embed an actual Google Map:

```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE" 
    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

### Adding Audio

1. **Prepare Your Music:**
   - Use an MP3 file (ideally 2-5 minutes)
   - Optimize file size (< 5MB)
   - Choose royalty-free music or get copyright permission

2. **Add Audio File:**
   - Save as `wedding-music.mp3`
   - Place in project root folder (same level as `index.html`)
   - No code changes needed!

3. **Alternative Audio Sources:**
   - Free music: Unsplash, Pexels, Pixabay
   - Royalty-free: Epidemic Sound, Artlist, AudioJungle

### Customizing SVG Scenes

Each ceremony section has an SVG. To modify colors:

**Haldi Section (Lines 170-187):**
```html
<stop offset="0%" style="stop-color:#FDB833;stop-opacity:1" />
```
Change `#FDB833` to your color

**Sangeet Section (Lines 206-215):**
```html
<stop offset="0%" style="stop-color:#1a1a3e;stop-opacity:1" />
```

**Lagna Section (Lines 240-247):**
```html
<stop offset="0%" style="stop-color:#FFE4B5;stop-opacity:1" />
```

**Reception Section (Lines 274-281):**
```html
<stop offset="0%" style="stop-color:#C9A227;stop-opacity:1" />
```

### Customizing Text Content

**Update Opening Text:**
- Line 16-22: Hero section invitation text

**Update Section Titles:**
- Line 112: "Save the Date"
- Line 129: "Countdown to Our Big Day"
- Line 165: "Haldi"
- Line 199: "Sangeet"
- Line 233: "Lagna Vidhi"
- Line 267: "Reception"
- Line 351: "Our Journey"
- Line 395: "Where We Celebrate"
- Line 437: "RSVP"
- Line 473: Footer text

### RSVP Form Customization

**Change Form Fields:**
In `index.html` (Lines 438-476), modify labels and input types as needed.

**Connect to Backend Service:**

In `script.js`, replace the form submission (lines 300-320):

```javascript
// Instead of:
console.log('RSVP Data:', data);

// Use:
fetch('https://your-backend.com/rsvp', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    // Show success message
})
.catch(error => {
    console.error('Error:', error);
    // Show error message
});
```

**Popular RSVP Services:**
- Google Forms (Free)
- Formspree (Free tier available)
- Basin (Simple form handling)
- AWS Lambda + DynamoDB (Advanced)

## Advanced Customization

### Add Bilingual Support (English-Marathi)

1. **Add Language Toggle Button:**

In `index.html`, add before the footer:

```html
<div class="language-toggle">
    <button data-lang="en">English</button>
    <button data-lang="mr">मराठी</button>
</div>
```

2. **Add Data Attributes:**

```html
<h1 data-lang="en">Kabir & Diksha</h1>
<h1 data-lang="mr" style="display:none;">कबीर आणि दिक्षा</h1>
```

3. **Add JavaScript in `script.js`:**

```javascript
const langToggle = document.querySelectorAll('[data-lang]');
const buttons = document.querySelectorAll('.language-toggle button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        langToggle.forEach(el => {
            el.style.display = el.dataset.lang === lang ? 'block' : 'none';
        });
    });
});
```

### Add Google Analytics

In `index.html`, before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

### Custom Domain

1. **Purchase Domain:** GoDaddy, Namecheap, Google Domains
2. **Point DNS:** Update nameservers to your hosting provider
3. **SSL Certificate:** Get free SSL from Let's Encrypt
4. **Deploy:** Upload files to your hosting

### Mobile App Integration

Add to `index.html` head:

```html
<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="apple-touch-icon.png">

<!-- Android Chrome Icon -->
<link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png">

<!-- Manifest for PWA -->
<link rel="manifest" href="manifest.json">
```

## Testing Your Changes

### Before Publishing:

1. **Test All Links:**
   - Scroll through entire page
   - Click all buttons
   - Test RSVP form

2. **Test on Devices:**
   - Desktop (Chrome, Firefox, Safari, Edge)
   - Tablet (iPad, Android tablet)
   - Mobile (iPhone, Android phone)

3. **Test Audio:**
   - Click audio button
   - Verify music plays
   - Test mute/unmute

4. **Test Forms:**
   - Fill RSVP form
   - Check validation
   - Verify submission

5. **Performance Check:**
   - Use Google Lighthouse
   - Aim for 90+ scores
   - Optimize images if needed

## Common Issues & Solutions

### Issue: Audio not playing

**Solution:**
1. Check file is named exactly `wedding-music.mp3`
2. Verify file is in project root
3. Try clicking audio button manually
4. Check browser allows autoplay

### Issue: Images not showing

**Solution:**
1. Verify file path is correct
2. Check file extension (.jpg, .png)
3. Ensure files are in the same folder
4. Test image can be opened directly

### Issue: Form not submitting

**Solution:**
1. Check browser console for errors (F12)
2. Verify all required fields are filled
3. Test in different browser
4. Check internet connection

### Issue: Colors look different on mobile

**Solution:**
1. Hard refresh: Ctrl+Shift+R
2. Clear browser cache
3. Test in different browser
4. Check device display settings

## Deployment Options

### Free Hosting
- **GitHub Pages:** github.com
- **Netlify:** netlify.com (drag & drop)
- **Vercel:** vercel.com
- **Firebase Hosting:** firebase.google.com

### Paid Hosting
- **Bluehost:** bluehost.com
- **SiteGround:** siteground.com
- **GoDaddy:** godaddy.com
- **AWS:** aws.amazon.com

## Final Checklist

- [ ] All names updated
- [ ] Wedding date and times set
- [ ] Venue information correct
- [ ] Audio file added (wedding-music.mp3)
- [ ] Gallery images added
- [ ] Colors customized
- [ ] Links and buttons tested
- [ ] Mobile responsiveness checked
- [ ] Form submission works
- [ ] Spell-checked all text
- [ ] Tested on multiple devices
- [ ] Performance optimized
- [ ] Analytics configured (optional)
- [ ] Domain purchased (if needed)
- [ ] Ready to share!

---

**Need help?** Check the main README.md or browse the code comments!

**Happy customizing! 💍🎉**
