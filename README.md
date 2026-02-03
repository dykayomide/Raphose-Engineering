# Raphose Engineering Website - Desktop Version (1440px)

Professional engineering consultancy website built with exact design specifications.

## 🎨 Design Specifications

### Colors
- **Primary Color**: `#FFC107` (Yellow/Gold)
- **Background**: `#111111` (Dark Black)
- **Card Background**: `#212121` (Dark Gray)
- **Card Border**: `1px solid #FFC107`
- **Text White**: `#FFFFFF`
- **Text Gray**: `#CCCCCC`

### Typography - Inter Font Family
- **H1**: 56px, Bold
- **H2**: 47.78px, Bold
- **H3**: 39.81px, Bold
- **H4**: 33.18px, Bold
- **H5**: 23.04px, Bold
- **H6**: 19.2px, Bold
- **Body**: 16px, Regular

### Layout
- **Desktop Width**: 1440px (centered)
- **Container Max Width**: 1280px
- **Padding**: 80px horizontal

## 📁 Project Structure

```
raphose-engineering/
│
├── index.html              # Main HTML file
├── styles.css              # CSS stylesheet with exact design specs
├── script.js               # JavaScript for interactions
├── images/                 # Your images folder
│   ├── logo.png           # Raphose logo
│   ├── company1.png       # Client company logos
│   ├── company2.png
│   ├── company3.png
│   ├── company4.png
│   ├── company5.png
│   └── company6.png
└── README.md              # This file
```

## 🚀 Getting Started with Visual Studio

### 1. Setup
1. **Open Visual Studio** or **Visual Studio Code**
2. Create a new folder for your project
3. Copy all files (`index.html`, `styles.css`, `script.js`) to your project folder
4. Create an `images/` folder in the same directory

### 2. Add Your Images
Place these images in the `images/` folder:
- **logo.png** - Raphose company logo (recommended: transparent PNG)
- **company1-6.png** - Client company logos (grayscale looks best)

### 3. Run the Website

**Option A: Using Visual Studio Code**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Option B: Using Visual Studio**
1. Open the project
2. Press `Ctrl + F5` to run without debugging
3. Or use IIS Express

**Option C: Direct Browser**
1. Double-click `index.html`
2. Opens in your default browser

### 4. View at Correct Size
- Open browser DevTools (F12)
- Set viewport to 1440px width
- Or view on desktop (site auto-centers)

## 🎯 Features Included

### Navigation
- ✅ Sticky header with smooth scroll
- ✅ Active link highlighting
- ✅ Smooth section navigation
- ✅ Header background blur on scroll

### Sections
1. **Hero Section**
   - Bold headline
   - Subtitle with description
   - Two CTA buttons (Services & Contact)
   - Gradient background effect

2. **Services Section**
   - 4 service cards in grid layout
   - Hover animations
   - Border glow effects
   - "Learn More" links

3. **Companies Section**
   - 6 company logo placeholders
   - Grayscale to color hover effect
   - "More Milestones" link

4. **Team Section**
   - 3 team capability cards
   - Hover lift effect
   - Border glow on hover

5. **Contact Section**
   - Contact form (Name, Email, Message)
   - Form validation
   - Submit button with loading state
   - Email display

6. **Footer**
   - Navigation links
   - Social media links
   - Two-column layout

### Interactions
- ✅ Smooth scrolling
- ✅ Fade-in animations on scroll
- ✅ Hover effects on all interactive elements
- ✅ Form submission handling
- ✅ Success/error notifications
- ✅ Parallax hero effect
- ✅ Active navigation tracking

## 📝 Customization Guide

### Update Content

**1. Company Information**
Edit in `index.html`:
```html
<!-- Update company name, registration number -->
<span class="logo-name">raphose RC 818532</span>
<span class="logo-tagline">ENGINEERING CONSULT NIG. LTD</span>
```

**2. Hero Section**
```html
<!-- Change headline and description -->
<h1 class="hero-title">Your Headline Here</h1>
<p class="hero-subtitle">Your description here</p>
```

**3. Services**
Update each service card:
```html
<div class="service-card">
    <div class="service-number">01.</div>
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">Your description</p>
    <a href="#" class="service-link">LEARN MORE</a>
</div>
```

**4. Contact Email**
```html
<a href="mailto:YourEmail@domain.com">YourEmail@domain.com</a>
```

### Change Colors

Edit in `styles.css` (lines 12-17):
```css
:root {
    --primary-color: #FFC107;      /* Your brand color */
    --bg-dark: #111111;            /* Background */
    --card-bg: #212121;            /* Card background */
    --text-white: #FFFFFF;         /* White text */
    --text-gray: #CCCCCC;          /* Gray text */
}
```

### Adjust Spacing

