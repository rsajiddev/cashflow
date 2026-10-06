export function renderHome() {
  return `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero__decor" aria-hidden="true"><span class="hero-shape hero-shape--one">⌁</span><span class="hero-shape hero-shape--two">✦</span><span class="hero-shape hero-shape--three">◌</span><span class="hero-shape hero-shape--four">▱</span></div>
        <div class="hero__content animate-in">
          <div class="hero__badge">✨ 100% Free • No Sign Up Required</div>
          <h1 class="hero__title">Create Professional <span class="hero-highlight"><span id="heroDocumentWord">Invoice</span></span> in Minutes</h1>
          <p class="hero__subtitle">Generate beautiful invoices and receipts, calculate taxes & payments, and download PDFs — all without creating an account.</p>
          <div class="hero__actions">
            <a href="#/invoice" class="btn btn--primary btn--lg">Create Invoice</a>
            <a href="#/receipt" class="btn btn--secondary btn--lg">Create Receipt</a>
            <a href="#/calculators" class="btn btn--secondary btn--lg">Explore Calculators</a>
          </div>
          <div class="hero__stats">
            <div class="hero__stat">
              <div class="hero__stat-value" data-counter="14" data-suffix="+">0+</div>
              <div class="hero__stat-label">Calculators</div>
            </div>
            <div class="hero__stat">
              <div class="hero__stat-value" data-counter="5">0</div>
              <div class="hero__stat-label">Invoice & Receipt Templates</div>
            </div>
            <div class="hero__stat">
              <div class="hero__stat-value" data-counter="100" data-suffix="%">0%</div>
              <div class="hero__stat-label">Free Forever</div>
            </div>
          </div>
        </div>
        <div class="hero-use-strip" aria-label="CashHub use cases"><div class="hero-use-strip__track"><span>Freelancers</span><span>Agencies</span><span>Retail stores</span><span>Consultants</span><span>Bookshops</span><span>Restaurants</span><span>Contractors</span><span>Online sellers</span><span>College projects</span><span>Small businesses</span><span>Freelancers</span><span>Agencies</span><span>Retail stores</span><span>Consultants</span><span>Bookshops</span><span>Restaurants</span><span>Contractors</span><span>Online sellers</span><span>College projects</span><span>Small businesses</span></div></div>
      </section>

      <!-- Features Section -->
      <section class="section">
        <div class="features-grid animate-in">
          <div class="card feature-card">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 class="card__title">Invoice & Receipt Generator</h3>
            <p class="card__desc">Create polished invoices and receipts with flexible templates.</p>
          </div>
          <div class="card feature-card">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
            <h3 class="card__title">Professional PDF Export</h3>
            <p class="card__desc">Download share-ready invoice and receipt PDFs instantly.</p>
          </div>
          <div class="card feature-card">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="card__title">Financial Calculators</h3>
            <p class="card__desc">Tax, markup, margin, late fees & more.</p>
          </div>
          <div class="card feature-card">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 class="card__title">Custom Templates</h3>
            <p class="card__desc">Choose professional invoice and receipt designs.</p>
          </div>
          <div class="card feature-card">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
            <h3 class="card__title">Dark & Light Mode</h3>
            <p class="card__desc">Easy on the eyes, day or night.</p>
          </div>
          <div class="card feature-card">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 class="card__title">Fully Responsive</h3>
            <p class="card__desc">Works perfectly on phone, tablet & desktop.</p>
          </div>
        </div>
      </section>

      <!-- Quick Access Calculators -->
      <section class="section" style="background-color: var(--bg-tertiary, #f8f9fa);">
        <div class="calc-grid animate-in">
          <a href="#/calculator/sales-tax" class="card card--clickable">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="card__title">Sales Tax Calculator</h3>
            <p class="card__desc">Calculate sales tax easily.</p>
            <div class="card__link">Calculate &rarr;</div>
          </a>
          <a href="#/calculator/vat" class="card card--clickable">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <h3 class="card__title">VAT Calculator</h3>
            <p class="card__desc">Quickly find VAT amounts.</p>
            <div class="card__link">Calculate &rarr;</div>
          </a>
          <a href="#/calculator/markup" class="card card--clickable">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3 class="card__title">Markup Calculator</h3>
            <p class="card__desc">Calculate price markups.</p>
            <div class="card__link">Calculate &rarr;</div>
          </a>
          <a href="#/calculator/margin" class="card card--clickable">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
            </div>
            <h3 class="card__title">Margin Calculator</h3>
            <p class="card__desc">Determine your profit margins.</p>
            <div class="card__link">Calculate &rarr;</div>
          </a>
          <a href="#/calculator/discount" class="card card--clickable">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
            </div>
            <h3 class="card__title">Invoice Discount Calculator</h3>
            <p class="card__desc">Calculate discount amounts.</p>
            <div class="card__link">Calculate &rarr;</div>
          </a>
          <a href="#/calculator/late-fee" class="card card--clickable">
            <div class="card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3 class="card__title">Late Payment Fee Calculator</h3>
            <p class="card__desc">Calculate late payment fees.</p>
            <div class="card__link">Calculate &rarr;</div>
          </a>
        </div>
      </section>

      <!-- How it works -->
      <section class="section home-guide">
        <div class="container">
          <div class="page-hero page-hero--center animate-in">
            <span class="section-label">Simple by design</span>
            <h2 class="section-title">Create, confirm and send with confidence</h2>
            <p class="section-desc">A focused invoice and receipt workflow for freelancers, consultants and small businesses.</p>
          </div>
          <div class="home-guide__grid">
            <div class="home-guide__step"><span>01</span><h3>Enter your details</h3><p>Add seller, customer and transaction information in one clear workspace.</p></div>
            <div class="home-guide__step"><span>02</span><h3>Build the document</h3><p>Choose invoice or receipt, add items, adjust tax and personalise the colours.</p></div>
            <div class="home-guide__step"><span>03</span><h3>Review and download</h3><p>Check the live preview, then export a polished PDF ready to share.</p></div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section home-faq">
        <div class="container home-faq__container">
          <div class="page-hero animate-in"><span class="section-label">Need to know</span><h2 class="section-title">Frequently asked questions</h2><p class="section-desc">A few quick answers before you get started.</p></div>
          <div class="faq-list">
            <details><summary>Is CashHub free to use?</summary><p>Yes. You can create invoices and receipts, use calculators and download PDFs without signing up for an account.</p></details>
            <details><summary>Can I customise the invoice design?</summary><p>Yes. Choose from multiple templates, edit column labels, change the header background and text colours, and select a currency.</p></details>
            <details><summary>Is my invoice data stored online?</summary><p>Invoice data is handled in your browser for the current workflow. Review our Privacy Policy for details about local preferences and third-party services.</p></details>
            <details><summary>Can I use CashHub on my phone or iPad?</summary><p>Yes. The interface adapts to mobile, tablet and desktop layouts, with the invoice form prioritised for smaller screens.</p></details>
            <details><summary>What is the difference between an invoice and a receipt?</summary><p>An invoice requests payment for goods or services. A receipt confirms that payment has been received. CashHub supports both workflows in separate, focused generators.</p></details>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section">
        <div class="cta-section home-cta animate-in">
          <span class="section-label">Invoices &amp; receipts</span>
          <h2>Ready to create your next document?</h2>
          <p>Build a professional invoice or create a polished receipt in just a few steps.</p>
          <div class="home-cta__actions">
            <a href="#/invoice" class="btn btn--primary btn--lg">Create an Invoice</a>
            <a href="#/receipt" class="btn btn--secondary btn--lg">Create a Receipt</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
