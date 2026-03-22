'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AuditPage() {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    
    const [formData, setFormData] = useState({
        // Step 1: Contact Info
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        
        // Step 2: Business Details
        websiteUrl: '',
        trade: '',
        serviceArea: '',
        monthlyAdSpend: '',
        yearsInBusiness: '',
        
        // Step 3: Marketing Goals
        primaryGoal: '',
        currentChannels: [] as string[],
        biggestChallenge: '',
        timeline: ''
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleCheckboxChange = (channel: string) => {
        setFormData(prev => {
            const current = [...prev.currentChannels];
            if (current.includes(channel)) {
                return { ...prev, currentChannels: current.filter(c => c !== channel) };
            } else {
                return { ...prev, currentChannels: [...current, channel] };
            }
        });
    };

    const validateStep = (currentStep: number) => {
        const errors: Record<string, string> = {};
        
        if (currentStep === 0) {
            if (!formData.fullName.trim() || formData.fullName.trim().length < 2) errors.fullName = 'Full name is required';
            if (!formData.email.trim()) {
                errors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                errors.email = 'Please enter a valid email address';
            }
            if (!formData.companyName.trim() || formData.companyName.trim().length < 2) errors.companyName = 'Company name is required';
            if (formData.phone && formData.phone.replace(/\D/g, '').length < 10) {
                // Phone is optional but if filled must be valid-ish
                // errors.phone = 'Please enter a valid 10-digit phone number';
            }
        }
        
        if (currentStep === 1) {
            if (!formData.trade) errors.trade = 'Please select your trade/industry';
        }

        if (currentStep === 2) {
            if (!formData.primaryGoal) errors.primaryGoal = 'Please select your primary goal';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!validateStep(2)) return;

        setLoading(true);
        try {
            const response = await fetch('/api/audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                window.scrollTo(0,0);
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to send audit request. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        const firstName = formData.fullName.split(' ')[0];
        return (
            <section className="min-h-[80vh] flex items-center justify-center bg-bg-light py-20">
                <div className="max-w-3xl mx-auto text-center px-4 animate-scale-in">
                    <div className="w-24 h-24 bg-[#3040A0]/10 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
                        <span className="material-symbols-outlined text-[#3040A0] text-6xl">check_circle</span>
                    </div>
                    <h2 className="text-4xl font-black text-primary mb-4">You&apos;re All Set, {firstName}!</h2>
                    <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">We&apos;re already looking into <strong>{formData.companyName}</strong>&apos;s market. Expect your personalised audit within 24-48 hours.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-accent mb-4">mail</span>
                            <h3 className="font-bold text-primary mb-2 text-sm">Check your inbox</h3>
                            <p className="text-xs text-slate-500">Confirmation email sent to {formData.email}</p>
                        </div>
                        <Link href="/resources" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-accent mb-4">construction</span>
                            <h3 className="font-bold text-primary mb-2 text-sm">Explore free tools</h3>
                            <p className="text-xs text-slate-500">Try our ROI and marketing calculators</p>
                        </Link>
                        <a href="mailto:marketing@acerogrowth.com" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-accent mb-4">contact_support</span>
                            <h3 className="font-bold text-primary mb-2 text-sm">Questions?</h3>
                            <p className="text-xs text-slate-500">Email us at marketing@acerogrowth.com</p>
                        </a>
                    </div>

                    <Link href="/" className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all shadow-lg inline-block">
                        Return to Dashboard
                    </Link>
                </div>
            </section>
        );
    }

    const steps = [
        {
            title: 'Contact Info',
            fields: (
                <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                            <input name="fullName" value={formData.fullName} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`} placeholder="John Smith" />
                            {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Business Email *</label>
                            <input name="email" type="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`} placeholder="john@company.com" />
                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name *</label>
                            <input name="companyName" value={formData.companyName} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.companyName ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`} placeholder="Elite Plumbing & HVAC" />
                            {formErrors.companyName && <p className="text-red-500 text-xs mt-1">{formErrors.companyName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm`} placeholder="(555) 000-0000" />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Business Details',
            fields: (
                <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Trade / Industry *</label>
                            <select name="trade" value={formData.trade} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.trade ? 'border-red-500 bg-red-50' : 'border-slate-300'} focus:ring-2 focus:ring-accent focus:border-accent text-sm`}>
                                <option value="">Select industry</option>
                                {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Landscaping', 'General Contractor', 'Other'].map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                            {formErrors.trade && <p className="text-red-500 text-xs mt-1">{formErrors.trade}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Website URL</label>
                            <input name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="www.yourbusiness.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Primary Service Area / City</label>
                        <input name="serviceArea" value={formData.serviceArea} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm" placeholder="e.g. Austin, TX and surrounding areas" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Monthly Ad Spend</label>
                            <select name="monthlyAdSpend" value={formData.monthlyAdSpend} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                                <option value="">Select range</option>
                                <option value="$0 (Not currently spending)">$0 (Not currently spending)</option>
                                <option value="Under $1,000">Under $1,000</option>
                                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                                <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                                <option value="$10,000+">$10,000+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Years in Business</label>
                            <select name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                                <option value="">Select years</option>
                                <option value="New Business (<1 yr)">New Business (&lt;1 yr)</option>
                                <option value="1 - 3 years">1 - 3 years</option>
                                <option value="3 - 10 years">3 - 10 years</option>
                                <option value="10+ years">10+ years</option>
                            </select>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Marketing Goals',
            fields: (
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">What is your primary goal? *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { id: 'leads', label: 'Get more leads/calls' },
                                { id: 'roi', label: 'Improve my ROI/Profit' },
                                { id: 'scale', label: 'Scale to new locations' },
                                { id: 'authority', label: 'Build local authority' }
                            ].map(goal => (
                                <button
                                    key={goal.id}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, primaryGoal: goal.label }))}
                                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${formData.primaryGoal === goal.label ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-600 hover:border-accent/50'}`}
                                >
                                    {goal.label}
                                </button>
                            ))}
                        </div>
                        {formErrors.primaryGoal && <p className="text-red-500 text-xs mt-1">{formErrors.primaryGoal}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">Current marketing channels (Check all that apply)</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['Google Ads', 'Local SEO', 'Facebook Ads', 'LSAs', 'HomeAdvisor/Angi', 'Direct Mail'].map(channel => (
                                <label key={channel} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50">
                                    <input
                                        type="checkbox"
                                        checked={formData.currentChannels.includes(channel)}
                                        onChange={() => handleCheckboxChange(channel)}
                                        className="w-4 h-4 text-accent border-slate-300 rounded focus:ring-accent"
                                    />
                                    <span className="text-xs text-slate-600 font-medium">{channel}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Biggest Marketing Challenge</label>
                            <select name="biggestChallenge" value={formData.biggestChallenge} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                                <option value="">Select option</option>
                                <option value="Low Lead Quality">Too many low quality leads</option>
                                <option value="High CPL">Leads are too expensive</option>
                                <option value="Inconsistency">Lead flow is inconsistent</option>
                                <option value="Tracking">Don&apos;t know what&apos;s working</option>
                                <option value="Competition">Too much local competition</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Timeline to Start</label>
                            <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm">
                                <option value="">Select timeline</option>
                                <option value="Immediately">Immediately</option>
                                <option value="Next 30 days">Next 30 days</option>
                                <option value="1-3 months">1-3 months</option>
                                <option value="Just researching">Just researching</option>
                            </select>
                        </div>
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
                        {/* Form Area */}
                        <div className="lg:col-span-3">
                            {/* Improved Progress Indicator */}
                            <div className="flex items-center justify-between mb-10 px-2">
                                {steps.map((s, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex flex-col items-center gap-2 relative z-10">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${i < step ? 'bg-[#D4AF37] text-primary shadow-lg' : i === step ? 'bg-[#3040A0] text-white shadow-lg scale-110' : 'bg-slate-200 text-slate-400'}`}>
                                                {i < step ? <span className="material-symbols-outlined text-sm">check</span> : i + 1}
                                            </div>
                                            <span className={`text-[10px] uppercase font-black tracking-tighter hidden sm:block ${i <= step ? 'text-primary' : 'text-slate-400'}`}>{s.title}</span>
                                        </div>
                                        {i < steps.length - 1 && (
                                            <div className="flex-1 h-1 mx-2 rounded-full overflow-hidden bg-slate-200 relative -mt-6">
                                                <div className={`absolute top-0 left-0 h-full transition-all duration-500 ${i < step ? 'w-full bg-[#D4AF37]' : 'w-0'}`} />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                <div className="p-8">
                                    <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
                                        {steps[step].title}
                                    </h2>
                                    
                                    {error && (
                                        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-red-500 text-sm">error</span>
                                                <p className="text-red-700 text-sm font-medium">{error}</p>
                                            </div>
                                        </div>
                                    )}

                                    {steps[step].fields}
                                </div>
                                
                                <div className="bg-slate-50 p-6 flex justify-between border-t border-slate-100">
                                    {step > 0 ? (
                                        <button 
                                            type="button" 
                                            onClick={prevStep} 
                                            className="px-6 py-3 border border-slate-300 text-slate-600 font-bold rounded-xl hover:bg-white transition-all text-sm flex items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                                            Back
                                        </button>
                                    ) : <div />}
                                    
                                    {step < steps.length - 1 ? (
                                        <button 
                                            type="button" 
                                            onClick={nextStep} 
                                            className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light hover:shadow-lg transition-all text-sm flex items-center gap-2"
                                        >
                                            Continue
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={handleSubmit}
                                            disabled={loading}
                                            className={`px-10 py-4 bg-accent text-primary font-bold rounded-xl transition-all text-sm shadow-lg flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-light hover:-translate-y-1 animate-pulse-gold'}`}
                                        >
                                            {loading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Get My Free Audit
                                                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Trust Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-accent">verified</span> 
                                    What You&apos;ll Get
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { t: 'Competitive Analysis', d: 'How you stack up against local rivals' },
                                        { t: 'Performance Review', d: 'Conversion & speed audit of your site' },
                                        { t: 'Ranking Assessment', d: 'Google Maps & Organic search score' },
                                        { t: 'Ad Campaign Audit', d: 'Spotting wasted spend & opportunities' },
                                        { t: 'Custom Growth Plan', d: '3 specific win-now recommendations' }
                                    ].map((item) => (
                                        <div key={item.t} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-green-500 text-base shrink-0">check_circle</span>
                                            <div>
                                                <p className="text-xs font-bold text-primary leading-none mb-1">{item.t}</p>
                                                <p className="text-[10px] text-slate-500">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden group shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                <h3 className="font-bold mb-4 flex items-center gap-2 z-10 relative">
                                    <span className="material-symbols-outlined text-accent">shield</span> 
                                    100% Free & Secure
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed z-10 relative mb-4">
                                    No credit card required. No obligation. Your data is strictly confidential and protected by 256-bit encryption.
                                </p>
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg z-10 relative">
                                    <span className="material-symbols-outlined text-white/50 text-sm">lock</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-100">Secure Submission</span>
                                </div>
                            </div>

                            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                                <p className="text-xs text-slate-500 text-center italic">
                                    &quot;The audit showed us exactly where our Google Ads budget was being wasted. We cut costs by 20% and doubled our call volume.&quot;
                                </p>
                                <div className="mt-4 flex items-center justify-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-300" />
                                    <div className="text-left">
                                        <p className="text-[10px] font-bold text-primary">Mike T.</p>
                                        <p className="text-[9px] text-slate-500 leading-none">Owner, Texas Plumbing Pros</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-black text-primary mb-12 text-center underline decoration-accent decoration-4 underline-offset-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Is the audit really free?', a: 'Yes, 100% free. There is no obligation to sign up for any services after the audit. We believe that providing value upfront is the best way to earn your trust.' },
                            { q: 'How long does the audit take?', a: 'Our expert team manually reviews every submission. You will receive your custom report via email within 24-48 hours.' },
                            { q: 'What data do I need to provide?', a: 'Just basic contact info and your website URL. We do all the heavy lifting and research ourselves using enterprise-level marketing tools.' },
                            { q: 'Do you need access to my accounts?', a: 'No. We perform a "black box" audit based on your external digital presence. If you decide to work with us later, we may request access for deeper analysis.' },
                            { q: 'Will you share my data?', a: 'Absolutely not. Your information is kept strictly confidential and used only for the purpose of generating your audit report.' },
                        ].map((faq) => (
                            <div key={faq.q} className="bg-bg-light rounded-2xl p-6 border border-slate-200 hover:border-accent transition-colors">
                                <h3 className="font-bold text-primary mb-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-accent">help_outline</span>
                                    {faq.q}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed ml-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
