import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions — CashHub',
  description: 'Review the Terms & Conditions governing your use of CashHub free invoice generator, financial calculators, and productivity tools.'
};

export default function TermsPage() {
  const highlights = [
    {
      icon: '🆓',
      title: 'Free Forever',
      desc: 'CashHub is completely free to use for freelancers, contractors, agencies, and small businesses with no paywalls or sign-up tiers.'
    },
    {
      icon: '✍️',
      title: 'Your Verification Duty',
      desc: 'You maintain sole responsibility for ensuring the accuracy of all prices, tax calculations, and banking details before sending invoices.'
    },
    {
      icon: '📊',
      title: 'Educational Calculators',
      desc: 'Our financial and tax calculators are estimation aids and do not constitute certified public accounting (CPA) or legal tax counsel.'
    },
    {
      icon: '🛡️',
      title: 'Ethical Standards',
      desc: 'CashHub may only be used for lawful business management. Creating fraudulent invoices or tax evasion paperwork is strictly prohibited.'
    }
  ];

  const sections = [
    {
      id: 'acceptance',
      num: '01',
      title: 'Acceptance of Terms & Eligibility',
      content: (
        <>
          <p>
            Welcome to CashHub. By accessing our website, creating invoices or receipts, utilizing our financial calculators, or reading our business guides, you agree to be bound by these Terms &amp; Conditions and our <Link href="/privacy" style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}>Privacy Policy</Link>.
          </p>
          <p>
            If you do not agree with any part of these terms, you should immediately cease use of CashHub. You represent and warrant that you possess the legal capacity to enter into binding agreements in your applicable jurisdiction.
          </p>
        </>
      )
    },
    {
      id: 'scope-of-service',
      num: '02',
      title: 'Scope of Service & Features Provided',
      content: (
        <>
          <p>
            CashHub provides browser-based administrative productivity utilities, including:
          </p>
          <ul>
            <li><strong>Invoice &amp; Receipt Generators:</strong> Customizable visual templates, logo uploaders, itemized line items, digital signature pads, and local PDF export.</li>
            <li><strong>Financial Calculators:</strong> 16+ interactive calculators covering Sales Tax, VAT, GST, Late Payment Fees, Invoice Due Dates, DSO, Markup, Margin, and Early Payment Discounts.</li>
            <li><strong>Educational Resources:</strong> Curated billing guides, cash application workflows, and accounting best practices.</li>
          </ul>
          <p>
            We reserve the right to refine, modify, or enhance features at any time to deliver a superior user experience.
          </p>
        </>
      )
    },
    {
      id: 'user-responsibilities',
      num: '03',
      title: 'User Responsibilities & Verification Duty',
      content: (
        <>
          <p>
            Because CashHub processes your information locally without server inspection or human review, <strong>you bear sole responsibility for all documents generated:</strong>
          </p>
          <ul>
            <li><strong>Accuracy Check:</strong> You must double-check all arithmetic, discount deductions, tax rates, currency symbols, and recipient details before transmitting invoices to clients.</li>
            <li><strong>Compliance:</strong> You are responsible for ensuring that your issued invoices satisfy the formal invoicing criteria of your local tax jurisdiction (e.g. IRS, HMRC, FBR, GST Council, or EU VAT rules).</li>
            <li><strong>Document Retention:</strong> CashHub does not store your invoices in cloud archives. You are responsible for storing your downloaded PDF copies securely for bookkeeping and audit purposes.</li>
          </ul>
          <div className="legal-callout">
            <strong>Important Notice:</strong> Generating a document through CashHub does not constitute formal filing with any governmental revenue authority or tax registry.
          </div>
        </>
      )
    },
    {
      id: 'acceptable-use',
      num: '04',
      title: 'Acceptable Use Policy & Fraud Prevention',
      content: (
        <>
          <p>
            CashHub was engineered to assist honest independent workers and businesses. You strictly agree NOT to:
          </p>
          <ul>
            <li>Generate sham, deceptive, or fraudulent invoices for goods or services never rendered.</li>
            <li>Fabricate billing documentation for money laundering, illicit financial flows, or tax evasion schemes.</li>
            <li>Upload malicious scripts, corrupted imagery, or illegal imagery into signature pads or logo upload fields.</li>
            <li>Attempt to reverse-engineer, disrupt, or execute automated scraping attacks against CashHub infrastructure.</li>
          </ul>
          <p>
            Any unlawful conduct will result in immediate termination of access and may be subject to civil or criminal referral where legally required.
          </p>
        </>
      )
    },
    {
      id: 'financial-disclaimer',
      num: '05',
      title: 'Financial, Accounting & Legal Disclaimer',
      content: (
        <>
          <p>
            All calculations, formulas, tax rates, and educational guides provided by CashHub are intended solely as general informational aids:
          </p>
          <ul>
            <li><strong>No CPA Relationship:</strong> CashHub does not provide certified accounting, financial planning, legal, or tax advisory services.</li>
            <li><strong>Statutory Rates Vary:</strong> Tax legislation changes frequently by country, state, province, and product category. Always verify statutory rates with a licensed tax accountant or your official revenue service.</li>
            <li><strong>No Liability for Omissions:</strong> CashHub is not liable for errors, penalties, interest, or lost business arising from the use of our calculation results.</li>
          </ul>
        </>
      )
    },
    {
      id: 'intellectual-property',
      num: '06',
      title: 'Intellectual Property Rights',
      content: (
        <>
          <p>
            <strong>Your Data:</strong> You retain complete and unrestricted ownership of all business names, client records, custom branding, and signature data entered into our generators.
          </p>
          <p>
            <strong>Our Platform:</strong> The CashHub codebase, visual UI styling, layout systems, logos, illustrations, calculator algorithms, and articles are the proprietary intellectual property of the developer (Raza Ullah Sajid). You may not re-brand, sell, or mirror CashHub as a commercial product without explicit written consent.
          </p>
        </>
      )
    },
    {
      id: 'disclaimer-warranties',
      num: '07',
      title: 'Disclaimer of Warranties & Limitation of Liability',
      content: (
        <>
          <p>
            CashHub is provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            To the maximum extent permitted under applicable law, in no event shall CashHub, its developer, or contributors be held liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use this platform.
          </p>
        </>
      )
    },
    {
      id: 'governing-law',
      num: '08',
      title: 'Governing Law & Changes to Terms',
      content: (
        <>
          <p>
            These Terms shall be interpreted in accordance with applicable general law. We reserve the right to update these terms at our discretion to align with feature releases or legal requirements. Continued use of CashHub following any update signifies your agreement to the modified terms.
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
            <span>⚖️ Terms of Service &amp; Usage</span>
          </div>
          <h1 className="legal-header__title">Terms &amp; Conditions</h1>
          <p className="legal-header__desc">
            These terms define the fair, lawful, and transparent usage of CashHub’s invoice creators, financial calculation engines, and digital resources.
          </p>
          <div className="legal-header__meta">
            <span className="legal-meta-item">📅 Last Updated: October 2026</span>
            <span className="legal-meta-item">🆓 100% Free Forever</span>
            <span className="legal-meta-item">🛡️ Transparent Agreement</span>
          </div>
        </header>

        {/* Highlights Box */}
        <div className="legal-highlight-box">
          <div className="legal-highlight-box__header">
            <span style={{ fontSize: '1.4rem' }}>📜</span>
            <h3 className="legal-highlight-box__title">Summary in Plain English</h3>
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
        <nav className="legal-page__toc" aria-label="Terms and Conditions Sections">
          <span className="legal-page__toc-title">Jump to Section</span>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="legal-toc-pill">
              {s.num}. {s.title.split('&')[0]}
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
            <h3>Questions or Legal Inquiries?</h3>
            <p>
              For questions regarding our terms, copyright inquiries, or custom software development collaborations, reach out directly:
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