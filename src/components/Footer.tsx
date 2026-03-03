import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
    services: [
        { label: 'Google Ads (PPC)', href: '/services/google-ads' },
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Web Design', href: '/services/web-design' },
        { label: 'Google LSAs', href: '/services/google-lsa' },
        { label: 'Social Ads', href: '/services/social-ads' },
        { label: 'Reputation Mgmt', href: '/services/reputation-management' },
    ],
    industries: [
        { label: 'HVAC', href: '/industries/hvac' },
        { label: 'Plumbing', href: '/industries/plumbing' },
        { label: 'Roofing', href: '/industries/roofing' },
        { label: 'Electrical', href: '/industries/electrical' },
        { label: 'Pest Control', href: '/industries/pest-control' },
        { label: 'Landscaping', href: '/industries/landscaping' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Case Studies', href: '/results' },
        { label: 'Resources', href: '/resources' },
        { label: 'Free Audit', href: '/audit' },
        { label: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#3040a0] rounded-lg p-1.5">
                                <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
                                    <path d="M20 6L8 34H14L20 18L26 34H32L20 6Z" fill="#d4af37" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-accent font-black text-xl">ACERO</span>
                                <span className="text-slate-400 text-xs font-semibold ml-1 tracking-widest uppercase">Digital</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                            The #1 Digital Marketing Agency for Home Service Professionals. We build the growth engines that keep your trucks rolling and your phones ringing.
                        </p>
                        <div className="flex gap-3">
                            {['public', 'thumb_up', 'alternate_email'].map((icon) => (
                                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 transition-colors text-slate-400 hover:text-accent">
                                    <span className="material-symbols-outlined text-lg">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6 text-accent text-sm uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="font-bold mb-6 text-accent text-sm uppercase tracking-wider">Industries</h4>
                        <ul className="space-y-3">
                            {footerLinks.industries.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company & Contact */}
                    <div>
                        <h4 className="font-bold mb-6 text-accent text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 mb-8">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-3 text-sm text-slate-400">
                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">mail</span> hello@acerodigital.com</p>
                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">call</span> 1-800-555-0199</p>
                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-sm">location_on</span> Austin, TX</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">© 2024 ACERO Digital Marketing. All rights reserved. Built for Home Service Growth.</p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
