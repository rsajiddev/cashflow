import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — CashHub',
  description: 'Understand how CashHub protects your privacy with our 100% client-side, zero-cloud storage document processing architecture.'
};

export default function PrivacyPage() {
  const highlights = [
    {
      icon: '🔒',
      title: 'Zero Cloud Storage',
      desc: 'All invoice numbers, client names, line items, and totals are computed strictly in your browser. We never store them on remote servers.'
    },
    {
      icon: '⚡',
      title: 'Local PDF Generation',
      desc: 'PDF downloads are created locally on your device using client-side rendering engines. Your documents never transit our servers.'
    },
    {
      icon: '🛡️',
      title: 'No Advertising Cookies',
      desc: 'We do not sell your data, use invasive cross-site tracking cookies, or build behavioral profiles of our users.'
    },
    {
      icon: '💾',
      title: 'You Own Your Data',
      desc: 'Preferences like dark mode and calculator handoffs stay solely within your device’s localStorage and sessionStorage.'
    }
  ];

  const sections = [
    {
      id: 'core-principle',
      num: '01',
      title: 'Core Philosophy: Privacy by Architecture',
      content: (
        <>
          <p>
            CashHub was founded on the fundamental belief that sensitive billing and financial paperwork should remain completely private to you and your business. Unlike typical SaaS platforms that store every receipt and customer name on cloud databases, CashHub is engineered as a <strong>100% client-side application</strong>.
          </p>
          <p>
            When you create an invoice, receipt, or calculate taxes, the computation and document rendering happen exclusively within your browser’s memory. We do not require account registration, user logins, or credit cards to use our tools.
          </p>
          <div className="legal-callout">
            <strong>Key Guarantee:</strong> We do not operate a backend database that collects, logs, or inspects the invoices or receipts you generate. If you close your browser tab without saving, your session data is automatically cleared.
          </div>
        </>
      )
    },
    {
      id: 'data-processing',
      num: '02',
      title: 'Information You Provide & How It Is Handled',
      content: (
        <>
          <p>
            While using our generators and calculation tools, you may enter various types of business and personal data:
          </p>
          <ul>
            <li><strong>Issuer Information:</strong> Company name, logo image, business address, email, phone number, and tax ID / VAT registration numbers.</li>
            <li><strong>Client Information:</strong> Client business name, contact person, billing address, and email.</li>
            <li><strong>Line Items &amp; Financials:</strong> Item descriptions, quantities, unit prices, discounts, tax rates, payment terms, and bank transfer notes.</li>
            <li><strong>Signatures:</strong> Digital signature drawings captured on the HTML5 canvas or signature PNG files uploaded from your device.</li>
          </ul>
          <p>
            All such inputs exist exclusively inside React state and your local browser session. Neither CashHub nor any third party has access to view, intercept, or monetize this information.
          </p>
        </>
      )
    },
    {
      id: 'storage-mechanisms',
      num: '03',
      title: 'Local Storage, Cookies & Session State',
      content: (
        <>
          <p>
            CashHub uses modern web browser storage APIs strictly for essential, functional purposes:
          </p>
          <ul>
            <li><strong>localStorage:</strong> Stores your aesthetic theme preference (Light Theme vs. Dark Theme) so your preferred visual mode persists across visits.</li>
            <li><strong>sessionStorage:</strong> Facilitates seamless one-click transfers from our 16+ financial calculators (e.g. Sales Tax, VAT, Markup) into the Invoice Generator within the same browsing session.</li>
            <li><strong>Cookies:</strong> CashHub does <em>not</em> set marketing, tracking, or ad-targeting cookies. Any session tokens or cookies placed by third-party delivery infrastructure (e.g. CDNs) are solely for traffic routing and DDoS security.</li>
          </ul>
        </>
      )
    },
    {
      id: 'pdf-generation',
      num: '04',
      title: 'PDF Export & Device Security',
      content: (
        <>
          <p>
            When you click &ldquo;Download PDF&rdquo; or &ldquo;Print Document&rdquo;:
          </p>
          <ul>
            <li>Your browser dynamically compiles the invoice layout using client-side libraries (<code style={{ color: 'var(--accent-text)' }}>html2pdf.js</code>) and the native browser print engine.</li>
            <li>The PDF file is assembled and downloaded directly to your computer or mobile device without being transferred over the internet to any external server.</li>
            <li>Because files are stored on your local hardware, you maintain sole custody of your documents. We recommend keeping backups of your exported PDFs on encrypted storage.</li>
          </ul>
        </>
      )
    },
    {
      id: 'third-parties',
      num: '05',
      title: 'Third-Party Services & Infrastructure',
      content: (
        <>
          <p>
            To deliver high performance and beautiful typography, CashHub relies on reputable infrastructure providers:
          </p>
          <ul>
            <li><strong>Google Fonts:</strong> We link to Google Fonts (<a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-text)' }}>Inter font family</a>). Google may log standard IP address and browser header requests for font asset delivery in accordance with Google’s Privacy Policy.</li>
            <li><strong>Hosting &amp; CDN:</strong> Web application assets (HTML, CSS, JS) are distributed via modern CDN networks for global speed and caching. Standard server access logs (IP address, user-agent, timestamp) may be recorded for network security and abuse prevention.</li>
          </ul>
        </>
      )
    },
    {
      id: 'children-privacy',
      num: '06',
      title: 'Children’s Privacy & Data Protection Rights',
      content: (
        <>
          <p>
            CashHub is designed for professional freelancers, small business owners, and accounting administrators. We do not knowingly collect or solicit personal information from children under the age of 16.
          </p>
          <p>
            Under international privacy frameworks including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you retain the right to access, rectify, or erase your data. Because CashHub does not store your information on servers, you can exercise complete erasure at any moment simply by clearing your browser’s cache and site data.
          </p>
        </>
      )
    },
    {
      id: 'updates',
      num: '07',
      title: 'Policy Revisions & Updates',
      content: (
        <>
          <p>
            We may periodically revise this Privacy Policy to reflect enhancements to our toolset, new calculation modules, or changes in regulatory obligations. Any updates will be published immediately on this page with an updated revision date.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="section legal-page">
      <div className="container legal-page__container">
        {/* Header Section */}
        <header className="legal-header">
          <div className="legal-header__badge">
            <span>🛡️ Data Privacy &amp; Trust</span>
          </div>
          <h1 className="legal-header__title">Privacy Policy</h1>
          <p className="legal-header__desc">
            CashHub is engineered with a privacy-first, client-side architecture. Your invoices, client records, financial calculations, and signatures are processed exclusively on your device.
          </p>
          <div className="legal-header__meta">
            <span className="legal-meta-item">📅 Last Updated: October 2026</span>
            <span className="legal-meta-item">🔒 100% In-Browser Privacy</span>
            <span className="legal-meta-item">⚖️ Zero Cloud Data Storage</span>
          </div>
        </header>

        {/* Highlights Box */}
        <div className="legal-highlight-box">
          <div className="legal-highlight-box__header">
            <span style={{ fontSize: '1.4rem' }}>✨</span>
            <h3 className="legal-highlight-box__title">Key Privacy Safeguards at a Glance</h3>
          </div>
          <div className="legal-highlight-box__grid">
            {highlights.map((h, i) => (
              <div key={i} className="legal-highlight-card">
                <h4><span>{h.icon}</span> {h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="legal-page__toc" aria-label="Privacy Policy Sections">
          <span className="legal-page__toc-title">Jump to Section</span>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="legal-toc-pill">
              {s.num}. {s.title.split(':')[0]}
            </a>
          ))}
        </nav>

        {/* Legal Sections */}
        <div className="legal-page__content">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="legal-section-card">
              <div className="legal-section-header">
                <span className="legal-section-num">{s.num}</span>
                <h2>{s.title}</h2>
              </div>
              {s.content}
            </article>
          ))}
        </div>

        {/* Contact / Inquiries Box */}
        <aside className="legal-contact-card">
          <div className="legal-contact-card__info">
            <h3>Questions About Your Privacy?</h3>
            <p>
              If you have any questions, suggestions, or technical concerns regarding data privacy on CashHub, feel free to reach out directly to the developer:
            </p>
          </div>
          <div className="legal-contact-card__links">
            <a href="mailto:rsajiddev@gmail.com" className="legal-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              <span>rsajiddev@gmail.com</span>
            </a>
            <a href="https://wa.me/923012496214" target="_blank" rel="noopener noreferrer" className="legal-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8.5 8.5c.3 2 2 3.7 4 4"/></svg>
              <span>WhatsApp: 0301 2496214</span>
            </a>
            <a href="https://www.linkedin.com/in/rsajiddev/" target="_blank" rel="noopener noreferrer" className="legal-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn: /in/rsajiddev</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}