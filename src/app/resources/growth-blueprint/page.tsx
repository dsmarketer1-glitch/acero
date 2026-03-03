'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const trades = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Landscaping'];

export default function GrowthBlueprint() {
    const [step, setStep] = useState(0);
    const [biz, setBiz] = useState('');
    const [trade, setTrade] = useState('');
    const [city, setCity] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [revenue, setRevenue] = useState('');
    const [goal, setGoal] = useState('');
    const [spend, setSpend] = useState('');
    const [leadsNeeded, setLeadsNeeded] = useState('');
    const [hasItems, setHasItems] = useState<string[]>([]);
    const [leadSource, setLeadSource] = useState('');
    const [frustration, setFrustration] = useState('');
    const [timeline, setTimeline] = useState('');

    const marketingItems = ['A website', 'Google Business Profile', 'Google Ads', 'Active SEO', 'Facebook/Instagram', 'Google LSAs', 'Email marketing', 'Review system'];

    // Intro
    if (step === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6">route</span>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">The $10K Month Blueprint</h1>
                    <p className="text-slate-500 mb-8">Get a personalised marketing roadmap based on where your business actually is right now.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <input value={biz} onChange={(e) => setBiz(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Business Name" />
                        <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                            <option value="">Trade</option>
                            {trades.map(t => <option key={t}>{t}</option>)}
                        </select>
                        <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="City" />
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Team Size</label>
                            <div className="grid grid-cols-5 gap-2">
                                {['Just me', '2-3', '4-7', '8-15', '15+'].map(s => (
                                    <button key={s} onClick={() => setTeamSize(s)} className={`p-2 rounded-lg border text-xs text-center transition-all ${teamSize === s ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{s}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setStep(1)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">Start Building My Roadmap →</button>
                </div>
            </div>
        );
    }

    // Step 1 — Revenue & Goals
    if (step === 1) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex gap-2 mb-6"><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-slate-200" /><div className="h-2 flex-1 rounded-full bg-slate-200" /></div>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <h2 className="text-xl font-bold text-primary mb-6">Revenue & Goals</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Annual Revenue</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {['Under $300K', '$300K–$750K', '$750K–$2M', '$2M–$5M', 'Over $5M'].map(r => (
                                        <button key={r} onClick={() => setRevenue(r)} className={`p-3 rounded-xl border text-sm transition-all ${revenue === r ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200 hover:border-accent/30'}`}>{r}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Primary Growth Goal</p>
                                {['Get first consistent leads', 'Replace referrals with digital', 'Dominate my local market', 'Expand to new areas', 'Build a premium brand'].map(g => (
                                    <button key={g} onClick={() => setGoal(g)} className={`block w-full text-left p-3 rounded-xl border text-sm mb-2 transition-all ${goal === g ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200 hover:border-accent/30'}`}>{g}</button>
                                ))}
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Monthly Marketing Spend</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {['$0', 'Under $500', '$500–$1,500', '$1,500–$3,000', '$3,000+'].map(s => (
                                        <button key={s} onClick={() => setSpend(s)} className={`p-3 rounded-xl border text-sm transition-all ${spend === s ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{s}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Monthly Leads Needed</p>
                                <div className="grid grid-cols-5 gap-2">
                                    {['5-10', '10-25', '25-50', '50-100', '100+'].map(l => (
                                        <button key={l} onClick={() => setLeadsNeeded(l)} className={`p-3 rounded-xl border text-sm transition-all ${leadsNeeded === l ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{l}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setStep(2)} className="mt-8 w-full py-3 bg-accent text-primary font-bold rounded-xl">Next →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Step 2 — Current Marketing
    if (step === 2) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex gap-2 mb-6"><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-slate-200" /></div>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <h2 className="text-xl font-bold text-primary mb-6">Current Marketing</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">What do you currently have? (select all)</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {marketingItems.map(item => (
                                        <button key={item} onClick={() => setHasItems(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])} className={`p-3 rounded-xl border text-sm text-left transition-all ${hasItems.includes(item) ? 'bg-green-50 border-green-300 font-bold' : 'border-slate-200'}`}>
                                            {hasItems.includes(item) ? '✓ ' : ''}{item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Where do most leads come from?</p>
                                {['Referrals', 'Google (organic)', 'Google Ads', 'Door knocking/yard signs', 'Social media', "I'm not sure"].map(s => (
                                    <button key={s} onClick={() => setLeadSource(s)} className={`block w-full text-left p-3 rounded-xl border text-sm mb-2 transition-all ${leadSource === s ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{s}</button>
                                ))}
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Biggest frustration?</p>
                                {["Don't know where to start", 'Spending but not seeing results', 'Too busy to manage marketing', "Can't measure what's working", 'Losing to competitors online'].map(f => (
                                    <button key={f} onClick={() => setFrustration(f)} className={`block w-full text-left p-3 rounded-xl border text-sm mb-2 transition-all ${frustration === f ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{f}</button>
                                ))}
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Timeline for results?</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {['ASAP (1-30 days)', 'Within 3 months', '6-12 months', 'Long-term (1-2 years)'].map(t => (
                                        <button key={t} onClick={() => setTimeline(t)} className={`p-3 rounded-xl border text-sm transition-all ${timeline === t ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{t}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setStep(3)} className="mt-8 w-full py-3 bg-accent text-primary font-bold rounded-xl">Generate My Roadmap →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Results — 3-Phase Roadmap
    const missingItems = marketingItems.filter(i => !hasItems.includes(i));
    const phases = [
        {
            label: '🏗️ Foundation — Do These First',
            timeline: 'Days 1-30',
            color: 'border-amber-500',
            items: missingItems.slice(0, 4).map(item => {
                if (item === 'A website') return { action: 'Launch a Conversion-Focused Website', cost: '$2,000-$5,000', type: 'Hire', why: 'Without this, nothing else works. Your website is your 24/7 salesperson.' };
                if (item === 'Google Business Profile') return { action: 'Claim & Optimise Google Business Profile', cost: 'Free', type: 'DIY', why: 'Your #1 local ranking factor. 64% of consumers use GBP to find local businesses.' };
                if (item === 'Review system') return { action: 'Set Up Automated Review Requests', cost: '$50-$150/mo', type: 'Tool', why: 'Reviews drive trust and rankings. Automate so you never forget to ask.' };
                return { action: `Set Up ${item}`, cost: '$50-$500/mo', type: 'DIY/Hire', why: `${item} is a core foundation piece for modern home service marketing.` };
            }),
        },
        {
            label: '🚀 Growth — Stack These On Top',
            timeline: 'Days 30-90',
            color: 'border-blue-500',
            items: [
                { action: `Launch Google Ads for ${trade || 'your trade'} in ${city || 'your city'}`, cost: '$800-$2,500/mo', type: 'Hire', why: 'Fastest path to leads. See results in 48-72 hours.' },
                { action: 'Start Local SEO Campaign', cost: '$600-$1,500/mo', type: 'Hire', why: 'SEO compounds over time — leads get cheaper every month.' },
                { action: 'Set Up Call Tracking & Analytics', cost: '$50-$100/mo', type: 'Tool', why: "You can't improve what you don't measure." },
            ],
        },
        {
            label: '👑 Domination — Once Growth is Flowing',
            timeline: 'Months 3-12',
            color: 'border-green-500',
            items: [
                { action: 'Launch Facebook/Instagram Retargeting', cost: '$500-$1,500/mo', type: 'Hire', why: 'Recapture website visitors who didn\'t call. 10-30% conversion lift.' },
                { action: 'Content & Blog Strategy', cost: '$300-$800/mo', type: 'Hire', why: 'Build authority and rank for long-tail keywords. Compound organic traffic.' },
                { action: 'Email Re-engagement for Past Customers', cost: '$50-$200/mo', type: 'Tool', why: 'Your past customers are your cheapest leads. Reactivate with seasonal offers.' },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-navy py-16">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-white mb-2">{biz || 'Your'} Custom Marketing Roadmap</h2>
                    <p className="text-slate-400 text-sm">Based on: {trade || 'Your Trade'} | {revenue || 'Revenue Stage'} | {teamSize || 'Team Size'}</p>
                </div>

                {phases.map((phase, pi) => (
                    <div key={pi} className={`bg-white/5 backdrop-blur rounded-2xl border border-white/10 border-l-4 ${phase.color} p-6 mb-6`}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-bold">{phase.label}</h3>
                            <span className="text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full">{phase.timeline}</span>
                        </div>
                        <div className="space-y-3">
                            {phase.items.map((item, ii) => (
                                <div key={ii} className="flex gap-4 p-4 bg-white/5 rounded-xl">
                                    <div className="shrink-0 mt-1">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${item.type === 'DIY' ? 'bg-green-500/20 text-green-400' : item.type === 'Tool' ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'}`}>{item.type}</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{item.action}</p>
                                        <p className="text-xs text-slate-400 mt-1">{item.why}</p>
                                        <p className="text-xs text-accent mt-1">{item.cost}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Priority */}
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-6 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Your #1 Priority This Week</p>
                    <p className="text-white text-lg font-bold">{phases[0].items[0]?.action || 'Claim your Google Business Profile'}</p>
                </div>

                <div className="flex gap-3 mb-4">
                    <input placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm" />
                    <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-lg text-sm">Send Blueprint</button>
                </div>
                <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                    Want ACERO to Build & Execute This Roadmap?
                </Link>
            </div>
        </div>
    );
}
