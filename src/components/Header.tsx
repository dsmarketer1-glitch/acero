'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Results', href: '/results' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/60 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <Logo className="h-10" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/audit"
                        className="hidden sm:flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary-light text-white text-sm font-bold rounded-full shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Free Audit
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden md:flex items-center justify-center h-10 px-6 border border-accent/40 text-primary text-sm font-bold rounded-full hover:bg-accent/5 transition-all"
                    >
                        Contact Us
                    </Link>
                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 text-slate-600"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {mobileOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-fade-in-up">
                    <nav className="flex flex-col p-4 gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="border-t border-slate-100 mt-2 pt-2 flex flex-col gap-2">
                            <Link href="/audit" className="px-4 py-3 bg-primary text-white text-sm font-bold rounded-lg text-center" onClick={() => setMobileOpen(false)}>
                                Free Audit
                            </Link>
                            <Link href="/contact" className="px-4 py-3 border border-slate-200 text-primary text-sm font-bold rounded-lg text-center" onClick={() => setMobileOpen(false)}>
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
