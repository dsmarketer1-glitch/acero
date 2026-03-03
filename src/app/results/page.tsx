import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Results & Case Studies | ACERO Digital',
    description: 'Real results from real home service businesses. See how ACERO Digital helps HVAC, plumbing, roofing, and electrical companies grow.',
};

export default function ResultsPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Proven Results</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Real Results for<br /><span className="gradient-text">Real Businesses</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Every case study is backed by real data, real businesses, and real revenue growth.</p>
                </div>
            </section>

            {/* Stats strip */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '$50M+', label: 'Client Revenue Generated' },
                            { value: '340%', label: 'Average Lead Increase' },
                            { value: '42%', label: 'Average Cost Reduction' },
                            { value: '12:1', label: 'Average ROI' },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-3xl font-black text-primary">{s.value}</p>
                                <p className="text-xs text-slate-500 font-medium mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case studies */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((cs) => (
                            <Link key={cs.slug} href={`/results/${cs.slug}`} className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={cs.heroImage} alt={cs.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">{cs.industry}</span>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="text-2xl">{cs.logo}</span> {cs.company}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-6">{cs.tagline}</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        {cs.results.slice(0, 3).map((r) => (
                                            <div key={r.metric} className="text-center p-3 bg-slate-50 rounded-xl">
                                                <p className="text-lg font-black text-accent">{r.value}</p>
                                                <p className="text-xs text-slate-500 mt-1">{r.metric}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {cs.services.map((s) => (
                                                <span key={s} className="px-2 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">{s}</span>
                                            ))}
                                        </div>
                                        <span className="text-accent text-sm font-semibold flex items-center gap-1">
                                            Read More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-black text-white mb-4">Want Results Like These?</h2>
                    <p className="text-slate-300 mb-8">Start with a free marketing audit and see what&apos;s possible for your business.</p>
                    <Link href="/audit" className="inline-flex items-center gap-2 h-14 px-10 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg">
                        <span className="material-symbols-outlined">assessment</span> Get Your Free Audit
                    </Link>
                </div>
            </section>
        </>
    );
}
