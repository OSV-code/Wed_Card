// ============================================
// ROYAL DOOR LANDING (Replaced Envelope)
// ============================================

const doorLanding = document.getElementById('doorLanding');
const body = document.body;

if (doorLanding) {
    doorLanding.addEventListener('click', function() {
        // Trigger the 3D CSS animation
        doorLanding.classList.add('opened');
        
        // Trigger first user gesture for autoplay audio
        attemptAudioAutoplay();
        
        // Wait for animation to finish, then hide overlay and enable scroll
        setTimeout(() => {
            doorLanding.classList.add('hidden-completely');
            body.style.overflowY = 'auto'; // Re-enable scrolling
            body.style.overflowX = 'hidden';
        }, 1800);
    });
}

// ============================================
// SCRATCH CARD
// ============================================

const scratchCard = document.getElementById('scratchCard');
const scratchCanvas = document.getElementById('scratchCanvas');
const scratchCtx = scratchCanvas ? scratchCanvas.getContext('2d') : null;
let isScratching = false;

function initScratchCard() {
    if (!scratchCanvas || !scratchCtx) return;

    const rect = scratchCard.getBoundingClientRect();
    scratchCanvas.width = scratchCard.offsetWidth;
    scratchCanvas.height = scratchCard.offsetHeight;

    // Draw pattern (Updated to Royal Gold Theme)
    const pattern = scratchCtx.createLinearGradient(0, 0, scratchCanvas.width, scratchCanvas.height);
    pattern.addColorStop(0, '#d4af37'); // Gold
    pattern.addColorStop(0.5, '#f3e5ab'); // Light Gold
    pattern.addColorStop(1, '#d4af37'); // Gold
    
    scratchCtx.fillStyle = pattern;
    scratchCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);

    addScratchText();
}

function addScratchText() {
    scratchCtx.save();
    scratchCtx.fillStyle = 'rgba(107, 15, 26, 0.4)'; // Maroon text
    scratchCtx.font = 'bold 24px "Cormorant Garamond", serif';
    scratchCtx.textAlign = 'center';
    scratchCtx.textBaseline = 'middle';
    
    for (let x = 0; x < scratchCanvas.width; x += 150) {
        for (let y = 0; y < scratchCanvas.height; y += 100) {
            scratchCtx.fillText('SCRATCH', x + 75, y + 50);
        }
    }
    scratchCtx.restore();
}

function scratch(e) {
    if (!isScratching || !scratchCanvas) return;

    const rect = scratchCanvas.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0].clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0].clientY) - rect.top;

    // Erase the scratch layer with a circular motion
    scratchCtx.clearRect(x - 30, y - 30, 60, 60);
    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.arc(x, y, 30, 0, Math.PI * 2);
    scratchCtx.fill();
}

function startScratching(e) {
    // Prevent scrolling while scratching on mobile
    if(e.cancelable) e.preventDefault(); 
    isScratching = true;
    scratch(e); // Scratch immediately on tap/click
}

function stopScratching() {
    isScratching = false;
}

if (scratchCanvas) {
    initScratchCard();

    scratchCanvas.addEventListener('mousedown', startScratching);
    scratchCanvas.addEventListener('mouseup', stopScratching);
    scratchCanvas.addEventListener('mousemove', scratch);
    scratchCanvas.addEventListener('mouseleave', stopScratching);

    // Touch events for mobile
    scratchCanvas.addEventListener('touchstart', startScratching, {passive: false});
    scratchCanvas.addEventListener('touchend', stopScratching);
    scratchCanvas.addEventListener('touchmove', scratch, {passive: false});
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function updateCountdown() {
    const weddingDate = new Date('2027-01-18T06:30:00').getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysElem = document.getElementById('days');
        const hoursElem = document.getElementById('hours');
        const minutesElem = document.getElementById('minutes');
        const secondsElem = document.getElementById('seconds');

        if (daysElem) daysElem.textContent = String(days).padStart(2, '0');
        if (hoursElem) hoursElem.textContent = String(hours).padStart(2, '0');
        if (minutesElem) minutesElem.textContent = String(minutes).padStart(2, '0');
        if (secondsElem) secondsElem.textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            if (daysElem) daysElem.textContent = '00';
            if (hoursElem) hoursElem.textContent = '00';
            if (minutesElem) minutesElem.textContent = '00';
            if (secondsElem) secondsElem.textContent = '00';
        }
    }, 1000);
}

