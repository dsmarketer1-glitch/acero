'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const budgetOptions = ['Under $500', '$500–$1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000+'];
const budgetValues = [250, 750, 1750, 3750, 6000];
const trades = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Garage Doors', 'Landscaping'];

const questionSets = [
    {
        title: 'Campaign Setup',
        icon: 'target',
        questions: [
            { q: 'What match types are your keywords set to?', options: ['Broad Match only', 'Phrase and Exact Match', 'A mix of all three', "I don't know"], leaks: [0, -1, -1, 0] },
            { q: 'Do you have a negative keyword list?', options: ['Yes, with 20+ negative keywords', 'Yes, but basic (fewer than 10)', 'No', "I don't know what that is"], leaks: [-1, 0, 0, 0] },
            { q: 'Do your ads send traffic to a specific landing page or your homepage?', options: ['Dedicated landing page per service', 'My homepage', 'Different pages but not dedicated', "I don't know"], leaks: [-1, 0, 0, 0] },
            { q: 'How many active campaigns do you have?', options: ['1 campaign for everything', 'Separate per service', 'Separate per service AND location', "I don't know"], leaks: [0, -1, -1, 0] },
            { q: 'Do you have ad scheduling (dayparting) turned on?', options: ['Yes — during business hours', 'No — ads run 24/7', "I don't know"], leaks: [-1, 0, 0] },
        ],
    },
    {
        title: 'Tracking & Measurement',
        icon: 'monitoring',
        questions: [
            { q: 'Are phone calls tracked as conversions?', options: ['Yes, every call', 'Only some calls', 'No', "I don't know"], leaks: [-1, 0, 0, 0] },
            { q: 'Do you know your current cost per lead?', options: ['Yes, exactly', 'Roughly', 'No idea'], leaks: [-1, 0, 0] },
            { q: 'Is Google Analytics connected to your Ads account?', options: ['Yes', 'No', "I don't know"], leaks: [-1, 0, 0] },
            { q: 'Do you check your Search Terms report weekly?', options: ['Yes, regularly', 'Occasionally', 'Never', "I don't know what that is"], leaks: [-1, -1, 0, 0] },
            { q: 'Do you have conversion tracking for forms AND calls?', options: ['Both', 'Only one', 'Neither', "I don't know"], leaks: [-1, 0, 0, 0] },
        ],
    },
    {
        title: 'Ad Quality',
        icon: 'edit_note',
        questions: [
            { q: 'Do your ads have all extensions active? (sitelinks, callouts, call)', options: ['Yes, all of them', 'Some', 'None', "I don't know"], leaks: [-1, 0, 0, 0] },
            { q: 'How many ad variations per ad group?', options: ['3+ (including RSAs)', '1-2', "I don't know"], leaks: [-1, 0, 0] },
            { q: 'Do your ad headlines include the city you serve?', options: ['Yes', 'No', 'Sometimes'], leaks: [-1, 0, 0] },
            { q: 'What is your average Quality Score?', options: ['7-10 (good)', '4-6 (average)', '1-3 (poor)', "I don't know"], leaks: [-1, 0, 0, 0] },
            { q: 'Do your landing pages match the service in your ad?', options: ['Yes — every ad matches', 'Mostly', 'No — all go to same page'], leaks: [-1, 0, 0] },
        ],
    },
    {
        title: 'Budget & Bidding',
        icon: 'payments',
        questions: [
            { q: 'What bidding strategy are you using?', options: ['Max Conversions or Target CPA', 'Manual CPC', 'Maximise Clicks', "I don't know"], leaks: [-1, -1, 0, 0] },
            { q: 'Do you have location targeting set to your service area only?', options: ['Yes — city/radius', 'Broader than my area', "I don't know"], leaks: [-1, 0, 0] },
            { q: 'Do you exclude mobile apps from display?', options: ['Yes', 'No', 'Not running display', "I don't know"], leaks: [-1, 0, -1, 0] },
            { q: 'Have you done an account audit in the last 90 days?', options: ['Yes', 'No', 'Never had one'], leaks: [-1, 0, 0] },
            { q: 'Do you have a remarketing campaign running?', options: ['Yes', 'No', "I don't know what that is"], leaks: [-1, 0, 0] },
        ],
    },
];

const leakDescriptions: Record<number, { name: string; problem: string; fix: string }> = {
    0: { name: 'Broad Match Keywords', problem: 'Broad match shows your ads for irrelevant searches, wasting clicks.', fix: 'Switch to Phrase and Exact match to target high-intent searches only.' },
    1: { name: 'Missing Negative Keywords', problem: 'Without negatives, you pay for junk clicks like "free" or "DIY".', fix: 'Build a 50+ negative keyword list to block wasted spend.' },
    2: { name: 'No Dedicated Landing Pages', problem: 'Sending traffic to your homepage kills conversion rates.', fix: 'Create landing pages per service with clear CTAs and trust signals.' },
    3: { name: 'Single Campaign Setup', problem: 'One campaign can\'t effectively target different services and locations.', fix: 'Split into separate campaigns per service for better budget control.' },
    4: { name: 'No Ad Scheduling', problem: 'Running ads at 2am when nobody calls wastes your budget.', fix: 'Set ads to run during business hours when your team can answer calls.' },
};

