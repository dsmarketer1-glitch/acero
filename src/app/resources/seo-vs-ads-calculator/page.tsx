'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const tradeCPL: Record<string, number> = {
    HVAC: 85, Plumbing: 70, Roofing: 120, Electrical: 65, 'Pest Control': 45, Landscaping: 50,
};

export default function SeoVsAdsCalculator() {
    const [trade, setTrade] = useState('HVAC');
    const [marketSize, setMarketSize] = useState('Medium (200K-1M)');
    const [leadsNeeded, setLeadsNeeded] = useState(15);
    const [avgJob, setAvgJob] = useState(750);
    const [adsBudget, setAdsBudget] = useState(2000);
    const [seoBudget, setSeoBudget] = useState(1200);
    const [adsCpl, setAdsCpl] = useState(tradeCPL['HVAC']);
    const [seoRampMonth, setSeoRampMonth] = useState(5);
    const [seoLeadsAtSpeed, setSeoLeadsAtSpeed] = useState(20);
    const [showResults, setShowResults] = useState(false);

    const handleTrade = (t: string) => {
        setTrade(t);
        setAdsCpl(tradeCPL[t] || 70);
    };

    const months = useMemo(() => {
        const data = [];
        let adsCumSpend = 0, seoCumSpend = 0, adsCumLeads = 0, seoCumLeads = 0;
        for (let m = 1; m <= 24; m++) {
            const adsLeads = adsBudget > 0 ? Math.round(adsBudget / adsCpl) : 0;
            adsCumSpend += adsBudget;
            adsCumLeads += adsLeads;
            const adsCPL = adsCumLeads > 0 ? adsCumSpend / adsCumLeads : 0;

            let seoLeadsThisMonth = 0;
            if (m < seoRampMonth) { seoLeadsThisMonth = Math.round((m / seoRampMonth) * seoLeadsAtSpeed * 0.3); }
            else if (m === seoRampMonth) { seoLeadsThisMonth = Math.round(seoLeadsAtSpeed * 0.6); }
            else { seoLeadsThisMonth = Math.min(seoLeadsAtSpeed + Math.round((m - seoRampMonth) * 2), seoLeadsAtSpeed * 2); }
            seoCumSpend += seoBudget;
            seoCumLeads += seoLeadsThisMonth;
            const seoCPL = seoCumLeads > 0 ? seoCumSpend / seoCumLeads : 999;

            data.push({ month: m, adsLeads, adsCumSpend, adsCumLeads, adsCPL, seoLeads: seoLeadsThisMonth, seoCumSpend, seoCumLeads, seoCPL });
        }
        return data;
    }, [adsBudget, adsCpl, seoBudget, seoRampMonth, seoLeadsAtSpeed]);

    const breakEvenMonth = months.findIndex(m => m.seoCPL <= m.adsCPL && m.seoCPL > 0 && m.month > 2);

    if (!showResults) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="material-symbols-outlined text-accent text-5xl mb-4">balance</span>
                        <h1 className="text-3xl font-black text-primary mb-2">SEO vs. Google Ads</h1>
                        <p className="text-slate-500">See the real 12-month cost comparison for your business.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Trade</label>
                                <select value={trade} onChange={(e) => handleTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                                    {Object.keys(tradeCPL).map(t => <option key={t}>{t}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Market Size</label>
                                <select value={marketSize} onChange={(e) => setMarketSize(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                                    {['Small (<200K pop)', 'Medium (200K-1M)', 'Large (1M+)'].map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Monthly Leads Needed</label>
                                    <input type="number" value={leadsNeeded} onChange={(e) => setLeadsNeeded(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Avg. Job Value ($)</label>
                                    <input type="number" value={avgJob} onChange={(e) => setAvgJob(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Google Ads Budget (/mo)</label>
                                    <input type="number" value={adsBudget} onChange={(e) => setAdsBudget(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">SEO Investment (/mo)</label>
                                    <input type="number" value={seoBudget} onChange={(e) => setSeoBudget(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                                </div>
                            </div>
                            <p className="text-xs text-slate-400">Typical SEO: $800–$2,000/mo | Typical Ads: $1,000–$5,000+/mo</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Google Ads CPL ($)</label>
                                    <input type="number" value={adsCpl} onChange={(e) => setAdsCpl(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">SEO Ramp Months</label>
                                    <select value={seoRampMonth} onChange={(e) => setSeoRampMonth(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                                        {[3, 4, 5, 6, 9].map(m => <option key={m} value={m}>{m} months</option>)}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">SEO Leads/Month at Full Speed</label>
                                <input type="number" value={seoLeadsAtSpeed} onChange={(e) => setSeoLeadsAtSpeed(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" />
                            </div>
                        </div>
                        <button onClick={() => setShowResults(true)} className="mt-8 w-full py-4 bg-accent text-primary font-bold rounded-xl text-lg hover:-translate-y-1 transition-all">Calculate My Break-Even →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Results
    const m12 = months[11];
    const m24 = months[23];
    const maxCPL = Math.max(...months.slice(0, 24).map(m => Math.max(m.adsCPL, m.seoCPL > 500 ? 0 : m.seoCPL)));

    // Recommendation
    let verdict = '🏆 Both (Best ROI)';
    if (adsBudget > 2000 && leadsNeeded > 15) verdict = '⚡ Google Ads First';
    else if (adsBudget < 1500 && leadsNeeded < 10) verdict = '🌱 SEO First';

    return (
        <div className="min-h-screen bg-navy py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-white mb-2">SEO vs. Google Ads — 24-Month Comparison</h2>
                    <p className="text-slate-400 text-sm">{trade} | {marketSize}</p>
                </div>

                {/* Visual Chart (SVG bars) */}
                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 mb-8">
                    <h3 className="text-white font-bold mb-4">Cumulative Cost Per Lead Over Time</h3>
                    <div className="flex items-end gap-1 h-48">
                        {months.map((m) => {
                            const adsH = maxCPL > 0 ? (m.adsCPL / maxCPL) * 100 : 0;
                            const seoH = maxCPL > 0 ? (Math.min(m.seoCPL, maxCPL) / maxCPL) * 100 : 0;
                            const isBreakEven = breakEvenMonth >= 0 && m.month === months[breakEvenMonth].month;
                            return (
                                <div key={m.month} className="flex-1 flex flex-col items-center gap-0.5 relative">
                                    {isBreakEven && <div className="absolute -top-8 text-accent text-xs font-bold whitespace-nowrap">📍 Break-Even</div>}
                                    <div className="w-full flex gap-0.5 items-end" style={{ height: '100%' }}>
                                        <div className="flex-1 bg-blue-500/60 rounded-t" style={{ height: `${adsH}%`, minHeight: '2px' }} />
                                        <div className="flex-1 bg-green-500/60 rounded-t" style={{ height: `${seoH}%`, minHeight: '2px' }} />
                                    </div>
                                    {(m.month % 3 === 0 || m.month === 1) && <span className="text-xs text-slate-500 mt-1">M{m.month}</span>}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center gap-6 mt-4 text-xs">
                        <span className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded" /> Google Ads CPL</span>
                        <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded" /> SEO CPL</span>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 overflow-hidden mb-8">
                    <div className="grid grid-cols-3 text-center p-4 bg-white/5 font-bold text-sm">
                        <div className="text-slate-400">Metric</div>
                        <div className="text-blue-400">⚡ Google Ads</div>
                        <div className="text-green-400">🌱 SEO</div>
                    </div>
                    {[
                        { metric: 'Leads in Month 1', ads: months[0].adsLeads, seo: months[0].seoLeads },
                        { metric: 'Leads in Month 6', ads: months[5].adsLeads, seo: months[5].seoLeads },
                        { metric: 'Leads in Month 12', ads: months[11].adsLeads, seo: months[11].seoLeads },
                        { metric: 'Total 12-mo Spend', ads: `$${m12.adsCumSpend.toLocaleString()}`, seo: `$${m12.seoCumSpend.toLocaleString()}` },
                        { metric: 'CPL at Month 12', ads: `$${Math.round(m12.adsCPL)}`, seo: `$${Math.round(m12.seoCPL)}` },
                        { metric: 'Leads if you stop paying?', ads: '❌ No', seo: '✅ Yes' },
                        { metric: 'Leads in Month 24', ads: m24.adsLeads, seo: m24.seoLeads },
                    ].map(row => (
                        <div key={row.metric} className="grid grid-cols-3 text-center p-3 border-t border-white/5 text-sm">
                            <div className="text-slate-300 text-left text-xs">{row.metric}</div>
                            <div className="text-blue-300 font-bold">{row.ads}</div>
                            <div className="text-green-300 font-bold">{row.seo}</div>
                        </div>
                    ))}
                </div>

                {/* Verdict */}
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center mb-6">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Our Recommendation</p>
                    <p className="text-white text-2xl font-black">{verdict}</p>
                    <p className="text-slate-400 text-sm mt-2">
                        {verdict.includes('Both') ? 'Best strategy: Run both. Ads for immediate leads, SEO for long-term dominance.' :
                            verdict.includes('Ads') ? 'With your budget and lead needs, start with Google Ads for fastest path to leads.' :
                                'With your budget, start with SEO — lower cost, compounding returns over time.'}
                    </p>
                    {breakEvenMonth >= 0 && (
                        <p className="text-accent text-sm mt-2 font-semibold">Break-even month: Month {months[breakEvenMonth].month}</p>
                    )}
                </div>

                <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                    Not Sure? Let&apos;s Look at Your Specific Situation
                </Link>
            </div>
        </div>
    );
}
