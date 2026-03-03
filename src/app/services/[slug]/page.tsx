import { services, getServiceBySlug } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import MarketingScoreCalculator from '@/components/MarketingScoreCalculator';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
        title: `${service.title} | ACERO Digital`,
        description: service.heroDescription,
    };
}

const industryMap: Record<string, string> = {
    'google-ads': 'HVAC', 'local-seo': 'Plumbing', 'web-design': 'Roofing',
    'google-lsa': 'Electrical', 'social-ads': 'Pest Control', 'reputation-management': 'Landscaping',
};

const serviceImages: Record<string, { hero: string; section1: string; section2: string }> = {
    'google-ads': {
        hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        section1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        section2: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    },
    'local-seo': {
        hero: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80',
        section1: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
        section2: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
    },
    'web-design': {
        hero: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
        section1: 'https://images.unsplash.com/photo-1581291518633-83b4eef1d2f2?w=800&q=80',
        section2: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    },
    'google-lsa': {
        hero: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
        section1: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
        section2: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    },
    'social-ads': {
        hero: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
        section1: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
        section2: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    },
    'reputation-management': {
        hero: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1200&q=80',
        section1: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        section2: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    },
};

const serviceStats: Record<string, { stat: string; label: string }[]> = {
    'google-ads': [
        { stat: '340%', label: 'Avg. Lead Increase' },
        { stat: '$42', label: 'Avg. Cost Per Lead' },
        { stat: '8.2x', label: 'Average ROAS' },
        { stat: '24hr', label: 'Campaign Launch' },
    ],
    'local-seo': [
        { stat: '285%', label: 'Map Pack Visibility' },
        { stat: '#1', label: 'Avg. Position Achieved' },
        { stat: '67%', label: 'Organic Traffic Growth' },
        { stat: '18mo', label: 'Compound Growth' },
    ],
    'web-design': [
        { stat: '3.2x', label: 'Conversion Rate Lift' },
        { stat: '<2s', label: 'Page Load Speed' },
        { stat: '95+', label: 'Performance Score' },
        { stat: '45%', label: 'Bounce Rate Drop' },
    ],
    'google-lsa': [
        { stat: '4.8★', label: 'Avg. Client Rating' },
        { stat: '$28', label: 'Avg. Cost Per Lead' },
        { stat: '92%', label: 'Answer Rate Achieved' },
        { stat: '2x', label: 'Lead Volume vs Ads' },
    ],
    'social-ads': [
        { stat: '5.4x', label: 'ROAS on Facebook' },
        { stat: '210%', label: 'Brand Awareness Lift' },
        { stat: '$18', label: 'Cost Per Engagement' },
        { stat: '35%', label: 'Retargeting Conversion' },
    ],
    'reputation-management': [
        { stat: '4.8★', label: 'Avg. Rating Achieved' },
        { stat: '312%', label: 'Review Volume Growth' },
        { stat: '85%', label: 'Response Rate' },
        { stat: '48hr', label: 'Avg. Response Time' },
    ],
};

const serviceTestimonials: Record<string, { quote: string; name: string; title: string; company: string }> = {
    'google-ads': {
        quote: "ACERO cut our cost per lead by 60% in the first 3 months. We went from paying $120 per call to under $45. Our phone hasn't stopped ringing since.",
        name: 'Mike Torres', title: 'Owner', company: 'AllSeason HVAC — Phoenix, AZ',
    },
    'local-seo': {
        quote: "We were buried on page 3. After 6 months with ACERO, we're #1 on Google Maps for 'plumber near me' in our city. Organic leads now account for 40% of our business.",
        name: 'Sarah Mitchell', title: 'Marketing Manager', company: 'Mitchell Plumbing — Denver, CO',
    },
    'web-design': {
        quote: 'Our old website got maybe 2 calls a month. ACERO designed a site that converts like crazy — we now get 30+ leads a month from the website alone.',
        name: 'James Rodriguez', title: 'Owner', company: 'Summit Roofing — Dallas, TX',
    },
    'google-lsa': {
        quote: "The Google Guaranteed badge changed everything for us. Homeowners trust us instantly. ACERO handled all the verification and optimisation — we just answer the calls.",
        name: 'David Kim', title: 'Operations Manager', company: 'BrightLine Electric — Seattle, WA',
    },
    'social-ads': {
        quote: "I was skeptical about Facebook ads for pest control. But ACERO ran a campaign that brought in 85 leads in the first month. Now social media is our #2 channel.",
        name: 'Lisa Chen', title: 'Co-Owner', company: 'ShieldGuard Pest — Houston, TX',
    },
    'reputation-management': {
        quote: "We went from 23 Google reviews to over 180 in 8 months. ACERO's automated system makes it effortless. Our 4.9 star rating is now our biggest sales tool.",
        name: 'Robert Greene', title: 'Owner', company: 'GreenScape Lawns — Charlotte, NC',
    },
};

