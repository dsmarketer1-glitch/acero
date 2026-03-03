import Link from 'next/link';
import { industries } from '@/data/industries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industries We Serve | ACERO Digital',
    description: 'Specialized digital marketing strategies for HVAC, Plumbing, Roofing, Electrical, Pest Control, and Landscaping companies.',
};

export default function IndustriesPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Who We Serve</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Industries We <span className="gradient-text">Dominate</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Deep expertise in every major home service vertical. We know your market, your customers, and your competition.</p>
                </div>
            </section>

            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((ind) => (
                            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-3d">
                                <img src={ind.image} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-accent text-3xl">{ind.icon}</span>
                                        <h3 className="text-2xl font-bold text-white">{ind.title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{ind.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-accent text-sm font-bold">Avg. ROI: {ind.avgROI}</span>
                                        <span className="text-white/60 text-sm group-hover:text-accent transition-colors flex items-center gap-1">
                                            Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Industry Specialization Matters */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Industry Specialization Matters</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Generic agencies waste your budget learning your industry. We already know it.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'psychology', title: 'Deep Market Knowledge', desc: 'We understand seasonal trends, customer behavior, and competitive dynamics in every vertical.' },
                            { icon: 'speed', title: 'Faster Results', desc: 'No learning curve. We launch with proven strategies from day one, not months of testing.' },
                            { icon: 'workspace_premium', title: 'Industry Benchmarks', desc: 'We know what good looks like. Our benchmarks help you measure success against real competitors.' },
                        ].map((item) => (
                            <div key={item.title} className="p-8 bg-slate-50 rounded-2xl text-center">
                                <span className="material-symbols-outlined text-accent text-4xl mb-4">{item.icon}</span>
                                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-navy text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Don&apos;t See Your Industry?</h2>
                    <p className="text-slate-300 mb-8">We work with all types of home service businesses. Let&apos;s talk about your specific market.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 h-14 px-10 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg">
                        <span className="material-symbols-outlined">chat</span> Let&apos;s Talk
                    </Link>
                </div>
            </section>
        </>
    );
}
