import React from 'react';

export default function PrivacyPage() {
  const sections = [
    ['1. Information you provide', 'When creating an invoice, you enter details like names, emails, addresses, and line items. This information remains in your browser session.'],
    ['2. Browser-based processing', 'CashHub processes document content locally. We do not upload or store your financial documents on remote databases by default.'],
    ['3. Local storage and preferences', 'CashHub stores functional preferences like light/dark theme in localStorage, and calculator-to-invoice imports in sessionStorage.'],
    ['4. Third-party services', 'Google Fonts and standard CDN assets are loaded under standard browser caching.'],
    ['5. Security', 'Store your exported PDFs safely and maintain your browser security.']
  ];

  return (
    <section className="section legal-page">
      <div className="container legal-page__container">
        <span className="section-label">CashHub</span>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="legal-page__intro">This policy outlines how CashHub processes and protects your information.</p>
        <div className="legal-page__content">
          {sections.map(([h, t], i) => (
            <section key={i}><h2>{h}</h2><p>{t}</p></section>
          ))}
        </div>
        <p className="form-hint" style={{ marginTop: '24px' }}>Last updated: October 2026</p>
      </div>
    </section>
  );
}