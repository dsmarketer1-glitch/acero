# ACERO Digital — AI Web Dev Agent Prompts
## All 6 Free Resources + 3 Calculators

---

# GLOBAL DESIGN SYSTEM (paste this before EVERY prompt)

```
DESIGN SYSTEM — apply to all tools on the ACERO Digital website:

Colors:
  --navy: #1E3A5F
  --blue: #2563EB
  --blue-light: #EFF6FF
  --amber: #F59E0B
  --green: #16A34A
  --red: #DC2626
  --white: #FFFFFF
  --off-white: #F8FAFC
  --grey: #6B7280
  --dark-grey: #374151

Typography:
  Headlines: 'Barlow Condensed', bold, uppercase tracking
  Body: 'DM Sans', regular/medium
  Import from Google Fonts

Component Rules:
  - Multi-step wizard UI with animated progress bar at top
  - Each step = one screen (no scrolling mid-step)
  - Inputs: rounded-lg border, focus ring in --blue, large touch targets
  - Primary buttons: bg --blue, white text, hover darken 10%, subtle scale(1.02)
  - Results screen: dark navy card with blue/amber/green accent stats
  - All transitions: 300ms ease-in-out
  - Mobile-first, fully responsive
  - No external UI libraries — pure Tailwind + vanilla JS or React hooks
  - Smooth fade+slide animation between steps
  - Show a branded ACERO Digital header on every tool with the tool name
```

---

# RESOURCE 1: "The Local Domination Checklist"

## What to tell your agent:

```
Build an interactive "Local Domination Checklist" tool for ACERO Digital's website.

Apply the ACERO design system above.

TOOL CONCEPT:
A multi-section interactive checklist where a home service contractor self-audits their 
local digital marketing. As they check items, a live score calculates. At the end, 
a personalised results screen shows their score, grade, and priority action items.

---

STEP 1 — INTRO SCREEN
- Tool title: "The Local Domination Checklist"
- Subtitle: "Find out if your business is visible to local customers — or invisible."
- 2 input fields:
    Business Name (text input)
    Trade/Industry (dropdown): HVAC | Plumbing | Roofing | Electrical | Pest Control | Garage Doors | Other
- Large CTA button: "Start My Free Audit →"
- Below button: "Takes 3 minutes. Completely free. No email required until results."

---

STEP 2 — GOOGLE BUSINESS PROFILE (6 checklist items)
- Section header with icon: "📍 Google Business Profile"
- Progress bar: Step 1 of 5
- Checklist items (each a large checkbox card with label + tooltip on hover):
    ☐ My Google Business Profile is claimed and verified
    ☐ My business category is correctly set (primary + secondary)
    ☐ I have 10+ Google reviews with an average of 4.0+
    ☐ My business hours, phone, and address are 100% accurate
    ☐ I have added photos in the last 30 days
    ☐ I respond to all my Google reviews (good and bad)
- "Next →" button (always enabled, skip is fine)

---

STEP 3 — WEBSITE (6 checklist items)
- Section header: "🌐 Your Website"
- Progress bar: Step 2 of 5
- Checklist items:
    ☐ My website loads in under 3 seconds on mobile
    ☐ My phone number is visible above the fold on every page
    ☐ My website has a dedicated page for each service I offer
    ☐ My website mentions the cities/areas I serve
    ☐ My website has a contact form or booking widget
    ☐ My website has customer reviews or testimonials visible
- "Next →" button

---

STEP 4 — LOCAL SEO (6 checklist items)
- Section header: "🔍 Local SEO"
- Progress bar: Step 3 of 5
- Checklist items:
    ☐ My business Name, Address, Phone is identical across all directories
    ☐ I am listed on Yelp, Angi, HomeAdvisor, and BBB
    ☐ My website has title tags mentioning my city and service
    ☐ I have a blog or content published in the last 90 days
    ☐ I appear in Google Maps top 3 for my main service + city
    ☐ I have backlinks from local websites or news sources
- "Next →" button

---

STEP 5 — PAID ADVERTISING (5 checklist items)
- Section header: "💰 Paid Advertising"
- Progress bar: Step 4 of 5
- Checklist items:
    ☐ I am running Google Ads for my top services
    ☐ My Google Ads go to a dedicated landing page (not my homepage)
    ☐ I have Google Local Services Ads (Google Guaranteed) active
    ☐ I track phone calls as conversions in my ad account
    ☐ I know my cost per lead from paid ads
- "Next →" button

---

STEP 6 — REPUTATION & SOCIAL (5 checklist items)
- Section header: "⭐ Reputation & Social"
- Progress bar: Step 5 of 5
- Checklist items:
    ☐ I have a system to ask every customer for a review after a job
    ☐ I have 25+ Google reviews (total)
    ☐ I respond to negative reviews professionally within 48 hours
    ☐ I post on Facebook or Instagram at least once a week
    ☐ My social profiles have accurate contact info and business hours
- "See My Results →" button (generates results)

---

RESULTS SCREEN:
Layout: Dark navy background, results card centred

Top of card:
- Business name from Step 1
- Large animated score circle (like a gauge/donut chart): shows X/28 checked
- Grade badge:
    24-28 = "A — Local Leader 🏆" (green)
    18-23 = "B — On the Right Track 📈" (blue)
    12-17 = "C — Needs Work ⚠️" (amber)
    0-11  = "D — Flying Blind 🚨" (red)
- Grade label and one sentence interpretation

Middle of card — 5 category scores:
- 5 mini progress bars (one per section):
    Google Business Profile: X/6
    Website: X/6
    Local SEO: X/6
    Paid Ads: X/5
    Reputation: X/5
- Each bar colour-coded: green (80%+), amber (50–79%), red (<50%)

Bottom of card — Top 3 Priority Actions:
- Dynamically generated based on which items are UNCHECKED
- Show the 3 lowest-scoring sections' first unchecked item
- Label: "🎯 Your Top 3 Priorities This Month:"
- Each priority: bold action statement + one sentence of why it matters

Email capture:
- "Get this report emailed as a PDF checklist"
- Email input + "Send My Report" button
- Note: "We'll also include a free tip for each item you missed."

CTA below:
- "Want ACERO to fix these for you?"
- Button: "Book Free 30-Min Strategy Call" → links to contact page

SHARE: Social share buttons — "Share my score" (Twitter/LinkedIn)
```

