'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const categories = [
    'How many Google reviews do you have?',
    'What is your average Google star rating?',
    'Where do you rank on Google Maps for your main service + city?',
    'Do you run Google Ads?',
    'How would you describe your website?',
    'Do you have a blog or content strategy?',
    'How active are you on social media?',
    'Do you run Facebook/Instagram ads?',
    'How strong is your brand vs. competitors?',
    'How quickly do you respond to new leads?',
];

const options = [
    ['Under 10', '10-24', '25-49', '50-99', '100+'],
    ['Under 3.5', '3.5-3.9', '4.0-4.4', '4.5-4.9', '5.0'],
    ['Not visible', 'Position 8-10', 'Position 4-7', 'Top 3', '#1'],
    ['No', 'Used to but stopped', 'Yes but unsure if working', 'Yes and tracking', 'Yes and profitable'],
    ["Don't have one", 'Old/outdated', 'Decent but not converting', 'Good looking', 'Optimised for leads'],
    ['Nothing', 'Posted once or twice', 'Some but inconsistent', 'Regular content', 'Strong content + authority'],
    ['Not at all', 'Profile exists, rarely post', 'Occasionally', 'Post weekly', 'Very active + engaged'],
    ['Never', 'Tried once', 'Running but not optimised', 'Running and tracking', 'Running and profitable'],
    ['No real brand', 'Some recognition', 'Known locally', 'Preferred by many', 'Market leader'],
    ['Hours or days', 'Within a few hours', 'Under 1 hour', 'Under 15 mins', 'Instantly (automated)'],
];

