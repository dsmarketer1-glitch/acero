import Link from 'next/link';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | ACERO Digital',
    description: 'Full-stack digital marketing services for home service professionals. Google Ads, Local SEO, Web Design, LSAs, Social Media & Reputation Management.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)' }} />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Growth Services Built<br />for <span className="gradient-text">Home Service Pros</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Every service is engineered to do one thing: put more leads on your calendar and more revenue in your pocket.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white rounded-2xl border border-slate-200 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                                            <span className="material-symbols-outlined text-accent text-2xl">{service.icon}</span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">0{i + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{service.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="material-symbols-outlined text-accent text-sm">check_circle</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center gap-1 text-accent text-sm font-semibold">
                                        Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* The ACERO Difference */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">The ACERO Difference</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">We&apos;re Not a Generic Agency</h2>
                            <p className="text-slate-500 leading-relaxed mb-8">We exclusively serve home service professionals. We know your market, your customers, and exactly what it takes to fill your schedule. No learning curve. No wasted budget.</p>
                            <div className="space-y-6">
                                {[
                                    { icon: 'home_repair_service', title: 'Industry Specialists', desc: 'We only work with home service companies. Period.' },
                                    { icon: 'monitoring', title: 'Transparent Reporting', desc: 'Real-time dashboards so you always know your ROI.' },
                                    { icon: 'support_agent', title: 'Dedicated Strategist', desc: 'A named expert who knows your business inside and out.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-accent">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-primary rounded-2xl p-8 text-white">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: '500+', label: 'Contractors Served' },
                                        { value: '12:1', label: 'Average ROI' },
                                        { value: '$50M+', label: 'Revenue Generated' },
                                        { value: '95%', label: 'Client Retention' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl">
                                            <p className="text-2xl font-black text-accent">{stat.value}</p>
                                            <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-accent">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Not Sure Which Service You Need?</h2>
                    <p className="text-primary/70 mb-8 text-lg">Get a free audit and we&apos;ll build a custom recommendation based on your market and goals.</p>
                    <Link href="/audit" className="inline-flex items-center gap-2 h-14 px-10 bg-primary text-white font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">
                        <span className="material-symbols-outlined">assessment</span>
                        Get Your Free Audit
                    </Link>
                </div>
            </section>
        </>
    );
}