---

# RESOURCE 2: "The Leaky Bucket Report"

## What to tell your agent:

```
Build an interactive "Leaky Bucket Report" Google Ads self-audit tool for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
A wizard that asks a contractor 20 yes/no or multiple-choice questions about how their 
Google Ads account is set up. Each wrong answer = a "leak" in their bucket. 
Results screen shows their leaks visually as a bucket losing money, with a $ waste estimate.

---

STEP 1 — INTRO SCREEN
- Tool title: "The Leaky Bucket Report"
- Subtitle: "Find out how much of your Google Ads budget is being wasted right now."
- Icon: animated dripping bucket illustration (CSS only — blue bucket, amber drips)
- 3 fields:
    Business Name (text)
    Monthly Google Ads Budget: dropdown 
      (Under $500 | $500–$1,000 | $1,000–$2,500 | $2,500–$5,000 | $5,000+)
    Trade (dropdown — same as Resource 1)
- Button: "Find My Leaks →"

---

STEP 2 — CAMPAIGN SETUP (5 questions)
Header: "🎯 Campaign Setup"
Progress: Step 1 of 4

Q1: What match types are your keywords set to?
  A) Broad Match only
  B) Phrase and Exact Match
  C) A mix of all three
  D) I don't know

Q2: Do you have a negative keyword list?
  A) Yes, with 20+ negative keywords
  B) Yes, but it's basic (fewer than 10)
  C) No
  D) I don't know what that is

Q3: Do your ads send traffic to a specific landing page or your homepage?
  A) Dedicated landing page per service
  B) My homepage
  C) Different pages but not dedicated ones
  D) I don't know

Q4: How many active campaigns do you have?
  A) 1 campaign for everything
  B) Separate campaigns per service
  C) Separate campaigns per service AND location
  D) I don't know

Q5: Do you have ad scheduling (dayparting) turned on?
  A) Yes — ads only run during my business hours
  B) No — ads run 24/7
  C) I don't know

---

STEP 3 — TRACKING & MEASUREMENT (5 questions)
Header: "📊 Tracking & Measurement"
Progress: Step 2 of 4

Q6: Are phone calls tracked as conversions in your Google Ads account?
  A) Yes, every call is tracked
  B) Only some calls
  C) No
  D) I don't know

Q7: Do you know your current cost per lead from Google Ads?
  A) Yes, exactly
  B) Roughly
  C) No idea

Q8: Do you have Google Analytics connected to your Google Ads account?
  A) Yes
  B) No
  C) I don't know

Q9: Do you check your Search Terms report weekly?
  A) Yes, regularly
  B) Occasionally
  C) Never
  D) I don't know what that is

Q10: Do you have conversion tracking for form fills AND calls?
  A) Both
  B) Only one of them
  C) Neither
  D) I don't know

---

STEP 4 — AD QUALITY (5 questions)
Header: "✍️ Ad Quality"
Progress: Step 3 of 4

Q11: Do your ads have all ad extensions active? (sitelinks, callouts, call extension)
  A) Yes, all of them
  B) Some
  C) None
  D) I don't know

Q12: How many ad variations do you have per ad group?
  A) 3+ (including Responsive Search Ads)
  B) 1-2
  C) I don't know

Q13: Do your ad headlines include the city you serve?
  A) Yes
  B) No
  C) Sometimes

Q14: What is your average Quality Score?
  A) 7-10 (good)
  B) 4-6 (average)
  C) 1-3 (poor)
  D) I don't know

Q15: Do your landing pages match the specific service in your ad?
  A) Yes — every ad matches a relevant page
  B) Mostly
  C) No — all ads go to the same page

---

STEP 5 — BUDGET & BIDDING (5 questions)
Header: "💸 Budget & Bidding"
Progress: Step 4 of 4

Q16: What bidding strategy are you using?
  A) Maximise Conversions or Target CPA
  B) Manual CPC
  C) Maximise Clicks
  D) I don't know

Q17: Do you have location targeting set to your specific service area only?
  A) Yes — city/radius targeting
  B) Broader than my service area
  C) I don't know

Q18: Do you exclude mobile apps from your display network?
  A) Yes
  B) No
  C) I'm not running display ads
  D) I don't know

Q19: Have you done an account audit in the last 90 days?
  A) Yes
  B) No
  C) Never had one

Q20: Do you have a remarketing campaign running?
  A) Yes
  B) No
  C) I don't know what that is

- Button: "Show Me My Leaks →"

---

RESULTS SCREEN:

VISUAL: Animated bucket illustration
- Full bucket at top = 100% budget
- For each "leak" found = a drip animation appears on the bucket
- Bucket fill level drops visually based on number of leaks

WASTE ESTIMATE CALCULATION:
- Count wrong/suboptimal answers (defined below)
- Map to % waste estimate:
    0-3 leaks: "~5-10% waste" 
    4-7 leaks: "~15-25% waste"
    8-12 leaks: "~30-45% waste"
    13+ leaks: "~50%+ waste"
- Calculate dollar estimate: monthly_budget × waste_percentage
- Show: "You may be wasting approximately $X–$Y per month"
- Style: BIG amber number, dramatic reveal animation

WRONG ANSWER SCORING (flag these as leaks):
  Q1: A or D = leak | Q2: B,C,D = leak | Q3: B,C,D = leak | Q4: A,D = leak
  Q5: B,C = leak | Q6: B,C,D = leak | Q7: B,C = leak | Q8: B,C = leak
  Q9: C,D = leak | Q10: B,C,D = leak | Q11: B,C,D = leak | Q12: B,C = leak
  Q13: B,C = leak | Q14: B,C,D = leak | Q15: B,C = leak | Q16: C,D = leak
  Q17: B,C = leak | Q18: A or D = not a leak, B = leak | Q19: B,C = leak | Q20: B,C = leak

LEAK LIST — show each leak as a card:
- Bucket drip icon
- Short leak name: e.g. "Broad Match Keywords = Wasted Clicks"
- One sentence: what the problem is
- One sentence: what fixing it would do
- Colour code: red (high waste impact) or amber (medium)

BOTTOM:
- Score: "X out of 20 checks passed"
- Email capture: "Get the full Leaky Bucket Report with fixes emailed to you"
- CTA: "Get ACERO to Plug Your Leaks" → contact page
```

