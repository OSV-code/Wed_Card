Wedding Invitation Website

A beautiful, single-page wedding invitation website featuring elegant design, animations, and interactive elements.

## Features

- **Envelope Landing**: Interactive envelope tap-to-open experience
- **Hero Section**: Mandap arch with animated peacock motifs
- **Scratch-to-Reveal**: Interactive save-the-date card
- **Countdown Timer**: Real-time wedding countdown
- **Ceremony Sections**: 
  - Haldi (sunny courtyard scene)
  - Sangeet (starry night with string lights)
  - Lagna (mandap garden ceremony)
  - Reception (golden ballroom)
- **Gallery Grid**: Photo timeline of the couple's journey
- **Venue Map**: Embedded map with directions
- **RSVP Form**: Interactive guest response form
- **Audio Player**: Background music with mute/play control
- **Responsive Design**: Fully responsive across all devices

## Design System

### Color Palette
- **Deep Maroon**: `#6B0F1A` - Primary text and accents
- **Antique Gold**: `#C9A227` - Highlights and decorative elements
- **Warm Ivory**: `#FBF3E3` - Light backgrounds
- **Teal-Green**: `#1B3A2E` - Peacock tones and accents
- **Soft Blush**: `#E8C4B8` - Gentle highlights

### Typography
- **Display Font**: Cormorant Garamond / Cinzel (serif)
- **Body Font**: Mukta / Poppins (sans-serif, Devanagari-friendly)

## File Structure

```
wed card/
├── index.html          # Main HTML markup
├── styles.css          # All styling and animations
├── script.js           # JavaScript interactivity
├── README.md           # This file
└── wedding-music.mp3   # Background music (placeholder)
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code, Sublime Text, etc.)
- Optional: A local server for best experience

### Local Development

1. **Open directly in browser** (basic functionality):
   ```bash
   # Simply double-click index.html or open it in your browser
   ```

2. **With a local server** (recommended for full functionality):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server package)
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser

### Audio Setup

Replace the placeholder audio file with your wedding music:
1. Prepare an MP3 file of your choice
2. Rename it to `wedding-music.mp3`
3. Place it in the project root directory alongside `index.html`

## Customization

### Update Wedding Details

**In `index.html`, update:**
- Names: Search for "..." and replace with couple names
- Dates: Update all dates (currently set to January 2027)
- Venue: Update "Amaara Farms, New Delhi" with your venue
- Address: Update the full venue address in the "Where We Celebrate" section

### Modify Colors

**In `styles.css`, update the CSS variables:**
```css
:root {
    --maroon: #6B0F1A;
    --gold: #C9A227;
    --ivory: #FBF3E3;
    --teal: #1B3A2E;
    --blush: #E8C4B8;
}
```

### Add Real Images

Currently, the site uses SVG illustrations. To add real photos:
1. Replace SVG elements with `<img>` tags
2. Add images to the project folder
3. Update src paths accordingly

### Modify SVG Scenes

Each ceremony section has an SVG scene that can be customized:
- Edit colors, shapes, and elements directly in the SVG code
- Maintain the structure and aspect ratios

## Interactive Elements

### Envelope Landing
- Click/tap the envelope to reveal the invitation
- Triggers audio autoplay (browser permissions apply)

### Scratch Card
- Click and drag to scratch the save-the-date card
- Reveals the wedding date underneath
- Works on both desktop and mobile

### Countdown Timer
- Shows live countdown to the wedding date
- Updates every second
- Set to 18th January 2027 @ 6:30 AM

### Audio Player
- Fixed floating button in bottom-right corner
- Click to play/mute background music
- Respects browser autoplay policies

### RSVP Form
- Collects guest information
- Shows confirmation message on submission
- Form data logged to browser console (can be connected to backend)

### Directions Button
- Opens Google Maps with venue location
- Currently set to Amaara Farms coordinates

## Responsive Breakpoints

- **Desktop**: Full features and animations
- **Tablet** (1024px): Optimized layout
- **Mobile** (768px): Stacked layout with touch-friendly buttons
- **Small Mobile** (480px): Compact design

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support (iOS Safari, Chrome Mobile, etc.)

## Performance Tips

1. Optimize audio file size (aim for < 5MB)
2. Use CSS animations instead of JavaScript where possible
3. Lazy-load images when added
4. Compress SVG files
5. Minify CSS and JavaScript for production

## Deployment

### Simple Options
- **Netlify**: Drag and drop your project folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Push to repository
- **Any Web Host**: Upload files via FTP


## Troubleshooting

### Scratch card not working
- Ensure browser supports HTML5 Canvas
- Clear browser cache and reload
- Try a different browser

### Audio not playing
- Check browser autoplay policies (allow in settings)
- Ensure audio file exists at correct path
- Try manually clicking the audio player button

### Form not submitting
- Check browser console for errors
- Ensure all required fields are filled
- Try a different browser

### Responsive issues
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Test in device developer tools

## Credits

- Designed with ❤️ wedding
- Built with HTML5, CSS3, and JavaScript
- Uses SVG for illustrations
- Responsive design for all devices

## License

This is a personal wedding invitation website. Modify and use freely for this wedding.

## Support

For issues or questions, check the code comments or troubleshooting section above.

---

**Let's Celebrate Love! 🎉💍**

*18th January 2027 - Amaara Farms, New Delhi*
