# Outset - Business Plan & Cost Analysis

## Executive Summary

Outset is a location-based outdoor activity discovery platform targeting college students and young adults. This document outlines the costs to launch, scale, and monetize the platform using a freemium business model.

---

## Current State: Free APIs & Their Limitations

### APIs Currently Used (All FREE)

| API | Current Usage | Free Tier Limits | Cost When Exceeded |
|-----|---------------|------------------|-------------------|
| **OpenStreetMap Nominatim** | Geocoding (city → coordinates) | 1 request/sec | Must self-host or pay for commercial use |
| **OpenStreetMap Overpass** | Activity location data | Heavy usage discouraged | Must self-host (~$50-200/month) |
| **Open-Meteo Weather** | Weather forecasts | Unlimited | Always free (non-commercial) |
| **Google Maps Directions** | Navigation links | Free (just links) | $5/1000 requests if embedded |

### ⚠️ **CRITICAL ISSUE**: Current APIs Won't Scale

**Problem**: Free APIs have strict rate limits
- **Nominatim**: 1 request per second = max 86,400 searches/day
- **Overpass API**: Community servers will block you with heavy traffic
- **If you get 100+ concurrent users**, the app will crash

**Solution Required**: Switch to commercial APIs when you monetize

---

## Phase 1: MVP Launch Costs (Months 1-3)

### Current Status: $0 Spent ✅

