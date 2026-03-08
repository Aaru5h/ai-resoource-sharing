"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Zap, Home, Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Articles', href: '/news' },
    { label: 'News', href: '/news' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header style={{
            position: 'sticky', top: 0, zIndex: 50, width: '100%',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        }}>
            <div style={{
                maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
                height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <Link href="/" style={{
                    fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.5px',
                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff',
                }}>
                    <span style={{
                        width: 30, height: 30, borderRadius: 7,
                        background: 'linear-gradient(135deg, #0070f3, #0050c8)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontFamily: 'var(--font-geist-mono)',
                        fontSize: '0.62rem', fontWeight: 900,
                        boxShadow: '0 0 15px rgba(0,112,243,0.3)',
                    }}>AI</span>
                    Resource Hub
                </Link>

                {/* Desktop nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="hidden md:flex" style={{ gap: '2rem' }}>
                        {NAV_LINKS.map(l => (
                            <Link key={l.label} href={l.href} style={{
                                color: 'var(--muted-foreground)', fontSize: '0.9rem',
                                fontWeight: 500, transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                            >{l.label}</Link>
                        ))}
                    </div>
                    <Link href="/login" style={{
                        fontSize: '0.85rem', fontWeight: 600, padding: '0.5rem 1.15rem',
                        borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.04)', color: '#fff',
                        transition: 'all 0.2s',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                    >Sign In</Link>
                </nav>
            </div>
        </header>
    );
}
