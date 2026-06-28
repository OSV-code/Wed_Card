# Kabir & Diksha Wedding Invitation Website - Development Guide

## Project Overview

A single-page, responsive wedding invitation website featuring:
- Interactive envelope landing
- Scratch-to-reveal save-the-date card
- Animated ceremony sections with SVG scenes
- Countdown timer to wedding date
- Guest gallery
- RSVP form
- Embedded venue map
- Background audio player

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Styling**: Pure CSS with CSS Grid/Flexbox, CSS animations
- **Graphics**: SVG for illustrations and scenes
- **Interactivity**: Vanilla JavaScript (no frameworks)
- **Audio**: HTML5 `<audio>` element

## File Structure

```
wed card/
├── index.html              # Main HTML markup with semantic structure
├── styles.css              # Complete styling, animations, responsive design
├── script.js               # All JavaScript interactivity
├── README.md               # User guide and customization instructions
├── wedding-music.mp3       # Background audio (placeholder - add your own)
└── .github/
    └── copilot-instructions.md  # This file
```

## Key Features & Implementation Details

### 1. Envelope Landing
- **File**: index.html (lines 11-40)
- **Styling**: styles.css (lines 103-143)
- **JavaScript**: script.js (lines 1-22)

**Features**:
- SVG envelope with decorative elements
- Animated floating effect
- Click/tap to reveal main invitation
- Triggers audio autoplay permission

**Customization**:
- Change envelope colors in SVG
- Modify animation timing in CSS
- Update text in HTML

### 2. Hero Section
- **File**: index.html (lines 42-93)
- **Styling**: styles.css (lines 147-225)

**Features**:
- Mandap arch with peacock feather motifs
- Layered SVG background
- Hero content overlay with typography
- Fade-in animation on load

**Design Elements**:
- Peacock feather circles (concentric rings in gold/teal)
- String lights effect
- Multi-layered foliage silhouettes

### 3. Scratch-to-Reveal Card
- **File**: index.html (lines 95-126)
- **Styling**: styles.css (lines 229-295)
- **JavaScript**: script.js (lines 24-89)

**Features**:
- HTML5 Canvas-based scratch layer
- Desktop (mouse) and mobile (touch) support
- Circular erase effect
- Texture pattern on scratched surface

**How it Works**:
1. Canvas overlay is initialized with diagonal stripe pattern
2. Mouse/touch movement triggers circular `clearRect` at pointer position
3. Composite operation creates erasing effect
4. Desktop: mousedown/mousemove/mouseup events
5. Mobile: touchstart/touchmove/touchend events

### 4. Countdown Timer
- **File**: index.html (lines 128-147)
- **Styling**: styles.css (lines 299-356)
- **JavaScript**: script.js (lines 92-142)

**Features**:
- Real-time countdown to wedding date (18th January 2027 @ 6:30 AM)
- Updates every 1000ms
- Format: DD/HH/MM/SS with leading zeros
- Hover effects on countdown boxes

**Update Wedding Date**:
```javascript
// Line 99 in script.js
const weddingDate = new Date('2027-01-18T06:30:00').getTime();
```

### 5. Ceremony Sections
- **Files**: index.html (lines 149-349), styles.css (lines 360-465)
- **Scenes**: Haldi, Sangeet, Lagna, Reception

**Features**:
- Each ceremony has a unique SVG scene
- Distinct color palette per ceremony
- Parallax scrolling effect
- Animated card entry on scroll

**SVG Scenes Breakdown**:

**Haldi (Sunny Courtyard)**:
- Golden-yellow sky gradient
- Courtyard floor (tan color)
- Tree silhouettes with turmeric/flower accents
- Warm, daytime atmosphere

**Sangeet (Starry Night)**:
- Dark navy-to-purple sky gradient
- Moon and stars
- String lights with individual dots
- Stage/platform area
- Decorative arches

**Lagna (Mandap Garden)**:
- Peach-to-gold sky gradient
- Mandap structure (triangular with pillars)
- Flower decorations
- Central focal point

**Reception (Golden Ballroom)**:
- Gold-to-blush gradient
- Ballroom elements
- Chandeliers (glowing circles)
- Table decorations

### 6. Gallery Section
- **File**: index.html (lines 351-393)
- **Styling**: styles.css (lines 469-530)

**Features**:
- Grid layout (responsive: 1-3 columns)
- SVG placeholder items (customize with real images)
- Hover scale effect
- Fade-in animation on scroll

**Replace with Real Images**:
```html
<!-- Instead of SVG, use: -->
<div class="gallery-item">
    <img src="photo1.jpg" alt="First Meeting">
    <p>First Meeting</p>
</div>
```

### 7. Venue Section
- **File**: index.html (lines 395-421)
- **Styling**: styles.css (lines 534-604)
- **JavaScript**: script.js (lines 150-157)

**Features**:
- Address display in semi-transparent card
- SVG map placeholder
- "Get Directions" button (opens Google Maps)
- Dark theme with contrast

**Update Venue**:
```javascript
// Line 156 in script.js
const mapsUrl = 'https://www.google.com/maps/search/YOUR+VENUE+HERE';
```

### 8. RSVP Form
- **File**: index.html (lines 423-459)
- **Styling**: styles.css (lines 608-720)
- **JavaScript**: script.js (lines 160-194)

**Fields**:
- Guest name (text input)
- Email (email input)
- Phone (tel input)
- Attending (radio buttons: yes/no)
- Guest count (number input, 1-5)
- Dietary requirements (textarea)

