const pages = {
  terms: {
    title: 'Terms & Conditions',
    intro: 'These Terms & Conditions govern your use of CashHub, a browser-based invoice and business calculation toolkit. By using CashHub, you agree to use it lawfully and to review all generated information before relying on it.',
    sections: [
      ['1. About CashHub', 'CashHub provides invoice templates, PDF export, financial calculators, educational articles and related productivity features for freelancers, contractors, small businesses and teams.'],
      ['2. Acceptable use', 'You may use CashHub for legitimate administration. You must not use it to create fraudulent documents, evade tax or regulatory duties, infringe rights, disrupt the application, or upload unlawful or harmful content.'],
      ['3. Your documents and review duty', 'You retain responsibility for all information you enter and documents you export. Before sending an invoice, check client details, invoice number, dates, currency, line items, discounts, tax, payment terms and totals. CashHub does not verify that an invoice is legally sufficient in your jurisdiction.'],
      ['4. Calculators and educational content', 'Calculator results and blog articles are general educational tools, not accounting, tax, legal, financial or professional advice. Rates, deadlines and compliance requirements vary by location and can change. Obtain qualified advice where appropriate.'],
      ['5. Intellectual property', 'The CashHub name, interface, original copy, software and design belong to their respective owners. You may use exported documents for your business, but may not copy, resell or republish the application as your own service.'],
      ['6. Availability and changes', 'We may improve, change, suspend or discontinue features. We aim for reliable availability but do not guarantee uninterrupted operation, error-free output or permanent availability of a particular feature.'],
      ['7. Disclaimer and limitation of liability', 'CashHub is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, CashHub is not liable for losses arising from inaccurate input, reliance on results, incorrect invoices, missed payments, tax decisions, business interruption or inability to access the service.'],
      ['8. Updates and contact', 'We may update these terms as the service evolves. The date below identifies the latest revision. For questions or suspected issues, use the Contact Us page.']
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    intro: 'This Privacy Policy explains how CashHub handles information when you visit or use the application. CashHub is designed to provide core invoice tools in the browser without requiring an account.',
    sections: [
      ['1. Information you provide', 'When creating an invoice, you may enter business names, addresses, emails, phone numbers, client details, dates, amounts, notes and payment terms. This information is used to render the invoice in your browser. Do not enter information you are not authorised to process.'],
      ['2. Browser-based processing', 'CashHub processes invoice content locally in the browser for the current session. The application does not send invoice content to a CashHub database by default. PDF generation occurs in the browser. You remain responsible for securing your device and exported files.'],
      ['3. Local storage and preferences', 'CashHub may store functional preferences such as light/dark theme in browser storage. Temporary values may also be held in session storage when a calculator passes data to the invoice editor. You can clear this through browser settings.'],
      ['4. Contact and feedback', 'The Contact Us form prepares an email using a mailto link. Your message, name, profession and email are transmitted only when you choose to send it through your email provider. Email is not guaranteed to be encrypted.'],
      ['5. Third-party services', 'CashHub may load fonts, PDF libraries or images from third-party providers, including Cloudinary URLs that you choose to use. Those providers may process standard technical request data under their own policies.'],
      ['6. Security and your choices', 'No browser application or email channel can guarantee absolute security. Use a trusted device, keep your browser updated and store exported PDFs securely. Depending on your location, you may have rights to access, correct, delete or object to certain processing.'],
      ['7. Children and updates', 'CashHub is intended for adults and business users, not children. We may revise this policy to reflect application, vendor or legal changes. Check the revision date below for the current version.']
    ]
  }
};

export function renderLegalPage(type) {
  const page = pages[type] || pages.terms;
  return `<section class="section legal-page"><div class="container legal-page__container"><span class="section-label">CashHub</span><h1 class="section-title">${page.title}</h1><p class="legal-page__intro">${page.intro}</p><div class="legal-page__content">${page.sections.map(([heading, text]) => `<section><h2>${heading}</h2><p>${text}</p></section>`).join('')}</div><p class="form-hint">Last updated: 6 October 2026</p></div></section>`;
}
