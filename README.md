# America's Best Lenders Website

**Brand:** National Non-QM mortgage lending | Division of KW Mortgage Enterprises Inc.  
**Domain:** AmericasBestLenders.com  
**Design:** 70s Schoolhouse Rock superhero aesthetic  
**Hosting:** Netlify (free tier)

## 🚀 Quick Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Zip this entire folder
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the zip file
4. Netlify will give you a live URL (e.g., `https://random-name-12345.netlify.app`)

### Option 2: Git Deploy
1. Push this folder to GitHub
2. Connect the repo to Netlify
3. Netlify auto-deploys on every push

---

## 🌐 Point GoDaddy Domain to Netlify

### Step 1: Get Your Netlify Site URL
After deploying, Netlify gives you a URL like:
```
https://americasbestlenders.netlify.app
```

### Step 2: Add Custom Domain in Netlify
1. In Netlify dashboard → **Domain settings**
2. Click **Add custom domain**
3. Enter: `americasbestlenders.com`
4. Netlify will show DNS records to configure

### Step 3: Configure GoDaddy DNS
Log into GoDaddy → **My Products** → **DNS** for `americasbestlenders.com`

**Add these records:**

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| A     | @    | 75.2.60.5                      | 600  |
| CNAME | www  | [your-site].netlify.app        | 600  |

*(Replace `[your-site]` with your actual Netlify site name)*

**Alternative (CNAME for root domain if GoDaddy supports ALIAS/ANAME):**
| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | @    | [your-site].netlify.app        | 600  |
| CNAME | www  | [your-site].netlify.app        | 600  |

### Step 4: Enable HTTPS
Netlify auto-provisions SSL via Let's Encrypt (free). Takes ~24 hours after DNS propagates.

---

## ✅ What This Site Has (Modeled After Rocket Mortgage)

### Conversion Elements
- ✅ Prominent phone CTA in header + footer
- ✅ Multiple "Apply Now" / "Get My Rate" CTAs
- ✅ Rate cards with starting rates
- ✅ Trust signals (testimonials)
- ✅ Educational loan-type explainers
- ✅ Clear value props (48 lenders, no hidden fees)

### Design (70s Superhero Vibe)
- ✅ Bold geometric fonts
- ✅ Bright color palette (orange, yellow, blue)
- ✅ Superhero mascot with cape (animated float)
- ✅ Schoolhouse Rock aesthetic
- ✅ Friendly, approachable tone

### Navigation
- Buy → Rates (loan products)
- Loan Options → Superpowers section
- About → Footer
- Rates → Rate cards
- Apply Now → CTA sections

---

## 📝 Next Steps

### Integrate Real Application Flow
Replace placeholder `alert()` in `script.js` with:
- **Jotform embed** (like BirdRock Funding uses)
- **Direct link to LoanSifter application**
- **Calendly for consultation booking**

Example Jotform integration:
```html
<iframe src="https://form.jotform.com/YOUR_FORM_ID" width="100%" height="600"></iframe>
```

### Add Google Tag Manager
Per Rocket's setup, add conversion tracking:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```
Place before `</head>` in `index.html`.

### Live Chat
Add Tawk.to (like BirdRock):
```html
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

### SEO Enhancements
- Add meta descriptions per page
- Implement structured data (LocalBusiness, FinancialProduct)
- Create blog content (like Rocket's Learn section)

---

## 🎨 Design System

### Colors
- **Primary Orange:** `#FF6B35` (CTAs, accents)
- **Accent Yellow:** `#FFD23F` (badges, highlights)
- **Hero Blue:** `#0077BE` (headers, trust)
- **Success Green:** `#06D6A0` (checkmarks)
- **Cream Background:** `#FFF8E7`

### Fonts
- Headlines: Bold, rounded sans-serif
- Body: Helvetica Neue / Arial

### Components
- **Superhero Badge:** Circle logo with ABL
- **Mascot:** Animated hero with cape
- **Rate Cards:** White cards with hover lift
- **Feature Badges:** Translucent cards with checkmarks

---

## 📞 Contact Info (All Present on Site)
- **Phone:** (619) 927-ROCK (7625)
- **Address:** 5234 Cushman Place #300, San Diego CA 92110
- **Hours:** 8 AM – 8 PM PT

---

## 🔧 Technical Stack
- Pure HTML/CSS/JavaScript (no framework bloat)
- Netlify hosting (free, CDN, auto-SSL)
- Mobile responsive
- Scroll animations
- Smooth anchor navigation

---

## ⚖️ Legal Compliance Notes
- Equal Housing Lender disclosure in footer
- NMLS# placeholder (needs real number)
- Rate disclaimer present
- "Licensed in all 50 states" (verify KW Mortgage licensing)

---

**Built by:** Buddy Goodwon, CMO | BirdRock Family of Brands  
**Date:** May 17, 2026  
**Version:** 1.0