export default function LeakyBucketReport() {
    const [step, setStep] = useState(0);
    const [businessName, setBusinessName] = useState('');
    const [budget, setBudget] = useState('');
    const [trade, setTrade] = useState('');
    const [answers, setAnswers] = useState<Record<string, number>>({});

    const setAnswer = (setIdx: number, qIdx: number, optIdx: number) => {
        setAnswers((prev) => ({ ...prev, [`${setIdx}-${qIdx}`]: optIdx }));
    };

    const getLeakCount = () => {
        let leaks = 0;
        questionSets.forEach((set, si) => {
            set.questions.forEach((q, qi) => {
                const ans = answers[`${si}-${qi}`];
                if (ans !== undefined && q.leaks[ans] === 0) leaks++;
            });
        });
        return leaks;
    };

    // Intro
    if (step === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    {/* Animated Bucket */}
                    <div className="relative w-24 h-28 mx-auto mb-8">
                        <div className="absolute inset-0 bg-blue-500 rounded-b-2xl rounded-t-lg opacity-80" />
                        <div className="absolute bottom-2 left-3 w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute bottom-0 left-5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">The Leaky Bucket Report</h1>
                    <p className="text-slate-500 mb-8">Find out how much of your Google Ads budget is being wasted right now.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Business Name</label>
                            <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Your Company" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Monthly Google Ads Budget</label>
                            <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                                <option value="">Select budget</option>
                                {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Trade</label>
                            <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                                <option value="">Select trade</option>
                                {trades.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                    <button onClick={() => setStep(1)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">
                        Find My Leaks →
                    </button>
                </div>
            </div>
        );
    }

    // Results
    if (step > questionSets.length) {
        const leaks = getLeakCount();
        const budgetIdx = budgetOptions.indexOf(budget);
        const monthlyBudget = budgetIdx >= 0 ? budgetValues[budgetIdx] : 2000;
        let wastePct = '~5-10%';
        let wasteRange = [monthlyBudget * 0.05, monthlyBudget * 0.1];
        if (leaks >= 13) { wastePct = '~50%+'; wasteRange = [monthlyBudget * 0.5, monthlyBudget * 0.7]; }
        else if (leaks >= 8) { wastePct = '~30-45%'; wasteRange = [monthlyBudget * 0.3, monthlyBudget * 0.45]; }
        else if (leaks >= 4) { wastePct = '~15-25%'; wasteRange = [monthlyBudget * 0.15, monthlyBudget * 0.25]; }

        return (
            <div className="min-h-screen bg-navy py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 text-center mb-8">
                        <p className="text-slate-400 text-sm mb-4">{businessName || 'Your Business'} — Google Ads Leak Report</p>
                        {/* Bucket visual */}
                        <div className="relative w-32 h-40 mx-auto mb-6">
                            <div className="absolute inset-0 bg-blue-600/30 rounded-b-3xl rounded-t-xl border-2 border-blue-400/40" />
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-500/60 rounded-b-3xl transition-all" style={{ height: `${Math.max(10, 100 - leaks * 5)}%` }} />
                            {Array.from({ length: Math.min(leaks, 8) }).map((_, i) => (
                                <div key={i} className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ bottom: `${10 + i * 8}%`, left: `${20 + (i % 3) * 25}%`, animationDelay: `${i * 0.2}s` }} />
                            ))}
                        </div>
                        <p className="text-amber-400 text-4xl font-black mb-2">{leaks} leaks found</p>
                        <p className="text-white text-sm mb-4">Estimated waste: <span className="font-bold text-amber-400">{wastePct}</span></p>
                        <p className="text-2xl font-black text-amber-400">
                            ~${Math.round(wasteRange[0]).toLocaleString()}–${Math.round(wasteRange[1]).toLocaleString()}/month wasted
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 mb-8">
                        <h3 className="text-white font-bold mb-4">Score: {20 - leaks} out of 20 checks passed</h3>
                        {questionSets.map((set, si) => {
                            const sectionLeaks = set.questions.filter((q, qi) => {
                                const ans = answers[`${si}-${qi}`];
                                return ans !== undefined && q.leaks[ans] === 0;
                            }).length;
                            return (
                                <div key={set.title} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                    <span className="text-slate-300 text-sm">{set.title}</span>
                                    <span className={`text-sm font-bold ${sectionLeaks === 0 ? 'text-green-400' : sectionLeaks <= 2 ? 'text-amber-400' : 'text-red-400'}`}>
                                        {sectionLeaks} leak{sectionLeaks !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex gap-3 mb-4">
                        <input placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm" />
                        <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-lg text-sm">Send Report</button>
                    </div>
                    <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                        Get ACERO to Plug Your Leaks
                    </Link>
                </div>
            </div>
        );
    }

    // Question step
    const currentSet = questionSets[step - 1];
    return (
        <div className="min-h-[80vh] bg-bg-light py-16">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                    {questionSets.map((_, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i < step ? 'bg-accent' : 'bg-slate-200'}`} />
                    ))}
                </div>
                <p className="text-xs text-slate-400 mb-8">Step {step} of {questionSets.length}</p>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-accent text-2xl">{currentSet.icon}</span>
                        <h2 className="text-xl font-bold text-primary">{currentSet.title}</h2>
                    </div>
                    <div className="space-y-6">
                        {currentSet.questions.map((q, qi) => (
                            <div key={qi}>
                                <p className="font-semibold text-primary text-sm mb-3">Q{qi + 1}: {q.q}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {q.options.map((opt, oi) => (
                                        <button key={oi} onClick={() => setAnswer(step - 1, qi, oi)} className={`p-3 rounded-xl border text-left text-sm transition-all ${answers[`${step - 1}-${qi}`] === oi ? 'bg-accent/10 border-accent text-primary font-medium' : 'border-slate-200 text-slate-600 hover:border-accent/30'}`}>
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-8">
                        {step > 1 && <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-slate-300 text-slate-600 font-semibold rounded-xl text-sm">← Back</button>}
                        <button onClick={() => setStep(step + 1)} className="ml-auto px-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all">
                            {step === questionSets.length ? 'Show Me My Leaks →' : 'Next →'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
