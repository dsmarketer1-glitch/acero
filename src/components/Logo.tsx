import React from 'react';

export default function Logo({ className = 'h-8', variant = 'full' }: { className?: string; variant?: 'full' | 'icon' }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative">
                <div className="bg-[#3040a0] rounded-lg p-1.5 flex items-center justify-center" style={{ aspectRatio: '1' }}>
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                        <path d="M20 6L8 34H14L20 18L26 34H32L20 6Z" fill="#d4af37" />
                        <path d="M13 28L16 20H24L27 28" stroke="#d4af37" strokeWidth="1.5" fill="none" />
                    </svg>
                </div>
            </div>
            {variant === 'full' && (
                <div className="flex items-baseline gap-0">
                    <span className="text-[#d4af37] font-black text-xl tracking-tight">ACERO</span>
                    <span className="text-slate-500 text-xs font-semibold ml-1 tracking-widest uppercase">Digital</span>
                </div>
            )}
        </div>
    );
}