Edit spacing variables in `styles.css`:
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 40px;
--spacing-xl: 60px;
--spacing-xxl: 80px;
```

## 🔧 Form Integration

### Connect to Backend

Replace the form handler in `script.js` (around line 54):

```javascript
// Current: Simulated submission
await new Promise(resolve => setTimeout(resolve, 1000));

// Replace with actual API call:
const response = await fetch('https://your-api-endpoint.com/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});

if (!response.ok) throw new Error('Submission failed');
```

### Popular Integration Options

**1. FormSpree** (Easy, free tier)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**2. Netlify Forms** (If hosted on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

**3. Custom PHP Backend**
Create `submit.php` and point form to it

## 🌐 Deployment Options

### 1. Netlify (Recommended - Free)
1. Create account at netlify.com
2. Drag & drop your project folder
3. Site is live instantly
4. Free SSL certificate included

### 2. GitHub Pages
1. Push code to GitHub repository
2. Enable Pages in repository settings
3. Select main branch
4. Site live at `username.github.io/repo-name`

### 3. Traditional Web Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in root directory
3. Upload `images/` folder with all assets

### 4. Vercel
1. Connect GitHub repository
2. Auto-deploys on push
3. Free SSL and CDN

## 📱 Responsive Design

The site includes responsive breakpoints:
- **1440px+**: Full desktop layout
- **1200px**: Services grid → 2 columns
- **768px**: Mobile layout (single column)

To test:
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test at different screen sizes

## 🎨 Image Recommendations

### Logo
- Format: PNG with transparent background
- Recommended size: 200px width × 50-60px height
- Color: Can be white or gold (#FFC107)

### Company Logos
- Format: PNG or SVG
- Recommended size: 150px × 80px
- Style: Ideally grayscale or single color
- The CSS will apply grayscale filter with color on hover

## ⚡ Performance Tips

1. **Optimize Images**
   - Compress PNGs using TinyPNG.com
   - Use WebP format for better compression
   - Recommended max file size: 100KB per logo

2. **Font Loading**
   - Inter font loads from Google Fonts
   - Add `font-display: swap;` for faster rendering

3. **Minification** (for production)
   - Minify CSS using cssnano
   - Minify JS using Terser
   - Reduces file sizes by ~40%

## 🐛 Troubleshooting

### Images Not Showing
- ✓ Check file paths are correct
- ✓ Ensure `images/` folder is in same directory as `index.html`
- ✓ Verify image file names match exactly (case-sensitive)
- ✓ Check image file extensions (.png, .jpg)

### Layout Issues
- ✓ Ensure viewport width is 1440px or less
- ✓ Check browser zoom is at 100%
- ✓ Clear browser cache (Ctrl + Shift + R)

### Form Not Submitting
- ✓ Check browser console for errors (F12)
- ✓ Verify JavaScript is enabled
- ✓ Ensure script.js is loaded

### Fonts Not Loading
- ✓ Check internet connection (Google Fonts requires internet)
- ✓ Font link is in HTML `<head>`
- ✓ Font family name matches in CSS

## 📊 Browser Support

Tested and compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🔐 Security Checklist

Before going live:
- [ ] Update all placeholder content
- [ ] Add proper form validation server-side
- [ ] Implement CAPTCHA for contact form
- [ ] Add Content Security Policy headers
- [ ] Enable HTTPS/SSL certificate
- [ ] Update privacy policy link (if collecting data)

## 📞 Support

For questions about this code:
1. Check browser console for errors
2. Verify all files are in correct locations
3. Test in different browser
4. Check responsive design at different sizes

## 📄 File Details

- **index.html**: 270 lines | Semantic HTML5
- **styles.css**: 850+ lines | Modern CSS with variables
- **script.js**: 270+ lines | Vanilla JavaScript (no dependencies)

## 🎓 Learning Resources

Want to customize further?
- **HTML**: developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: css-tricks.com
- **JavaScript**: javascript.info
- **Web Design**: dribbble.com, behance.net

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder images
- [ ] Update all text content
- [ ] Test contact form
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Verify on different browsers
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google
- [ ] Add favicon
- [ ] Test page load speed

---

**Built with precision for Raphose Engineering**

Engineering Excellence. Built on Safety, Precision & Trust.

---

## 🎁 Bonus: Quick Wins

1. **Add Favicon**
```html
<link rel="icon" href="images/favicon.png" type="image/png">
```

2. **Add Meta Tags for SEO**
```html
<meta name="description" content="Raphose Engineering - Expert engineering consulting...">
<meta property="og:title" content="Raphose Engineering">
<meta property="og:image" content="images/og-image.jpg">
```

3. **Add Google Analytics**
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

4. **Enable Dark Mode** (Already implemented! 🎉)

Need help? The code is well-commented for easy customization!