---

# RESOURCE 3: "What Your Competitors Know That You Don't"

## What to tell your agent:

```
Build an interactive "Competitor Intelligence Scorecard" tool for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
The user answers questions about themselves AND about what they've observed about their 
top competitor. The tool then generates a side-by-side comparison showing where the 
competitor is likely beating them, with actionable intelligence.

---

STEP 1 — INTRO SCREEN
- Title: "What Your Competitors Know That You Don't"
- Subtitle: "See exactly how you stack up against your #1 local competitor — and what they're doing that you're not."
- Fields:
    Your Business Name (text)
    Your Trade (dropdown)
    Your City/Metro Area (text)
    Competitor's Business Name (text, optional — "or describe them: e.g. the big HVAC company on Google in my city")
- Button: "Start the Comparison →"

---

STEP 2 — YOUR DIGITAL PRESENCE (10 questions about THEMSELVES)
Header: "About YOUR Business"
Small label: "Step 1 of 2 — Be honest, this is just for you"

Each question is a slider (1–5) or radio button:

1. How many Google reviews do you have?
   Under 10 | 10-24 | 25-49 | 50-99 | 100+

2. What is your average Google star rating?
   Under 3.5 | 3.5-3.9 | 4.0-4.4 | 4.5-4.9 | 5.0

3. Where do you rank on Google Maps for "[your service] + [your city]"?
   Not visible | Position 4-10 | Position 4-7 (lower pack) | Top 3 | #1

4. Do you run Google Ads?
   No | Used to but stopped | Yes but not sure if it's working | Yes and tracking results | Yes and profitable

5. How would you describe your website?
   Don't have one | Old/outdated | Decent but not converting | Good looking | Optimised for leads

6. Do you have a blog or content strategy?
   Nothing | Posted once or twice | Some content but inconsistent | Regular content | Strong content + authority

7. How active are you on social media?
   Not at all | Profile exists, rarely post | Post occasionally | Post weekly | Very active + engaged

8. Do you run Facebook/Instagram ads?
   Never | Tried once | Currently running but not optimised | Running and tracking leads | Running and profitable

9. How strong is your brand vs. competitors? 
   No real brand | Some recognition | Known locally | Preferred by many | Market leader

10. How quickly do you respond to new leads?
    Hours or days | Within a few hours | Under 1 hour | Under 15 mins | Instantly (automated)

---

STEP 3 — YOUR COMPETITOR (same 10 questions, about THEM)
Header: "About Your TOP Competitor"
Small label: "Step 2 of 2 — Estimate based on what you've seen. Check Google, their website, their ads."
Note: "Not sure? Google '[their name] + [city]' and spend 2 minutes looking."
Same 10 questions, reworded: "How many reviews do THEY have?" etc.

---

RESULTS SCREEN:
Layout: Two-column scorecard — YOUR BUSINESS vs. COMPETITOR

Header: "[Your name] vs. [Competitor name] — Local Marketing Comparison"

For each of the 10 categories:
- Row with category name
- YOUR score (left): colour-coded bar
- THEIR score (right): colour-coded bar
- Win/Loss badge: "You Win ✓" (green) | "Tied =" (grey) | "They Win ✗" (red)

Summary scores:
- "You won X out of 10 categories"
- Overall verdict badge:
  8-10 wins: "You're the Market Leader — protect it"
  5-7 wins: "Competitive — a few gaps to close"
  3-4 wins: "They Have the Edge — time to catch up"
  0-2 wins: "They're Dominating — urgent action needed"

INTELLIGENCE SECTION — "What They Know That You Don't":
For each category where competitor wins, show:
- Category name
- What they're likely doing that you aren't (based on their score)
- What you should do to match or beat them
- Estimated time to close the gap: "~30 days" / "~60-90 days" / "~3-6 months"

Email capture + CTA: "Want ACERO to help you beat them? Book a free strategy call"
```