const serviceFAQs: Record<string, { q: string; a: string }[]> = {
    'google-ads': [
        { q: 'How much should I spend on Google Ads?', a: 'Most home service companies see strong results with a $1,500–$5,000/month budget. We\'ll recommend a budget based on your market, competition, and growth goals during your free audit.' },
        { q: 'How quickly will I see results?', a: 'Most clients see their first leads within 48-72 hours of campaign launch. It typically takes 30-60 days to fully optimise campaigns for peak performance.' },
        { q: 'Do I pay per click or per lead?', a: 'Google Ads charges per click. But we set up conversion tracking so you know exactly which clicks turn into phone calls and form fills — so you know your true cost per lead.' },
        { q: 'What if I\'ve tried Google Ads before and it didn\'t work?', a: '90% of contractors who "tried Google Ads" were running poorly set up campaigns. We audit accounts daily and find an average of 40% budget waste. We fix the leaks from day one.' },
        { q: 'Can I pause or stop at any time?', a: 'Yes. We don\'t do long-term contracts. You can pause or cancel with 30 days notice. We keep our clients through results, not contracts.' },
    ],
    'local-seo': [
        { q: 'How long does SEO take to work?', a: 'SEO is a compounding investment. Most clients see noticeable improvement in 3-4 months, with strong results by month 6. After 12 months, SEO often becomes your cheapest lead source.' },
        { q: 'What\'s the difference between SEO and Google Ads?', a: 'Google Ads gives you immediate visibility (you pay per click). SEO gives you "free" visibility over time by ranking organically. The best strategy uses both — ads for speed, SEO for compound growth.' },
        { q: 'Do I need a new website for SEO?', a: 'Not always. We start with an audit of your current site. If it has major technical issues, we may recommend a redesign. But many clients see results with optimisation of their existing site.' },
        { q: 'What does Local SEO include?', a: 'Google Business Profile optimisation, local citation building, on-page SEO, content creation, review strategy, technical SEO fixes, and monthly performance reporting.' },
        { q: 'Can I rank #1 in my city?', a: 'In most markets, yes. It depends on competition and your current starting point. We\'ll tell you exactly what\'s possible in your free audit.' },
    ],
    'web-design': [
        { q: 'How long does a website take to build?', a: 'We design and launch most contractor websites in 2-4 weeks. We handle everything — design, development, content, SEO setup, and hosting.' },
        { q: 'What platform do you build on?', a: 'We build on fast, modern platforms optimised for lead generation. Every site is mobile-responsive, loads in under 2 seconds, and is designed to convert visitors into calls.' },
        { q: 'Can I edit my website myself?', a: 'Yes. We build with user-friendly CMS systems that let you make basic content updates. For larger changes, our team handles it included in your maintenance plan.' },
        { q: 'What makes your websites different?', a: 'We only build websites for home service companies. Our designs are based on data from 500+ contractor websites — we know exactly what converts visitors into phone calls.' },
        { q: 'Do you offer hosting and maintenance?', a: 'Yes. Our plans include hosting, SSL, daily backups, security monitoring, and minor content updates. You never have to worry about your site going down.' },
    ],
    'google-lsa': [
        { q: 'What is Google Guaranteed?', a: 'Google Guaranteed is a verification badge that appears on your Local Services Ads. It tells customers that Google has verified your business, which dramatically increases trust and click-through rates.' },
        { q: 'How do I get Google Guaranteed?', a: 'You need to pass Google\'s verification process including background checks, insurance verification, and business license verification. We handle the entire application process for you.' },
        { q: 'How are LSAs different from Google Ads?', a: 'LSAs charge per lead (not per click), appear at the very top of Google above regular ads, and include a Google Guaranteed badge. Average cost per lead is typically 30-50% lower than Google Ads.' },
        { q: 'What trades qualify for LSAs?', a: 'HVAC, plumbing, electrical, roofing, pest control, garage doors, painting, cleaning, and many more home service trades. We\'ll check eligibility for your specific trade.' },
        { q: 'Can I dispute bad leads?', a: 'Yes. Google allows you to dispute leads that are spam, wrong numbers, or services you don\'t offer. We monitor and dispute bad leads to keep your cost per real lead low.' },
    ],
    'social-ads': [
        { q: 'Do Facebook ads work for contractors?', a: 'Absolutely. Facebook\'s targeting lets you reach homeowners in your service area who are actively looking for home improvements. We see 4-6x ROI for most home service clients.' },
        { q: 'What\'s the minimum budget?', a: 'We recommend a minimum of $500/month for social ads. Most clients spend $1,000-$3,000/month once they see the results and want to scale.' },
        { q: 'What kind of ads do you run?', a: 'Lead generation ads (form fills), video ads (before/after), carousel ads (showing your work), and retargeting ads (reaching people who visited your website but didn\'t call).' },
        { q: 'Will I see my ads before they go live?', a: 'Yes. We create all ad creative and copy, then send it to you for approval before anything goes live. You have full visibility and control.' },
        { q: 'Do you handle Instagram too?', a: 'Yes. We run campaigns across both Facebook and Instagram simultaneously, optimising placement based on where your audience is most active.' },
    ],
    'reputation-management': [
        { q: 'How do you get more reviews?', a: 'We set up automated review requests via SMS and email sent after every completed job. The system includes follow-ups and makes it dead simple for customers to leave a review.' },
        { q: 'Can you remove bad reviews?', a: 'We can\'t remove legitimate reviews, but we can help you respond professionally (which often matters more than the review itself) and we can flag reviews that violate Google\'s policies for removal.' },
        { q: 'What if we only have a few reviews?', a: 'That\'s exactly who we help most. Our system typically generates 15-25 new reviews per month from your existing customers. Most clients reach 100+ reviews within 6 months.' },
        { q: 'Do you respond to reviews for us?', a: 'We can. Our team crafts personalised responses to both positive and negative reviews — keeping your brand professional and showing potential customers you care.' },
        { q: 'Does reputation management really affect our search rankings?', a: 'Yes. Google officially lists reviews as a ranking factor for local search. More reviews + higher ratings = higher visibility on Google Maps.' },
    ],
};

