# 🚀 Deploy America's Best Lenders Website

## Quick Deploy Steps

### 1. Zip the Site Files
Navigate to `americasbestlenders-site/` and compress these files:
- `index.html`
- `style.css`
- `script.js`
- `netlify.toml`
- `favicon.svg`

### 2. Deploy to Netlify (Free)
**Option A: Drag & Drop (Fastest)**
1. Go to: https://app.netlify.com/drop
2. Drag your zip file
3. Netlify deploys instantly and gives you a URL like:
   ```
   https://random-name-12345.netlify.app
   ```

**Option B: GitHub + Netlify (Best for Updates)**
1. Create a GitHub repo
2. Push this folder
3. Connect to Netlify: https://app.netlify.com/start
4. Netlify auto-deploys on every git push

### 3. Point Your GoDaddy Domain
Once deployed, connect `americasbestlenders.com`:

#### In Netlify:
1. Dashboard → **Domain settings**
2. **Add custom domain** → Enter `americasbestlenders.com`
3. Netlify shows you DNS records

#### In GoDaddy:
1. Login → **My Products** → Find `americasbestlenders.com`
2. Click **DNS** or **Manage DNS**
3. Add these records:

| Type  | Name | Value                     | TTL  |
|-------|------|---------------------------|------|
| A     | @    | 75.2.60.5                 | 600  |
| CNAME | www  | YOUR-SITE.netlify.app     | 600  |

Replace `YOUR-SITE` with your actual Netlify subdomain.

#### Wait for DNS Propagation
- Usually takes 10-60 minutes
- Check status: https://www.whatsmydns.net

### 4. Enable HTTPS (Free SSL)
Netlify auto-provisions SSL via Let's Encrypt after DNS propagates. No action needed.

---

## Testing Checklist

Before going live:
- [ ] All links work
- [ ] Phone number clickable on mobile: `tel:6199277625`
- [ ] Responsive on mobile/tablet
- [ ] Superhero mascot animates
- [ ] Rate cards display correctly
- [ ] Footer has correct contact info
- [ ] HTTPS enabled (green padlock in browser)

---

## Next Integration Steps

### 1. Add Real Application Form
Replace the placeholder `alert()` in `script.js`:

**Jotform Integration:**
```html
<!-- Add this where you want the form -->
<iframe 
  src="https://form.jotform.com/YOUR_FORM_ID" 
  width="100%" 
  height="800" 
  frameborder="0">
</iframe>
```

### 2. Add Google Tag Manager (Conversion Tracking)
Get GTM container ID from Google Tag Manager, then add before `</head>`:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
```

### 3. Add Live Chat (Tawk.to)
Sign up at https://www.tawk.to, get your widget code, add before `</body>`:
```html
<script type="text/javascript">
var Tawk_API=Tawk_API||{};
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

### 4. Set Up Email (Contact Form Backend)
For contact forms, use:
- **Netlify Forms** (built-in, free on Netlify)
- **Formspree** (https://formspree.io)
- **EmailJS** (https://www.emailjs.com)

---

## Performance Optimization (Optional)

Already fast, but for extra speed:
- Compress images (use TinyPNG for any photos you add)
- Minify CSS/JS (Netlify does this automatically)
- Enable CDN caching (automatic on Netlify)

---

## Support

**Built by:** Buddy Goodwon  
**For:** America's Best Lenders (KW Mortgage Enterprises Inc.)  
**Questions?** Review `README.md` for design system details.

---

**Ready to launch?** Follow steps 1-4 above and you'll be live in under 30 minutes. 🚀