---

# RESOURCE 4: "The 5-Star Review System"

## What to tell your agent:

```
Build an interactive "Review Request Template Generator" tool for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
User answers 5 questions about their business. Tool generates a fully personalised 
set of 6 review request templates (2 SMS, 2 email, 2 verbal scripts) using their 
actual business name, trade, and tone preference. Copy-paste ready.

---

STEP 1 — INTRO SCREEN
- Title: "The 5-Star Review System"
- Subtitle: "Get 6 ready-to-use, personalised review request templates for your business — in 60 seconds."
- Fields:
    Business Name (text) — "used in templates"
    Your First Name (text) — "for the verbal script"
    Trade (dropdown)
    City (text) — "used in templates"
    Tone preference (radio buttons with icons):
      🤝 Friendly & Casual
      💼 Professional & Formal
      ⚡ Short & Direct
- Button: "Generate My Templates →"
- No steps needed — this is a single form → instant results

---

RESULTS SCREEN:
Title: "Your Personalised 5-Star Review System"
Subtitle: "Copy, paste, send. That's it."

Display 6 template cards in a 2-column grid:

CARD 1 — SMS Template #1 (Right After Job)
Label: "📱 Send this text right after you finish a job"
Timing tip: "Best sent within 1 hour of job completion"
[Generated template using their business name, trade, city, tone]
Copy button: copies template to clipboard with one click
Checkmark animation on copy

CARD 2 — SMS Template #2 (Follow-up, 3 days later)
Label: "📱 Follow-up SMS — if they haven't left a review"
Timing tip: "Send 3 days after the first SMS"
[Generated template]
Copy button

CARD 3 — Email Template #1 (Same day)
Label: "📧 Same-day email after job completion"
Timing tip: "Schedule to send 2-3 hours after job complete"
Shows: Subject line + Email body
[Generated template with subject line]
Copy button

CARD 4 — Email Template #2 (One-week follow up)
Label: "📧 One-week follow-up email"
Timing tip: "Only send if no review after 7 days"
[Generated template]
Copy button

CARD 5 — Verbal Script (Technician says in-person)
Label: "🗣️ What your tech says before leaving the job"
Tip: "Train every tech to say this at the end of every call"
[Generated script using first name]
Copy button

CARD 6 — Verbal Script (Phone/Dispatcher follow-up)
Label: "📞 What your office says when following up by phone"
[Generated script]
Copy button

TEMPLATE GENERATION LOGIC:
Build 3 sets of templates (one per tone). 
Insert: [BusinessName], [Trade], [City], [TechName] as variables. 
Swap out based on tone selection.

Example SMS Friendly:
"Hi! It's [TechName] from [BusinessName] 👋 It was great helping you today with your [Trade] issue. If we did a good job, it would mean the world to us if you left a quick Google review — it really helps small businesses like ours. Takes 30 seconds: [Link]. Thanks so much! 🙏"

BONUS SECTION below templates:
"The 3 Golden Rules of Review Requests"
- Ask within 1 hour (memory is fresh, emotion is high)
- Make it a direct link (never say 'just search for us')  
- Train every touchpoint (tech, office, email, SMS)

CTA: "Want us to automate this entire system for your business?" → contact page

Email option: "Email all 6 templates to yourself" — email input + button
```

---

# RESOURCE 5: "The $10K Month Blueprint"

## What to tell your agent:

