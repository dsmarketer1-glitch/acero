'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
    });

    // Form errors state for inline messages
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const errors: Record<string, string> = {};
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            errors.email = 'Please enter a valid email address';
        }
        if (!formData.topic) errors.topic = 'Please select a topic';
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (formErrors[e.target.name]) {
            setFormErrors({ ...formErrors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!validate()) return;

        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to send message. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
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
                            {success ? (
                                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center animate-scale-in">
                                    <div className="w-20 h-20 bg-[#3040A0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-symbols-outlined text-[#3040A0] text-5xl">check_circle</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
                                    <p className="text-slate-500 mb-8 text-lg">Thanks {formData.firstName}, we&apos;ll be in touch within 1 business day.</p>
                                    <Link href="/" className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all text-sm inline-block">Back to Home</Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 space-y-6">
                                    <h2 className="text-xl font-bold text-primary">Send Us a Message</h2>
                                    
                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                                            {error}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">First Name *</label>
                                            <input 
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border ${formErrors.firstName ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`} 
                                                placeholder="John" 
                                            />
                                            {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name *</label>
                                            <input 
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border ${formErrors.lastName ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`} 
                                                placeholder="Smith" 
                                            />
                                            {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
                                        <input 
                                            name="email"
                                            type="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${formErrors.email ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`} 
                                            placeholder="john@yourcompany.com" 
                                        />
                                        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                                        <input 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" 
                                            placeholder="(555) 123-4567" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">How Can We Help? *</label>
                                        <select 
                                            name="topic"
                                            value={formData.topic}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${formErrors.topic ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`}
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="Free Audit">I want a free marketing audit</option>
                                            <option value="Services">I&apos;m interested in your services</option>
                                            <option value="Pricing">I have a question about pricing</option>
                                            <option value="Existing Campaign">I need help with an existing campaign</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {formErrors.topic && <p className="text-red-500 text-xs mt-1">{formErrors.topic}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                                        <textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4} 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" 
                                            placeholder="Tell us about your business and goals..." 
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        className={`w-full py-4 bg-accent text-primary font-bold rounded-xl transition-all text-sm shadow-lg flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-light hover:-translate-y-1'}`}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : 'Send Message'}
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
