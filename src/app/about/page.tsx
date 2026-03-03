import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | ACERO Digital',
    description: 'Meet the team behind the #1 digital marketing agency for home service professionals.',
};

const values = [
    { icon: 'local_fire_department', title: 'Obsessed with Results', desc: 'We don\'t celebrate clicks or impressions. We celebrate booked jobs and revenue growth.' },
    { icon: 'handshake', title: 'True Partnership', desc: 'We treat your business like our own. Your success is our success.' },
    { icon: 'visibility', title: 'Radical Transparency', desc: 'No smoke and mirrors. Real-time dashboards, honest reporting, and straight talk.' },
    { icon: 'school', title: 'Continuous Learning', desc: 'We stay ahead of algorithm changes and industry trends so you don\'t have to.' },
    { icon: 'diversity_3', title: 'Industry Focus', desc: 'We exclusively serve home service professionals. It\'s all we do, and we\'re the best at it.' },
    { icon: 'speed', title: 'Move Fast', desc: 'Time is money in home services. We launch campaigns in days, not months.' },
];

const team = [
    { name: 'Alex Rivera', role: 'Founder & CEO', bio: 'Former home service business owner turned digital marketer. Built and sold a $3M HVAC company.', icon: 'person' },
    { name: 'Sarah Chen', role: 'VP of Strategy', bio: 'Google Ads certified with 500+ home service campaigns managed. Former Google partner manager.', icon: 'person' },
    { name: 'Marcus Johnson', role: 'Head of SEO', bio: 'Ranked 200+ contractors to #1 in local search. SEMrush certified specialist.', icon: 'person' },
    { name: 'Emily Rodriguez', role: 'Creative Director', bio: 'Award-winning web designer specializing in high-conversion contractor websites.', icon: 'person' },
];

export default function AboutPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">About Us</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Built by Contractors,<br /><span className="gradient-text">For Contractors</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">We started as home service business owners. Now we help thousands of contractors dominate their local markets.</p>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">From the Truck to the Strategy Room</h2>
                            <div className="space-y-4 text-slate-500 leading-relaxed">
                                <p>ACERO Digital was born out of frustration. Our founder, Alex Rivera, owned an HVAC company in Austin, TX. He was great at fixing air conditioners — but terrible at marketing.</p>
                                <p>After burning through three generic marketing agencies and $80,000, Alex realized the problem: <strong className="text-primary">agencies don&apos;t understand home services.</strong> They were applying the same strategies they used for restaurants and e-commerce stores.</p>
                                <p>So he learned digital marketing himself, grew his HVAC company to $3M in revenue, and then sold it to start ACERO Digital — a marketing agency built exclusively for contractors and home service professionals.</p>
                                <p className="text-primary font-semibold">Today, ACERO has helped 500+ home service businesses generate over $50M in tracked revenue.</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-navy rounded-2xl p-10 text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.3) 0%, transparent 50%)' }} />
                            <div className="relative space-y-8">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-accent text-2xl mt-1">format_quote</span>
                                    <p className="text-lg leading-relaxed italic">&quot;I built this agency because I was the contractor who got burned by bad marketing. I know exactly what it feels like to write a $5,000 check and get nothing back. That will never happen to our clients.&quot;</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center"><span className="material-symbols-outlined text-accent text-2xl">person</span></div>
                                    <div>
                                        <p className="font-bold text-lg">Alex Rivera</p>
                                        <p className="text-slate-400 text-sm">Founder &amp; CEO, ACERO Digital</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">What Drives Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="p-8 bg-white rounded-2xl border border-slate-200">
                                <span className="material-symbols-outlined text-accent text-3xl mb-4">{v.icon}</span>
                                <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">The Team</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Your Growth Team</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-navy mx-auto mb-6 flex items-center justify-center group-hover:-translate-y-2 transition-transform">
                                    <span className="material-symbols-outlined text-accent text-4xl">{member.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                                <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-navy text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-black text-white mb-4">Ready to Join 500+ Growing Contractors?</h2>
                    <p className="text-slate-300 mb-8">Let&apos;s build your custom growth strategy together.</p>
                    <Link href="/audit" className="inline-flex items-center gap-2 h-14 px-10 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg">
                        Get Your Free Audit
                    </Link>
                </div>
            </section>
        </>
    );
}
