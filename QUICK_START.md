# Quick Start Guide

## First Steps After Receiving This Website

### 1. Add Your Contact Information (5 minutes)

Open `index.html` in any text editor and search for these placeholders. Replace them with your actual information:

- `[Your email here]` → your_email@example.com
- `[Add QR code or ID]` → Your WeChat ID
- `[Add link]` → Your WhatsApp link
- `[Add phone if applicable]` → Your phone number (optional)

**Where to find these:**
- In the "Join Our Movement" section
- In the footer

### 2. Update Event Date (2 minutes)

When you confirm the procession date:

1. Open `index.html`
2. Search for "To Be Announced"
3. Replace with actual date and time

**Example:**
```
Date: Saturday, June 15, 2026
Time: 10:00 AM - 3:00 PM
```

### 3. Test the Website (1 minute)

1. Open `index.html` in your web browser
2. Click all navigation links to make sure they work
3. Check that images display correctly
4. View on your phone to test mobile version

### 4. Publish Online (15 minutes)

**Easiest method - GitHub Pages (FREE):**

1. Go to github.com and create free account
2. Click "New repository"
3. Name it: `pr-justice` (or any name you like)
4. Upload all files from this folder:
   - index.html
   - styles.css
   - script.js
   - 13979.pic
   - 14692.jpg
5. Go to Settings → Pages
6. Under "Source", select "main" branch
7. Click Save
8. Your website will be live at: `https://yourusername.github.io/pr-justice`

**Share this URL with participants!**

---

## Collecting Stories

### Method 1: Use the Template

1. Send `STORY_TEMPLATE.txt` to participants via:
   - Email
   - WeChat message
   - Print and hand out at meetings

2. Collect completed templates

3. Add to website using instructions in README.md

### Method 2: Interview Approach

If participants prefer to talk rather than write:

1. Schedule 20-minute video/phone call
2. Ask questions from template
3. Take notes or record (with permission)
4. Write up their story
5. Send back for approval before publishing

### Method 3: WeChat Group Survey

Create poll or survey in WeChat group:
- How long waiting?
- What impact on family?
- Willing to share story?
- Willing to speak at event?

---

## Adding Stories to Website

**Step-by-step:**

1. Open `index.html` in text editor (Notepad, TextEdit, VS Code, etc.)

2. Find this line: `<!-- Story 2 - Template for others to add -->`

3. Before the "More Stories Coming Soon" section, add:

```html
<div class="story-card">
    <div class="story-header">
        <div class="story-initials">J.L.</div>
        <div class="story-meta">
            <h3>Jennifer's Story</h3>
            <p class="story-location">Toronto, ON • 4 Years Waiting</p>
        </div>
    </div>
    <div class="story-content">
        <p>First paragraph of their story...</p>
        <p>Second paragraph...</p>
        <p class="story-quote">"Their powerful quote here."</p>
    </div>
    <div class="story-timeline">
        <strong>Timeline:</strong> Applied Jan 2022 → Still waiting Feb 2026
    </div>
</div>
```

4. Replace with their actual information

5. Save file

6. Refresh browser to see changes

7. Upload updated `index.html` to your hosting service

---

## Adding Photos

**After the procession event:**

1. Collect photos from participants

2. Optimize photos for web:
   - Resize to 1200px width maximum
   - Use tools like TinyPNG.com to compress
   - Rename to simple names: `march-1.jpg`, `march-2.jpg`, etc.

3. Place photos in same folder as `index.html`

4. Open `index.html` and find the Photos Section

5. Replace placeholder code with:

```html
<div class="photo-placeholder">
    <img src="march-1.jpg" alt="Participants marching to Parliament Hill" />
    <p>Marching for justice</p>
</div>
```

6. Repeat for each photo

---

## Promoting the Website

### Share on Social Media

**WeChat:**
- Post in Chinese community groups
- Share in family/friends circles
- Create QR code for easy sharing

