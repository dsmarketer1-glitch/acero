import { industries, getIndustryBySlug } from '@/data/industries';
import { caseStudies } from '@/data/caseStudies';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) return {};
    return {
        title: `${industry.title} Marketing | ACERO Digital`,
        description: industry.heroDescription,
    };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) notFound();

    const relatedCaseStudy = caseStudies.find(cs => cs.industrySlug === slug);

    return (
        <>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden">
                <img src={industry.image} alt={industry.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6 border border-accent/20">
                            <span className="material-symbols-outlined text-accent text-sm">{industry.icon}</span>
                            <span className="text-accent text-xs font-bold uppercase tracking-widest">{industry.title} Marketing</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Digital Marketing for <span className="gradient-text">{industry.title}</span> Companies</h1>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">{industry.heroDescription}</p>
                        <div className="flex items-center gap-6 mb-8">
                            {industry.stats.map(s => (
                                <div key={s.label} className="text-center">
                                    <p className="text-2xl font-black text-accent">{s.value}</p>
                                    <p className="text-xs text-slate-400">{s.label}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/audit" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg">
                            <span className="material-symbols-outlined">assessment</span> Get Free {industry.title} Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{industry.title} Challenges</p>
                        <h2 className="text-3xl font-bold text-primary">We Understand Your Pain Points</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industry.challenges.map((c) => (
                            <div key={c.title} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="material-symbols-outlined text-accent text-3xl mb-4">{c.icon}</span>
                                <h3 className="text-lg font-bold text-primary mb-3">{c.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{c.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Our Approach</p>
                        <h2 className="text-3xl font-bold text-primary">How We Grow {industry.title} Companies</h2>
                    </div>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {industry.approach.map((a, i) => (
                            <div key={a.title} className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-200">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <span className="text-accent font-black text-lg">{i + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{a.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{a.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services We Recommend */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-primary">Recommended Services for {industry.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(s => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all">
                                <span className="material-symbols-outlined text-accent text-2xl mb-3">{s.icon}</span>
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{s.shortTitle}</h3>
                                <p className="text-sm text-slate-500">{s.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Case Study */}
            {relatedCaseStudy && (
                <section className="py-20 bg-navy text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Case Study</p>
                                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                    <span className="text-3xl">{relatedCaseStudy.logo}</span> {relatedCaseStudy.company}
                                </h2>
                                <p className="text-slate-300 mb-6">{relatedCaseStudy.tagline}</p>
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {relatedCaseStudy.results.slice(0, 3).map(r => (
                                        <div key={r.metric} className="text-center p-3 bg-white/5 rounded-xl">
                                            <p className="text-xl font-black text-accent">{r.value}</p>
                                            <p className="text-xs text-slate-400 mt-1">{r.metric}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/results/${relatedCaseStudy.slug}`} className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                                    Read Full Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden aspect-video">
                                <img src={relatedCaseStudy.heroImage} alt={relatedCaseStudy.company} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-navy/20" />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 bg-accent text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-black text-primary mb-4">Ready to Grow Your {industry.title} Business?</h2>
                    <p className="text-primary/70 mb-8 text-lg">Join hundreds of {industry.title.toLowerCase()} companies already growing with ACERO Digital.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/audit" className="flex items-center justify-center gap-2 h-14 px-10 bg-primary text-white font-bold rounded-full hover:-translate-y-1 transition-all text-lg">
                            <span className="material-symbols-outlined">assessment</span> Get Free Audit
                        </Link>
                        <Link href="/contact" className="flex items-center justify-center gap-2 h-14 px-10 border border-primary/20 text-primary font-bold rounded-full hover:bg-primary/5 transition-all text-lg">
                            <span className="material-symbols-outlined">call</span> Call Us Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
