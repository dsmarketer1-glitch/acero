'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const sections = [
    {
        title: 'Google Business Profile',
        icon: 'pin_drop',
        items: [
            'My Google Business Profile is claimed and verified',
            'My business category is correctly set (primary + secondary)',
            'I have 10+ Google reviews with an average of 4.0+',
            'My business hours, phone, and address are 100% accurate',
            'I have added photos in the last 30 days',
            'I respond to all my Google reviews (good and bad)',
        ],
    },
    {
        title: 'Your Website',
        icon: 'language',
        items: [
            'My website loads in under 3 seconds on mobile',
            'My phone number is visible above the fold on every page',
            'My website has a dedicated page for each service I offer',
            'My website mentions the cities/areas I serve',
            'My website has a contact form or booking widget',
            'My website has customer reviews or testimonials visible',
        ],
    },
    {
        title: 'Local SEO',
        icon: 'search',
        items: [
            'My business Name, Address, Phone is identical across all directories',
            'I am listed on Yelp, Angi, HomeAdvisor, and BBB',
            'My website has title tags mentioning my city and service',
            'I have a blog or content published in the last 90 days',
            'I appear in Google Maps top 3 for my main service + city',
            'I have backlinks from local websites or news sources',
        ],
    },
    {
        title: 'Paid Advertising',
        icon: 'payments',
        items: [
            'I am running Google Ads for my top services',
            'My Google Ads go to a dedicated landing page (not my homepage)',
            'I have Google Local Services Ads (Google Guaranteed) active',
            'I track phone calls as conversions in my ad account',
            'I know my cost per lead from paid ads',
        ],
    },
    {
        title: 'Reputation & Social',
        icon: 'star',
        items: [
            'I have a system to ask every customer for a review after a job',
            'I have 25+ Google reviews (total)',
            'I respond to negative reviews professionally within 48 hours',
            'I post on Facebook or Instagram at least once a week',
            'My social profiles have accurate contact info and business hours',
        ],
    },
];

const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);

function getGrade(score: number) {
    if (score >= 24) return { grade: 'A', label: 'Local Leader 🏆', color: 'text-green-500', bg: 'bg-green-500' };
    if (score >= 18) return { grade: 'B', label: 'On the Right Track 📈', color: 'text-blue-500', bg: 'bg-blue-500' };
    if (score >= 12) return { grade: 'C', label: 'Needs Work ⚠️', color: 'text-amber-500', bg: 'bg-amber-500' };
    return { grade: 'D', label: 'Flying Blind 🚨', color: 'text-red-500', bg: 'bg-red-500' };
}