**Facebook:**
- Post in Chinese Canadian groups
- Immigration support groups
- Local community pages

**Reddit:**
- r/ImmigrationCanada
- r/Vancouver (if BC-based)
- r/Toronto (if Ontario-based)
- r/Canada

**Twitter/X:**
- Use hashtags: #ImmigrationJustice #PRDelay #CDNImm
- Tag: @CitImmCanada @MarcMillerVM

### Contact Media

**Chinese-language media:**
- Sing Tao Daily
- Ming Pao
- Fairchild Media
- Local Chinese radio stations

**English-language media:**
- CBC News
- CTV News
- Global News
- The Globe and Mail
- Local newspapers

**Send them:**
- Link to your website
- Brief summary of the issue
- Offer interviews with affected families

### Reach Out to Organizations

- Chinese Canadian National Council
- Chinese Community Organizations
- Immigration advocacy groups
- Law schools (may offer free legal clinics)

---

## Event Planning Checklist

### 2 Months Before:
- [ ] Confirm date with participants (poll in WeChat)
- [ ] Update website with confirmed date
- [ ] Design signs and banners
- [ ] Contact media outlets
- [ ] Reach out to MPs
- [ ] Create Facebook event

### 1 Month Before:
- [ ] Send media advisories
- [ ] Recruit volunteers
- [ ] Organize transportation
- [ ] Create talking points for speakers
- [ ] Print signs and materials
- [ ] Get protest permit (if required in Ottawa)

### 1 Week Before:
- [ ] Confirm attendance numbers
- [ ] Brief speakers
- [ ] Finalize schedule
- [ ] Send reminders to participants
- [ ] Prepare media kit
- [ ] Test audio equipment (if using)

### Day Before:
- [ ] Check weather forecast
- [ ] Confirm volunteer roles
- [ ] Charge phones/cameras
- [ ] Print extra signs
- [ ] Prepare first aid kit

### Day Of:
- [ ] Arrive early to set up
- [ ] Welcome and register participants
- [ ] Coordinate with media
- [ ] Take lots of photos and videos
- [ ] Collect contact info from new people
- [ ] Thank everyone for coming

### After Event:
- [ ] Upload photos to website
- [ ] Send thank you message to participants
- [ ] Follow up with media
- [ ] Share event coverage on social media
- [ ] Debrief with organizing team
- [ ] Plan next steps

---

## Need Technical Help?

### Common Issues:

**"Website looks weird on my phone"**
- The design is responsive and should work
- Try refreshing the page
- Clear your browser cache

**"Images won't display"**
- Make sure image files are in same folder as index.html
- Check image filenames match exactly (case-sensitive)
- Make sure images are .jpg, .jpeg, .png, or .gif format

**"Navigation links don't work"**
- Make sure script.js is in the same folder
- Try a different browser
- Check JavaScript is enabled

**"Can't edit HTML file"**
- Use a text editor, not Microsoft Word
- Try: Notepad (Windows), TextEdit (Mac), or VS Code
- Right-click file → "Open with" → Choose text editor

---

## Important Reminders

✅ **Keep it peaceful** - This is a peaceful demonstration
✅ **Stay factual** - All content should be accurate and verifiable
✅ **Respect privacy** - Get consent before sharing anyone's story or photo
✅ **Be constructive** - Focus on policy solutions, not blame
✅ **Document everything** - Photos, videos, media coverage
✅ **Follow up** - Keep momentum going after the event

---

## Emergency Contacts (Day of Event)

Before the event, create a list of:
- [ ] Organizing team members' phone numbers
- [ ] Volunteer coordinators
- [ ] Media contacts who confirmed attendance
- [ ] MP representatives (if they're attending)
- [ ] Legal observer (if you have one)
- [ ] First aid/emergency services

---

**You've got this! Your advocacy matters.**

**Questions? Comments in the HTML file include additional guidance.**

**Together, we demand justice! 🇨🇦**
