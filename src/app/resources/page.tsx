import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Marketing Resources & Calculators | ACERO Digital',
    description: 'Free interactive tools, calculators, and resources for home service professionals. Audit your marketing, calculate ROI, and get custom growth plans.',
};

const resources = [
    {
        title: 'The Local Domination Checklist',
        description: 'A 28-point interactive audit of your local digital marketing. Check items across 5 categories — Google Business Profile, Website, Local SEO, Paid Ads, and Reputation — and get a personalised score with priority action items.',
        icon: 'checklist',
        category: 'Self-Audit',
        timeEstimate: '3 min',
        href: '/resources/local-domination-checklist',
        color: 'from-blue-600 to-blue-800',
        stats: '28 checkpoints',
    },
    {
        title: 'The Leaky Bucket Report',
        description: 'Find out how much of your Google Ads budget is being wasted. Answer 20 questions about your account setup and get a visual report showing every "leak" — plus a dollar estimate of what you\'re losing.',
        icon: 'water_drop',
        category: 'Google Ads Audit',
        timeEstimate: '5 min',
        href: '/resources/leaky-bucket-report',
        color: 'from-amber-500 to-orange-600',
        stats: '20 leak checks',
    },
    {
        title: 'What Your Competitors Know That You Don\'t',
        description: 'Rate yourself and your top competitor across 10 marketing categories. Get a side-by-side scorecard showing exactly where they\'re beating you — and what you need to do to catch up.',
        icon: 'compare_arrows',
        category: 'Competitor Intel',
        timeEstimate: '5 min',
        href: '/resources/competitor-scorecard',
        color: 'from-red-500 to-red-700',
        stats: '10 categories',
    },
    {
        title: 'The 5-Star Review System',
        description: 'Enter your business details and tone preference — get 6 ready-to-use, personalised review request templates (2 SMS, 2 email, 2 verbal scripts). Copy, paste, send.',
        icon: 'star',
        category: 'Templates',
        timeEstimate: '60 sec',
        href: '/resources/review-system',
        color: 'from-yellow-500 to-amber-600',
        stats: '6 templates',
    },
    {
        title: 'The $10K Month Blueprint',
        description: 'Answer 8 questions about your business and get a personalised 3-phase marketing roadmap showing exactly what to do NOW, NEXT, and LATER — based on your revenue stage and growth goals.',
        icon: 'route',
        category: 'Growth Plan',
        timeEstimate: '4 min',
        href: '/resources/growth-blueprint',
        color: 'from-green-500 to-emerald-700',
        stats: '3-phase roadmap',
    },
    {
        title: 'The Call-to-Close Tracker',
        description: 'Enter your lead data from the last 30 days by source. See which marketing channels are actually making you money — with cost per lead, close rate, and ROI per channel.',
        icon: 'call',
        category: 'ROI Tracking',
        timeEstimate: '5 min',
        href: '/resources/call-to-close-tracker',
        color: 'from-violet-500 to-purple-700',
        stats: '8 channels tracked',
    },
];

const calculators = [
    {
        title: 'Google Ads ROI Calculator',
        description: 'Slide inputs and instantly see projected leads, revenue, and ROI. Compare self-managed vs. ACERO-managed results side by side.',
        icon: 'calculate',
        timeEstimate: '2 min',
        href: '/resources/google-ads-calculator',
        highlight: 'Live real-time updates',
    },
    {
        title: 'SEO vs. Google Ads Break-Even Calculator',
        description: 'See the real 12-month cost comparison. Find the exact month where SEO becomes cheaper per lead than Google Ads with interactive charts.',
        icon: 'balance',
        timeEstimate: '3 min',
        href: '/resources/seo-vs-ads-calculator',
        highlight: 'Interactive timeline chart',
    },
    {
        title: 'Marketing Budget Calculator',
        description: 'Get a data-backed budget recommendation based on your revenue, growth goals, and industry benchmarks — with a channel-by-channel breakdown.',
        icon: 'payments',
        timeEstimate: '90 sec',
        href: '/resources/budget-calculator',
        highlight: 'Channel allocation breakdown',
    },
];

export default function ResourcesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(212,175,55,0.1) 0%, transparent 50%)' }} />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Free Resources</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Free Marketing <span className="gradient-text">Tools & Resources</span></h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">9 interactive tools built specifically for home service professionals. Audit your marketing, calculate your ROI, and build a custom growth plan — all for free.</p>
                    <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-400">
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">lock</span> No login required</span>
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">timer</span> Results in minutes</span>
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">download</span> Email results as PDF</span>
                    </div>
                </div>
            </section>

            {/* Calculators Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="material-symbols-outlined text-accent text-2xl">calculate</span>
                        <h2 className="text-2xl font-bold text-primary">Interactive Calculators</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {calculators.map((calc) => (
                            <Link key={calc.title} href={calc.href} className="group relative bg-gradient-to-br from-primary to-navy rounded-2xl p-8 text-white overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
                                <span className="material-symbols-outlined text-accent text-4xl mb-6">{calc.icon}</span>
                                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">{calc.title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed mb-6">{calc.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">timer</span> {calc.timeEstimate}</span>
                                        <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">{calc.highlight}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-accent text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="material-symbols-outlined text-accent text-2xl">auto_awesome</span>
                        <h2 className="text-2xl font-bold text-primary">Free Interactive Resources</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource) => (
                            <Link key={resource.title} href={resource.href} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                {/* Card Header with Gradient */}
                                <div className={`bg-gradient-to-br ${resource.color} p-6 flex items-center justify-between`}>
                                    <div>
                                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded-full">{resource.category}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-white/40 text-5xl">{resource.icon}</span>
                                </div>
                                {/* Card Body */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">{resource.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{resource.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-xs text-slate-400">
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">timer</span> {resource.timeEstimate}</span>
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">data_check</span> {resource.stats}</span>
                                        </div>
                                        <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Try Free <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-primary mb-4">How Our Free Tools Work</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Every tool is designed to give you actionable insights in minutes — no account required, no strings attached.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '1', icon: 'touch_app', title: 'Choose a Tool', desc: 'Pick the resource that matches your biggest marketing question.' },
                            { step: '2', icon: 'edit', title: 'Answer Questions', desc: 'Quick, easy questions about your business — takes 2-5 minutes.' },
                            { step: '3', icon: 'insights', title: 'Get Results', desc: 'Instant personalised analysis with scores, grades, and action items.' },
                            { step: '4', icon: 'email', title: 'Save Your Report', desc: 'Email yourself a PDF report — or book a free call to discuss results.' },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-4 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-accent text-2xl">{item.icon}</span>
                                </div>
                                <p className="text-accent text-xs font-black tracking-widest mb-2">STEP {item.step}</p>
                                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-primary to-navy text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-black text-white mb-4">Want Personalised Strategy Advice?</h2>
                    <p className="text-slate-300 mb-8 text-lg">Our strategists can build a custom growth plan based on your specific business, market, and goals.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/audit" className="flex items-center justify-center gap-2 h-14 px-10 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-2xl shadow-accent/30">
                            <span className="material-symbols-outlined">assessment</span> Get Free Audit
                        </Link>
                        <Link href="/contact" className="flex items-center justify-center gap-2 h-14 px-10 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
                            <span className="material-symbols-outlined">call</span> Book Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
