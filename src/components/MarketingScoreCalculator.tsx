'use client';
import React, { useState } from 'react';

interface Question {
    question: string;
    options: { label: string; score: number }[];
}

interface Props {
    industry: string;
    questions: Question[];
}

export default function MarketingScoreCalculator({ industry, questions }: Props) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [domain, setDomain] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const totalSteps = questions.length + 1; // questions + domain input
    const totalScore = answers.reduce((sum, a) => sum + a, 0);
    const maxScore = 100;

    const getGrade = (score: number) => {
        if (score >= 90) return { grade: 'A+', color: '#22c55e', label: 'Exceptional' };
        if (score >= 80) return { grade: 'A', color: '#22c55e', label: 'Excellent' };
        if (score >= 70) return { grade: 'B', color: '#84cc16', label: 'Good' };
        if (score >= 60) return { grade: 'C', color: '#eab308', label: 'Average' };
        if (score >= 40) return { grade: 'D', color: '#f97316', label: 'Below Average' };
        return { grade: 'F', color: '#ef4444', label: 'Needs Improvement' };
    };

    const handleAnswer = (score: number) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(questions.length); // domain step
        }
    };

    const handleDomainSubmit = () => {
        setShowResults(true);
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmailSubmitted(true);
        setTimeout(() => setShowEmailModal(false), 2000);
    };

    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (totalScore / maxScore) * circumference;
    const gradeInfo = getGrade(totalScore);

    if (showResults) {
        return (
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-primary p-8 text-center">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Your {industry} Marketing Score</p>
                    <div className="relative inline-flex items-center justify-center my-4">
                        <svg className="transform -rotate-90" width="180" height="180">
                            <circle cx="90" cy="90" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
                            <circle
                                cx="90" cy="90" r="70"
                                stroke={gradeInfo.color}
                                strokeWidth="12"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                className="gauge-circle"
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-5xl font-black text-white">{totalScore}</span>
                            <span className="text-slate-400 text-sm font-semibold">/ 100</span>
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: gradeInfo.color + '20' }}>
                        <span className="text-2xl font-black" style={{ color: gradeInfo.color }}>{gradeInfo.grade}</span>
                        <span className="text-white text-sm font-medium">{gradeInfo.label}</span>
                    </div>
                    {domain && <p className="text-slate-400 text-sm mt-4">Analysis for: <span className="text-white font-semibold">{domain}</span></p>}
                </div>

                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {questions.map((q, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl">
                                <p className="text-xs text-slate-500 font-semibold mb-1">Q{i + 1}</p>
                                <p className="text-sm font-medium text-slate-700 mb-2 line-clamp-1">{q.question}</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full transition-all" style={{ width: `${(answers[i] / 20) * 100}%`, backgroundColor: gradeInfo.color }} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">{answers[i]}/20</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                        <button
                            onClick={() => setShowEmailModal(true)}
                            className="flex items-center justify-center gap-2 px-6 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all shadow-lg animate-pulse-gold text-sm"
                        >
                            <span className="material-symbols-outlined text-lg">download</span>
                            Get Detailed Report
                        </button>
                        <a
                            href="/contact"
                            className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all shadow-lg text-sm"
                        >
                            <span className="material-symbols-outlined text-lg">call</span>
                            Connect With Us to Improve
                        </a>
                    </div>

                    <p className="text-center text-xs text-slate-400">
                        Want to improve your score? Our experts can help you build a custom growth strategy.
                    </p>
                </div>

                {/* Email Modal */}
                {showEmailModal && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowEmailModal(false)}>
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
                            {emailSubmitted ? (
                                <div className="text-center py-8">
                                    <span className="material-symbols-outlined text-5xl text-green-500 mb-4">check_circle</span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Report Sent!</h3>
                                    <p className="text-slate-600 text-sm">Check your email for your detailed marketing score report.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Detailed Report</h3>
                                    <p className="text-slate-600 text-sm mb-6">We&apos;ll send a comprehensive PDF analysis of your digital marketing with actionable recommendations.</p>
                                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                                        <input
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm"
                                        />
                                        <button type="submit" className="w-full py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all text-sm">
                                            Send My Report
                                        </button>
                                    </form>
                                    <button onClick={() => setShowEmailModal(false)} className="w-full mt-3 text-sm text-slate-400 hover:text-slate-600">Cancel</button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Progress bar */}
            <div className="bg-accent/20 h-2">
                <div className="bg-accent h-full transition-all duration-500" style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }} />
            </div>

            <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-xs font-bold text-accent uppercase tracking-widest">
                            {industry} Marketing Score
                        </p>
                        <h3 className="text-xl font-bold text-slate-900">
                            {currentStep < questions.length
                                ? `Question ${currentStep + 1} of ${questions.length}`
                                : 'Almost There!'}
                        </h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-accent">assessment</span>
                        <span className="text-sm font-bold text-slate-600">{currentStep}/{totalSteps}</span>
                    </div>
                </div>

                {currentStep < questions.length ? (
                    <div className="animate-fade-in-up">
                        <p className="text-lg font-semibold text-slate-800 mb-6">{questions[currentStep].question}</p>
                        <div className="space-y-3">
                            {questions[currentStep].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt.score)}
                                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-accent hover:bg-accent/5 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{opt.label}</span>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-accent text-lg">chevron_right</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <p className="text-lg font-semibold text-slate-800 mb-2">Enter your website domain</p>
                        <p className="text-sm text-slate-500 mb-6">We&apos;ll reference this in your personalized report.</p>
                        <div className="flex gap-3">
                            <div className="flex-1 relative">
                                <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-lg">link</span>
                                <input
                                    type="url"
                                    placeholder="www.yourbusiness.com"
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent text-sm"
                                />
                            </div>
                            <button
                                onClick={handleDomainSubmit}
                                className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-all text-sm whitespace-nowrap"
                            >
                                Get My Score
                            </button>
                        </div>
                        <button onClick={handleDomainSubmit} className="mt-3 text-sm text-slate-400 hover:text-slate-600 underline">
                            Skip &amp; see results
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
