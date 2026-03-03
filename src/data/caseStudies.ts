export interface CaseStudy {
    slug: string;
    company: string;
    industry: string;
    industrySlug: string;
    heroImage: string;
    logo: string;
    tagline: string;
    overview: string;
    challenge: string;
    strategy: string[];
    results: { metric: string; value: string; change: string }[];
    testimonial: { quote: string; name: string; title: string };
    services: string[];
    timeline: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'elite-air-conditioning',
        company: 'Elite Air Conditioning',
        industry: 'HVAC',
        industrySlug: 'hvac',
        heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAogmh_1jEUrgeec58yFcXvlA-peqqfbJwmeMMOjjjb-7rHAYuLpCjqiKuYeiaAZbI1B7MZHC_7Qejilwf8lOfFlVUY4kguQZJPsCsb_WH062PQh1qDWmElARK6OFZg04hK4lM8-ObqzezTuKP0V3-i2rCiGglosTABJ3sfMoacAnFir-mMY1yoOYY0mDD-C7zQkoKoixFkK8mUy8WmlbFggdphg-J3mxz1eyb_AsejEFKSm62s1kCmabdOdmZvVrrzhrJtZyt__2M',
        logo: '❄️',
        tagline: 'From $1.2M to $4.8M in revenue in 18 months',
        overview: 'Elite Air Conditioning was a well-established HVAC company in Phoenix, AZ with 15 technicians and a solid reputation. However, they were stuck at $1.2M in annual revenue and couldn\'t figure out how to break through. Their previous agency was focused on brand awareness campaigns that generated clicks but not calls.',
        challenge: 'Elite Air was spending $3,500/month on Google Ads with poor targeting, no conversion tracking, and landing pages that sent traffic to their homepage. Their cost per lead was over $120, and they had no way to track which leads actually became booked jobs. They were also missing out on LSA opportunities entirely.',
        strategy: [
            'Rebuilt Google Ads account from scratch with service-specific campaigns (AC repair, furnace install, maintenance)',
            'Created 12 dedicated landing pages with click-to-call and online scheduling integration',
            'Set up Google LSAs and achieved Google Guaranteed badge within 30 days',
            'Implemented automated review collection system, growing from 47 to 230+ reviews',
            'Built seasonal campaign switching: cooling-focused in summer, heating-focused in winter',
        ],
        results: [
            { metric: 'Annual Revenue', value: '$4.8M', change: '+312%' },
            { metric: 'Cost Per Lead', value: '$24.50', change: '-80%' },
            { metric: 'Monthly Leads', value: '340+', change: '+420%' },
            { metric: 'Return on Ad Spend', value: '14.5x', change: '' },
            { metric: 'Google Reviews', value: '230+', change: '+389%' },
            { metric: 'Booking Rate', value: '68%', change: '+45%' },
        ],
        testimonial: {
            quote: 'ACERO didn\'t just fix our marketing — they completely transformed our business. We went from struggling to fill our schedule to turning away work. We had to hire 8 new technicians in the first year.',
            name: 'Marcus Sterling',
            title: 'CEO, Elite Air Conditioning',
        },
        services: ['Google Ads', 'Google LSAs', 'Web Design', 'Reputation Management'],
        timeline: '18 months',
    },
    {
        slug: 'proflow-plumbing',
        company: 'ProFlow Plumbing',
        industry: 'Plumbing',
        industrySlug: 'plumbing',
        heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Ir9jxSJfJ17IF6F_e1EpnkQOVXMgOptBapRQe4mOOvBpbhow8aa82ltPTbjoR2NmXbd_L8dJQumADxc6IHXHzoeEVJpxPeNM1aCE12tYmBdGX8aLVTI_0QPgFxDX-_stqkvnyJnCkqB0alb-gheiQP4qLWMAcKuK6_fk0_GKpIWZJm76Q1fJYG12JydS09CntHRX2jmdTwJJasiZzrD3R2cVSV6lVV1CtkcpRamSBe766_551JPf8Oa-p-ezbtAdo-MLGr9JUl8',
        logo: '🔧',
        tagline: 'Captured 45% local search impression share in 90 days',
        overview: 'ProFlow Plumbing is a family-owned plumbing company in Dallas, TX with 8 trucks and a strong local reputation built over 20 years. Despite their experience, they were losing market share to newer competitors with better digital presence. Their website was 7 years old and not mobile-friendly.',
        challenge: 'ProFlow had almost zero digital presence beyond an outdated website. They relied entirely on word-of-mouth and yard signs. Meanwhile, new competitors with professional websites and aggressive Google Ads campaigns were stealing their market share. They were also missing hundreds of "emergency plumber near me" searches every month.',
        strategy: [
            'Built a new, mobile-optimized website with service-area pages for 15 surrounding cities',
            'Launched aggressive Google LSA campaign with rapid response protocol',
            'Implemented Google Ads campaigns targeting emergency plumber + water heater + drain + re-pipe keywords',
            'Deployed automated review collection system via SMS after each completed job',
            'Created a Google Business Profile optimization strategy with weekly posts and photo updates',
        ],
        results: [
            { metric: 'Search Impression Share', value: '45%', change: 'from 3%' },
            { metric: 'Monthly Service Calls', value: '240+', change: '+380%' },
            { metric: 'Google Reviews', value: '180+', change: 'from 23' },
            { metric: 'Cost Per Lead', value: '$28', change: '-65%' },
            { metric: 'Booking Rate', value: '72%', change: '+35%' },
            { metric: 'Revenue Growth', value: '+185%', change: 'Year over Year' },
        ],
        testimonial: {
            quote: 'We went from getting maybe 2-3 calls a day to our phones ringing non-stop. My biggest problem now is hiring fast enough. ACERO understands plumbing marketing better than anyone.',
            name: 'David Chen',
            title: 'Owner, ProFlow Plumbing',
        },
        services: ['Local SEO', 'Google LSAs', 'Web Design', 'Reputation Management'],
        timeline: '12 months',
    },
    {
        slug: 'summit-roofing',
        company: 'Summit Roofing Group',
        industry: 'Roofing',
        industrySlug: 'roofing',
        heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWpWSrHobOET-5T1WY08ULg2u_QCfKO9W_FRx-C9yAkR31KnHN9tjWga5YHbOlViC7YTFF-vErG4sTlH2I2Er9VUyUUvGpbQ8GNWDthzJKl5NUrr-_Cq5QiEZW3EhFj9BLoJp28exCFfnBnRCmYhtinePx09kAQLLg9M41Qh9qHt8eYq_EU1aKCz_7Zc1Amg6MUNgg8EnB-gZAC70Hl5zeM4N3UFOc1KuDU0J728sbDZL6Thp3UAylQOEJOm1JBJbfSGdFY6rVD90',
        logo: '🏠',
        tagline: '600+ storm damage leads in 30 days after hailstorm',
        overview: 'Summit Roofing Group operates in Oklahoma City, a region prone to severe hailstorms. They had the crews and expertise to handle major storm seasons but lacked the marketing infrastructure to capitalize on weather events. When storms hit, they were always late to market.',
        challenge: 'Summit\'s competitors had weather-triggered ad campaigns ready to deploy instantly after storms. By the time Summit\'s owner manually set up ads, he\'d already lost 48-72 hours of prime lead-generation time. They needed an automated system that could activate within hours of a major weather event.',
        strategy: [
            'Built a weather-monitoring system that triggers pre-built ad campaigns when hail events are detected',
            'Created geo-fenced campaigns targeting zip codes affected by specific storms',
            'Designed storm damage assessment landing pages with instant scheduling',
            'Produced drone footage content library for before/after presentations',
            'Implemented an insurance claim education content strategy to build trust',
        ],
        results: [
            { metric: 'Storm Leads (30 days)', value: '600+', change: 'Post-hailstorm' },
            { metric: 'Annual Revenue', value: '$6.2M', change: '+280%' },
            { metric: 'Cost Per Lead', value: '$15', change: '-72%' },
            { metric: 'Close Rate', value: '52%', change: '+25%' },
            { metric: 'Average Job Value', value: '$12,800', change: '+40%' },
            { metric: 'Market Share', value: '#2 in OKC', change: 'from #8' },
        ],
        testimonial: {
            quote: 'During the May hailstorm, our competitors were scrambling to set up ads. We had leads coming in within 4 hours. ACERO\'s weather-triggered system is like having a superpower in the roofing industry.',
            name: 'Jennifer Martinez',
            title: 'VP Operations, Summit Roofing Group',
        },
        services: ['Google Ads', 'Social Ads', 'Web Design', 'Local SEO'],
        timeline: '24 months',
    },
    {
        slug: 'brightline-electrical',
        company: 'BrightLine Electrical',
        industry: 'Electrical',
        industrySlug: 'electrical',
        heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHGTm4J0tI_gnYKK-KDP5cs_jUu8tq2aw8-tB9VW4RdFemXonxSCpLWLmMAKuyBmBDWaoshPo3usuUByGU_MORHAYaIXPn9I2yD2MsPUEHLsYh2ZnRK2m1ZzRqnydfXYaVWou1c0dzFxnT-qiuyItiFc-VOjOopFJDKSqQ0Rx1LACe9pX7K7bRQOxZLrG9XMBPK95kEmPJz-I0lomBLiPNlYEQqxSkXWPNdVN8K_rAOBz5nrB3LCV1BvDPBKIrCXFbsqrZsdJtbc4',
        logo: '⚡',
        tagline: '3x commercial contracts through targeted B2B marketing',
        overview: 'BrightLine Electrical is a mid-sized electrical contractor in Austin, TX specializing in both residential service calls and commercial installations. They wanted to shift their business mix toward more profitable commercial work, including EV charger installations, panel upgrades, and new construction wiring.',
        challenge: 'BrightLine was getting plenty of residential service calls ($150-$300 average ticket) but couldn\'t figure out how to attract commercial clients ($5,000-$50,000 projects). Their marketing was entirely residential-focused, and they had no content or campaigns targeting property managers, general contractors, or commercial building owners.',
        strategy: [
            'Created a separate commercial-focused landing page and service section on their website',
            'Built LinkedIn advertising campaigns targeting property managers and GCs in Austin',
            'Developed a content strategy around EV charger installations and commercial code compliance',
            'Launched Google Ads campaigns with commercial-intent keywords (commercial electrician, office wiring)',
            'Created a case study portfolio showcasing completed commercial projects',
        ],
        results: [
            { metric: 'Commercial Contracts', value: '3x', change: '+200%' },
            { metric: 'Average Job Value', value: '$18,500', change: '+850%' },
            { metric: 'Monthly Revenue', value: '$285K', change: '+165%' },
            { metric: 'Commercial Lead Flow', value: '35/month', change: 'from 4' },
            { metric: 'EV Charger Installs', value: '120+', change: 'New Revenue Stream' },
            { metric: 'Crew Size', value: '22', change: 'from 8' },
        ],
        testimonial: {
            quote: 'ACERO helped us completely reposition our company. We went from being "the guys who fix outlets" to landing $50K commercial projects. The B2B marketing strategy was a game-changer for our growth.',
            name: 'James Thompson',
            title: 'Owner, BrightLine Electrical',
        },
        services: ['Google Ads', 'Local SEO', 'Web Design', 'Social Ads'],
        timeline: '15 months',
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find(cs => cs.slug === slug);
}
