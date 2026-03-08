"use client";

import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.04)',
            marginTop: '4rem',
        }}>
            <div style={{
                maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: '1rem',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                        width: 22, height: 22, borderRadius: 5,
                        background: 'linear-gradient(135deg, #0070f3, #0050c8)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontFamily: 'var(--font-geist-mono)',
                        fontSize: '0.48rem', fontWeight: 900,
                    }}>AI</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>
                        © {new Date().getFullYear()} AI Resource Hub
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', alignItems: 'center' }}>
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