```
Build an interactive "Marketing Growth Roadmap Generator" for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
User answers 8 questions about their current business. Tool generates a personalised 
visual marketing roadmap showing exactly what they should be doing NOW, NEXT, and LATER 
— based on their revenue stage, trade, and current marketing maturity.

---

STEP 1 — INTRO SCREEN
- Title: "The $10K Month Blueprint"
- Subtitle: "Get a personalised marketing roadmap that shows exactly what to do — based on where your business actually is right now."
- Icon: road/path illustration (CSS)
- Fields:
    Business Name (text)
    Trade (dropdown)
    City (text)
    Number of trucks/technicians (radio):
      Just me | 2-3 | 4-7 | 8-15 | 15+
- Button: "Start Building My Roadmap →"

---

STEP 2 — REVENUE & GOALS (4 questions)
Progress: Step 1 of 3

Q1: What is your approximate annual revenue?
  Under $300K | $300K–$750K | $750K–$2M | $2M–$5M | Over $5M

Q2: What is your primary growth goal for the next 12 months?
  Get my first consistent flow of leads online
  Replace referrals with digital leads
  Dominate my local market
  Expand to new service areas
  Build a brand that commands premium pricing

Q3: How much do you currently spend on marketing per month?
  $0 (nothing) | Under $500 | $500–$1,500 | $1,500–$3,000 | $3,000+

Q4: How many leads do you need per month to hit your goals?
  5-10 | 10-25 | 25-50 | 50-100 | 100+

---

STEP 3 — CURRENT MARKETING (4 questions)
Progress: Step 2 of 3

Q5: Which of these do you currently have? (checkboxes, multi-select)
  ☐ A website
  ☐ Google Business Profile (claimed)
  ☐ Running Google Ads
  ☐ Active SEO / ranking on Google
  ☐ Facebook/Instagram presence
  ☐ Google Local Services Ads (Google Guaranteed)
  ☐ Email marketing to past customers
  ☐ Review generation system

Q6: Where do most of your leads come from right now?
  Word of mouth / referrals | Google (organic) | Google Ads | Door knocking/yard signs | Social media | I'm not sure

Q7: What's your biggest marketing frustration?
  I don't know where to start
  I'm spending money but not seeing results
  I'm too busy to manage marketing
  I can't measure what's working
  I'm losing to competitors online

Q8: What's your timeline to see results?
  I need leads ASAP (1-30 days)
  Within 3 months
  Building for 6-12 months
  Long-term brand building (1-2 years)

- Button: "Generate My Roadmap →"

---

RESULTS SCREEN:
Full visual roadmap layout — 3 phases on a timeline

Header: "[BusinessName]'s Custom Marketing Roadmap"
Sub: Based on: [Trade] | [Revenue stage] | [Team size]

--- PHASE 1: FOUNDATION (Now — Days 1-30) ---
Dark navy card, left border in amber
Label: "🏗️ Foundation — Do These First"
Logic: Show 3-4 items based on Q5 gaps (what they DON'T have checked)
Each item:
  Icon | Action title | One sentence why | Estimated cost range | DIY or Hire badge
  Example items:
    "Claim & Optimise Google Business Profile" — DIY — Free — "Your #1 local ranking factor"
    "Launch a conversion-focused website" — Hire — $2,000-$5,000 — "Without this, nothing else works"
    "Set up call tracking" — DIY/Tool — $50/mo — "You can't improve what you don't measure"

--- PHASE 2: GROWTH (Next — Days 30-90) ---
Dark navy card, left border in blue
Label: "🚀 Growth — Stack These On Top"
Logic: Based on revenue stage + goal from Q1 and Q2
Each item: same format as Phase 1
Example items:
  "Launch Google Ads for [trade] in [city]" — Hire — $800-$2,500/mo
  "Start Local SEO campaign" — Hire — $600-$1,500/mo
  "Set up automated review requests" — Tool — $50-$150/mo

--- PHASE 3: DOMINATION (Later — Months 3-12) ---
Dark navy card, left border in green
Label: "👑 Domination — Once Growth is Flowing"
Logic: Based on goal from Q2 and team size
Each item: same format
Example: Facebook Ads retargeting | Content/blog strategy | Email re-engagement | LSAs | Brand video

BUDGET SNAPSHOT:
Visual bar showing recommended monthly investment ranges:
  Current spend: [from Q3]
  Recommended for your stage: [calculated range]
  Gap: [difference]
  "Businesses at your revenue stage typically invest X–Y% of revenue in marketing"

PRIORITY SCORE:
- Show the single #1 thing they should do this week
- Big, bold, navy card: "Your #1 Priority This Week: [Action]"

EMAIL CAPTURE:
"Email me my full roadmap as a PDF"
Email input + "Send My Blueprint" button

CTA: "Want ACERO to build and execute this roadmap for you?"
Button: "Book Free Strategy Call" → contact page
```

---

# RESOURCE 6: "The Call-to-Close Tracker"

## What to tell your agent:

