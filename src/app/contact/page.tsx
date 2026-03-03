'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary-light" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Get In Touch</p>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Let&apos;s Build Your<br /><span className="gradient-text">Growth Engine</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Have a question, ready to get started, or want to learn more? We&apos;re here to help.</p>
                </div>
            </section>

            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center animate-scale-in">
                                    <span className="material-symbols-outlined text-green-500 text-5xl mb-4">check_circle</span>
                                    <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
                                    <p className="text-slate-500 mb-6">We&apos;ll get back to you within 24 hours.</p>
                                    <Link href="/" className="text-accent font-semibold text-sm hover:underline">Back to Home</Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 space-y-6">
                                    <h2 className="text-xl font-bold text-primary">Send Us a Message</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">First Name *</label>
                                            <input required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name *</label>
                                            <input required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="Smith" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="john@yourcompany.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                                        <input className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="(555) 123-4567" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">How Can We Help? *</label>
                                        <select required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                                            <option value="">Select a topic</option>
                                            <option>I want a free marketing audit</option>
                                            <option>I&apos;m interested in your services</option>
                                            <option>I have a question about pricing</option>
                                            <option>I need help with an existing campaign</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="Tell us about your business and goals..." />
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all text-sm shadow-lg">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200">
                                <h3 className="font-bold text-primary mb-6">Contact Information</h3>
                                {[
                                    { icon: 'call', label: 'Phone', value: '1-800-555-0199', sub: 'Mon-Fri 8am-6pm CT' },
                                    { icon: 'mail', label: 'Email', value: 'hello@acerodigital.com', sub: 'We reply within 24 hours' },
                                    { icon: 'location_on', label: 'Office', value: 'Austin, TX', sub: 'Serving clients nationwide' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-accent">{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary text-sm">{item.label}</p>
                                            <p className="text-slate-700 font-medium">{item.value}</p>
                                            <p className="text-xs text-slate-400">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary rounded-2xl p-6 text-white">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-accent">schedule</span> Want Faster Results?
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Skip the form and get a free marketing audit. Most clients see their first leads within 30 days.</p>
                                <Link href="/audit" className="flex items-center justify-center gap-2 py-3 px-6 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all text-sm">
                                    Get Free Audit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