**Form Submission**:
- Currently logs to browser console
- Shows confirmation message
- Can be connected to backend API

**Connect to Backend**:
```javascript
// Replace console.log with fetch call
fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
})
```

### 9. Audio Player
- **File**: index.html (lines 461-468)
- **Styling**: styles.css (lines 724-765)
- **JavaScript**: script.js (lines 197-230)

**Features**:
- Fixed position floating button
- Play/mute toggle
- Respects browser autoplay policies
- Pauses when tab is hidden
- Resumes when tab becomes visible

**Add Your Audio**:
1. Prepare MP3 file (ideally < 5MB)
2. Name it `wedding-music.mp3`
3. Place in project root
4. No code changes needed

### 10. Footer
- **File**: index.html (lines 470-475)
- **Styling**: styles.css (lines 769-800)

**Features**:
- Thank you message
- Couple names
- Wedding date
- Dark maroon theme

## Customization Guide

### Update Couple Names
Search and replace throughout:
- HTML: "Kabir & Diksha"
- CSS: If used in content property
- Form success message text

### Update Wedding Date
1. **Countdown timer**: Line 99 in script.js
2. **Ceremony dates**: Each ceremony section in index.html
3. **Meta information**: Footer, invitation text

### Update Venue
1. **HTML**: All venue references in index.html
2. **Google Maps**: Line 156 in script.js
3. **Address display**: Venue section

### Change Color Scheme
Update CSS root variables (lines 5-12 in styles.css):
```css
--maroon: #YOUR_COLOR;
--gold: #YOUR_COLOR;
--ivory: #YOUR_COLOR;
--teal: #YOUR_COLOR;
--blush: #YOUR_COLOR;
```

### Add Real Images
Replace SVG elements with `<img>` tags:
- Gallery items
- Map placeholder
- Ceremony scenes (optional)

### Add Bilingual Support (English-Marathi)
Add language switcher and toggle content:
- Use `data-lang` attributes
- Create parallel content
- Update form labels
- Ensure Devanagari font (Mukta) is used

## Animations & Effects

### CSS Animations
- `float`: Envelope landing (3s loop)
- `pulse`: Envelope text (2s loop)
- `fadeInDown`: Hero content (1.2s)
- `fadeInUp`: Gallery items on scroll
- `slideInRight`: Ceremony cards
- `fadeOut`: Envelope exit

### CSS Transitions
- Hover effects on buttons and cards
- Smooth color transitions
- Transform scale effects

### JavaScript Animations
- Parallax scrolling on ceremony sections
- Canvas scratch effect
- Intersection Observer for scroll animations

## Performance Optimizations

### Current Implementation
- SVG-based instead of raster images
- Pure CSS animations (GPU accelerated)
- Vanilla JavaScript (no framework overhead)
- Minimal dependencies

### For Production
1. **Minify assets**:
   ```bash
   # CSS minification
   # JavaScript minification
   # HTML minification
   ```

2. **Optimize images**:
   - Convert PNG to WebP
   - Add responsive images with `<picture>`
   - Use lazy loading

3. **Lazy load audio**:
   - Don't load until user interaction

4. **Use CDN** for fast delivery

## Responsive Design Breakpoints

- **Desktop** (> 1024px): Full layout with all features
- **Tablet** (768px - 1024px): Single column for forms, adjusted padding
- **Mobile** (480px - 768px): Touch-optimized, stacked layout
- **Small Mobile** (< 480px): Minimal padding, compact text

## Browser Support

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: Latest versions

## Known Limitations & Future Enhancements

### Current Limitations
- Audio autoplay restricted by browser policies
- Canvas scratch card may have performance issues on very old devices
- SVG parallax may not work smoothly on older mobile devices

### Future Enhancements
- Add live photo gallery
- Connect RSVP form to backend database
- Add Instagram feed integration
- Add Google Calendar invite
- Multi-language support (Marathi translation)
- Payment integration for gift registry

## Debugging Tips

### Common Issues

1. **Audio not playing**:
   - Check browser console for errors
   - Verify file path is correct
   - Check browser autoplay settings
   - User interaction may be required

2. **Scratch card not working**:
   - Canvas might not initialize
   - Check browser supports HTML5 Canvas
   - Clear cache and hard refresh

3. **Responsive issues**:
   - Hard refresh (Ctrl+Shift+R)
   - Check viewport meta tag
   - Test in device developer tools

4. **Animation lag**:
   - Check parallax scroll performance
   - Reduce number of animated elements
   - Use `will-change` CSS property sparingly

### Development Tools
- Chrome DevTools: Inspect, debug JavaScript, profile performance
- Lighthouse: Audit performance, accessibility, SEO
- Can I Use: Check browser feature support

## Deployment Checklist

- [ ] Update all couple names
- [ ] Update wedding dates and times
- [ ] Update venue information and address
- [ ] Add wedding music file (wedding-music.mp3)
- [ ] Replace placeholder images with real photos
- [ ] Test responsive design on multiple devices
- [ ] Test audio functionality across browsers
- [ ] Test RSVP form submission
- [ ] Test scratch card functionality
- [ ] Minify CSS and JavaScript for production
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Create SSL certificate if deploying
- [ ] Set up custom domain

## Resources

- **HTML5 Canvas**: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- **SVG**: https://developer.mozilla.org/en-US/docs/Web/SVG
- **Intersection Observer**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **Web Audio API**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

## Contact & Support

For questions about the codebase, refer to comments in the source files or the README.md.

---

**Happy Wedding Planning! 💍🎉**