const serviceWhyChoose: Record<string, { icon: string; title: string; desc: string }[]> = {
    'google-ads': [
        { icon: 'home_repair_service', title: 'Built for Contractors', desc: 'We manage Google Ads exclusively for home service companies. We know your market, your customers, and your average ticket sizes.' },
        { icon: 'call', title: 'Call Tracking & Recording', desc: 'Every call tracked. Every lead attributed. Listen to call recordings to train your team and improve close rates.' },
        { icon: 'block', title: 'Click Fraud Protection', desc: 'We monitor for competitor clicks and bot traffic, blocking wasted spend so your budget goes to real homeowners.' },
        { icon: 'monitoring', title: 'Weekly Optimisation', desc: "Your campaigns aren't set and forgotten. We optimise bids, keywords, and ads weekly to continuously improve performance." },
    ],
    'local-seo': [
        { icon: 'pin_drop', title: 'Hyperlocal Targeting', desc: 'We target every city, neighbourhood, and zip code in your service area — not just your main city.' },
        { icon: 'edit_note', title: 'Content That Ranks', desc: 'Our writers create SEO-optimised service pages and blog posts that rank for the keywords your customers are actually searching.' },
        { icon: 'link', title: 'Authority Building', desc: "We build high-quality local backlinks from directories, news sites, and industry sources to boost your domain authority." },
        { icon: 'insights', title: 'Monthly Rankings Reports', desc: 'Track your position for every keyword, every month. See exactly how much organic traffic and leads are coming in.' },
    ],
    'web-design': [
        { icon: 'smartphone', title: 'Mobile-First Design', desc: '70%+ of your visitors are on mobile. Every site we build is designed mobile-first for a perfect phone experience.' },
        { icon: 'speed', title: 'Lightning Fast Loading', desc: 'Sub-2-second load times. Slow websites lose 53% of visitors. We ensure your site loads before they leave.' },
        { icon: 'conversion_path', title: 'Conversion Optimised', desc: 'Strategic CTA placement, click-to-call buttons, trust signals, and social proof — every element designed to generate calls.' },
        { icon: 'seo', title: 'SEO-Ready Architecture', desc: 'Technical SEO is baked into every build — proper structure, schema markup, meta tags, and page speed optimisation.' },
    ],
    'google-lsa': [
        { icon: 'verified', title: 'Verification Experts', desc: "We handle the entire Google verification process — paperwork, background checks, insurance submission. You don't lift a finger." },
        { icon: 'dispute', title: 'Lead Dispute Management', desc: 'We actively monitor and dispute bad leads — wrong numbers, spam calls, and services you don\'t offer — to keep your CPL low.' },
        { icon: 'reviews', title: 'Review Strategy Integration', desc: 'LSA rankings are heavily influenced by reviews. We integrate review generation to boost your ad position and trust.' },
        { icon: 'calendar_month', title: 'Budget & Schedule Control', desc: "Set your budget, services, and availability. We ensure your ads only run when you're ready to take calls." },
    ],
    'social-ads': [
        { icon: 'videocam', title: 'Professional Ad Creative', desc: 'We create scroll-stopping images and videos that showcase your work. Before/after photos, team spotlights, and testimonial clips.' },
        { icon: 'target', title: 'Laser-Targeted Audiences', desc: 'Homeowners in your zip codes, by income level, home age, and home ownership status. We reach the right people, not everyone.' },
        { icon: 'sync', title: 'Retargeting Campaigns', desc: 'Website visitors who didn\'t call see your ads on Facebook and Instagram — bringing them back when they\'re ready to book.' },
        { icon: 'ab_testing', title: 'Continuous A/B Testing', desc: 'We test ad copy, images, audiences, and placements every week to find what drives the lowest cost per lead.' },
    ],
    'reputation-management': [
        { icon: 'send', title: 'Automated Review Requests', desc: 'SMS and email review requests sent automatically after every completed job. No manual work from your team.' },
        { icon: 'rate_review', title: 'Multi-Platform Management', desc: 'Google, Yelp, Facebook, BBB — we monitor and manage your reputation across every platform that matters.' },
        { icon: 'shield', title: 'Brand Protection', desc: 'Negative review alerts, professional response templates, and escalation protocols to protect your hard-earned reputation.' },
        { icon: 'analytics', title: 'Review Analytics Dashboard', desc: 'Track review velocity, average rating trends, sentiment analysis, and response rates in one dashboard.' },
    ],
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const images = serviceImages[slug] || serviceImages['google-ads'];
    const stats = serviceStats[slug] || serviceStats['google-ads'];
    const testimonial = serviceTestimonials[slug] || serviceTestimonials['google-ads'];
    const faqs = serviceFAQs[slug] || serviceFAQs['google-ads'];
    const whyChoose = serviceWhyChoose[slug] || serviceWhyChoose['google-ads'];
    const relatedCaseStudy = caseStudies.find(cs => cs.services.some(s => s.toLowerCase().includes(service.shortTitle.toLowerCase().split(' ')[0])));
    const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

    return (
        <>
            {/* Hero with Background Image */}
            <section className="relative py-32 overflow-hidden">
                <img src={images.hero} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.08) 0%, transparent 50%)' }} />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6 border border-accent/20">
                            <span className="material-symbols-outlined text-accent text-sm">{service.icon}</span>
                            <span className="text-accent text-xs font-bold uppercase tracking-widest">Service</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">{service.title}</h1>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">{service.heroDescription}</p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/audit" className="flex items-center justify-center gap-2 h-14 px-8 bg-accent text-primary font-bold rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all text-lg">
                                <span className="material-symbols-outlined">assessment</span> Get Free Audit
                            </Link>
                            <Link href="/contact" className="flex items-center justify-center gap-2 h-14 px-8 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
                                <span className="material-symbols-outlined">call</span> Talk to an Expert
                            </Link>
                        </div>
                        {/* Stats inside hero */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((s) => (
                                <div key={s.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-black text-accent">{s.stat}</p>
                                    <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included — Features + Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">What&apos;s Included</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Everything You Need to Win</h2>
                            <p className="text-slate-500 leading-relaxed mb-8">We handle every aspect of your {service.shortTitle.toLowerCase()} so you can focus on what you do best — running your business and serving customers.</p>
                            <div className="space-y-3">
                                {service.features.map((f) => (
                                    <div key={f} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-accent/5 transition-colors">
                                        <span className="material-symbols-outlined text-accent">check_circle</span>
                                        <span className="text-sm font-medium text-slate-700">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            {/* Image above benefits */}
                            <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
                                <img src={images.section1} alt={`${service.shortTitle} Analytics`} className="w-full h-64 object-cover" />
                            </div>
                            <div className="space-y-5">
                                {service.benefits.map((b) => (
                                    <div key={b.title} className="flex gap-4 p-6 bg-bg-light rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-accent">{b.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary mb-1">{b.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose ACERO for This Service */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {whyChoose.map((item) => (
                                    <div key={item.title} className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                                        <span className="material-symbols-outlined text-accent text-3xl mb-4">{item.icon}</span>
                                        <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">The ACERO Advantage</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Contractors Choose Us for {service.shortTitle}</h2>
                            <p className="text-slate-500 leading-relaxed mb-6">We&apos;re not a generic agency that serves everyone. We serve home service companies exclusively — which means we know your industry inside and out.</p>
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img src={images.section2} alt={`${service.shortTitle} Strategy`} className="w-full h-72 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">How We Deliver Results</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">A proven, repeatable process refined over 500+ home service campaigns.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((p, i) => (
                            <div key={p.step} className="relative text-center bg-bg-light p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all">
                                {i < service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-accent text-xl">→</div>
                                )}
                                <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-accent font-black text-xl">{p.step}</span>
                                </div>
                                <h3 className="font-bold text-primary text-lg mb-3">{p.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial — Full Width */}
            <section className="py-20 bg-gradient-to-br from-primary via-navy to-primary-light relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 50%)' }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6 opacity-40">format_quote</span>
                    <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed italic mb-8">
                        &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-accent text-2xl">person</span>
                        </div>
                        <p className="font-bold text-accent text-lg">{testimonial.name}</p>
                        <p className="text-slate-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                </div>
            </section>

            {/* Related Case Study */}
            {relatedCaseStudy && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3 text-center">Real-World Results</p>
                        <h2 className="text-3xl font-bold text-primary text-center mb-12">See What {service.shortTitle} Did for {relatedCaseStudy.company}</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
                                <img src={relatedCaseStudy.heroImage} alt={relatedCaseStudy.company} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
                                    <span className="text-3xl">{relatedCaseStudy.logo}</span> {relatedCaseStudy.company}
                                </h3>
                                <p className="text-slate-500 mb-6">{relatedCaseStudy.tagline}</p>
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {relatedCaseStudy.results.slice(0, 3).map((r) => (
                                        <div key={r.metric} className="text-center p-4 bg-slate-50 rounded-xl">
                                            <p className="text-xl font-black text-accent">{r.value}</p>
                                            <p className="text-xs text-slate-500 mt-1">{r.metric}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/results/${relatedCaseStudy.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all">
                                    Read Full Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Interactive Calculator */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Free Tool</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Check Your {industryMap[slug] || 'Company'} Digital Marketing Score</h2>
                            <p className="text-slate-500 leading-relaxed mb-6">Answer 5 quick questions to see where your {service.shortTitle.toLowerCase()} game stands compared to top performers in your industry.</p>
                            <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-4">
                                <p className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-accent text-lg">timer</span> Takes less than 60 seconds</p>
                                <p className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-accent text-lg">lock</span> No login required</p>
                                <p className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-accent text-lg">download</span> Get a free detailed report via email</p>
                                <p className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-accent text-lg">verified</span> Benchmarked against 500+ contractors</p>
                            </div>
                            {/* Trust badges */}
                            <div className="mt-8 flex items-center gap-6 flex-wrap">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <span className="material-symbols-outlined text-green-500">shield</span> SSL Encrypted
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <span className="material-symbols-outlined text-green-500">lock</span> 100% Free
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <span className="material-symbols-outlined text-green-500">visibility_off</span> No Spam
                                </div>
                            </div>
                        </div>
                        <MarketingScoreCalculator
                            industry={industryMap[slug] || 'Home Service'}
                            questions={service.calculatorQuestions}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">FAQ</p>
                        <h2 className="text-3xl font-bold text-primary">Common Questions About {service.shortTitle}</h2>
                    </div>
                    <div className="space-y-0">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="border-b border-slate-200 py-6">
                                <h3 className="font-bold text-primary text-lg mb-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-accent text-lg">help</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-500 leading-relaxed pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="py-20 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-primary mb-8">Explore More Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherServices.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-accent text-xl">{s.icon}</span>
                                </div>
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{s.shortTitle}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                                <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold">
                                    Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-primary to-navy text-center relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 50%)' }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Dominate {service.shortTitle}?</h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Get a free audit and see exactly how we can improve your {service.shortTitle.toLowerCase()} performance. No commitment. No contracts.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/audit" className="flex items-center justify-center gap-2 h-14 px-10 bg-accent text-primary font-bold rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all text-lg">
                            <span className="material-symbols-outlined">assessment</span> Get Free Audit
                        </Link>
                        <Link href="/contact" className="flex items-center justify-center gap-2 h-14 px-10 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
                            <span className="material-symbols-outlined">call</span> Call 1-800-555-0199
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
