import React from 'react';

export default function TermsPage() {
  const sections = [
    ['1. About CashHub', 'CashHub provides invoice templates, PDF export, financial calculators, educational articles and related productivity features for freelancers, contractors, small businesses and teams.'],
    ['2. Acceptable use', 'You may use CashHub for legitimate administration. You must not use it to create fraudulent documents, evade tax or regulatory duties, infringe rights, disrupt the application, or upload unlawful content.'],
    ['3. Your documents and review duty', 'You retain responsibility for all information you enter and documents you export. Before sending an invoice, check all details, tax, payment terms and totals.'],
    ['4. Calculators and educational content', 'Calculator results and blog articles are general educational tools, not legal, financial, or tax advice. Obtain qualified advice where appropriate.'],
    ['5. Intellectual property', 'The CashHub name, interface, original copy, software and design belong to their respective owners.'],
    ['6. Disclaimer and limitation of liability', 'CashHub is provided on an “as is” and “as available” basis without warranties.']
  ];

  return (
    <section className="section legal-page">
      <div className="container legal-page__container">
        <span className="section-label">CashHub</span>
        <h1 className="section-title">Terms &amp; Conditions</h1>
        <p className="legal-page__intro">These Terms &amp; Conditions govern your use of CashHub. By using CashHub, you agree to these terms.</p>
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