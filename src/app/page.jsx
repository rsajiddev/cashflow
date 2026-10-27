'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PersonalCta from '../components/PersonalCta';

export default function HomePage() {
  const [docWord, setDocWord] = useState('Invoice');

  useEffect(() => {
    const words = ['Invoice', 'Receipt', 'Estimate'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % words.length;
      setDocWord(words[idx]);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero__decor" aria-hidden="true">
          <span className="hero-shape hero-shape--one">⌁</span>
          <span className="hero-shape hero-shape--two">✦</span>
          <span className="hero-shape hero-shape--three">◌</span>
          <span className="hero-shape hero-shape--four">▱</span>
        </div>
        <div className="hero__content animate-in is-visible">
          <div className="hero__badge">✨ 100% Free • No Sign Up Required</div>
          <h1 className="hero__title">
            Create Professional <span className="hero-highlight"><span id="heroDocumentWord">{docWord}</span></span> in Minutes
          </h1>
          <p className="hero__subtitle">
            Generate beautiful invoices and receipts, calculate taxes &amp; payments, and download PDFs — all without creating an account.
          </p>
          <div className="hero__actions">
            <Link href="/invoice" className="btn btn--primary btn--lg">Create Invoice</Link>
            <Link href="/receipt" className="btn btn--secondary btn--lg">Create Receipt</Link>
            <Link href="/calculators" className="btn btn--secondary btn--lg">Explore Calculators</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">16+</div>
              <div className="hero__stat-label">Calculators</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">5</div>
              <div className="hero__stat-label">Invoice &amp; Receipt Templates</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">100%</div>
              <div className="hero__stat-label">Free Forever</div>
            </div>
          </div>
        </div>

        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path d="M1440 12 C1180 64 1010 64 760 38 S300 5 0 58" />
            <path className="hero-wave__echo" d="M1440 25 C1180 70 1010 68 760 48 S300 18 0 68" />
          </svg>
        </div>

        <div className="hero-use-intro">
          <h2>Who can use CashHub?</h2>
          <p>A simple billing toolkit for independent professionals, growing teams, and everyday businesses.</p>
        </div>
        <div className="hero-use-strip" aria-label="CashHub use cases">
          <div className="hero-use-strip__track">
            <span>Freelancers</span><span>Agencies</span><span>Retail stores</span><span>Consultants</span><span>Bookshops</span><span>Restaurants</span><span>Contractors</span><span>Online sellers</span><span>College projects</span><span>Small businesses</span>
            <span>Freelancers</span><span>Agencies</span><span>Retail stores</span><span>Consultants</span><span>Bookshops</span><span>Restaurants</span><span>Contractors</span><span>Online sellers</span><span>College projects</span><span>Small businesses</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="features-grid animate-in is-visible">
          <div className="card feature-card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            </div>
            <h3 className="card__title">Invoice &amp; Receipt Generator</h3>
            <p className="card__desc">Create polished invoices and receipts with flexible templates.</p>
          </div>
          <div className="card feature-card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
            <h3 className="card__title">Professional PDF Export</h3>
            <p className="card__desc">Download share-ready invoice and receipt PDFs instantly.</p>
          </div>
          <div className="card feature-card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 className="card__title">Financial Calculators</h3>
            <p className="card__desc">Tax, markup, margin, late fees &amp; more.</p>
          </div>
          <div className="card feature-card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 className="card__title">Custom Templates</h3>
            <p className="card__desc">Choose professional invoice and receipt designs.</p>
          </div>
          <div className="card feature-card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
            <h3 className="card__title">Dark &amp; Light Mode</h3>
            <p className="card__desc">Easy on the eyes, day or night.</p>
          </div>
          <div className="card feature-card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="card__title">Fully Responsive</h3>
            <p className="card__desc">Works perfectly on phone, tablet &amp; desktop.</p>
          </div>
        </div>
      </section>

      {/* Quick Calculators */}
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="calc-grid animate-in is-visible">
          <Link href="/calculator/sales-tax" className="card card--clickable">
            <h3 className="card__title">Sales Tax Calculator</h3>
            <p className="card__desc">Calculate sales tax easily.</p>
            <div className="card__link">Calculate &rarr;</div>
          </Link>
          <Link href="/calculator/vat" className="card card--clickable">
            <h3 className="card__title">VAT Calculator</h3>
            <p className="card__desc">Quickly find VAT amounts.</p>
            <div className="card__link">Calculate &rarr;</div>
          </Link>
          <Link href="/calculator/markup" className="card card--clickable">
            <h3 className="card__title">Markup Calculator</h3>
            <p className="card__desc">Calculate price markups.</p>
            <div className="card__link">Calculate &rarr;</div>
          </Link>
          <Link href="/calculator/margin" className="card card--clickable">
            <h3 className="card__title">Margin Calculator</h3>
            <p className="card__desc">Determine your profit margins.</p>
            <div className="card__link">Calculate &rarr;</div>
          </Link>
          <Link href="/calculator/invoice-discount" className="card card--clickable">
            <h3 className="card__title">Invoice Discount Calculator</h3>
            <p className="card__desc">Calculate discount amounts.</p>
            <div className="card__link">Calculate &rarr;</div>
          </Link>
          <Link href="/calculator/late-payment-fee" className="card card--clickable">
            <h3 className="card__title">Late Payment Fee Calculator</h3>
            <p className="card__desc">Calculate late payment fees.</p>
            <div className="card__link">Calculate &rarr;</div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section home-faq">
        <div className="container home-faq__container">
          <div className="page-hero animate-in is-visible">
            <span className="section-label">Need to know</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-desc">A few quick answers before you get started.</p>
          </div>
          <div className="faq-list">
            <details><summary>Is CashHub free to use?</summary><p>Yes. You can create invoices and receipts, use calculators and download PDFs without signing up for an account.</p></details>
            <details><summary>Can I customise the invoice design?</summary><p>Yes. Choose from multiple templates, edit column labels, change colors, and select currencies.</p></details>
            <details><summary>Is my invoice data stored online?</summary><p>Invoice data is handled entirely in your browser. Review our Privacy Policy for details.</p></details>
            <details><summary>Can I use CashHub on my phone or tablet?</summary><p>Yes. The interface adapts fully to mobile, tablet and desktop layouts.</p></details>
          </div>
        </div>
      </section>

      <PersonalCta />
    </div>
  );
}