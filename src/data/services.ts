export interface Service {
    slug: string;
    title: string;
    shortTitle: string;
    icon: string;
    description: string;
    heroDescription: string;
    features: string[];
    benefits: { title: string; description: string; icon: string }[];
    process: { step: number; title: string; description: string }[];
    calculatorQuestions: { question: string; options: { label: string; score: number }[] }[];
}

export const services: Service[] = [
    {
        slug: 'google-ads',
        title: 'Google Ads (PPC) Management',
        shortTitle: 'Google Ads (PPC)',
        icon: 'ads_click',
        description: 'High-intent lead generation that puts your business at the top when customers need help NOW.',
        heroDescription: 'Stop wasting ad spend on bad clicks. Our certified Google Ads specialists build precision-targeted campaigns that generate booked jobs, not just traffic. We specialize in Local Services Ads and Search campaigns for contractors.',
        features: ['Keyword Research & Strategy', 'Conversion Tracking Setup', 'Monthly ROI Reporting', 'Landing Page Optimization', 'Competitor Analysis', 'A/B Ad Copy Testing'],
        benefits: [
            { title: 'Lower Cost Per Lead', description: 'We optimize your campaigns weekly to drive down CPL while maintaining lead quality.', icon: 'trending_down' },
            { title: 'Higher Booking Rates', description: 'Our landing pages are designed specifically for home service conversions.', icon: 'event_available' },
            { title: 'Transparent Reporting', description: 'See exactly where every dollar goes with our real-time dashboard access.', icon: 'monitoring' },
        ],
        process: [
            { step: 1, title: 'Audit', description: 'We audit your current campaigns and competitor landscape.' },
            { step: 2, title: 'Build', description: 'Custom campaign structure with geo-targeting and negative keywords.' },
            { step: 3, title: 'Launch', description: 'Go live with conversion tracking and call recording.' },
            { step: 4, title: 'Optimize', description: 'Weekly bid adjustments, ad copy tests, and budget allocation.' },
        ],
        calculatorQuestions: [
            { question: 'Are you currently running Google Ads?', options: [{ label: 'No, never have', score: 0 }, { label: 'Tried but stopped', score: 5 }, { label: 'Yes, self-managed', score: 10 }, { label: 'Yes, agency-managed', score: 15 }, { label: 'Yes, with great results', score: 20 }] },
            { question: 'Do you track which ads generate booked jobs?', options: [{ label: 'No tracking at all', score: 0 }, { label: 'Basic click tracking', score: 5 }, { label: 'Call tracking only', score: 10 }, { label: 'Full conversion tracking', score: 15 }, { label: 'Revenue attribution', score: 20 }] },
            { question: 'What is your average cost per lead?', options: [{ label: 'I don\'t know', score: 0 }, { label: 'Over $100', score: 5 }, { label: '$50-$100', score: 10 }, { label: '$25-$50', score: 15 }, { label: 'Under $25', score: 20 }] },
            { question: 'Do you have dedicated landing pages for ads?', options: [{ label: 'No, ads go to homepage', score: 0 }, { label: 'One generic page', score: 5 }, { label: 'Service-specific pages', score: 10 }, { label: 'Optimized with forms', score: 15 }, { label: 'A/B tested pages', score: 20 }] },
            { question: 'How often are your campaigns optimized?', options: [{ label: 'Set and forget', score: 0 }, { label: 'Monthly', score: 5 }, { label: 'Bi-weekly', score: 10 }, { label: 'Weekly', score: 15 }, { label: 'Daily monitoring', score: 20 }] },
        ],
    },
    {
        slug: 'local-seo',
        title: 'Local SEO Domination',
        shortTitle: 'Local SEO',
        icon: 'location_on',
        description: 'Dominate local search results and the "Map Pack" to become the authority in your service area.',
        heroDescription: 'When homeowners search "plumber near me" or "AC repair," you need to be in the top 3 results. Our Local SEO strategies put you there and keep you there with sustainable, white-hat techniques.',
        features: ['Google Business Profile Optimization', 'Local Citation Building', 'Content Strategy & Blogging', 'Review Generation & Management', 'Local Link Building', 'Schema Markup Implementation'],
        benefits: [
            { title: 'Map Pack Dominance', description: 'Appear in the top 3 local results for your highest-value service keywords.', icon: 'map' },
            { title: 'Organic Lead Flow', description: 'Generate leads without paying per click — pure organic growth.', icon: 'eco' },
            { title: 'Long-term Authority', description: 'Build a digital moat that competitors can\'t easily replicate.', icon: 'shield' },
        ],
        process: [
            { step: 1, title: 'Local Audit', description: 'Complete analysis of your local presence and NAP consistency.' },
            { step: 2, title: 'Optimize', description: 'Full GBP optimization with photos, services, and posts.' },
            { step: 3, title: 'Build Authority', description: 'Citation building, local link outreach, and content creation.' },
            { step: 4, title: 'Maintain & Scale', description: 'Ongoing optimization, review management, and reporting.' },
        ],
        calculatorQuestions: [
            { question: 'Is your Google Business Profile claimed and optimized?', options: [{ label: 'Not claimed', score: 0 }, { label: 'Claimed but basic', score: 5 }, { label: 'Partially optimized', score: 10 }, { label: 'Fully optimized', score: 15 }, { label: 'Regularly updated', score: 20 }] },
            { question: 'How many Google reviews do you have?', options: [{ label: '0-10 reviews', score: 0 }, { label: '10-25 reviews', score: 5 }, { label: '25-50 reviews', score: 10 }, { label: '50-100 reviews', score: 15 }, { label: '100+ reviews', score: 20 }] },
            { question: 'Do you have city/service pages on your website?', options: [{ label: 'No service pages', score: 0 }, { label: 'One general page', score: 5 }, { label: 'Some service pages', score: 10 }, { label: 'Full service + city pages', score: 15 }, { label: 'Optimized with schema', score: 20 }] },
            { question: 'Are your business listings consistent across directories?', options: [{ label: 'I don\'t know', score: 0 }, { label: 'Probably not', score: 5 }, { label: 'Some are correct', score: 10 }, { label: 'Most are consistent', score: 15 }, { label: 'All verified and consistent', score: 20 }] },
            { question: 'Do you publish content regularly?', options: [{ label: 'Never', score: 0 }, { label: 'Rarely', score: 5 }, { label: 'Monthly', score: 10 }, { label: 'Weekly', score: 15 }, { label: 'Multiple times per week', score: 20 }] },
        ],
    },
    {
        slug: 'web-design',
        title: 'High-Conversion Web Design',
        shortTitle: 'Web Design',
        icon: 'developer_mode',
        description: 'High-converting, mobile-first websites designed specifically for contractors and home pros.',
        heroDescription: 'Your website is your 24/7 sales rep. We build lightning-fast, mobile-optimized websites that turn visitors into booked jobs. Every element is designed with one goal: getting the phone to ring.',
        features: ['Mobile-First Responsive Design', 'Lightning Fast Loading (<2s)', 'SEO Best Practices Built-in', 'Click-to-Call & Form Integration', 'Service Area Pages', 'Review Integration'],
        benefits: [
            { title: 'Mobile Optimized', description: '70% of your customers search on their phone. Our sites convert on every device.', icon: 'smartphone' },
            { title: 'Speed = Leads', description: 'Pages load in under 2 seconds. Every second of delay costs you 7% of conversions.', icon: 'speed' },
            { title: 'Built to Convert', description: 'Strategic CTAs, trust signals, and booking widgets placed for maximum impact.', icon: 'conversion_path' },
        ],
        process: [
            { step: 1, title: 'Discovery', description: 'We learn your business, brand, and top-revenue services.' },
            { step: 2, title: 'Design', description: 'Custom mockups with your brand, photos, and conversion strategy.' },
            { step: 3, title: 'Development', description: 'Build with clean code, fast hosting, and SEO structure.' },
            { step: 4, title: 'Launch & Train', description: 'Go live with analytics, then train your team on updates.' },
        ],
        calculatorQuestions: [
            { question: 'How old is your current website?', options: [{ label: 'Don\'t have one', score: 0 }, { label: '5+ years old', score: 5 }, { label: '3-5 years old', score: 10 }, { label: '1-3 years old', score: 15 }, { label: 'Less than 1 year', score: 20 }] },
            { question: 'Is your website mobile responsive?', options: [{ label: 'No / Not sure', score: 0 }, { label: 'Partially', score: 5 }, { label: 'Yes but slow', score: 10 }, { label: 'Yes and fast', score: 15 }, { label: 'Fully optimized', score: 20 }] },
            { question: 'How fast does your site load?', options: [{ label: 'No idea', score: 0 }, { label: '5+ seconds', score: 5 }, { label: '3-5 seconds', score: 10 }, { label: '2-3 seconds', score: 15 }, { label: 'Under 2 seconds', score: 20 }] },
            { question: 'Does your site have clear calls-to-action?', options: [{ label: 'No CTAs', score: 0 }, { label: 'Just a phone number', score: 5 }, { label: 'Phone + contact form', score: 10 }, { label: 'Multiple CTAs per page', score: 15 }, { label: 'Booking widget + chat', score: 20 }] },
            { question: 'Do you have individual service pages?', options: [{ label: 'No, just homepage', score: 0 }, { label: 'One services page', score: 5 }, { label: 'A few service pages', score: 10 }, { label: 'All services covered', score: 15 }, { label: 'Service + city pages', score: 20 }] },
        ],
    },
    {
        slug: 'google-lsa',
        title: 'Google Local Services Ads (LSA)',
        shortTitle: 'Google LSAs',
        icon: 'verified_user',
        description: 'Become "Google Screened" or "Google Guaranteed" to build instant trust with homeowners.',
        heroDescription: 'Google LSAs put you at the very top of search results with a badge of trust. You only pay for actual leads — not clicks. We manage your profile, dispute bad leads, and optimize your budget for maximum ROI.',
        features: ['Google Guaranteed Badge Setup', 'Lead Dispute Management', 'Budget Optimization', 'Profile Optimization', 'Review Response Strategy', 'Performance Reporting'],
        benefits: [
            { title: 'Pay Per Lead', description: 'Unlike PPC, you only pay when someone actually contacts you. No wasted clicks.', icon: 'paid' },
            { title: 'Trust Badge', description: 'The Google Guaranteed badge instantly builds trust with homeowners.', icon: 'verified' },
            { title: 'Top Placement', description: 'LSAs appear above even paid search ads — maximum visibility.', icon: 'vertical_align_top' },
        ],
        process: [
            { step: 1, title: 'Verification', description: 'Help you through Google\'s background check and insurance verification.' },
            { step: 2, title: 'Profile Setup', description: 'Optimize your LSA profile with services, hours, and service area.' },
            { step: 3, title: 'Launch', description: 'Set strategic budget and go live with call tracking.' },
            { step: 4, title: 'Manage', description: 'Dispute invalid leads, optimize budget, and scale winners.' },
        ],
        calculatorQuestions: [
            { question: 'Are you currently running Google LSAs?', options: [{ label: 'No, never heard of them', score: 0 }, { label: 'Heard of them, not running', score: 5 }, { label: 'Applied but not approved', score: 10 }, { label: 'Running but not optimized', score: 15 }, { label: 'Running and optimized', score: 20 }] },
            { question: 'Do you have the Google Guaranteed badge?', options: [{ label: 'No', score: 0 }, { label: 'In progress', score: 10 }, { label: 'Yes', score: 20 }, { label: 'Yes', score: 20 }, { label: 'Yes', score: 20 }] },
            { question: 'Do you dispute invalid LSA leads?', options: [{ label: 'Don\'t know how', score: 0 }, { label: 'Rarely', score: 5 }, { label: 'Sometimes', score: 10 }, { label: 'Most of the time', score: 15 }, { label: 'Every invalid lead', score: 20 }] },
            { question: 'What is your LSA budget strategy?', options: [{ label: 'No strategy', score: 0 }, { label: 'Minimum budget', score: 5 }, { label: 'Moderate budget', score: 10 }, { label: 'Aggressive with limits', score: 15 }, { label: 'Data-driven scaling', score: 20 }] },
            { question: 'How many reviews do you have on your LSA profile?', options: [{ label: '0-5', score: 0 }, { label: '5-15', score: 5 }, { label: '15-30', score: 10 }, { label: '30-50', score: 15 }, { label: '50+', score: 20 }] },
        ],
    },
    {
        slug: 'social-ads',
        title: 'Social Media Advertising',
        shortTitle: 'Social Ads',
        icon: 'hub',
        description: 'Keep your brand top-of-mind with targeted awareness campaigns and smart retargeting.',
        heroDescription: 'Facebook and Instagram aren\'t just for selfies. They\'re powerful lead generation platforms when used correctly. We create scroll-stopping ads that build brand awareness and retarget website visitors who didn\'t convert.',
        features: ['Facebook & Instagram Campaigns', 'Creative Ad Design & Video', 'Lookalike Audience Building', 'Retargeting Campaigns', 'Lead Form Ads', 'Monthly Creative Refresh'],
        benefits: [
            { title: 'Brand Awareness', description: 'Stay top-of-mind so when they need you, you\'re the first call.', icon: 'visibility' },
            { title: 'Smart Retargeting', description: 'Re-engage website visitors who didn\'t book on their first visit.', icon: 'replay' },
            { title: 'Visual Storytelling', description: 'Showcase your work with before/after photos and video content.', icon: 'camera_alt' },
        ],
        process: [
            { step: 1, title: 'Audience Research', description: 'Define your ideal customer demographics and interests.' },
            { step: 2, title: 'Creative Production', description: 'Design ads with your actual work photos and compelling copy.' },
            { step: 3, title: 'Campaign Launch', description: 'Launch with A/B testing across multiple ad sets.' },
            { step: 4, title: 'Scale Winners', description: 'Kill underperformers, scale winners, refresh creative monthly.' },
        ],
        calculatorQuestions: [
            { question: 'Are you running paid social media ads?', options: [{ label: 'No social presence', score: 0 }, { label: 'Organic only', score: 5 }, { label: 'Boosted posts only', score: 10 }, { label: 'Running basic ads', score: 15 }, { label: 'Full funnel campaigns', score: 20 }] },
            { question: 'Do you have a Facebook pixel installed?', options: [{ label: 'What\'s a pixel?', score: 0 }, { label: 'No', score: 5 }, { label: 'Yes but not using it', score: 10 }, { label: 'Yes with basic tracking', score: 15 }, { label: 'Yes with full events', score: 20 }] },
            { question: 'Do you retarget website visitors?', options: [{ label: 'No', score: 0 }, { label: 'Not sure', score: 5 }, { label: 'Basic retargeting', score: 10 }, { label: 'Segmented retargeting', score: 15 }, { label: 'Full funnel retargeting', score: 20 }] },
            { question: 'How often do you update ad creative?', options: [{ label: 'Never changed', score: 0 }, { label: 'Yearly', score: 5 }, { label: 'Quarterly', score: 10 }, { label: 'Monthly', score: 15 }, { label: 'Weekly A/B tests', score: 20 }] },
            { question: 'Do you post organic content regularly?', options: [{ label: 'No social accounts', score: 0 }, { label: 'Rarely', score: 5 }, { label: 'Few times a month', score: 10 }, { label: 'Weekly', score: 15 }, { label: 'Daily', score: 20 }] },
        ],
    },
    {
        slug: 'reputation-management',
        title: 'Reputation Management',
        shortTitle: 'Reputation Mgmt',
        icon: 'star',
        description: 'Automate your review collection to build a five-star reputation that wins jobs on autopilot.',
        heroDescription: 'Your online reputation IS your business. 93% of consumers read reviews before hiring. We automate the review collection process and help you build a five-star presence that converts browsers into buyers.',
        features: ['Automated Review Requests', 'Negative Review Filtering', 'Real-time Monitoring', 'Review Response Templates', 'Multi-platform Management', 'Monthly Reputation Reports'],
        benefits: [
            { title: 'Automated Collection', description: 'Send review requests automatically after every job — no manual work needed.', icon: 'autorenew' },
            { title: 'Protect Your Brand', description: 'Catch negative feedback before it goes public with our filtering system.', icon: 'security' },
            { title: 'Win More Jobs', description: 'Businesses with 50+ reviews get 266% more leads from Google searches.', icon: 'emoji_events' },
        ],
        process: [
            { step: 1, title: 'Setup', description: 'Connect your CRM and set up automated review request triggers.' },
            { step: 2, title: 'Customize', description: 'Brand your review request emails and SMS messages.' },
            { step: 3, title: 'Deploy', description: 'Start collecting reviews automatically after every completed job.' },
            { step: 4, title: 'Monitor', description: 'Track sentiment, respond to reviews, and report monthly progress.' },
        ],
        calculatorQuestions: [
            { question: 'How many Google reviews does your business have?', options: [{ label: '0-10', score: 0 }, { label: '10-25', score: 5 }, { label: '25-50', score: 10 }, { label: '50-100', score: 15 }, { label: '100+', score: 20 }] },
            { question: 'What is your average Google rating?', options: [{ label: 'Below 3.5 stars', score: 0 }, { label: '3.5 - 4.0', score: 5 }, { label: '4.0 - 4.3', score: 10 }, { label: '4.3 - 4.7', score: 15 }, { label: '4.7 - 5.0', score: 20 }] },
            { question: 'Do you ask customers for reviews?', options: [{ label: 'Never', score: 0 }, { label: 'Sometimes verbally', score: 5 }, { label: 'Manual text/email', score: 10 }, { label: 'Semi-automated', score: 15 }, { label: 'Fully automated', score: 20 }] },
            { question: 'Do you respond to reviews?', options: [{ label: 'Never', score: 0 }, { label: 'Only negative ones', score: 5 }, { label: 'Some reviews', score: 10 }, { label: 'Most reviews', score: 15 }, { label: 'Every review', score: 20 }] },
            { question: 'Do you monitor reviews across platforms?', options: [{ label: 'No', score: 0 }, { label: 'Google only', score: 5 }, { label: 'Google + Yelp', score: 10 }, { label: 'Multiple platforms', score: 15 }, { label: 'All platforms with alerts', score: 20 }] },
        ],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug);
}
