'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const revenueOptions = ['Under $300K', '$300K–$750K', '$750K–$1.5M', '$1.5M–$3M', '$3M–$5M', 'Over $5M'];
const revenueValues = [200000, 525000, 1125000, 2250000, 4000000, 7000000];
const goalMultipliers: Record<string, [number, number]> = {
    survive: [5, 8], grow: [8, 12], scale: [12, 15], dominate: [15, 20],
};
const channelSplits: Record<string, { name: string; pct: number; color: string }[]> = {
    survive: [
        { name: 'Google Ads', pct: 35, color: '#2563EB' },
        { name: 'Local SEO', pct: 25, color: '#16A34A' },
        { name: 'Website/CRO', pct: 15, color: '#D4AF37' },
        { name: 'LSA', pct: 15, color: '#F59E0B' },
        { name: 'Reviews', pct: 10, color: '#8B5CF6' },
    ],
    grow: [
        { name: 'Google Ads', pct: 30, color: '#2563EB' },
        { name: 'Local SEO', pct: 25, color: '#16A34A' },
        { name: 'LSA', pct: 15, color: '#F59E0B' },
        { name: 'Social Ads', pct: 15, color: '#EC4899' },
        { name: 'Website/CRO', pct: 10, color: '#D4AF37' },
        { name: 'Reviews', pct: 5, color: '#8B5CF6' },
    ],
    scale: [
        { name: 'Google Ads', pct: 25, color: '#2563EB' },
        { name: 'Local SEO', pct: 20, color: '#16A34A' },
        { name: 'Social Ads', pct: 20, color: '#EC4899' },
        { name: 'LSA', pct: 15, color: '#F59E0B' },
        { name: 'Content Marketing', pct: 10, color: '#06B6D4' },
        { name: 'Website/CRO', pct: 5, color: '#D4AF37' },
        { name: 'Reviews', pct: 5, color: '#8B5CF6' },
    ],
    dominate: [
        { name: 'Google Ads', pct: 20, color: '#2563EB' },
        { name: 'Local SEO', pct: 15, color: '#16A34A' },
        { name: 'Social Ads', pct: 20, color: '#EC4899' },
        { name: 'LSA', pct: 10, color: '#F59E0B' },
        { name: 'Content/Brand', pct: 15, color: '#06B6D4' },
        { name: 'Video/Creative', pct: 10, color: '#EF4444' },
        { name: 'Reviews', pct: 5, color: '#8B5CF6' },
        { name: 'Email/CRM', pct: 5, color: '#22D3EE' },
    ],
};

