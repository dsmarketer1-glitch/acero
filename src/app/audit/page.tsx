'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';

export default function AuditPage() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', website: '',
        industry: '', revenue: '', currentMarketing: '', goals: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-lg mx-auto text-center px-4 py-20 animate-scale-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                    </div>
                    <h2 className="text-3xl font-black text-primary mb-4">Your Audit Is On the Way!</h2>
                    <p className="text-slate-500 mb-8">Our team will analyze your digital presence and send you a comprehensive report within 24-48 hours.</p>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left space-y-4">
                        <h3 className="font-bold text-primary">What Happens Next:</h3>
                        {['Our team reviews your digital presence', 'We analyze your local competition', 'You receive a custom report with actionable recommendations', 'We schedule a 30-minute strategy call to review findings'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">{i + 1}</span>
                                <span className="text-sm text-slate-600">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const steps = [
        {
            title: 'Contact Info',
            fields: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                            <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="John Smith" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
                            <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="john@yourcompany.com" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="(555) 123-4567" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name *</label>
                            <input name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="ABC Plumbing" />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Business Details',
            fields: (
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Website URL</label>
                        <input name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="www.yourcompany.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Industry *</label>
                        <select name="industry" value={formData.industry} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                            <option value="">Select your industry</option>
                            <option value="hvac">HVAC</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="roofing">Roofing</option>
                            <option value="electrical">Electrical</option>
                            <option value="pest-control">Pest Control</option>
                            <option value="landscaping">Landscaping</option>
                            <option value="other">Other Home Service</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Annual Revenue</label>
                        <select name="revenue" value={formData.revenue} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                            <option value="">Select range</option>
                            <option value="under500k">Under $500K</option>
                            <option value="500k-1m">$500K — $1M</option>
                            <option value="1m-3m">$1M — $3M</option>
                            <option value="3m-5m">$3M — $5M</option>
                            <option value="5m+">$5M+</option>
                        </select>
                    </div>
                </div>
            ),
        },
        {
            title: 'Marketing Goals',
            fields: (
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Current Marketing</label>
                        <select name="currentMarketing" value={formData.currentMarketing} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                            <option value="">What are you doing now?</option>
                            <option value="nothing">Nothing — just word of mouth</option>
                            <option value="self-managed">Self-managed Google Ads</option>
                            <option value="agency">Working with another agency</option>
                            <option value="mixed">Mix of strategies</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">What are your top marketing goals?</label>
                        <textarea name="goals" value={formData.goals} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="More leads, better ROI, fill my schedule..." />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Free Marketing Audit</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Get Your Free<br /><span className="gradient-text">Marketing Audit</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Discover exactly how much revenue you&apos;re leaving on the table with our comprehensive digital marketing analysis.</p>
                </div>
            </section>

            <section className="py-24 bg-bg-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            {/* Progress */}
                            <div className="flex items-center gap-4 mb-8">
                                {steps.map((s, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= step ? 'bg-accent text-primary' : 'bg-slate-200 text-slate-400'}`}>{i + 1}</div>
                                        <span className={`text-xs font-medium hidden sm:block ${i <= step ? 'text-primary' : 'text-slate-400'}`}>{s.title}</span>
                                        {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? 'bg-accent' : 'bg-slate-200'}`} />}
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                                <h2 className="text-xl font-bold text-primary mb-6">{steps[step].title}</h2>
                                {steps[step].fields}
                                <div className="flex justify-between mt-8">
                                    {step > 0 ? (
                                        <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 border border-slate-300 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 text-sm">Back</button>
                                    ) : <div />}
                                    {step < steps.length - 1 ? (
                                        <button type="button" onClick={() => setStep(step + 1)} className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all text-sm">Continue</button>
                                    ) : (
                                        <button type="submit" className="px-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all text-sm animate-pulse-gold">Submit &amp; Get My Audit</button>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Trust sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200">
                                <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-accent">verified</span> What You&apos;ll Get</h3>
                                {['Complete competitive analysis', 'Website performance review', 'Google ranking assessment', 'Ad campaign audit (if applicable)', 'Custom growth recommendations'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 py-2">
                                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                        <span className="text-sm text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-primary rounded-2xl p-6 text-white">
                                <h3 className="font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-accent">shield</span> 100% Free, No Strings</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">This audit is completely free. No credit card required. No obligation. We believe once you see what&apos;s possible, you&apos;ll want to work with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
                    {[
                        { q: 'Is the audit really free?', a: 'Yes, 100% free. There is no obligation to sign up for any services after the audit.' },
                        { q: 'How long does the audit take?', a: 'Our team will deliver your audit within 24-48 hours of submission.' },
                        { q: 'What data do I need to provide?', a: 'Just basic contact info and your website URL. We do all the research ourselves.' },
                        { q: 'Will you share my data?', a: 'Absolutely not. Your information is kept strictly confidential and used only for the audit.' },
                    ].map((faq) => (
                        <div key={faq.q} className="border-b border-slate-200 py-6">
                            <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                            <p className="text-sm text-slate-500">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
