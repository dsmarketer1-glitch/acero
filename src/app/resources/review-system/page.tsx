'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const tones = ['🤝 Friendly & Casual', '💼 Professional & Formal', '⚡ Short & Direct'];

function generateTemplates(biz: string, name: string, trade: string, city: string, toneIdx: number) {
    const t = toneIdx;
    const link = '[GOOGLE_REVIEW_LINK]';
    return [
        {
            label: '📱 SMS #1 — Right After Job',
            timing: 'Send within 1 hour of job completion',
            content: t === 0
                ? `Hi! It's ${name} from ${biz} 👋 It was great helping you today with your ${trade.toLowerCase()} needs. If we did a good job, it would mean the world to us if you left a quick Google review — it really helps small businesses like ours in ${city}. Takes 30 seconds: ${link} Thanks so much! 🙏`
                : t === 1
                    ? `Thank you for choosing ${biz} for your ${trade.toLowerCase()} service today. We truly value your business. If you were satisfied with our work, we'd greatly appreciate a brief Google review at your convenience: ${link}. Your feedback helps us serve the ${city} community better. – ${name}, ${biz}`
                    : `Hey — ${name} from ${biz}. If you're happy with today's work, a quick Google review would really help us out: ${link}. Thanks! 🙌`
        },
        {
            label: '📱 SMS #2 — Follow-up (3 days later)',
            timing: 'Send 3 days after first SMS if no review',
            content: t === 0
                ? `Hi again from ${biz}! Just a friendly reminder — if you had a chance to leave us a review, we'd really appreciate it. Here's the link: ${link}. No pressure at all! We just love hearing from customers in ${city}. 😊`
                : t === 1
                    ? `Hello, this is ${biz} following up. If you haven't had the opportunity to share your experience, your review would be highly valued: ${link}. Thank you for your time. – ${name}`
                    : `Quick follow-up from ${biz} — if you haven't left that review yet, here's the link: ${link}. Appreciate it! – ${name}`
        },
        {
            label: '📧 Email #1 — Same Day',
            timing: 'Schedule 2-3 hours after job completion',
            content: `Subject: How was your experience with ${biz}?\n\nHi,\n\nThank you for trusting ${biz} with your ${trade.toLowerCase()} needs today! We hope everything went smoothly.\n\nIf you have 30 seconds, we'd love to hear about your experience. A Google review helps other homeowners in ${city} find reliable ${trade.toLowerCase()} service.\n\n👉 Leave a review here: ${link}\n\nThank you for your support!\n\n${name}\n${biz}`
        },
        {
            label: '📧 Email #2 — One-week Follow-up',
            timing: 'Only send if no review after 7 days',
            content: `Subject: We'd love your feedback, quick reminder from ${biz}\n\nHi,\n\nHope everything is working great since our visit! We noticed we haven't received your feedback yet — no worries at all.\n\nIf you're willing, a quick Google review goes a long way for a local business like ours in ${city}: ${link}\n\nThank you for choosing ${biz}!\n\nWarm regards,\n${name}`
        },
        {
            label: '🗣️ Verbal Script — Tech Says In-Person',
            timing: 'Train every tech to say this before leaving',
            content: `"Hey, I really appreciate you letting us take care of this today. If you felt like we did a good job, it would mean a lot to us if you could leave a quick Google review. I'll have the office text you a direct link — it takes about 30 seconds. Thanks so much, and don't hesitate to call ${biz} if you need anything!"`
        },
        {
            label: '📞 Verbal Script — Office Phone Follow-up',
            timing: 'For office/dispatcher to use when following up',
            content: `"Hi, this is [name] calling from ${biz}. I wanted to follow up on the ${trade.toLowerCase()} work we did for you recently and make sure everything is working great. [Pause for response.] Wonderful! If you have a moment, we'd really appreciate it if you could leave us a quick Google review. I can text you the direct link right now — it takes less than a minute. Your feedback helps other homeowners in ${city} find us. Thank you so much!"`
        },
    ];
}

export default function ReviewSystem() {
    const [biz, setBiz] = useState('');
    const [name, setName] = useState('');
    const [trade, setTrade] = useState('');
    const [city, setCity] = useState('');
    const [tone, setTone] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [copied, setCopied] = useState<number | null>(null);

    const templates = generateTemplates(biz || 'Your Business', name || 'Your Name', trade || 'HVAC', city || 'Your City', tone);

    const copyTemplate = (idx: number, content: string) => {
        navigator.clipboard.writeText(content);
        setCopied(idx);
        setTimeout(() => setCopied(null), 2000);
    };

    if (!showResults) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-bg-light">
                <div className="max-w-xl mx-auto px-4 text-center py-20">
                    <span className="material-symbols-outlined text-accent text-5xl mb-6">star</span>
                    <h1 className="text-3xl md:text-4xl font-black text-primary mb-4">The 5-Star Review System</h1>
                    <p className="text-slate-500 mb-8">Get 6 personalised review request templates for your business — in 60 seconds.</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                        <input value={biz} onChange={(e) => setBiz(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Business Name (used in templates)" />
                        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="Your First Name (for scripts)" />
                        <select value={trade} onChange={(e) => setTrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent">
                            <option value="">Trade</option>
                            {['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pest Control', 'Landscaping'].map(t => <option key={t}>{t}</option>)}
                        </select>
                        <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent" placeholder="City (used in templates)" />
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Tone Preference</label>
                            <div className="grid grid-cols-3 gap-2">
                                {tones.map((t, i) => (
                                    <button key={t} onClick={() => setTone(i)} className={`p-3 rounded-xl border text-sm text-center transition-all ${tone === i ? 'bg-accent/10 border-accent font-bold' : 'border-slate-200 hover:border-accent/30'}`}>{t}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setShowResults(true)} className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:-translate-y-1 transition-all text-lg shadow-lg">Generate My Templates →</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-bg-light py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-2">Your Personalised 5-Star Review System</h2>
                    <p className="text-slate-500">Copy, paste, send. That&apos;s it.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {templates.map((tpl, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-primary text-sm">{tpl.label}</h3>
                                <button onClick={() => copyTemplate(i, tpl.content)} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${copied === i ? 'bg-green-100 text-green-600' : 'bg-accent/10 text-accent hover:bg-accent/20'}`}>
                                    {copied === i ? '✓ Copied!' : 'Copy'}
                                </button>
                            </div>
                            <p className="text-xs text-accent mb-3 flex items-center gap-1"><span className="material-symbols-outlined text-xs">schedule</span> {tpl.timing}</p>
                            <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-line font-mono text-xs">{tpl.content}</div>
                        </div>
                    ))}
                </div>

                {/* Golden Rules */}
                <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20 mb-8">
                    <h3 className="font-bold text-primary mb-4 text-lg">🏆 The 3 Golden Rules of Review Requests</h3>
                    <div className="space-y-3">
                        <p className="text-sm text-slate-700"><strong>1. Ask within 1 hour</strong> — Memory is fresh, emotion is high</p>
                        <p className="text-sm text-slate-700"><strong>2. Make it a direct link</strong> — Never say &quot;just search for us&quot;</p>
                        <p className="text-sm text-slate-700"><strong>3. Train every touchpoint</strong> — Tech, office, email, SMS</p>
                    </div>
                </div>

                <Link href="/contact" className="block w-full py-4 bg-accent text-primary font-bold rounded-xl text-center hover:-translate-y-1 transition-all text-lg">
                    Want Us to Automate This Entire System? Let&apos;s Talk
                </Link>
            </div>
        </div>
    );
}