// Initialize countdown on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCountdown);
} else {
    updateCountdown();
}

// ============================================
// AUDIO PLAYER
// ============================================

const audioPlayer = document.getElementById('audioPlayer');
const audioToggle = document.getElementById('audioToggle');
const bgAudio = document.getElementById('bgAudio');
let isAudioPlaying = false;

function attemptAudioAutoplay() {
    if (bgAudio && !isAudioPlaying) {
        const promise = bgAudio.play();
        if (promise !== undefined) {
            promise
                .then(() => {
                    isAudioPlaying = true;
                    if (audioToggle) {
                        audioToggle.classList.remove('muted');
                        audioToggle.innerHTML = '<span class="audio-icon">🔊</span>';
                    }
                })
                .catch(() => {
                    console.log('Autoplay prevented - user interaction required');
                });
        }
    }
}

if (audioToggle && bgAudio) {
    audioToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (isAudioPlaying) {
            bgAudio.pause();
            audioToggle.classList.add('muted');
            audioToggle.innerHTML = '<span class="audio-icon">🔇</span>';
            isAudioPlaying = false;
        } else {
            bgAudio.play();
            audioToggle.classList.remove('muted');
            audioToggle.innerHTML = '<span class="audio-icon">🔊</span>';
            isAudioPlaying = true;
        }
    });
}

// ============================================
// RSVP FORM (Kept from your original code)
// ============================================

const rsvpForm = document.getElementById('rsvpForm');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(rsvpForm);
        const data = {
            name: formData.get('guestName'),
            email: formData.get('guestEmail'),
            phone: formData.get('guestPhone'),
            attending: formData.get('attending'),
            guestCount: formData.get('guestCount'),
            dietaryRequirements: formData.get('dietaryReq')
        };

        // Log data (in production, send to server)
        console.log('RSVP Data:', data);

        // Show success message
        const submitBtn = rsvpForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'RSVP Submitted! Thank You';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            rsvpForm.reset();
        }, 3000);
    });
}

// ============================================
// DIRECTIONS BUTTON
// ============================================

const directionsBtn = document.querySelector('.get-directions-btn');

if (directionsBtn) {
    directionsBtn.addEventListener('click', function() {
        // Google Maps coordinates for Amaara Farms, New Delhi
        const mapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.144770842334!2d75.36607432499889!3d19.876107931500204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2edc0599223%3A0x707046d0bf511106!2sSambhaji%20Nagar%2C%20N%201%2C%20Cidco%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1782448315533!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"';
        window.open(mapsUrl, '_blank');
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe gallery items and ceremony sections
document.querySelectorAll('.gallery-item, .ceremony-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL FALLBACK
// ============================================

if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// ADD FADE OUT ANIMATION
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT ON CEREMONY SECTIONS
// ============================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.ceremony-scene');
    
    sections.forEach(scene => {
        const rect = scene.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementOffset = scene.parentElement.offsetTop;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = (scrollPosition - elementOffset) * 0.5;
            scene.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// ============================================
// RESPONSIVE HANDLING
// ============================================

function handleResize() {
    if (scratchCanvas) {
        initScratchCard();
    }
}

window.addEventListener('resize', handleResize);

// ============================================
// PAGE VISIBILITY API
// ============================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (bgAudio && isAudioPlaying) {
            bgAudio.pause();
        }
    } else {
        if (bgAudio && isAudioPlaying) {
            bgAudio.play();
        }
    }
});

// ============================================
// LOG INITIALIZATION
// ============================================

console.log('🎉 Royal Wedding Invitation Site Loaded');
console.log('Wedding Date: 18th January 2027');
console.log('Venue: Amaara Farms, New Delhi');