'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const channels = [
    { name: 'Google Ads (Paid Search)', icon: '📱' },
    { name: 'Google Maps (Organic)', icon: '📍' },
    { name: 'Website / Organic SEO', icon: '🌐' },
    { name: 'Google Local Services Ads', icon: '⭐' },
    { name: 'Facebook / Instagram Ads', icon: '👥' },
    { name: 'Referrals / Word of Mouth', icon: '🗣️' },
    { name: 'Directories (Yelp, Angi)', icon: '📒' },
    { name: 'Other / Offline', icon: '📣' },
];

export default function CallToCloseTracker() {
    const [step, setStep] = useState(0);
    const [biz, setBiz] = useState('');
    const [trade, setTrade] = useState('');
    const [avgJob, setAvgJob] = useState(850);
    const [closeRate, setCloseRate] = useState(60);
    const [data, setData] = useState(channels.map(() => ({ leads: '', spend: '', booked: '' })));

    const updateData = (idx: number, field: 'leads' | 'spend' | 'booked', value: string) => {
        setData(prev => prev.map((d, i) => i === idx ? { ...d, [field]: value } : d));
    };

    // Intro
    if (step === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6">call</span>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">The Call-to-Close Tracker</h1>
                    <p className="text-slate-500 mb-8">Find out which marketing channels are actually making you money — and which aren&apos;t.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <input value={biz} onChange={(e) => setBiz(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Business Name" />
                        <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                            <option value="">Trade</option>
                            {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Landscaping'].map(t => <option key={t}>{t}</option>)}
                        </select>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Average Job Value ($)</label>
                            <input type="number" value={avgJob} onChange={(e) => setAvgJob(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Avg. Close Rate: {closeRate}%</label>
                            <input type="range" min="10" max="100" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} className="w-full accent-accent" />
                        </div>
                    </div>
                    <button onClick={() => setStep(1)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">Enter My Lead Data →</button>
                    <p className="text-xs text-slate-400 mt-3">Not sure of exact numbers? Estimate — the pattern still holds.</p>
                </div>
            </div>
        );
    }

    // Data entry
    if (step === 1) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-xl font-bold text-primary mb-2">Enter Your Last 30 Days of Leads</h2>
                    <p className="text-slate-500 text-sm mb-6">Fill in what you know. Leave blank what you don&apos;t — we&apos;ll still calculate.</p>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="grid grid-cols-4 gap-0 p-4 bg-slate-50 border-b text-sm font-bold text-slate-600">
                            <div>Channel</div><div className="text-center">Leads</div><div className="text-center">Monthly Spend ($)</div><div className="text-center">Jobs Booked</div>
                        </div>
                        {channels.map((ch, i) => (
                            <div key={i} className="grid grid-cols-4 gap-0 p-4 border-b border-slate-100 items-center">
                                <div className="text-sm font-medium text-primary">{ch.icon} {ch.name}</div>
                                <input type="number" value={data[i].leads} onChange={(e) => updateData(i, 'leads', e.target.value)} className="mx-2 p-2 rounded-lg border border-slate-200 text-center text-sm" placeholder="0" />
                                <input type="number" value={data[i].spend} onChange={(e) => updateData(i, 'spend', e.target.value)} className="mx-2 p-2 rounded-lg border border-slate-200 text-center text-sm" placeholder="$0" />
                                <input type="number" value={data[i].booked} onChange={(e) => updateData(i, 'booked', e.target.value)} className="mx-2 p-2 rounded-lg border border-slate-200 text-center text-sm" placeholder="0" />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setStep(2)} className="mt-8 w-full py-4 bg-accent text-primary font-bold rounded-xl text-lg hover:-translate-y-1 transition-all">Calculate My ROI →</button>
                </div>
            </div>
        );
    }

    // Results
    const results = channels.map((ch, i) => {
        const leads = Number(data[i].leads) || 0;
        const spend = Number(data[i].spend) || 0;
        const booked = Number(data[i].booked) || 0;
        const cpl = leads > 0 && spend > 0 ? spend / leads : 0;
        const cr = leads > 0 ? (booked / leads) * 100 : 0;
        const revenue = booked * avgJob;
        const roi = spend > 0 ? ((revenue - spend) / spend) * 100 : (revenue > 0 ? 999 : 0);
        let status = '', statusColor = '';
        if (leads === 0 && spend === 0) { status = '—'; statusColor = 'text-slate-400'; }
        else if (roi > 300) { status = '🟢 High Performer'; statusColor = 'text-green-400'; }
        else if (roi >= 100) { status = '🟡 Solid'; statusColor = 'text-yellow-400'; }
        else if (roi >= 1) { status = '🟠 Underperforming'; statusColor = 'text-orange-400'; }
        else { status = '🔴 Losing Money'; statusColor = 'text-red-400'; }
        return { ...ch, leads, spend, booked, cpl, cr, revenue, roi, status, statusColor };
    }).filter(r => r.leads > 0 || r.spend > 0);

    const totals = results.reduce((acc, r) => ({ leads: acc.leads + r.leads, spend: acc.spend + r.spend, booked: acc.booked + r.booked, revenue: acc.revenue + r.revenue }), { leads: 0, spend: 0, booked: 0, revenue: 0 });
    const blendedROI = totals.spend > 0 ? ((totals.revenue - totals.spend) / totals.spend * 100) : 0;
    const bestChannel = results.reduce((best, r) => r.roi > (best?.roi ?? -Infinity) ? r : best, results[0]);
    const maxRevenue = Math.max(...results.map(r => r.revenue), 1);

    return (
        <div className="min-h-screen bg-navy py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-white text-center mb-8">{biz || 'Your Business'} — Lead Source ROI Dashboard</h2>

                {/* Summary Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {[
                        { label: 'Total Leads', value: totals.leads },
                        { label: 'Total Spend', value: `$${totals.spend.toLocaleString()}` },
                        { label: 'Jobs Booked', value: totals.booked },
                        { label: 'Revenue', value: `$${totals.revenue.toLocaleString()}` },
                        { label: 'Blended ROI', value: `${Math.round(blendedROI)}%` },
                    ].map(s => (
                        <div key={s.label} className="bg-white/5 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                            <p className="text-xl font-black text-accent">{s.value}</p>
                            <p className="text-xs text-slate-400">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Channel Results */}
                <div className="space-y-3 mb-8">
                    {results.map((r, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-semibold text-sm">{r.icon} {r.name}</span>
                                <span className={`text-xs font-bold ${r.statusColor}`}>{r.status}</span>
                            </div>
                            <div className="grid grid-cols-5 gap-2 text-center text-xs mb-3">
                                <div><p className="text-slate-400">Leads</p><p className="text-white font-bold">{r.leads}</p></div>
                                <div><p className="text-slate-400">CPL</p><p className="text-white font-bold">{r.spend === 0 ? 'Free' : `$${Math.round(r.cpl)}`}</p></div>
                                <div><p className="text-slate-400">Close Rate</p><p className="text-white font-bold">{Math.round(r.cr)}%</p></div>
                                <div><p className="text-slate-400">Revenue</p><p className="text-white font-bold">${r.revenue.toLocaleString()}</p></div>
                                <div><p className="text-slate-400">ROI</p><p className="text-white font-bold">{r.spend > 0 ? `${Math.round(r.roi)}%` : '∞'}</p></div>
                            </div>
                            {/* Revenue bar */}
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${r.roi > 300 ? 'bg-green-500' : r.roi >= 100 ? 'bg-yellow-500' : r.roi >= 1 ? 'bg-orange-500' : 'bg-red-500'}`} style={{ width: `${(r.revenue / maxRevenue) * 100}%` }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Insights */}
                {bestChannel && (
                    <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6 mb-6">
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-accent">lightbulb</span> Key Insights</h3>
                        <p className="text-sm text-slate-300 mb-2">• Your best channel is <strong className="text-accent">{bestChannel.name}</strong> at ${Math.round(bestChannel.cpl)} cost per lead</p>
                        <p className="text-sm text-slate-300">• Your overall close rate is {totals.leads > 0 ? Math.round((totals.booked / totals.leads) * 100) : 0}% — industry average for {trade || 'home services'} is 55-65%</p>
                    </div>
                )}

                <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                    Want ACERO to Improve Your Worst Channels? Book Free Audit
                </Link>
            </div>
        </div>
    );
}