```
Build an interactive "Lead Source ROI Tracker" tool for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
User inputs their lead data from the last 30 days (by source). Tool calculates cost per lead, 
close rate, revenue per lead, and ROI per channel — then shows which channels are profitable 
and which are wasting money. Outputs a visual dashboard they can screenshot and use.

---

STEP 1 — INTRO SCREEN
- Title: "The Call-to-Close Tracker"
- Subtitle: "Find out which marketing channels are actually making you money — and which ones aren't."
- Fields:
    Business Name (text)
    Trade (dropdown)
    Average Job Value ($) — number input, placeholder "$850"
    Average Close Rate (%) — slider 10–100%, default 60%
- Note: "We'll use these to calculate revenue and ROI per channel."
- Button: "Enter My Lead Data →"

---

STEP 2 — LEAD DATA ENTRY
Header: "Enter Your Last 30 Days of Leads"
Subtitle: "Fill in what you know. Leave blank what you don't — we'll still calculate."

8 channel rows in a clean table/form layout:
Each row has:
  Channel name (label) | Leads received (number) | Monthly spend ($) | Jobs booked (number)

Channels:
  📱 Google Ads (Paid Search)
  📍 Google Maps (Organic)
  🌐 Website / Organic SEO
  ⭐ Google Local Services Ads (LSA)
  👥 Facebook / Instagram Ads
  🗣️ Referrals / Word of Mouth
  📒 Directories (Yelp, Angi, etc.)
  📣 Other / Offline

- "Calculate My ROI →" button
- "Not sure of exact numbers? Estimate — the pattern still holds."

---

RESULTS SCREEN:
Title: "[BusinessName] — Lead Source ROI Dashboard"

FOR EACH CHANNEL WITH DATA:
Show a card row with:
  Channel name + icon
  Leads: X
  Cost per lead: $X (spend ÷ leads; show "Free" if $0 spend)
  Close rate: X% (booked ÷ leads)
  Revenue generated: $X (booked × avg job value)
  ROI: X% ((revenue - spend) ÷ spend × 100)
  Status badge:
    ROI > 300%: "🟢 High Performer"
    ROI 100-299%: "🟡 Solid"
    ROI 1-99%: "🟠 Underperforming"
    ROI negative or $0: "🔴 Losing Money"

VISUAL: Horizontal bar chart — Revenue Generated per channel
Bars sorted highest to lowest, colour-coded by status

SUMMARY STATS ROW (top of results):
  Total leads: X | Total spend: $X | Total booked jobs: X | Total revenue: $X | Blended ROI: X%

INSIGHTS SECTION — "What This Tells You":
Dynamically generated insights:
  - "Your best channel is [top ROI channel] at $X cost per lead"
  - "You're spending $X on [worst channel] with [worst ROI] — consider pausing"
  - "Your organic channels (Maps/SEO) have $0 cost — investing in SEO compounds over time"
  - "Your overall close rate is X% — industry average for [trade] is 55-65%"

RECOMMENDATION based on data:
  If Google Ads ROI < 100%: "Your Google Ads needs optimisation — you're leaving money on the table"
  If no Google Ads data: "You have no data on paid ads — this is often the fastest growth lever"
  If referrals are top channel: "Referrals are strong but unpredictable — SEO + ads create consistent flow"

SAVE OPTIONS:
  "📸 Screenshot this dashboard" — triggers browser print/screenshot mode
  "📧 Email me this report" — email capture
  "📋 Copy summary to clipboard" — copies text version

CTA: "Want ACERO to improve your worst-performing channels?"
Button: "Book Free Marketing Audit" → contact page
```

---
---
---

# CALCULATORS

---

# CALCULATOR 1: Google Ads ROI Calculator

## What to tell your agent:

```
Build a "Google Ads ROI Calculator" for ACERO Digital's website.

Apply the ACERO design system above.

TOOL CONCEPT:
A real-time calculator where contractors slide inputs and INSTANTLY see projected ROI 
update live — no submit button needed. All calculations happen as they drag sliders.
This is a sales tool disguised as a calculator — the results show the opportunity cost 
of NOT running Google Ads with ACERO.

---

LAYOUT: Two-column desktop, stacked mobile

LEFT COLUMN — INPUTS (all sliders + number inputs):

Title: "Google Ads ROI Calculator"
Subtitle: "See your projected return before spending a single dollar."

Trade selector (tabs, not dropdown): 
  HVAC | Plumbing | Roofing | Electrical | Pest Control | Garage Doors
  (Selecting a trade auto-fills industry benchmark defaults)

SLIDER 1: Monthly Ad Budget
  Range: $500 – $10,000 | Step: $100 | Default: $2,000
  Show: "$2,000/month"

SLIDER 2: Average Job Value
  Range: $200 – $5,000 | Step: $50 | Default: trade-specific
  HVAC default: $850 | Plumbing: $650 | Roofing: $4,500 | Electrical: $500 | Pest: $250 | Garage: $350
  Show: "$850 average job"

SLIDER 3: Close Rate (leads to booked jobs)
  Range: 20% – 90% | Step: 5% | Default: 55%
  Show: "55% close rate"
  Benchmark note: "Industry avg: 50-65%"

SLIDER 4: Cost Per Lead (what you expect to pay per lead)
  Range: $20 – $300 | Step: $5 | Default: trade-specific
  HVAC: $85 | Plumbing: $70 | Roofing: $120 | Electrical: $65 | Pest: $45 | Garage: $55
  Show: "$85 per lead"
  Note: "ACERO client avg: shown in benchmark"

ACERO vs. UNMANAGED TOGGLE:
  Two scenarios side by side:
  "Self-managed / Current" vs. "Managed by ACERO"
  For ACERO column: use 20% better CPL (lower cost per lead)

---

RIGHT COLUMN — LIVE RESULTS (update instantly on any slider change):

Header: "Your Projected Results"

Monthly Metrics box (dark navy):
  Leads per month: [budget ÷ CPL]
  Jobs booked per month: [leads × close rate]
  Revenue generated: [jobs × avg job value]
  Ad spend: [$X]
  Net profit from ads: [revenue - spend]

ROI Gauge (large animated number):
  ROI = ((revenue - spend) / spend) × 100
  Display: "427% ROI" in large text
  Colour: green if >200%, amber if 100-200%, red if <100%

Annual Projection box:
  Annual revenue from ads: [monthly × 12]
  Annual profit from ads: [monthly net × 12]
  "Every $1 spent returns $X"

ACERO ADVANTAGE COMPARISON (two-column mini-table):
  | Metric | Self-Managed | With ACERO |
  | CPL | $85 | $68 (-20%) |
  | Monthly Leads | X | X+20% |
  | Annual Revenue | $X | $X+Y |
  | Difference | — | +$Z/year |

Below: "The ACERO difference is typically $X in additional annual revenue"

At bottom: small print — "Projections based on industry averages. Results vary."

CTA: "Ready to See These Numbers in Your Account?"
Button: "Get Free Google Ads Audit" → contact page

DESIGN NOTE: Make numbers animate/count up when sliders change (requestAnimationFrame counter animation). 
The live updating is the most important UX feature of this tool.
```

