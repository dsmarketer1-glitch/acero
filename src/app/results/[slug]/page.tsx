import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const cs = getCaseStudyBySlug(slug);
    if (!cs) return {};
    return {
        title: `${cs.company} Case Study | ACERO Digital`,
        description: `${cs.tagline} — See how ACERO Digital helped ${cs.company} grow with digital marketing.`,
    };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = getCaseStudyBySlug(slug);
    if (!cs) notFound();

    const otherStudies = caseStudies.filter(c => c.slug !== slug);

    return (
        <>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden">
                <img src={cs.heroImage} alt={cs.company} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6 border border-accent/20">
                            <span className="text-accent text-xs font-bold uppercase tracking-widest">Case Study — {cs.industry}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
                            <span className="text-4xl">{cs.logo}</span> {cs.company}
                        </h1>
                        <p className="text-xl text-accent font-bold mb-4">{cs.tagline}</p>
                        <p className="text-lg text-slate-300 mb-8">{cs.overview.slice(0, 200)}...</p>
                        <div className="flex flex-wrap gap-3">
                            {cs.services.map(s => (
                                <span key={s} className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/10">{s}</span>
                            ))}
                            <span className="px-3 py-1.5 bg-accent/20 text-accent text-xs font-semibold rounded-full">{cs.timeline} engagement</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {cs.results.map(r => (
                            <div key={r.metric} className="text-center p-4 bg-slate-50 rounded-xl">
                                <p className="text-2xl font-black text-accent">{r.value}</p>
                                <p className="text-xs text-slate-500 mt-1">{r.metric}</p>
                                {r.change && <p className="text-xs text-green-500 font-semibold mt-1">{r.change}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-bg-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* The Challenge */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-red-500">warning</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">The Challenge</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                            </div>

                            {/* The Strategy */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-blue-500">architecture</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">Our Strategy</h2>
                                </div>
                                <div className="space-y-4">
                                    {cs.strategy.map((s, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <span className="text-accent text-sm font-bold">{i + 1}</span>
                                            </div>
                                            <p className="text-sm text-slate-600 leading-relaxed">{s}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-green-500">trending_up</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">The Results</h2>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {cs.results.map(r => (
                                        <div key={r.metric} className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                                            <p className="text-xl font-black text-accent">{r.value}</p>
                                            <p className="text-xs text-slate-500 mt-1">{r.metric}</p>
                                            {r.change && <p className="text-xs text-green-500 font-semibold mt-1">{r.change}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Testimonial */}
                            <div className="bg-primary rounded-2xl p-6 text-white">
                                <span className="material-symbols-outlined text-accent text-3xl mb-4">format_quote</span>
                                <p className="text-sm leading-relaxed italic mb-6">&quot;{cs.testimonial.quote}&quot;</p>
                                <div>
                                    <p className="font-bold text-accent">{cs.testimonial.name}</p>
                                    <p className="text-xs text-slate-400">{cs.testimonial.title}</p>
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-200">
                                <h3 className="font-bold text-primary mb-4">Quick Facts</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500">Industry</span>
                                        <span className="font-semibold text-primary">{cs.industry}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500">Timeline</span>
                                        <span className="font-semibold text-primary">{cs.timeline}</span>
                                    </div>
                                    <div className="py-2">
                                        <span className="text-slate-500">Services Used</span>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {cs.services.map(s => (
                                                <span key={s} className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-accent rounded-2xl p-6 text-center">
                                <h3 className="font-bold text-primary mb-2">Want Results Like These?</h3>
                                <p className="text-sm text-primary/70 mb-4">Get your free marketing audit today.</p>
                                <Link href="/audit" className="flex items-center justify-center gap-2 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all text-sm">
                                    Get Free Audit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Case Studies */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-primary mb-8">More Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherStudies.map(other => (
                            <Link key={other.slug} href={`/results/${other.slug}`} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={other.heroImage} alt={other.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-3 left-3 px-2 py-1 bg-accent text-primary text-xs font-bold rounded-full">{other.industry}</span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                                        <span>{other.logo}</span> {other.company}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1">{other.tagline}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