export default function LocalDominationChecklist() {
    const [step, setStep] = useState(0);
    const [businessName, setBusinessName] = useState('');
    const [trade, setTrade] = useState('');
    const [checked, setChecked] = useState<Record<string, boolean>>({});
    const [showEmail, setShowEmail] = useState(false);

    const totalChecked = Object.values(checked).filter(Boolean).length;

    const toggleItem = (sectionIdx: number, itemIdx: number) => {
        const key = `${sectionIdx}-${itemIdx}`;
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const getSectionScore = (sectionIdx: number) => {
        return sections[sectionIdx].items.filter((_, i) => checked[`${sectionIdx}-${i}`]).length;
    };

    // Intro
    if (step === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6">checklist</span>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">The Local Domination Checklist</h1>
                    <p className="text-slate-500 mb-8">Find out if your business is visible to local customers — or invisible.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Business Name</label>
                            <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent" placeholder="ABC Plumbing" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Trade / Industry</label>
                            <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent">
                                <option value="">Select your trade</option>
                                {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Garage Doors', 'Landscaping', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                    <button onClick={() => setStep(1)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">
                        Start My Free Audit →
                    </button>
                    <p className="text-xs text-slate-400 mt-4">Takes 3 minutes. Completely free. No email required until results.</p>
                </div>
            </div>
        );
    }

    // Results
    if (step > sections.length) {
        const gradeInfo = getGrade(totalChecked);
        const pct = Math.round((totalChecked / totalItems) * 100);

        // Find top 3 unchecked priorities
        const priorities: { section: string; item: string }[] = [];
        for (let si = 0; si < sections.length && priorities.length < 3; si++) {
            for (let ii = 0; ii < sections[si].items.length && priorities.length < 3; ii++) {
                if (!checked[`${si}-${ii}`]) {
                    priorities.push({ section: sections[si].title, item: sections[si].items[ii] });
                }
            }
        }

        return (
            <div className="min-h-screen bg-navy py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 text-center mb-8">
                        <p className="text-slate-400 text-sm mb-2">{businessName || 'Your Business'}</p>
                        {/* Score Gauge */}
                        <div className="relative w-40 h-40 mx-auto my-6">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray={`${pct * 2.51} 251`} strokeLinecap="round" className={gradeInfo.color} />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-3xl font-black text-white">{totalChecked}</p>
                                <p className="text-xs text-slate-400">/ {totalItems}</p>
                            </div>
                        </div>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${gradeInfo.bg}/20 ${gradeInfo.color} font-bold text-lg mb-2`}>
                            {gradeInfo.grade} — {gradeInfo.label}
                        </div>
                    </div>

                    {/* Section scores */}
                    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 mb-8 space-y-4">
                        <h3 className="text-white font-bold">Category Breakdown</h3>
                        {sections.map((section, si) => {
                            const score = getSectionScore(si);
                            const max = section.items.length;
                            const pctS = Math.round((score / max) * 100);
                            const barColor = pctS >= 80 ? 'bg-green-500' : pctS >= 50 ? 'bg-amber-500' : 'bg-red-500';
                            return (
                                <div key={section.title}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-300">{section.title}</span>
                                        <span className="text-slate-400">{score}/{max}</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${pctS}%` }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Top 3 Priorities */}
                    {priorities.length > 0 && (
                        <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 mb-8">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-accent">flag</span> Your Top {priorities.length} Priorities This Month</h3>
                            {priorities.map((p, i) => (
                                <div key={i} className="flex gap-4 py-3 border-b border-white/5 last:border-0">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0">{i + 1}</span>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{p.item}</p>
                                        <p className="text-xs text-slate-400">Category: {p.section}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Email capture */}
                    {!showEmail ? (
                        <button onClick={() => setShowEmail(true)} className="w-full py-4 bg-white/10 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/15 transition-all mb-4">
                            📧 Get this report emailed as a PDF checklist
                        </button>
                    ) : (
                        <div className="bg-white/5 rounded-xl p-4 mb-4 flex gap-3">
                            <input placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm" />
                            <button className="px-6 py-3 bg-accent text-primary font-bold rounded-lg text-sm hover:bg-accent-light transition-all">Send</button>
                        </div>
                    )}

                    <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                        Want ACERO to Fix These? Book Free Strategy Call
                    </Link>
                </div>
            </div>
        );
    }

    // Checklist step
    const currentSection = sections[step - 1];
    return (
        <div className="min-h-[80vh] bg-bg-light py-16">
            <div className="max-w-2xl mx-auto px-4">
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-6">
                    {sections.map((_, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i < step ? 'bg-accent' : i === step - 1 ? 'bg-accent' : 'bg-slate-200'}`} />
                    ))}
                </div>
                <p className="text-xs text-slate-400 mb-8">Step {step} of {sections.length}</p>

                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-accent text-2xl">{currentSection.icon}</span>
                        <h2 className="text-2xl font-bold text-primary">{currentSection.title}</h2>
                    </div>
                    <div className="space-y-3">
                        {currentSection.items.map((item, i) => {
                            const key = `${step - 1}-${i}`;
                            return (
                                <button key={i} onClick={() => toggleItem(step - 1, i)} className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${checked[key] ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200 hover:border-accent/30'}`}>
                                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${checked[key] ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                                        {checked[key] && <span className="material-symbols-outlined text-white text-sm">check</span>}
                                    </div>
                                    <span className={`text-sm ${checked[key] ? 'text-green-700 font-medium' : 'text-slate-700'}`}>{item}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex justify-between mt-8">
                        {step > 1 && <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-slate-300 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 text-sm">← Back</button>}
                        <button onClick={() => setStep(step + 1)} className="ml-auto px-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all">
                            {step === sections.length ? 'See My Results →' : 'Next →'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