You've built the MVP using:
- Free APIs (OpenStreetMap, Open-Meteo)
- Free hosting (Vercel)
- Free development (your team's time)
- AI assistance (Claude Code - your existing subscription)

### Immediate Launch Costs: **$0-500/month**

| Item | Cost | Notes |
|------|------|-------|
| **Vercel Hosting** | $0 (Hobby tier) | Supports ~100GB bandwidth/month |
| **Domain Name** | $12/year | outset.app or outset.co |
| **Email Service** | $0-15/month | Mailgun free tier or Sendgrid |
| **Analytics** | $0 | Google Analytics (free) |
| **Error Monitoring** | $0 | Sentry free tier (5K events/month) |
| **TOTAL MVP** | **$1-27/month** | Can launch for almost nothing! |

**✅ Recommendation**: Launch with current free infrastructure and upgrade as you grow.

---

## Phase 2: Growth & Scaling Costs (Months 3-12)

### When to Upgrade: >1,000 active users or >10,000 searches/month

### API Replacement Costs

#### **Option A: Google Maps Platform** (Most Reliable)
| Service | Usage | Cost |
|---------|-------|------|
| **Geocoding API** | $5 per 1,000 requests | $50/month (10K searches) |
| **Places API** | $17 per 1,000 requests | $170/month (10K searches) |
| **Maps JavaScript API** | $7 per 1,000 loads | $70/month (10K pageviews) |
| **Directions API** | $5 per 1,000 requests | $50/month (10K directions) |
| **Monthly Total** | 10,000 active users | **$340/month** |

**Google gives $200/month free credits** → Actual cost: **$140/month** for 10K users

#### **Option B: Mapbox** (Cheaper Alternative)
| Service | Usage | Cost |
|---------|-------|------|
| **Geocoding** | $0.50 per 1,000 requests | $5/month (10K searches) |
| **Search API** | $3 per 1,000 requests | $30/month (10K searches) |
| **Maps** | $0 | 50K free loads/month |
| **Directions** | $2 per 1,000 requests | $20/month (10K directions) |
| **Monthly Total** | 10,000 active users | **$55/month** |

**✅ Recommendation**: Start with Mapbox (cheaper), switch to Google if you need more features.

### Weather API Upgrade
| Provider | Free Tier | Paid Tier Cost |
|----------|-----------|----------------|
| **Open-Meteo** | Unlimited | Always free (for now) |
| **OpenWeatherMap** | 1,000 calls/day | $40/month (100K calls) |
| **WeatherAPI** | 1M calls/month | $0 (stays free) |

**✅ Recommendation**: Stay with Open-Meteo or WeatherAPI (both free).

### Infrastructure Costs (Scaling)

| Service | Growth Stage | Cost |
|---------|-------------|------|
| **Vercel Pro** | >100GB bandwidth | $20/month per member |
| **Database** (Supabase/Firebase) | User data storage | $0-25/month (10K users) |
| **CDN** (Cloudflare) | Image/asset delivery | $0 (free tier sufficient) |
| **Authentication** (Auth0/Clerk) | User management | $0-25/month (10K users) |
| **Email Service** (SendGrid) | Notifications | $20/month (100K emails) |
| **Monitoring** (Sentry) | Error tracking | $26/month (50K events) |
| **TOTAL INFRASTRUCTURE** | 10,000 users | **$91-136/month** |

---

## Phase 3: Professional Development Costs

### Claude Code / AI Development

| Plan | Cost | Usage |
|------|------|-------|
| **Claude Pro** (Current) | $20/month per developer | Unlimited messages |
| **Claude Code** (Future) | Included in Pro | No additional cost |

**For 3 developers**: $60/month

### Alternative Development Costs

If you hired developers instead:
| Role | Rate | Monthly Cost |
|------|------|--------------|
| **Junior Developer** | $40-60/hour | $6,400-9,600/month (full-time) |
| **Senior Developer** | $80-150/hour | $12,800-24,000/month (full-time) |
| **VS. Claude Code** | $20/month | **$20/month** (for ALL 3 of you) |

**💰 Savings with Claude Code**: ~$19,000-72,000/month in developer salaries

### Labor Costs (Your Team)

**Option A: Bootstrapped (Current)**
- Victoria, Grant, Payton work for equity
- Cost: $0 (paying yourselves later)
- Equity split: 33.3% each

**Option B: Part-Time Paid**
- $15-25/hour × 20 hours/week × 3 people
- Cost: $3,600-6,000/month

**Option C: Full-Time Salaries**
- $60-80K/year per person × 3
- Cost: $15,000-20,000/month

**✅ Recommendation**: Stay bootstrapped, pay yourselves from revenue once profitable.

---

## Total Monthly Operating Costs

### Small Scale (0-1,000 users)
| Category | Cost |
|----------|------|
| Hosting (Vercel Free) | $0 |
| APIs (Free tier) | $0 |
| Domain | $1/month |
| Claude Code (3 developers) | $60/month |
| Labor (Bootstrapped) | $0 |
| **TOTAL** | **$61/month** |

### Medium Scale (1,000-10,000 users)
| Category | Cost |
|----------|------|
| Hosting (Vercel Pro) | $60/month |
| APIs (Mapbox) | $55/month |
| Database | $25/month |
| Email/Monitoring | $46/month |
| Domain | $1/month |
| Claude Code (3 developers) | $60/month |
| Labor (Bootstrapped) | $0 |
| **TOTAL** | **$247/month** |

### Large Scale (10,000-100,000 users)
| Category | Cost |
|----------|------|
| Hosting (Vercel Pro × 3) | $60/month |
| APIs (Google Maps) | $1,400/month (100K searches) |
| Database (PostgreSQL) | $200/month |
| Email/Monitoring | $200/month |
| Domain | $1/month |
| Claude Code | $60/month |
| Labor (Part-time paid) | $5,000/month |
| **TOTAL** | **$6,921/month** |

---

## Freemium Business Model

### Free Tier Features
✅ Search activities by location
✅ View activity details
✅ Basic filters (type, difficulty)
✅ Weather information
✅ View 3 activities per search
✅ Limited to 5 searches per day

### Premium Tier - "Outset Pro" ($9.99/month or $89/year)

**Features:**
- ✨ **Unlimited searches** and activity views
- ✨ **Advanced filters** (cost, duration, crowd levels)
- ✨ **Personalized recommendations** based on preferences
- ✨ **Save unlimited activities** to schedule
- ✨ **Group planning tools** (create unlimited groups)
- ✨ **Priority support**
- ✨ **Offline access** (save activities offline)
- ✨ **Remove ads** (if you add ads to free tier)
- ✨ **Early access** to new features
- ✨ **Export schedules** (PDF, calendar sync)

### Enterprise Tier - "Outset Business" ($299/month)

**For:**
- Universities
- Outdoor clubs
- Recreation departments
- Corporate wellness programs

**Features:**
- Everything in Pro
- White-label option
- Custom activity curation
- Analytics dashboard
- Bulk user management
- API access
- Dedicated support

---

## Revenue Projections

### Conservative Estimates

#### Year 1
| Metric | Value |
|--------|-------|
| Total Users | 10,000 |
| Free Users | 9,500 (95%) |
| Premium Users ($9.99/mo) | 500 (5%) |
| **Monthly Revenue** | **$4,995** |
| **Annual Revenue** | **$59,940** |
| Annual Costs | -$14,772 (medium scale) |
| **Net Profit** | **$45,168** |

#### Year 2
| Metric | Value |
|--------|-------|
| Total Users | 50,000 |
| Free Users | 47,500 (95%) |
| Premium Users ($9.99/mo) | 2,000 (4%) |
| Enterprise Clients | 5 ($299/mo) |
| **Monthly Revenue** | **$21,475** |
| **Annual Revenue** | **$257,700** |
| Annual Costs | -$83,052 (large scale) |
| **Net Profit** | **$174,648** |

#### Year 3
| Metric | Value |
|--------|-------|
| Total Users | 200,000 |
| Free Users | 188,000 (94%) |
| Premium Users | 10,000 (5%) |
| Enterprise Clients | 20 ($299/mo) |
| **Monthly Revenue** | **$105,880** |
| **Annual Revenue** | **$1,270,560** |
| Annual Costs | -$250,000 (with team salaries) |
| **Net Profit** | **$1,020,560** |

### Optimistic Estimates (Higher Conversion)

If you achieve **10% premium conversion rate** (industry leaders get 5-15%):

#### Year 1
- 1,000 premium users × $9.99 = **$9,990/month** = **$119,880/year**

#### Year 2
- 5,000 premium users + 10 enterprise = **$52,980/month** = **$635,760/year**

#### Year 3
- 20,000 premium users + 50 enterprise = **$214,900/month** = **$2,578,800/year**

---

## Alternative Revenue Streams

### 1. Advertising (Free Tier Only)
- **Banner Ads**: $1-3 CPM (per 1,000 impressions)
- With 10,000 free users × 10 sessions/month = 100,000 impressions
- Revenue: **$100-300/month**

### 2. Affiliate Commissions
Partner with outdoor gear brands:
- REI Affiliate: 5% commission
- Backcountry.com: 3-8% commission
- If 10% of users click through and 5% buy ($100 avg): **$500-2,000/month**

### 3. Sponsored Activities
Outdoor businesses pay to feature their activities:
- $50-200/month per business
- 10 sponsors = **$500-2,000/month**

### 4. API Access
Sell API access to other apps:
- $99-499/month per client
- 5 API clients = **$495-2,495/month**

### 5. Data Insights
Sell anonymized activity trend data:
- To tourism boards, outdoor brands
- $5,000-20,000 per report

**Combined Additional Revenue: $2,000-5,000/month**

---

## Funding Requirements

### Bootstrap Path (Recommended)
- **Initial Investment**: $0-1,000 (domain, initial infrastructure)
- **Monthly Runway**: $247 (covered by part-time jobs)
- **Breakeven**: ~100 premium users ($999/month revenue)
- **Time to Profitability**: 3-6 months

### Raise Small Angel Round
- **Amount**: $50,000
- **Use**:
  - $12,000 - 6 months runway (infrastructure)
  - $18,000 - Marketing & user acquisition
  - $10,000 - Emergency fund
  - $10,000 - Legal/incorporation
- **Equity**: 10-15%
- **Timeline**: 12 months to 10K users

### Raise Seed Round
- **Amount**: $250,000-500,000
- **Use**:
  - $150,000 - Salaries (3 people × $50K)
  - $50,000 - Marketing & growth
  - $30,000 - Infrastructure & APIs
  - $20,000 - Legal/accounting
- **Equity**: 15-20%
- **Timeline**: 18 months to 100K users

---

## Go-to-Market Strategy

### Phase 1: Campus Launch (Months 1-3)
**Target**: Your university + 3-5 nearby schools
- Cost: $0 (grassroots marketing)
- Tactics:
  - Club partnerships
  - Campus ambassadors
  - Social media (Instagram/TikTok)
  - QR codes on campus
- Goal: 1,000 users

### Phase 2: Regional Expansion (Months 3-6)
**Target**: All colleges in your state
- Cost: $500-2,000/month
- Tactics:
  - Instagram/TikTok ads ($10-20/day)
  - Student organization partnerships
  - Outdoor club sponsorships
- Goal: 5,000 users

### Phase 3: National Launch (Months 6-12)
**Target**: Major college towns nationwide
- Cost: $5,000-10,000/month
- Tactics:
  - Paid social ads
  - Influencer partnerships
  - PR/media coverage
  - College tours
- Goal: 50,000 users

---

## Key Metrics to Track

### Product Metrics
- **DAU/MAU Ratio**: Daily/Monthly active users (target: >20%)
- **Search-to-View Rate**: % of searches that view activities (target: >60%)
- **Activity Add Rate**: % of views that add to schedule (target: >10%)
- **Return Rate**: % of users who return within 7 days (target: >40%)

### Business Metrics
- **CAC (Customer Acquisition Cost)**: Cost to acquire 1 user (target: <$5)
- **LTV (Lifetime Value)**: Revenue per user (target: >$50)
- **Free-to-Paid Conversion**: % upgrading to premium (target: 3-5%)
- **Churn Rate**: % of premium users canceling (target: <5%/month)
- **MRR (Monthly Recurring Revenue)**: Total monthly subscription revenue

---

## Risk Analysis & Mitigation

### Risk 1: API Rate Limits
- **Risk**: Free APIs throttle/block you
- **Impact**: App crashes, users leave
- **Mitigation**: Budget for paid APIs at 1,000 users
- **Cost**: $55-140/month (Mapbox/Google)

### Risk 2: Low Premium Conversion
- **Risk**: <2% users upgrade to paid
- **Impact**: Revenue below costs
- **Mitigation**: Add more premium features, improve value prop
- **Backup**: Add advertising to free tier

### Risk 3: Competition
- **Risk**: AllTrails, Komoot already exist
- **Impact**: Hard to differentiate
- **Mitigation**: Focus on college students, social features, activity diversity beyond hiking

### Risk 4: Seasonal Usage
- **Risk**: Usage drops in winter/bad weather
- **Impact**: Revenue fluctuates
- **Mitigation**: Heavy marketing for indoor activities, expand to all seasons

---

## Break-Even Analysis

### Monthly Break-Even Points

**At Medium Scale ($247/month costs)**:
- Need: 25 premium users ($9.99/month)
- Or: 50,000 ad impressions
- **Timeline**: 1-2 months with campus marketing

**At Large Scale ($6,921/month costs)**:
- Need: 693 premium users + 2 enterprise clients
- Or: 70,000 users with 2% conversion
- **Timeline**: 6-12 months

**Key Insight**: You can be profitable very quickly (1-3 months) with just campus adoption!

---

## Recommended Launch Strategy

### Month 1: Soft Launch
- **Users**: 100-500 (your campus)
- **Cost**: $61/month
- **Revenue**: $0 (all free tier)
- **Action**: Gather feedback, fix bugs

### Month 2-3: Premium Launch
- **Users**: 500-1,000
- **Cost**: $61/month
- **Revenue**: $200-500/month (50 premium × $9.99)
- **Action**: Announce premium tier, offer founding member discount

### Month 4-6: Growth Phase
- **Users**: 1,000-5,000
- **Cost**: $247/month
- **Revenue**: $1,500-3,000/month (150-300 premium)
- **Action**: Expand to nearby schools, run Instagram ads

### Month 7-12: Scale Phase
- **Users**: 5,000-20,000
- **Cost**: $1,000-3,000/month
- **Revenue**: $5,000-15,000/month
- **Action**: National expansion, seek seed funding if needed

---

## Bottom Line: What You Need to Raise

### Option 1: Bootstrap (Recommended)
**Investment Needed**: $0-1,000
**Monthly Costs**: $61-247
**Time to Profitability**: 2-3 months
**Risk**: Low
**Equity Retained**: 100%

### Option 2: Small Angel Round
**Investment Needed**: $25,000-50,000
**Monthly Costs**: $247-1,000
**Time to Profitability**: 6-12 months
**Risk**: Medium
**Equity Retained**: 85-90%

### Option 3: Seed Round
**Investment Needed**: $250,000-500,000
**Monthly Costs**: $6,000-10,000
**Time to Profitability**: 12-18 months
**Risk**: Higher (pressure to grow fast)
**Equity Retained**: 70-80%

---

## Conclusion & Recommendation

**💡 Best Path Forward:**

1. **Launch NOW with $0** (you already have everything!)
2. **Go freemium in Month 2** once you have 100+ active users
3. **Bootstrap to 1,000 users** using campus marketing ($0-500 cost)
4. **Upgrade APIs at 1,000 users** (adds $200/month cost)
5. **Hit profitability at 50 premium users** ($500/month revenue > $250 costs)
6. **Grow organically to 10K users** without raising money
7. **Consider raising only if you want to scale faster** (not required!)

**Total Initial Capital Needed: $0-1,000**
**Monthly Operating Costs: $61-247**
**Breakeven: 25-50 premium users**
**Time to Profitability: 2-4 months**

**You can build a profitable business without raising any money!** 🚀

---

## Next Steps

1. ✅ Launch on Vercel (Done!)
2. ⏭️ Add payment integration (Stripe - takes 1 day)
3. ⏭️ Create premium feature gates (takes 2-3 days)
4. ⏭️ Start campus marketing
5. ⏭️ Get first 10 paying customers
6. ⏭️ Scale from there!

**Questions? Need help with implementation? Let's do it!**
