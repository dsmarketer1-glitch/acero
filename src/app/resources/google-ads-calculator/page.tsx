'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const tradeDefaults: Record<string, { avgJob: number; cpl: number }> = {
    HVAC: { avgJob: 850, cpl: 85 },
    Plumbing: { avgJob: 650, cpl: 70 },
    Roofing: { avgJob: 4500, cpl: 120 },
    Electrical: { avgJob: 500, cpl: 65 },
    'Pest Control': { avgJob: 250, cpl: 45 },
    'Garage Doors': { avgJob: 350, cpl: 55 },
    Landscaping: { avgJob: 400, cpl: 50 },
};

const trades = Object.keys(tradeDefaults);

export default function GoogleAdsCalculator() {
    const [trade, setTrade] = useState('HVAC');
    const defaults = tradeDefaults[trade];
    const [budget, setBudget] = useState(2000);
    const [avgJob, setAvgJob] = useState(defaults.avgJob);
    const [closeRate, setCloseRate] = useState(55);
    const [cpl, setCpl] = useState(defaults.cpl);

    // When trade changes, update defaults
    const handleTrade = (t: string) => {
        setTrade(t);
        const d = tradeDefaults[t];
        setAvgJob(d.avgJob);
        setCpl(d.cpl);
    };

    const results = useMemo(() => {
        const leads = cpl > 0 ? budget / cpl : 0;
        const jobs = leads * (closeRate / 100);
        const revenue = jobs * avgJob;
        const net = revenue - budget;
        const roi = budget > 0 ? ((revenue - budget) / budget) * 100 : 0;
        // ACERO managed (20% better CPL)
        const aceroCpl = cpl * 0.8;
        const aceroLeads = budget / aceroCpl;
        const aceroJobs = aceroLeads * (closeRate / 100);
        const aceroRevenue = aceroJobs * avgJob;
        const aceroNet = aceroRevenue - budget;
        const aceroRoi = ((aceroRevenue - budget) / budget) * 100;
        return { leads, jobs, revenue, net, roi, aceroCpl, aceroLeads, aceroJobs, aceroRevenue, aceroNet, aceroRoi };
    }, [budget, avgJob, closeRate, cpl]);

    const roiColor = results.roi > 200 ? 'text-green-400' : results.roi > 100 ? 'text-amber-400' : 'text-red-400';

    return (
        <div className="bg-bg-light py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left — Inputs */}
                    <div>
                        <h1 className="text-3xl font-black text-primary mb-2">Google Ads ROI Calculator</h1>
                        <p className="text-slate-500 mb-8">See your projected return before spending a single dollar.</p>

                        {/* Trade Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {trades.map(t => (
                                <button key={t} onClick={() => handleTrade(t)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${trade === t ? 'bg-accent text-primary' : 'bg-white border border-slate-200 text-slate-600 hover:border-accent/30'}`}>{t}</button>
                            ))}
                        </div>

                        {/* Sliders */}
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-semibold text-primary">Monthly Ad Budget</label>
                                    <span className="text-accent font-bold">${budget.toLocaleString()}/mo</span>
                                </div>
                                <input type="range" min={500} max={10000} step={100} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full accent-accent h-2" />
                                <div className="flex justify-between text-xs text-slate-400"><span>$500</span><span>$10,000</span></div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-semibold text-primary">Average Job Value</label>
                                    <span className="text-accent font-bold">${avgJob.toLocaleString()}</span>
                                </div>
                                <input type="range" min={200} max={5000} step={50} value={avgJob} onChange={(e) => setAvgJob(Number(e.target.value))} className="w-full accent-accent h-2" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-semibold text-primary">Close Rate</label>
                                    <span className="text-accent font-bold">{closeRate}%</span>
                                </div>
                                <input type="range" min={20} max={90} step={5} value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} className="w-full accent-accent h-2" />
                                <p className="text-xs text-slate-400 mt-1">Industry avg: 50-65%</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-semibold text-primary">Cost Per Lead</label>
                                    <span className="text-accent font-bold">${cpl}</span>
                                </div>
                                <input type="range" min={20} max={300} step={5} value={cpl} onChange={(e) => setCpl(Number(e.target.value))} className="w-full accent-accent h-2" />
                                <p className="text-xs text-slate-400 mt-1">ACERO client avg: ${Math.round(cpl * 0.8)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Live Results */}
                    <div>
                        <div className="bg-gradient-to-br from-primary to-navy rounded-2xl p-8 text-white">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><span className="material-symbols-outlined text-accent">insights</span> Your Projected Results</h2>

                            {/* Monthly metrics */}
                            <div className="space-y-4 mb-8">
                                {[
                                    { label: 'Leads per month', value: Math.round(results.leads) },
                                    { label: 'Jobs booked per month', value: Math.round(results.jobs) },
                                    { label: 'Revenue generated', value: `$${Math.round(results.revenue).toLocaleString()}` },
                                    { label: 'Ad spend', value: `$${budget.toLocaleString()}` },
                                    { label: 'Net profit from ads', value: `$${Math.round(results.net).toLocaleString()}` },
                                ].map(m => (
                                    <div key={m.label} className="flex justify-between items-center py-2 border-b border-white/10">
                                        <span className="text-slate-300 text-sm">{m.label}</span>
                                        <span className="font-bold text-white">{m.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* ROI Gauge */}
                            <div className="text-center py-6 bg-white/5 rounded-2xl mb-8">
                                <p className={`text-5xl font-black ${roiColor}`}>{Math.round(results.roi)}%</p>
                                <p className="text-slate-400 text-sm mt-1">ROI</p>
                                <p className="text-xs text-slate-500 mt-2">Every $1 spent returns ${(results.revenue / budget).toFixed(2)}</p>
                            </div>

                            {/* Annual Projection */}
                            <div className="bg-white/5 rounded-xl p-4 mb-8">
                                <h3 className="text-sm font-bold text-accent mb-3">Annual Projection</h3>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div><p className="text-sm text-slate-400">Annual Revenue</p><p className="text-xl font-bold text-white">${(Math.round(results.revenue * 12)).toLocaleString()}</p></div>
                                    <div><p className="text-sm text-slate-400">Annual Profit</p><p className="text-xl font-bold text-green-400">${(Math.round(results.net * 12)).toLocaleString()}</p></div>
                                </div>
                            </div>

                            {/* ACERO Comparison */}
                            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                                <h3 className="text-sm font-bold text-accent mb-3">ACERO Advantage Comparison</h3>
                                <div className="grid grid-cols-3 gap-0 text-center text-xs">
                                    <div className="py-2 font-bold text-slate-400">Metric</div>
                                    <div className="py-2 font-bold text-slate-300">Self-Managed</div>
                                    <div className="py-2 font-bold text-accent">With ACERO</div>
                                    <div className="py-2 text-slate-400 border-t border-white/5">CPL</div>
                                    <div className="py-2 text-slate-300 border-t border-white/5">${cpl}</div>
                                    <div className="py-2 text-accent font-bold border-t border-white/5">${Math.round(results.aceroCpl)} (-20%)</div>
                                    <div className="py-2 text-slate-400 border-t border-white/5">Monthly Leads</div>
                                    <div className="py-2 text-slate-300 border-t border-white/5">{Math.round(results.leads)}</div>
                                    <div className="py-2 text-accent font-bold border-t border-white/5">{Math.round(results.aceroLeads)}</div>
                                    <div className="py-2 text-slate-400 border-t border-white/5">Annual Revenue</div>
                                    <div className="py-2 text-slate-300 border-t border-white/5">${Math.round(results.revenue * 12).toLocaleString()}</div>
                                    <div className="py-2 text-accent font-bold border-t border-white/5">${Math.round(results.aceroRevenue * 12).toLocaleString()}</div>
                                </div>
                                <p className="text-xs text-slate-400 text-center mt-3">The ACERO difference: +${Math.round((results.aceroRevenue - results.revenue) * 12).toLocaleString()}/year</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 text-center mt-3">Projections based on industry averages. Results vary.</p>
                        <Link href="/contact" className="block w-full mt-4 py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all">
                            Ready to See These Numbers? Get Free Audit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
