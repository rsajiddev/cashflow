'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('cashhub-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      const fill = document.getElementById('scrollProgressFill');
      if (fill) fill.style.height = `${progress}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('cashhub-theme', next);
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.style.backgroundColor = next === 'dark' ? '#0B1120' : '#F8FAFC';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/invoice', label: 'Invoice' },
    { href: '/receipt', label: 'Receipt' },
    { href: '/calculators', label: 'Calculators' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label="CashHub Home">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="var(--accent)" />
                <path d="M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm1 15.93V23h-2v-1.07A5.008 5.008 0 0111 17h2a3 3 0 006 0c0-1.3-.84-2.4-2-2.82V10.07A5.008 5.008 0 0121 15h-2a3 3 0 00-6 0c0 1.3.84 2.4 2 2.82v4.11z" fill="white" />
              </svg>
            </div>
            <span className="logo-text">Cash<span className="logo-highlight">Hub</span></span>
          </Link>

          <nav className="header__nav" id="mainNav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" title="Toggle theme">
              <svg className="theme-icon theme-icon--light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg className="theme-icon theme-icon--dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
              <span className="theme-toggle__label">Theme</span>
            </button>

            <button
              className={`mobile-menu-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        <div className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(false)}></div>

        <nav className={`mobile-nav ${mobileOpen ? 'active' : ''}`} aria-label="Mobile navigation">
          <div className="mobile-nav__header">
            <span className="mobile-nav__title">Menu</span>
            <button className="mobile-nav__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="scroll-progress" id="scrollProgress" role="progressbar" aria-label="Page scroll progress">
        <span className="scroll-progress__fill" id="scrollProgressFill"></span>
      </div>
    </>
  );
}