---

# CALCULATOR 2: SEO vs. Paid Ads: Break-Even Calculator

## What to tell your agent:

```
Build an "SEO vs. Google Ads Break-Even Calculator" for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
Contractors often ask "should I do SEO or Google Ads?" This calculator shows:
- How much Google Ads will cost to generate X leads over 12 months
- How much SEO will cost over 12 months + the compounding value after
- The break-even month where SEO becomes cheaper per lead
- Visual timeline chart showing cumulative cost per lead over 24 months

This positions ACERO as an expert advisor and educates prospects on long-term thinking.

---

STEP 1 — INPUTS SCREEN
Title: "SEO vs. Google Ads — Which Is Right For You?"
Subtitle: "See the real 12-month cost comparison for your business."

Form fields (no sliders, just inputs + dropdowns — cleaner for comparison tool):

Business Info:
  Trade (dropdown)
  City/Market Size: Small (<200K pop) | Medium (200K-1M) | Large (1M+)
  
Goal:
  Monthly leads needed: number input (default: 15)
  Average job value: number input (default: $750)

Budget Reality Check:
  Google Ads — Monthly budget willing to spend: number input
  SEO — Monthly budget willing to invest: number input
  Note: "Typical SEO for home services: $800–$2,000/mo | Typical Google Ads: $1,000–$5,000+/mo"

Expected Performance (pre-filled with ACERO benchmarks, editable):
  Google Ads cost per lead: auto-filled by trade | editable
  SEO — months to first significant leads: dropdown 3 | 4 | 5 | 6 | 9
  SEO — leads per month at full speed (month 6+): number input (auto-suggested)
  
Button: "Calculate My Break-Even →"

---

RESULTS SCREEN:
Two-column comparison header:
  Left: "⚡ Google Ads" | Right: "🌱 Local SEO"

MONTH-BY-MONTH TABLE (12 rows):
Columns: Month | Google Ads (leads | spend | CPL) | SEO (leads | spend | CPL)
Highlight the BREAK-EVEN month in amber: "📍 Break-Even Month — SEO becomes cheaper per lead here"

VISUAL CHART:
Line chart (Chart.js or pure SVG):
  X axis: Months 1-24
  Blue line: Google Ads cumulative cost per lead (flat/constant)
  Green line: SEO cumulative cost per lead (starts high, curves down, crosses blue)
  Amber vertical dashed line at break-even month
  Labels on lines

SUMMARY COMPARISON TABLE:
  | Metric | Google Ads | SEO |
  | Leads in Month 1 | X | 0-2 |
  | Leads in Month 6 | X | X |
  | Leads in Month 12 | X | X |
  | Total 12-month spend | $X | $X |
  | Cost per lead at Month 12 | $X | $X |
  | Leads continue if you stop paying? | ❌ No | ✅ Yes (for a while) |
  | Leads in Month 24 (same spend) | X | X (compounding) |

RECOMMENDATION BOX (dynamic, based on their inputs):
Logic:
  If budget < $1,500 AND leads needed < 10: "Start with SEO — lower budget, compounding results"
  If budget > $2,000 AND needs leads NOW: "Start with Google Ads — fastest path to leads"
  If both budgets given: "Best strategy: Run both. Ads for immediate leads, SEO for long-term dominance."
  
VERDICT: Show as a large badge with icon:
  "⚡ Google Ads First" or "🌱 SEO First" or "🏆 Both (Best ROI)"

CTA: "Not sure which is right for your market? Let's look at your specific situation."
Button: "Book Free Strategy Call" → contact page

DESIGN: The chart is the hero of this page — make it large, clear, and visually striking.
```

---

# CALCULATOR 3: "What Should I Be Spending on Marketing?" Budget Calculator

## What to tell your agent:

