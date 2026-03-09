"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
        }}>
            <div style={{
                maxWidth: 900, margin: '0 auto', padding: '2.5rem 2rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: '1rem',
            }}>
                <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                        © {new Date().getFullYear()} AI Resource Hub
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', margin: '0 0.5rem' }}>·</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                        Built by Vaishnavi
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem' }}>
                    {[
                        { label: 'Resources', href: '/resources' },
                        { label: 'News', href: '/news' },
                        { label: 'GitHub', href: 'https://github.com' },
                    ].map(l => (
                        <Link key={l.href} href={l.href} style={{
                            color: 'var(--muted-foreground)', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                        >{l.label}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