export default function BudgetCalculator() {
    const [step, setStep] = useState(0);
    const [biz, setBiz] = useState('');
    const [trade, setTrade] = useState('');
    const [revenueIdx, setRevenueIdx] = useState(-1);
    const [yearsInBusiness, setYearsInBusiness] = useState('');
    const [goalKey, setGoalKey] = useState('');
    const [situation, setSituation] = useState('');
    const [concern, setConcern] = useState('');
    const [currentSpend, setCurrentSpend] = useState(0);
    const [leadsNeeded, setLeadsNeeded] = useState(15);
    const [avgJob, setAvgJob] = useState(750);

    const goals = [
        { key: 'survive', icon: '🌱', label: 'Survive', desc: 'I need consistent leads to stay busy' },
        { key: 'grow', icon: '📈', label: 'Grow', desc: 'I want to increase revenue 20-40%' },
        { key: 'scale', icon: '🚀', label: 'Scale', desc: 'I want to double revenue or expand' },
        { key: 'dominate', icon: '👑', label: 'Dominate', desc: 'I want to be #1 in my market' },
    ];

    // Intro
    if (step === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6">payments</span>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">What Should You Spend on Marketing?</h1>
                    <p className="text-slate-500 mb-8">Get a data-backed budget recommendation in 90 seconds.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <input value={biz} onChange={(e) => setBiz(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Business Name" />
                        <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                            <option value="">Trade</option>
                            {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Landscaping'].map(t => <option key={t}>{t}</option>)}
                        </select>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Revenue</label>
                            <div className="grid grid-cols-2 gap-2">
                                {revenueOptions.map((r, i) => (
                                    <button key={r} onClick={() => setRevenueIdx(i)} className={`p-3 rounded-xl border text-sm transition-all ${revenueIdx === i ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{r}</button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Years in Business</label>
                            <div className="grid grid-cols-4 gap-2">
                                {['Under 1 year', '1-3 years', '3-7 years', '7+ years'].map(y => (
                                    <button key={y} onClick={() => setYearsInBusiness(y)} className={`p-2 rounded-xl border text-xs transition-all ${yearsInBusiness === y ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{y}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setStep(1)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">Next →</button>
                </div>
            </div>
        );
    }

    // Step 1 — Goals
    if (step === 1) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex gap-2 mb-6"><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-slate-200" /></div>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <h2 className="text-xl font-bold text-primary mb-6">Your Goals & Situation</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-primary text-sm mb-3">Primary Goal</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {goals.map(g => (
                                        <button key={g.key} onClick={() => setGoalKey(g.key)} className={`p-4 rounded-xl border text-left transition-all ${goalKey === g.key ? 'bg-accent/10 border-accent' : 'border-slate-200 hover:border-accent/30'}`}>
                                            <span className="text-xl">{g.icon}</span>
                                            <p className="font-bold text-primary text-sm mt-1">{g.label}</p>
                                            <p className="text-xs text-slate-500">{g.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Current Situation</p>
                                {['Starting from scratch', 'Some basics done, need to grow', 'Already marketing, need better ROI', 'Marketing well, need to level up'].map(s => (
                                    <button key={s} onClick={() => setSituation(s)} className={`block w-full text-left p-3 rounded-xl border text-sm mb-2 transition-all ${situation === s ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{s}</button>
                                ))}
                            </div>
                            <div>
                                <p className="font-semibold text-primary text-sm mb-2">Budget Concern</p>
                                {["Can't afford it", 'Wasted money before, want proof', 'Know the budget, need the plan', 'Budget not the issue — results are'].map(c => (
                                    <button key={c} onClick={() => setConcern(c)} className={`block w-full text-left p-3 rounded-xl border text-sm mb-2 transition-all ${concern === c ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200'}`}>{c}</button>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setStep(2)} className="mt-8 w-full py-3 bg-accent text-primary font-bold rounded-xl">Next →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Step 2 — Numbers
    if (step === 2) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex gap-2 mb-6"><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-accent" /></div>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <h2 className="text-xl font-bold text-primary mb-6">Quick Numbers</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Current Monthly Marketing Spend ($)</label>
                                <input type="number" value={currentSpend} onChange={(e) => setCurrentSpend(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="0" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">New Leads Needed Per Month</label>
                                <input type="number" value={leadsNeeded} onChange={(e) => setLeadsNeeded(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Average Job Value ($)</label>
                                <input type="number" value={avgJob} onChange={(e) => setAvgJob(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                            </div>
                        </div>
                        <button onClick={() => setStep(3)} className="mt-8 w-full py-4 bg-accent text-primary font-bold rounded-xl text-lg">Calculate My Budget →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Results
    const revenue = revenueIdx >= 0 ? revenueValues[revenueIdx] : 500000;
    const multiplier = goalMultipliers[goalKey] || [8, 12];
    const yearsFactor = yearsInBusiness === 'Under 1 year' ? 1.3 : yearsInBusiness === '1-3 years' ? 1.15 : 1;
    const minPct = multiplier[0] * yearsFactor;
    const maxPct = multiplier[1] * yearsFactor;
    const minBudget = Math.round((revenue * minPct / 100) / 12);
    const maxBudget = Math.round((revenue * maxPct / 100) / 12);
    const channels = channelSplits[goalKey] || channelSplits['grow'];
    const midBudget = (minBudget + maxBudget) / 2;
    const gap = midBudget - currentSpend;

    const estLeads = Math.round(midBudget / 75);
    const estJobs = Math.round(estLeads * 0.55);
    const estRevenue = estJobs * avgJob;

    return (
        <div className="min-h-screen bg-navy py-16">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">{biz || 'Your Business'}&apos;s Recommended Marketing Budget</h2>
                    <p className="text-slate-400 text-sm">{trade} | {revenueOptions[revenueIdx] || 'N/A'} | Goal: {goals.find(g => g.key === goalKey)?.label || 'Growth'}</p>
                </div>

                {/* Primary Budget */}
                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-8 text-center mb-8">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">💡 Recommended Monthly Investment</p>
                    <p className="text-4xl font-black text-white mb-2">${minBudget.toLocaleString()} – ${maxBudget.toLocaleString()}<span className="text-lg text-slate-400">/month</span></p>
                    <p className="text-sm text-slate-400">This is {Math.round(minPct)}–{Math.round(maxPct)}% of your revenue — the benchmark for {goals.find(g => g.key === goalKey)?.label?.toLowerCase() || 'growth'} stage</p>
                </div>

                {/* Channel Breakdown (horizontal bars instead of donut) */}
                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 mb-8">
                    <h3 className="text-white font-bold mb-4">Recommended Channel Breakdown</h3>
                    <div className="space-y-3">
                        {channels.map(ch => (
                            <div key={ch.name}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-300">{ch.name}</span>
                                    <span className="text-white font-bold">${Math.round(midBudget * ch.pct / 100).toLocaleString()}/mo ({ch.pct}%)</span>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full transition-all" style={{ width: `${ch.pct}%`, backgroundColor: ch.color }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gap Analysis */}
                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 mb-8">
                    <h3 className="text-white font-bold mb-4">Where You Are vs. Where You Need To Be</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div><p className="text-sm text-slate-400">Current Spend</p><p className="text-xl font-bold text-white">${currentSpend.toLocaleString()}</p></div>
                        <div><p className="text-sm text-slate-400">Recommended</p><p className="text-xl font-bold text-accent">${Math.round(midBudget).toLocaleString()}</p></div>
                        <div><p className="text-sm text-slate-400">Gap</p><p className={`text-xl font-bold ${gap > 0 ? 'text-amber-400' : 'text-green-400'}`}>${gap > 0 ? '+' : ''}${Math.round(gap).toLocaleString()}</p></div>
                    </div>
                    <p className="text-sm text-center mt-4 p-3 rounded-xl bg-white/5">
                        {gap > 0 ? (
                            <span className="text-amber-400">⚠️ You may be under-investing — competitors spending more will take market share.</span>
                        ) : (
                            <span className="text-green-400">✅ Your budget is appropriate — focus on optimisation and ROI.</span>
                        )}
                    </p>
                </div>

                {/* ROI Projection */}
                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 mb-8">
                    <h3 className="text-white font-bold mb-4">ROI Projection at Recommended Budget</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div><p className="text-sm text-slate-400">Est. Monthly Leads</p><p className="text-xl font-bold text-white">{estLeads}</p></div>
                        <div><p className="text-sm text-slate-400">Est. Jobs Booked</p><p className="text-xl font-bold text-white">{estJobs}</p></div>
                        <div><p className="text-sm text-slate-400">Monthly Revenue</p><p className="text-xl font-bold text-accent">${estRevenue.toLocaleString()}</p></div>
                        <div><p className="text-sm text-slate-400">ROI Multiple</p><p className="text-xl font-bold text-green-400">{(estRevenue / midBudget).toFixed(1)}x</p></div>
                    </div>
                    <p className="text-xs text-slate-500 text-center mt-3">For every $1 invested, expect ${(estRevenue / midBudget).toFixed(2)} back in revenue</p>
                </div>

                <div className="flex gap-3 mb-4">
                    <input placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm" />
                    <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-lg text-sm">Send Budget Plan</button>
                </div>
                <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                    Want to Put This Budget to Work? Book Free Strategy Call
                </Link>
            </div>
        </div>
    );
}