```
Build a "Marketing Budget Calculator" for ACERO Digital.

Apply the ACERO design system above.

TOOL CONCEPT:
Contractors always ask "how much should I spend on marketing?" This calculator 
answers it definitively based on their revenue, growth goal, and industry benchmarks. 
It outputs a personalised recommended budget with a breakdown by channel.

---

LAYOUT: Single-page wizard, 3 short steps, results.

STEP 1 — YOUR BUSINESS
Title: "What Should You Be Spending on Marketing?"
Subtitle: "Get a data-backed budget recommendation for your business in 90 seconds."

  Business Name (text)
  Trade (dropdown)
  Approximate Annual Revenue:
    Under $300K | $300K–$750K | $750K–$1.5M | $1.5M–$3M | $3M–$5M | Over $5M
  Number of years in business:
    Under 1 year (new) | 1–3 years | 3–7 years | 7+ years

---

STEP 2 — YOUR GOALS & SITUATION

  Primary goal (radio):
    🌱 Survive — I need consistent leads to stay busy
    📈 Grow — I want to increase revenue 20-40% this year
    🚀 Scale — I want to double revenue or expand markets
    👑 Dominate — I want to be the #1 brand in my market

  Current marketing situation (radio):
    Starting from scratch — nothing online
    Some basics done, need to grow
    Already marketing, need better ROI
    Marketing well, need to level up

  Biggest budget concern (radio):
    I don't know if I can afford it
    I've wasted money before and want proof first
    I know the budget, just need the right plan
    Budget is not the issue — results are

---

STEP 3 — QUICK NUMBERS

  Current monthly marketing spend: number input (0 if none)
  How many new leads/jobs do you need per month: number input
  Average job value: number input

- Button: "Calculate My Marketing Budget →"

---

RESULTS SCREEN:

Header: "[BusinessName]'s Recommended Marketing Budget"
Sub: "[Trade] business | [Revenue stage] | Goal: [Growth goal]"

PRIMARY RECOMMENDATION — large card, dark navy:
  "💡 Your Recommended Monthly Marketing Investment"
  BIG NUMBER: "$X,XXX – $X,XXX per month"
  Sub: "This is X–Y% of your annual revenue — the industry benchmark for [growth goal] stage"
  
BUDGET CALCULATOR LOGIC:
  Revenue tiers × goal multipliers:
    Survive: 5-8% of revenue
    Grow: 8-12% of revenue  
    Scale: 12-15% of revenue
    Dominate: 15-20% of revenue
  Convert annual % to monthly range
  Adjust for years in business (newer = higher % needed)

CHANNEL BREAKDOWN — visual budget allocation:
  Donut/pie chart showing recommended split:
    Google Ads: X% ($X/mo)
    Local SEO: X% ($X/mo)
    Website/CRO: X% ($X/mo) — one-time note
    LSA: X% ($X/mo)
    Social Ads: X% ($X/mo)
    Reputation/Reviews: X% ($X/mo)
  
  Each slice clickable — shows tooltip with "Why this channel for your stage"

BENCHMARK COMPARISON:
  "Where you are vs. where you need to be:"
  Current spend: $X/month
  Recommended: $X–Y/month
  Gap: $X/month
  
  If already spending more than recommended: "✅ Your budget is appropriate — focus on optimisation"
  If spending less: "⚠️ You may be under-investing — competitors spending more will take market share"

ROI PROJECTION at recommended budget:
  Estimated monthly leads: X–Y
  Estimated jobs booked: X–Y
  Estimated monthly revenue from marketing: $X–Y
  Marketing as % of generated revenue: X%
  "For every $1 invested, expect $X–Y back in revenue"

WHAT TO DO WITH THIS INFORMATION:
  3 action boxes:
    Box 1: "If you can invest $[min]+ today" → specific first steps
    Box 2: "If your budget is under $[min]" → what to prioritise with less
    Box 3: "If you're already investing $[max]+" → optimisation focus

EMAIL CAPTURE:
  "Email me my full budget breakdown and channel plan"
  Email + "Send My Budget Plan" button

CTA SECTION:
  Large navy card:
  "Want to put this budget to work?"
  "ACERO builds custom marketing plans based on your exact budget, trade, and city."
  "No wasted spend. No guessing. Just results."
  Button: "Book Free Budget Strategy Call" → contact page

DESIGN NOTE: 
  The donut chart channel breakdown is the visual centrepiece. 
  Make it interactive — hover each segment to see channel details.
  Numbers should animate in on load (count-up effect).
  Add a "What's included in SEO?" etc. expandable FAQ below the chart.
```

---

# IMPLEMENTATION NOTES FOR YOUR WEB DEV AGENT

```
GENERAL INSTRUCTIONS FOR ALL 9 TOOLS:

Framework: Use React components (since you're on VS Code / Google Antigravity CLS)
  - Each tool = its own React component
  - Shared: useMultiStep() hook for wizard navigation
  - Shared: useLocalStorage() to save progress (don't lose answers on refresh)
  - Shared: AnimatedNumber component for counting up stats

File Structure:
  /components/tools/
    LocalDominationChecklist.jsx
    LeakyBucketReport.jsx
    CompetitorScorecard.jsx
    ReviewTemplateGenerator.jsx
    GrowthRoadmapGenerator.jsx
    CallToCloseTracker.jsx
    GoogleAdsCalculator.jsx
    SeoVsPaidCalculator.jsx
    BudgetCalculator.jsx
    /shared/
      ProgressBar.jsx
      MultiStepWizard.jsx
      ResultsCard.jsx
      AnimatedNumber.jsx
      CopyButton.jsx

Email Capture:
  Connect all email forms to your email marketing tool (Mailchimp/Klaviyo/etc.)
  Each tool should tag the subscriber with which tool they used

Analytics:
  Fire a custom event on:
    - Tool started (tool_started, tool_name)
    - Each step completed (step_completed, step_number)
    - Results viewed (results_viewed)
    - Email captured (email_captured)
    - CTA clicked (cta_clicked)

Mobile:
  All wizards: full-screen step on mobile, no side-by-side until tablet+
  Sliders: use large touch targets (min 44px height)
  Calculators: stack columns on mobile

Performance:
  Lazy load each tool component
  Charts: use lightweight SVG for simple charts, Chart.js only for complex ones
  No heavy libraries — keep bundle size minimal
```
