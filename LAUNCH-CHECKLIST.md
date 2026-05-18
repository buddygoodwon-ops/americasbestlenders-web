# 🚀 Launch Checklist — America's Best Lenders

## Pre-Launch (Do This First)

### Legal & Compliance
- [ ] Get real NMLS# for KW Mortgage Enterprises Inc.
- [ ] Replace `NMLS# [PENDING]` in footer with actual number
- [ ] Verify "Licensed in all 50 states" — update if only certain states
- [ ] Review all disclaimers with compliance officer
- [ ] Confirm Equal Housing Lender disclosure is correct
- [ ] Add any required state-specific disclaimers

### Content Updates
- [ ] Replace placeholder rates (7.25%, 7.49%, 7.75%) with real current rates
- [ ] Update "Rates current as of [date]" to today's date
- [ ] Verify phone number (619) 927-ROCK (7625) is correct
- [ ] Confirm office address: 5234 Cushman Place #300, San Diego CA 92110
- [ ] Review all copy for brand voice accuracy

---

## Deploy (30 Minutes)

### Step 1: Netlify Deployment
- [ ] Create Netlify account (if you don't have one): https://app.netlify.com/signup
- [ ] Drag folder to https://app.netlify.com/drop OR connect GitHub repo
- [ ] Note your Netlify URL (e.g., `americasbestlenders.netlify.app`)
- [ ] Test site on Netlify URL — click all links, test mobile view

### Step 2: Custom Domain Setup
- [ ] In Netlify: Domain settings → Add custom domain → Enter `americasbestlenders.com`
- [ ] Login to GoDaddy → My Products → DNS for `americasbestlenders.com`
- [ ] Add A record: `@` → `75.2.60.5`
- [ ] Add CNAME record: `www` → `your-site.netlify.app`
- [ ] Save DNS changes
- [ ] Wait 10-60 minutes for DNS propagation
- [ ] Check with https://www.whatsmydns.net

### Step 3: HTTPS (Automatic)
- [ ] Netlify provisions SSL automatically (Let's Encrypt, free)
- [ ] Wait up to 24 hours for SSL to activate
- [ ] Verify green padlock appears in browser

---

## Post-Launch Integrations

### Priority 1: Application Flow
**Option A: Jotform (Recommended)**
- [ ] Create Jotform for Non-QM lead capture
- [ ] Embed Jotform on site (replace `alert()` placeholder in `script.js`)
- [ ] Test form submission end-to-end
- [ ] Set up email notifications for new submissions

**Option B: Direct Phone Call**
- [ ] Leave current phone-first CTAs as-is
- [ ] Track call volume manually or via call tracking software

### Priority 2: Analytics & Tracking
**Google Tag Manager:**
- [ ] Create GTM account: https://tagmanager.google.com
- [ ] Get GTM container ID (e.g., `GTM-XXXXXX`)
- [ ] Add GTM code to `<head>` in `index.html` (see `DEPLOY.md` for snippet)
- [ ] Set up conversion tracking for:
  - [ ] Button clicks (Apply Now, Get My Rate)
  - [ ] Phone number clicks
  - [ ] Form submissions (when Jotform integrated)

**Google Analytics (via GTM):**
- [ ] Create GA4 property
- [ ] Add GA4 tag in GTM
- [ ] Verify tracking works (Real-time reports)

### Priority 3: Live Chat
**Tawk.to (Free):**
- [ ] Sign up: https://www.tawk.to
- [ ] Get widget code
- [ ] Add to `index.html` before `</body>` (see `DEPLOY.md` for snippet)
- [ ] Customize widget to match brand colors (orange/yellow/blue)
- [ ] Set up auto-responses for off-hours (8 PM – 8 AM)

---

## Marketing Activation

### Bing Ads Campaign
- [ ] Create Bing Ads account (if not already done)
- [ ] Mirror Google Ads HELOC campaign structure for Non-QM
- [ ] Keywords: "non qm mortgage", "bank statement loan", "DSCR loan", "self employed mortgage"
- [ ] Set landing page to: `https://americasbestlenders.com`
- [ ] Add UTM parameters for tracking: `?utm_source=bing&utm_medium=cpc&utm_campaign=nonqm`
- [ ] Start with $15-20/day budget
- [ ] Enable conversion tracking (via GTM)

### Google Business Profile
- [ ] Create GBP for "America's Best Lenders" (if separate from BirdRock Funding)
- [ ] Use same address: 5234 Cushman Place #300, San Diego CA 92110
- [ ] Category: Mortgage Broker / Loan Agency
- [ ] Add phone, hours, website link
- [ ] Upload superhero logo (ABL badge)

### Social Media (Optional)
- [ ] Reserve handles: @AmericasBestLenders on Twitter, Instagram, Facebook
- [ ] Create branded profile images (use superhero mascot)
- [ ] Post announcement: "Launching America's Best Lenders — your Non-QM superhero squad!"

---

## Testing Checklist (Before Ads Launch)

### Functional Testing
- [ ] All navigation links work
- [ ] Phone number is clickable on mobile (`tel:6199277625`)
- [ ] "Apply Now" buttons trigger correct action (form or phone)
- [ ] Smooth scrolling works on anchor links
- [ ] Footer links work
- [ ] Site is mobile responsive (test on iPhone, Android)
- [ ] Site loads fast (under 3 seconds)

### Cross-Browser Testing
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Firefox
- [ ] Edge

### Conversion Path Testing
- [ ] Hero CTA → Application or phone call
- [ ] Rate card CTAs → Application or phone call
- [ ] Apply section CTAs → Application or phone call
- [ ] Footer phone number works

### Content Review
- [ ] No typos
- [ ] Phone number correct everywhere
- [ ] Address correct
- [ ] Legal disclaimers present
- [ ] NMLS# correct (not placeholder)

---

## Week 1 Monitoring

### Daily Checks
- [ ] Monitor site uptime (Netlify status)
- [ ] Check Google Analytics (traffic, conversions)
- [ ] Review form submissions (if Jotform live)
- [ ] Track phone call volume
- [ ] Monitor Bing Ads performance (clicks, CTR, cost)

### Weekly Review
- [ ] Bing Ads cost-per-lead vs. Google Ads HELOC campaign
- [ ] Conversion rate (visitors → leads)
- [ ] Bounce rate (should be <60%)
- [ ] Mobile vs. desktop traffic
- [ ] Top traffic sources

---

## Future Enhancements (Phase 2)

### Content Expansion
- [ ] Add blog section (SEO)
- [ ] Write 10 Non-QM education articles
- [ ] Add loan calculators (DSCR, bank statement, asset depletion)
- [ ] Create FAQ page
- [ ] Add Spanish version (Español nav link already in design)

### Marketing
- [ ] Create YouTube explainer video (Schoolhouse Rock style)
- [ ] Run Facebook/Instagram retargeting ads
- [ ] Build email drip campaign for leads
- [ ] Partner with real estate investor groups

### Technical
- [ ] Add client portal login (if LoanSifter provides this)
- [ ] Implement A/B testing (different headlines, CTAs)
- [ ] Add live rate API (if available from lender partners)

---

## Success Metrics (30-Day Target)

**Traffic:**
- [ ] 500+ site visits/month
- [ ] <50% bounce rate
- [ ] 2+ min avg. session duration

**Conversions:**
- [ ] 20+ qualified leads/month (form + phone)
- [ ] <$50 cost per lead (Bing Ads)
- [ ] 5+ loan applications started

**Revenue:**
- [ ] 2-3 funded Non-QM loans (aligns with overall BirdRock goal of 20 loans/month)

---

## Emergency Contacts

**Website Issues:**
- Netlify support: https://www.netlify.com/support
- DNS issues: GoDaddy support

**Content/Design Updates:**
- Buddy Goodwon (CMO) — this agent! 🤖

**Compliance Questions:**
- KW Mortgage Enterprises Inc. compliance officer

---

**Launch Date:** ________________  
**Launched By:** ________________  
**Status:** [ ] Pre-Launch [ ] Launched [ ] Live with Ads

✅ Check off each item as you complete it. Good luck! 🦸‍♂️🚀