export default function CompetitorScorecard() {
    const [step, setStep] = useState(0);
    const [yourBiz, setYourBiz] = useState('');
    const [trade, setTrade] = useState('');
    const [city, setCity] = useState('');
    const [competitor, setCompetitor] = useState('');
    const [yourScores, setYourScores] = useState<number[]>(Array(10).fill(-1));
    const [theirScores, setTheirScores] = useState<number[]>(Array(10).fill(-1));

    // Intro
    if (step === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6">compare_arrows</span>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">What Your Competitors Know That You Don&apos;t</h1>
                    <p className="text-slate-500 mb-8">See exactly how you stack up against your #1 local competitor.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <input value={yourBiz} onChange={(e) => setYourBiz(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Your Business Name" />
                        <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                            <option value="">Your Trade</option>
                            {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Landscaping'].map(t => <option key={t}>{t}</option>)}
                        </select>
                        <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Your City / Metro Area" />
                        <input value={competitor} onChange={(e) => setCompetitor(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Competitor's Business Name" />
                    </div>
                    <button onClick={() => setStep(1)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">Start the Comparison →</button>
                </div>
            </div>
        );
    }

    // Your scores
    if (step === 1) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex gap-2 mb-6"><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-slate-200" /></div>
                    <p className="text-xs text-slate-400 mb-2">Step 1 of 2 — Be honest, this is just for you</p>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <h2 className="text-xl font-bold text-primary mb-6">About YOUR Business</h2>
                        <div className="space-y-6">
                            {categories.map((cat, i) => (
                                <div key={i}>
                                    <p className="font-semibold text-primary text-sm mb-2">{i + 1}. {cat}</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                                        {options[i].map((opt, oi) => (
                                            <button key={oi} onClick={() => { const n = [...yourScores]; n[i] = oi; setYourScores(n); }} className={`p-2 rounded-lg border text-xs text-center transition-all ${yourScores[i] === oi ? 'bg-accent/10 border-accent font-bold text-primary' : 'border-slate-200 text-slate-500 hover:border-accent/30'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setStep(2)} className="mt-8 w-full py-3 bg-accent text-primary font-bold rounded-xl">Next: Rate Your Competitor →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Their scores
    if (step === 2) {
        return (
            <div className="min-h-[80vh] bg-bg-light py-16">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex gap-2 mb-6"><div className="h-2 flex-1 rounded-full bg-accent" /><div className="h-2 flex-1 rounded-full bg-accent" /></div>
                    <p className="text-xs text-slate-400 mb-2">Step 2 of 2 — Estimate based on what you&apos;ve seen</p>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <h2 className="text-xl font-bold text-primary mb-6">About Your TOP Competitor</h2>
                        <p className="text-xs text-slate-400 mb-6">Not sure? Google &apos;{competitor || 'their name'} + {city || 'city'}&apos; and check.</p>
                        <div className="space-y-6">
                            {categories.map((cat, i) => (
                                <div key={i}>
                                    <p className="font-semibold text-primary text-sm mb-2">{i + 1}. {cat.replace('you', 'they').replace('your', 'their').replace('do you', 'do they')}</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                                        {options[i].map((opt, oi) => (
                                            <button key={oi} onClick={() => { const n = [...theirScores]; n[i] = oi; setTheirScores(n); }} className={`p-2 rounded-lg border text-xs text-center transition-all ${theirScores[i] === oi ? 'bg-red-50 border-red-300 font-bold text-red-700' : 'border-slate-200 text-slate-500 hover:border-red-200'}`}>{opt}</button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setStep(3)} className="mt-8 w-full py-3 bg-accent text-primary font-bold rounded-xl">See the Comparison →</button>
                    </div>
                </div>
            </div>
        );
    }

    // Results
    const wins = categories.reduce((acc, _, i) => acc + (yourScores[i] > theirScores[i] ? 1 : 0), 0);
    const losses = categories.reduce((acc, _, i) => acc + (theirScores[i] > yourScores[i] ? 1 : 0), 0);
    let verdict = '', verdictColor = '';
    if (wins >= 8) { verdict = "You're the Market Leader — protect it"; verdictColor = 'text-green-400'; }
    else if (wins >= 5) { verdict = 'Competitive — a few gaps to close'; verdictColor = 'text-blue-400'; }
    else if (wins >= 3) { verdict = "They Have the Edge — time to catch up"; verdictColor = 'text-amber-400'; }
    else { verdict = "They're Dominating — urgent action needed"; verdictColor = 'text-red-400'; }

    return (
        <div className="min-h-screen bg-navy py-16">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">{yourBiz || 'You'} vs. {competitor || 'Competitor'}</h2>
                    <p className={`text-lg font-bold ${verdictColor}`}>You won {wins} out of 10 categories</p>
                    <p className={`text-sm ${verdictColor} mt-1`}>{verdict}</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 overflow-hidden mb-8">
                    <div className="grid grid-cols-4 gap-0 text-center text-sm font-bold border-b border-white/10 p-4">
                        <div className="text-slate-400">Category</div>
                        <div className="text-blue-400">{yourBiz || 'You'}</div>
                        <div className="text-red-400">{competitor || 'Competitor'}</div>
                        <div className="text-slate-400">Winner</div>
                    </div>
                    {categories.map((cat, i) => {
                        const y = yourScores[i] >= 0 ? yourScores[i] + 1 : 0;
                        const t = theirScores[i] >= 0 ? theirScores[i] + 1 : 0;
                        const winner = y > t ? 'you' : t > y ? 'them' : 'tie';
                        return (
                            <div key={i} className="grid grid-cols-4 gap-0 text-center text-sm border-b border-white/5 p-3 items-center">
                                <div className="text-left text-slate-300 text-xs">{cat.split('?')[0].replace('Do you ', '').replace('How ', '').slice(0, 30)}</div>
                                <div className="font-bold text-blue-400">{y}/5</div>
                                <div className="font-bold text-red-400">{t}/5</div>
                                <div>
                                    {winner === 'you' && <span className="text-green-400 text-xs font-bold">You Win ✓</span>}
                                    {winner === 'them' && <span className="text-red-400 text-xs font-bold">They Win ✗</span>}
                                    {winner === 'tie' && <span className="text-slate-400 text-xs">Tied =</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex gap-3 mb-4">
                    <input placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm" />
                    <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-lg text-sm">Send Report</button>
                </div>
                <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                    Want ACERO to Help You Beat Them? Book Free Call
                </Link>
            </div>
        </div>
    );
}
