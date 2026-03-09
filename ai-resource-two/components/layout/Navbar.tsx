"use client";

import Link from 'next/link';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'News', href: '/news' },
];

export default function Navbar() {
    return (
        <header style={{
            position: 'sticky', top: 0, zIndex: 50, width: '100%',
            borderBottom: '1px solid var(--border)',
            backgroundColor: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        }}>
            <div style={{
                maxWidth: 1400, margin: '0 auto', padding: '0 2rem',
                height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                <Link href="/" style={{
                    fontWeight: 600, fontSize: '0.95rem', letterSpacing: '-0.02em',
                    color: '#fff',
                }}>
                    AI Resource Hub
                </Link>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
                    <div className="hidden md:flex" style={{ gap: '1.75rem' }}>
                        {NAV_LINKS.map(l => (
                            <Link key={l.label} href={l.href} style={{
                                color: 'var(--muted-foreground)', fontSize: '0.85rem',
                                fontWeight: 450, transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                            >{l.label}</Link>
                        ))}
                    </div>
                    <Link href="/login" style={{
                        fontSize: '0.82rem', fontWeight: 500, padding: '0.4rem 1rem',
                        borderRadius: 6, border: '1px solid var(--border)',
                        color: 'var(--foreground)', transition: 'all 0.2s',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
                    >Sign In</Link>
                </nav>
            </div>
        </header>
    );
}
