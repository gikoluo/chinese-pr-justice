# Justice for Chinese PR Applicants - Website

This is a static website for organizing and advocating for Chinese PR applicants facing discriminatory security screening delays in Canada.

## Files Included

- `index.html` - Main website file
- `styles.css` - Stylesheet for visual design
- `script.js` - JavaScript for interactivity and animations
- `13979.pic` - Image file (community photo)
- `14692.jpg` - Image file (supporter photo)
- `README.md` - This file

## How to Use

### Viewing the Website Locally

1. Simply open `index.html` in your web browser
2. All files are linked relatively, so they work offline

### Hosting the Website

You can host this website for free on:

**GitHub Pages:**
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in repository settings
5. Your site will be at: `https://yourusername.github.io/repository-name`

**Netlify:**
1. Create account at netlify.com
2. Drag and drop this folder
3. Get instant URL

**Other options:**
- Vercel
- GitLab Pages
- Any web hosting service

## How to Update Content

### Adding Your Contact Information

Open `index.html` and search for `[Your email]`, `[WeChat ID]`, etc.
Replace these placeholders with your actual contact information.

**Example:**
```html
<!-- Before -->
<p>📧 Email: <em>[Add your email]</em></p>

<!-- After -->
<p>📧 Email: <em>justice4pr@example.com</em></p>
```

### Adding More Stories

1. Open `index.html`
2. Find the Stories Section (search for `<!-- Story 2 - Template`)
3. Copy this entire block:

```html
<div class="story-card">
    <div class="story-header">
        <div class="story-initials">X.Y.</div>
        <div class="story-meta">
            <h3>Name's Story</h3>
            <p class="story-location">Location • Years Waiting</p>
        </div>
    </div>
    <div class="story-content">
        <p>Story text here...</p>
        <p class="story-quote">"Quote here..."</p>
    </div>
    <div class="story-timeline">
        <strong>Timeline:</strong> Applied YYYY → ...
    </div>
</div>
```

4. Paste it before the "More Stories Coming Soon" placeholder
5. Replace the content with the new story

### Adding Event Photos

1. Place your photo files in the same folder as `index.html`
2. Open `index.html`
3. Find the Photos Section
4. Replace the placeholder code:

```html
<!-- Before -->
<div class="photo-placeholder">
    <div class="photo-empty">
        <span>📷</span>
        <p>Event photos coming soon</p>
    </div>
</div>

<!-- After -->
<div class="photo-placeholder">
    <img src="your-photo-name.jpg" alt="Description of photo" />
    <p>Photo caption here</p>
</div>
```

**Supported image formats:** .jpg, .jpeg, .png, .webp, .gif

### Updating Event Details

1. Open `index.html`
2. Find the Event Section (search for `id="event"`)
3. Update the date, time, and location information

**Example:**
```html
<!-- Before -->
<p>To Be Announced</p>

<!-- After -->
<p>Saturday, June 15, 2026</p>
```

### Changing Colors

Open `styles.css` and modify the color variables at the top:

```css
:root {
    --primary-color: #d32f2f;    /* Main red color */
    --primary-dark: #b71c1c;     /* Dark red */
    --primary-light: #ff6659;    /* Light red */
    --secondary-color: #1976d2;  /* Blue accent */
}
```

## Content Guidelines

### For Stories
- Get written consent before publishing anyone's story
- Consider offering anonymity (use initials only)
- Keep stories focused on facts and personal impact
- Avoid inflammatory language
- Proofread for grammar and clarity

### For Photos
- Get permission before using photos of people
- Use high-quality images (at least 1200px wide)
- Compress large images to keep page loading fast
- Use descriptive alt text for accessibility

### For Event Details
- Confirm all details before publishing
- Update regularly as plans change
- Include important logistics (parking, accessibility, etc.)
- Keep tone peaceful and constructive

## Technical Notes

### Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No external dependencies required

### Performance
- All CSS and JavaScript are inline/local (no CDN dependencies)
- Images should be optimized for web (use tools like TinyPNG)
- Page loads quickly even on slow connections

### Accessibility
- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- High contrast colors for readability

## Maintenance Checklist

Regular updates to keep the website current:

- [ ] Update event date/time when confirmed
- [ ] Add new participant stories monthly
- [ ] Upload event photos after procession
- [ ] Update statistics (number of participants, etc.)
- [ ] Keep contact information current
- [ ] Fix any broken links
- [ ] Test website on mobile devices

## Need Help?

If you need assistance with:
- Technical issues
- Design changes
- Adding features
- Hosting setup

Contact a web developer in your community or post in tech forums.

## Legal Disclaimer

This website is for peaceful advocacy and information sharing.
All content should:
- Be factually accurate
- Respect privacy
- Avoid defamation
- Comply with Canadian laws
- Promote peaceful demonstration

## License

This website template is free to use and modify for your advocacy efforts.

---

**Remember:** This movement is about policy change, not hate. Keep all content respectful, factual, and solution-oriented.

**Stay strong. Stay united. Justice will prevail.**
