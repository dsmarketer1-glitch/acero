export interface Industry {
    slug: string;
    title: string;
    icon: string;
    image: string;
    description: string;
    heroDescription: string;
    avgROI: string;
    challenges: { title: string; description: string; icon: string }[];
    approach: { title: string; description: string }[];
    stats: { label: string; value: string }[];
}

export const industries: Industry[] = [
    {
        slug: 'hvac',
        title: 'HVAC',
        icon: 'ac_unit',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiQv2XxuhIUe5IZRYw_RXO5IoUOp7PhBZ-zu7ykc343U-VMkVlMLtS177MrzxlIdssfdJgvtkoe0pDFG06j9oug10b0vLqWaf3UjAqDI1bkRbvGqfctaSfHB7mI7lJ3L0EnIsf5FOcgFj9chxrrwypKtBPe24Od3OGFpyXjZ3rKJfkKgdq-VD50U3I_-1UaRNeopttZCYafNKdXuasmZZaLhicPWt_fPEI5uKG5aIgp13vvnNLH_BtwD1eCWlLlJ62llMSDFDbEbk',
        description: 'Dominate seasonal demand with predictive ad scheduling and high-ticket installation funnels.',
        heroDescription: 'The HVAC industry is fiercely competitive. Seasonal swings mean you need a marketing partner who understands when to push cooling campaigns and when to flip to heating. We pre-build your entire seasonal strategy.',
        avgROI: '12:1',
        challenges: [
            { title: 'Seasonal Demand Swings', description: 'Summer cooling and winter heating create feast-or-famine cycles that are hard to manage without predictive scheduling.', icon: 'thermostat' },
            { title: 'High-Ticket Competition', description: 'System replacements and installations are high-value jobs that every competitor is bidding on aggressively.', icon: 'payments' },
            { title: 'Emergency vs. Planned', description: 'Balancing emergency repair leads with more profitable planned maintenance and installation leads.', icon: 'schedule' },
        ],
        approach: [
            { title: 'Seasonal Campaign Flipping', description: 'Pre-built campaigns for both heating and cooling seasons that switch automatically when weather patterns change.' },
            { title: 'Maintenance Membership Marketing', description: 'Funnels designed to convert one-time repair customers into recurring maintenance plan members.' },
            { title: 'High-Ticket Installation Funnels', description: 'Landing pages and ad campaigns specifically designed for system replacement and new installation leads.' },
        ],
        stats: [{ label: 'Avg. Lead Increase', value: '340%' }, { label: 'Avg. Cost Per Lead', value: '$28' }, { label: 'Booking Rate', value: '62%' }],
    },
    {
        slug: 'plumbing',
        title: 'Plumbing',
        icon: 'water_drop',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYyKqvB_uWcMKb10986L6xPgf14AEpHYNrwUYEabDbqum-UMXCZYv_vvQ7FVbQ2QiWtfjK2U9OTYMOdk7XNtfOrBaM5GSkfFD9Orb3_tD4RnyBMYpjizI1qUTZDU5GRYnd0zZcj0KJMNdUvKuWbq_V2WX9UPjhJNrbNfpLpL18tdFlAomH_hXI2YWP7xO68r8MjDJY_k3CUvdZ3JcwI9ymNtG7dy2XDXC7WtOMBGC2f9a-VeIZJALFz6ymrzUhLC_Xx4OSLIcQbDM',
        description: 'Capture emergency searches instantly with LSA dominance and rep management.',
        heroDescription: 'Plumbing emergencies don\'t wait, and neither should your marketing. When a pipe bursts at 2 AM, your business needs to be the first one they find. We specialize in capturing high-intent emergency searches.',
        avgROI: '9:1',
        challenges: [
            { title: 'Emergency Lead Speed', description: 'When a homeowner has a burst pipe, they call the first plumber they find. Speed to lead is everything.', icon: 'bolt' },
            { title: 'Low-Value vs. High-Value Jobs', description: 'Getting stuck with $99 drain cleanings instead of $5,000+ whole-house re-pipes and water heater installs.', icon: 'filter_list' },
            { title: 'Review Competition', description: 'Plumbing is one of the most reviewed service categories. You need 50+ reviews just to be competitive.', icon: 'reviews' },
        ],
        approach: [
            { title: 'Emergency LSA Domination', description: 'Optimized LSA profiles with fast response times and high review counts to capture emergency searches.' },
            { title: 'High-Value Service Targeting', description: 'PPC campaigns focused on water heater replacement, re-piping, and sewer line repair keywords.' },
            { title: 'Review Velocity System', description: 'Automated review collection that builds your star count faster than competitors.' },
        ],
        stats: [{ label: 'Avg. Lead Increase', value: '280%' }, { label: 'Avg. Cost Per Lead', value: '$32' }, { label: 'Booking Rate', value: '68%' }],
    },
    {
        slug: 'roofing',
        title: 'Roofing',
        icon: 'roofing',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcrKtTpGSJKPcFi0oyJMfzRdbzDm7N8IyNHPVtL5wW5_EHHzypUcxwITpaKDFf-fBgAmWyM6qGVVFJflRRghWZmoKuStoUH9o6pttCGQeytVJHn9v4Vo-Qa6PLm1efORR8CgX-RxM84oPtg5MUxcN_fXQoUjxqGXwvWpNTqEUOCMOsYTjbUi_gcOwPlAci1g0smrntvXJV1NFdyum4_fAH_lsFGvLss_3j8kL3BGMWUTt9VwVKQ8IAyf9SPOsC-8bW3Agco2HAgsY',
        description: 'Weather-triggered campaigns and storm-chasing geo-targeting for maximum lead volume.',
        heroDescription: 'Roofing is a visual, high-ticket business that requires aggressive marketing during storm seasons and consistent branding year-round. We combine weather-triggered campaigns with reputation-building strategies.',
        avgROI: '15:1',
        challenges: [
            { title: 'Storm Season Spikes', description: 'After major weather events, every roofing company is competing for the same leads at the same time.', icon: 'thunderstorm' },
            { title: 'Long Sales Cycle', description: 'Roof replacements can take weeks to close. You need to nurture leads through the decision process.', icon: 'hourglass_top' },
            { title: 'Visual Proof Needed', description: 'Homeowners want to see before/after photos and read reviews before trusting someone with their roof.', icon: 'photo_library' },
        ],
        approach: [
            { title: 'Weather-Triggered Campaigns', description: 'Automated ad activation when storms hit your service area. Be first to market while competitors are still setting up.' },
            { title: 'Visual Content Strategy', description: 'Drone footage, before/after galleries, and video testimonials that showcase your craftsmanship.' },
            { title: 'Insurance Claim Support Marketing', description: 'Landing pages that educate homeowners on the insurance claim process and position you as their advocate.' },
        ],
        stats: [{ label: 'Avg. Lead Increase', value: '420%' }, { label: 'Avg. Cost Per Lead', value: '$18' }, { label: 'Close Rate', value: '45%' }],
    },
    {
        slug: 'electrical',
        title: 'Electrical',
        icon: 'bolt',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-5TfBRoGI6uwjKznmnmgmJetYQhEybQrXIHFi5cgSXGb08BkKkdMNvTUJuanwZq1BNLUwM1Fbs0WwAvdcPYmMfeZqF52D2DYqmRS51y6T2TPVevcNtBqH7zWVDoe-6vveVRlX6uszOzq4QzjhhUvjZPByGg5V7gGtIxEp1CES141Z_2hbtQcbQmxdoMmbHojrjtTpjzvp0pFgcM_G7imvrZ0bDj60LcY1H_uir6P0B1gAcIVA66gN8YlfNiH-JKM7lBIcP89OUpo',
        description: 'Scale commercial contracts and residential service calls with targeted SEO.',
        heroDescription: 'Electrical contractors need a unique marketing approach that balances residential service calls with high-value commercial contracts. We build strategies that generate both emergency repairs and project-based leads.',
        avgROI: '10:1',
        challenges: [
            { title: 'Residential + Commercial Mix', description: 'Balancing emergency residential calls with more profitable long-term commercial projects.', icon: 'apartment' },
            { title: 'Trust & Safety Concerns', description: 'Electrical work involves safety — homeowners need to trust your credentials and experience.', icon: 'safety_check' },
            { title: 'Permit & Code Complexity', description: 'Customers need education on permits and codes, which creates opportunities for content marketing.', icon: 'gavel' },
        ],
        approach: [
            { title: 'Dual-Track Campaigns', description: 'Separate campaign strategies for residential emergency/service and commercial project leads.' },
            { title: 'Authority Content Marketing', description: 'Educational content on code requirements, safety tips, and EV charger installation guides.' },
            { title: 'Smart Home Upsell Funnels', description: 'Marketing campaigns targeting homeowners interested in EV chargers, panel upgrades, and smart home wiring.' },
        ],
        stats: [{ label: 'Avg. Lead Increase', value: '250%' }, { label: 'Avg. Cost Per Lead', value: '$35' }, { label: 'Booking Rate', value: '58%' }],
    },
    {
        slug: 'pest-control',
        title: 'Pest Control',
        icon: 'bug_report',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCt_LWrh4Sw6g00Pyf3Kn3Z5aqal9Ugb7lq1XyEmBL3Li05v07GyKbnsHnYT41BpHCqXrBLHty0sgGoFuW5xKciZ_rI8434q2yVSIGkmFhbwf4pngXEGGTnqLktHsiMByvQAcseQ4I037JWv00IAowaeFixW9-9Sd55b_JZrlp-D4eP2wPoTm1qr_PBCXnBoq1Lw6G856YDMjeD8qARCBWwQlLIlSVTAsNkahLloTV2eIlzrijsA_im7oMIu1auA6HztXxkWnNCEo',
        description: 'Recurring revenue focus with subscription model marketing and seasonal pest targeting.',
        heroDescription: 'Pest control is a subscription-first business. While emergency calls bring customers in the door, the real money is in recurring quarterly or monthly service plans. We build funnels that convert one-time callers into subscribers.',
        avgROI: '14:1',
        challenges: [
            { title: 'Seasonal Pest Patterns', description: 'Different pests dominate different seasons — your marketing needs to match the pest calendar.', icon: 'calendar_month' },
            { title: 'Converting to Recurring', description: 'Getting emergency customers to sign up for ongoing maintenance plans is the key to profitable growth.', icon: 'autorenew' },
            { title: 'Price Competition', description: 'Discount competitors driving prices down. You need to compete on value, not price.', icon: 'sell' },
        ],
        approach: [
            { title: 'Seasonal Pest Campaigns', description: 'Pre-built ad campaigns that match the pest calendar — termites in spring, mosquitoes in summer, rodents in fall.' },
            { title: 'Subscription Funnel Marketing', description: 'Landing pages and email sequences designed to convert one-time customers into annual subscribers.' },
            { title: 'Value-Based Positioning', description: 'Marketing that highlights your expertise, guarantees, and service quality over competitor pricing.' },
        ],
        stats: [{ label: 'Avg. Lead Increase', value: '310%' }, { label: 'Avg. Cost Per Lead', value: '$22' }, { label: 'Subscription Rate', value: '40%' }],
    },
    {
        slug: 'landscaping',
        title: 'Landscaping',
        icon: 'grass',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsKvTuf07dA9lCyy1vvL0DH2KB49SreSj1TyKK1ChptmLqCC2sLpgkrtqfpsKqEBb5GpUZMYDGAMq8GzIZEIHm1HvBn31o-4gDAvDmfPSxjQSRGbfqa-VME2wfxnqgaYaeADx9An-f-mmeYCiwQnpFRe-0tEZq0OHtFLZLpTHrCrUxb87SV2PKeUVQT_pHdB_M_P_vAEGFB0cspnJ5afwzqMGeiOWKYRKXpUax5wRfkXxwsA3LJsJ0TDIOPFsJJJ__4oDR0rW1_-M',
        description: 'Visual-first campaigns for landscape design projects and recurring maintenance contracts.',
        heroDescription: 'Landscaping is a visual business — your work speaks for itself when marketed correctly. We combine stunning portfolio marketing with seasonal lead generation to keep your crews busy year-round.',
        avgROI: '11:1',
        challenges: [
            { title: 'Seasonal Revenue Drops', description: 'Winter months can be devastating for revenue. You need strategies to fill the gaps with hardscaping and snow removal.', icon: 'ac_unit' },
            { title: 'Visual Portfolio Required', description: 'Customers want to see your past work. Without a strong visual portfolio, you lose to competitors who have one.', icon: 'collections' },
            { title: 'Maintenance vs. Projects', description: 'Balancing high-value design/build projects with recurring weekly maintenance contracts.', icon: 'balance' },
        ],
        approach: [
            { title: 'Visual Portfolio Marketing', description: 'Instagram-worthy photo galleries, before/after showcases, and video walkthroughs of completed projects.' },
            { title: '4-Season Revenue Strategy', description: 'Spring cleanup → Summer maintenance → Fall leaf removal → Winter snow removal/hardscaping campaigns.' },
            { title: 'Design Project Lead Funnels', description: 'High-value lead gen campaigns targeting homeowners planning major landscape renovations.' },
        ],
        stats: [{ label: 'Avg. Lead Increase', value: '280%' }, { label: 'Avg. Cost Per Lead', value: '$30' }, { label: 'Project Close Rate', value: '52%' }],
    },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find(i => i.slug === slug);
}
