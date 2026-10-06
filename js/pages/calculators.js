export function renderCalculatorsHub() {
  return `
    <section class="section">
      <div class="container">
        <h1 class="section-title">Free Invoice & Business Calculators</h1>
        <p class="section-desc">Tools to help you manage your billing, payments, taxes, and pricing.</p>

        <div class="calc-category">
          <div class="calc-category__header">
            <h2>Category 1: DUE DATES — Payment Terms & Late Payments</h2>
            <p>Work out due dates, late fees, and days past due.</p>
          </div>
          <div class="calc-grid">
            <a href="#/calculator/invoice-due-date" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
              <h3 class="card__title">Invoice Due Date Calculator</h3>
              <p class="card__desc">Calculate invoice due dates for Net 7, 15, 30, 45, 60, 90, and custom payment terms.</p>
            </a>
            <a href="#/calculator/business-days" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10H3M21 6H3M21 14H3M21 18H3"></path></svg></div>
              <h3 class="card__title">Business Days Calculator</h3>
              <p class="card__desc">Add or subtract business days from a date, or count working days between two dates.</p>
            </a>
            <a href="#/calculator/late-payment-fee" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
              <h3 class="card__title">Late Payment Fee Calculator</h3>
              <p class="card__desc">Calculate flat, percentage, or recurring late fees on overdue invoices.</p>
            </a>
            <a href="#/calculator/late-payment-interest" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
              <h3 class="card__title">Late Payment Interest Calculator</h3>
              <p class="card__desc">Compute interest accrued on an unpaid invoice balance.</p>
            </a>
            <a href="#/calculator/days-past-due" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg></div>
              <h3 class="card__title">Days Past Due Calculator</h3>
              <p class="card__desc">Count how many calendar days an invoice is past due and which AR aging bucket it falls into.</p>
            </a>
          </div>
        </div>

        <div class="calc-category">
          <div class="calc-category__header">
            <h2>Category 2: ADJUSTMENTS — Tax & Discounts</h2>
            <p>Estimate sales tax, VAT, GST, and invoice discounts.</p>
          </div>
          <div class="calc-grid">
            <a href="#/calculator/sales-tax" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
              <h3 class="card__title">Sales Tax Calculator</h3>
              <p class="card__desc">Add sales tax to a pre-tax amount or remove tax from a tax-inclusive total.</p>
            </a>
            <a href="#/calculator/vat" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg></div>
              <h3 class="card__title">VAT Calculator</h3>
              <p class="card__desc">Add VAT to a net amount or remove VAT from a VAT-inclusive total using any VAT rate.</p>
            </a>
            <a href="#/calculator/gst" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <h3 class="card__title">GST Calculator</h3>
              <p class="card__desc">Add GST to a pre-tax amount or extract GST from a GST-inclusive total.</p>
            </a>
            <a href="#/calculator/invoice-discount" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg></div>
              <h3 class="card__title">Invoice Discount Calculator</h3>
              <p class="card__desc">Apply a percentage or fixed discount and see the new invoice total.</p>
            </a>
            <a href="#/calculator/early-payment-discount" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <h3 class="card__title">Early Payment Discount Calculator</h3>
              <p class="card__desc">Calculate early-payment terms such as 2/10 Net 30, including savings and deadlines.</p>
            </a>
          </div>
        </div>

        <div class="calc-category">
          <div class="calc-category__header">
            <h2>Category 3: INVOICING — Create & Price</h2>
            <p>Build invoice totals, hourly rates, and project pricing.</p>
          </div>
          <div class="calc-grid">
            <a href="#/calculator/invoice-calc" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
              <h3 class="card__title">Invoice Calculator</h3>
              <p class="card__desc">Add line items, discounts, tax, and payments to get the invoice total and balance due.</p>
            </a>
            <a href="#/calculator/hourly-invoice" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
              <h3 class="card__title">Hourly Invoice Calculator</h3>
              <p class="card__desc">Turn hours and hourly rates into an invoice total, with expenses, discounts, and tax.</p>
            </a>
            <a href="#/calculator/contractor-invoice" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
              <h3 class="card__title">Contractor Invoice Calculator</h3>
              <p class="card__desc">Price contractor invoices from labor, materials, and job costs.</p>
            </a>
            <a href="#/calculator/project-invoice" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg></div>
              <h3 class="card__title">Project Invoice Calculator</h3>
              <p class="card__desc">Invoice fixed-price or milestone project work with expenses, discounts, tax, and deposits.</p>
            </a>
            <a href="#/calculator/markup" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
              <h3 class="card__title">Markup Calculator</h3>
              <p class="card__desc">Calculate selling price and profit from cost plus markup percentage.</p>
            </a>
            <a href="#/calculator/margin" class="card card--clickable">
              <div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg></div>
              <h3 class="card__title">Margin Calculator</h3>
              <p class="card__desc">Calculate selling price from a target margin, or analyze markup and margin from a price.</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function renderCalculator(type) {
  let content = '';

  switch (type) {
    case 'invoice-due-date':
      content = `
        <div class="calc-form-header">
          <h1>Invoice Due Date Calculator</h1>
          <p>Calculate invoice due dates for Net 7, 15, 30, 45, 60, 90, and custom payment terms.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Invoice Date</label>
              <input type="date" id="inv-date" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Payment Terms</label>
              <select id="inv-terms" class="form-select">
                <option value="7">Net 7</option>
                <option value="15">Net 15</option>
                <option value="30" selected>Net 30</option>
                <option value="45">Net 45</option>
                <option value="60">Net 60</option>
                <option value="90">Net 90</option>
                <option value="custom">Custom Days</option>
              </select>
            </div>
            <div class="form-group" id="custom-days-group" style="display:none;">
              <label class="form-label">Custom Days</label>
              <input type="number" id="custom-days" class="form-input" min="0">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'business-days':
      content = `
        <div class="calc-form-header">
          <h1>Business Days Calculator</h1>
          <p>Add or subtract business days from a date, or count working days between two dates.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Operation</label>
              <select id="op-type" class="form-select">
                <option value="add">Add Business Days</option>
                <option value="subtract">Subtract Business Days</option>
                <option value="count">Count Days Between Dates</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Start Date</label>
              <input type="date" id="start-date" class="form-input" required>
            </div>
            <div class="form-group" id="end-date-group" style="display:none;">
              <label class="form-label">End Date</label>
              <input type="date" id="end-date" class="form-input">
            </div>
            <div class="form-group" id="num-days-group">
              <label class="form-label">Number of Business Days</label>
              <input type="number" id="num-days" class="form-input" min="0" required>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'late-payment-fee':
      content = `
        <div class="calc-form-header">
          <h1>Late Payment Fee Calculator</h1>
          <p>Calculate flat, percentage, or recurring late fees on overdue invoices.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Invoice Amount ($)</label>
              <input type="number" step="0.01" id="inv-amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Fee Type</label>
              <select id="fee-type" class="form-select">
                <option value="flat">Flat Fee</option>
                <option value="percentage">Percentage (One-time)</option>
                <option value="recurring">Recurring (Monthly %)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" id="fee-amount-label">Fee Amount ($)</label>
              <input type="number" step="0.01" id="fee-amount" class="form-input" required>
            </div>
            <div class="form-group" id="days-overdue-group" style="display:none;">
              <label class="form-label">Days Overdue</label>
              <input type="number" id="days-overdue" class="form-input" min="0">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'late-payment-interest':
      content = `
        <div class="calc-form-header">
          <h1>Late Payment Interest Calculator</h1>
          <p>Compute interest accrued on an unpaid invoice balance.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Invoice Amount ($)</label>
              <input type="number" step="0.01" id="inv-amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Annual Interest Rate (%)</label>
              <input type="number" step="0.01" id="interest-rate" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Days Overdue</label>
              <input type="number" id="days-overdue" class="form-input" min="0" required>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'days-past-due':
      content = `
        <div class="calc-form-header">
          <h1>Days Past Due Calculator</h1>
          <p>Count how many calendar days an invoice is past due and which AR aging bucket it falls into.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Due Date</label>
              <input type="date" id="due-date" class="form-input" required>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'sales-tax':
      content = `
        <div class="calc-form-header">
          <h1>Sales Tax Calculator</h1>
          <p>Add sales tax to a pre-tax amount or remove tax from a tax-inclusive total.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Amount ($)</label>
              <input type="number" step="0.01" id="amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Tax Rate (%)</label>
              <input type="number" step="0.01" id="tax-rate" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Mode</label>
              <select id="mode" class="form-select">
                <option value="add">Add Tax (Amount is Pre-Tax)</option>
                <option value="remove">Remove Tax (Amount is Post-Tax)</option>
              </select>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'vat':
      content = `
        <div class="calc-form-header">
          <h1>VAT Calculator</h1>
          <p>Add VAT to a net amount or remove VAT from a VAT-inclusive total using any VAT rate.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Amount</label>
              <input type="number" step="0.01" id="amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">VAT Rate (%)</label>
              <input type="number" step="0.01" id="tax-rate" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Mode</label>
              <select id="mode" class="form-select">
                <option value="add">Add VAT</option>
                <option value="extract">Extract VAT</option>
              </select>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'gst':
      content = `
        <div class="calc-form-header">
          <h1>GST Calculator</h1>
          <p>Add GST to a pre-tax amount or extract GST from a GST-inclusive total.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Amount</label>
              <input type="number" step="0.01" id="amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">GST Rate (%)</label>
              <input type="number" step="0.01" id="tax-rate" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Mode</label>
              <select id="mode" class="form-select">
                <option value="add">Add GST</option>
                <option value="extract">Extract GST</option>
              </select>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'invoice-discount':
      content = `
        <div class="calc-form-header">
          <h1>Invoice Discount Calculator</h1>
          <p>Apply a percentage or fixed discount and see the new invoice total, with optional tax after the discount.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Invoice Amount</label>
              <input type="number" step="0.01" id="amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Discount Type</label>
              <select id="disc-type" class="form-select">
                <option value="percent">Percentage (%)</option>
                <option value="fixed">Fixed Amount</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Discount Value</label>
              <input type="number" step="0.01" id="disc-val" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">
                <input type="checkbox" id="apply-tax"> Apply Tax After Discount?
              </label>
            </div>
            <div class="form-group" id="tax-rate-group" style="display:none;">
              <label class="form-label">Tax Rate (%)</label>
              <input type="number" step="0.01" id="tax-rate" class="form-input">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'early-payment-discount':
      content = `
        <div class="calc-form-header">
          <h1>Early Payment Discount Calculator</h1>
          <p>Calculate early-payment terms such as 2/10 Net 30, including savings, payment deadlines, and annualized cost.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Invoice Amount ($)</label>
              <input type="number" step="0.01" id="amount" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Discount Percentage (%)</label>
              <input type="number" step="0.01" id="disc-percent" class="form-input" value="2" required>
            </div>
            <div class="form-group">
              <label class="form-label">Discount Period (Days)</label>
              <input type="number" id="disc-days" class="form-input" value="10" required>
            </div>
            <div class="form-group">
              <label class="form-label">Net Terms (Days)</label>
              <input type="number" id="net-days" class="form-input" value="30" required>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'invoice-calc':
      content = `
        <div class="calc-form-header">
          <h1>Invoice Calculator</h1>
          <p>Add line items, discounts, tax, and payments to get the invoice total and balance due.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div id="line-items">
              <div class="line-item form-group" style="display:flex; gap:10px;">
                <input type="text" class="form-input item-desc" placeholder="Item description" style="flex:2">
                <input type="number" class="form-input item-qty" placeholder="Qty" value="1" style="flex:1" min="1">
                <input type="number" class="form-input item-rate" placeholder="Rate ($)" step="0.01" style="flex:1">
              </div>
            </div>
            <button type="button" id="add-item-btn" class="btn btn--secondary" style="margin-bottom:15px;">+ Add Line Item</button>
            <div class="form-group">
              <label class="form-label">Discount (%)</label>
              <input type="number" step="0.01" id="discount" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Tax Rate (%)</label>
              <input type="number" step="0.01" id="tax" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Payments Made ($)</label>
              <input type="number" step="0.01" id="payments" class="form-input" value="0">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate Invoice</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'hourly-invoice':
      content = `
        <div class="calc-form-header">
          <h1>Hourly Invoice Calculator</h1>
          <p>Turn hours and hourly rates into an invoice total, with expenses, discounts, tax, and deposits.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Hours Worked</label>
              <input type="number" step="0.01" id="hours" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Hourly Rate ($)</label>
              <input type="number" step="0.01" id="rate" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Additional Expenses ($)</label>
              <input type="number" step="0.01" id="expenses" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Discount (%)</label>
              <input type="number" step="0.01" id="discount" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Tax Rate (%)</label>
              <input type="number" step="0.01" id="tax" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Deposit Paid ($)</label>
              <input type="number" step="0.01" id="deposit" class="form-input" value="0">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate Hourly Invoice</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'contractor-invoice':
      content = `
        <div class="calc-form-header">
          <h1>Contractor Invoice Calculator</h1>
          <p>Price contractor invoices from labor, materials, and job costs.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Labor Cost ($)</label>
              <input type="number" step="0.01" id="labor" class="form-input" value="0" required>
            </div>
            <div class="form-group">
              <label class="form-label">Materials Cost ($)</label>
              <input type="number" step="0.01" id="materials" class="form-input" value="0" required>
            </div>
            <div class="form-group">
              <label class="form-label">Other Costs ($)</label>
              <input type="number" step="0.01" id="other-costs" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Markup (%)</label>
              <input type="number" step="0.01" id="markup" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Tax Rate (%)</label>
              <input type="number" step="0.01" id="tax" class="form-input" value="0">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate Invoice</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'project-invoice':
      content = `
        <div class="calc-form-header">
          <h1>Project Invoice Calculator</h1>
          <p>Invoice fixed-price or milestone project work with expenses, discounts, tax, and deposits.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Project/Milestone Price ($)</label>
              <input type="number" step="0.01" id="price" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Reimbursable Expenses ($)</label>
              <input type="number" step="0.01" id="expenses" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Discount (%)</label>
              <input type="number" step="0.01" id="discount" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Tax Rate (%)</label>
              <input type="number" step="0.01" id="tax" class="form-input" value="0">
            </div>
            <div class="form-group">
              <label class="form-label">Deposit Paid ($)</label>
              <input type="number" step="0.01" id="deposit" class="form-input" value="0">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate Project Invoice</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'markup':
      content = `
        <div class="calc-form-header">
          <h1>Markup Calculator</h1>
          <p>Calculate selling price and profit from cost plus markup percentage.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Cost Price ($)</label>
              <input type="number" step="0.01" id="cost" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Markup (%)</label>
              <input type="number" step="0.01" id="markup" class="form-input" required>
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    case 'margin':
      content = `
        <div class="calc-form-header">
          <h1>Margin Calculator</h1>
          <p>Calculate selling price from a target margin, or analyze markup and margin from a price.</p>
        </div>
        <div class="calc-form-body">
          <form id="calc-form">
            <div class="form-group">
              <label class="form-label">Calculation Mode</label>
              <select id="mode" class="form-select">
                <option value="target_margin">Calculate Price from Target Margin</option>
                <option value="analyze_price">Analyze Margin from Selling Price</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Cost Price ($)</label>
              <input type="number" step="0.01" id="cost" class="form-input" required>
            </div>
            <div class="form-group" id="margin-group">
              <label class="form-label">Target Margin (%)</label>
              <input type="number" step="0.01" id="margin" class="form-input">
            </div>
            <div class="form-group" id="price-group" style="display:none;">
              <label class="form-label">Selling Price ($)</label>
              <input type="number" step="0.01" id="price" class="form-input">
            </div>
            <button type="submit" class="btn btn--primary btn--lg" style="width:100%">Calculate</button>
          </form>
          <div id="calc-result" class="calc-result" style="display:none; margin-top:20px;"></div>
        </div>
      `;
      break;

    default:
      content = `<div class="calc-form-header"><h1>Calculator not found</h1></div>`;
  }

  return `
    <section class="section calculator-page">
      <div class="container">
        <a href="#/calculators" class="blog-post__back">← Back to Calculators</a>
        <div class="calc-form-card">
          ${content}
          <div style="margin-top:28px; padding:20px; background:var(--bg-tertiary); border:1px dashed var(--accent); border-radius:var(--radius-lg); text-align:center;">
             <p style="font-size:0.9rem; font-weight:600; color:var(--text-primary); margin-bottom:6px;">Ready to Bill This Amount?</p>
             <p style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:14px;">Transfer this calculated amount directly into your invoice as a line item with one click:</p>
             <button type="button" id="btnConvertToInvoice" class="btn btn--primary calc-convert-btn" style="display:inline-flex; align-items:center; gap:8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Convert Calculated Amount to Invoice →
             </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Function to attach events and logic for individual calculator pages
window.initCalculatorPage = function (type) {
  const form = document.getElementById('calc-form');
  const resultDiv = document.getElementById('calc-result');
  if (!form || !resultDiv) return;

  let currentCalculatedItem = null;

  const displayResult = (html) => {
    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
  };

  const formatCurrency = (val) => '$' + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatPercent = (val) => Number(val).toFixed(2) + '%';

  // Specific UI event bindings
  if (type === 'invoice-due-date') {
    const termSelect = document.getElementById('inv-terms');
    const customGrp = document.getElementById('custom-days-group');
    const customInput = document.getElementById('custom-days');
    termSelect.addEventListener('change', () => {
      if (termSelect.value === 'custom') {
        customGrp.style.display = 'block';
        customInput.required = true;
      } else {
        customGrp.style.display = 'none';
        customInput.required = false;
      }
    });
  } else if (type === 'business-days') {
    const opSelect = document.getElementById('op-type');
    const endGrp = document.getElementById('end-date-group');
    const endInput = document.getElementById('end-date');
    const numGrp = document.getElementById('num-days-group');
    const numInput = document.getElementById('num-days');
    opSelect.addEventListener('change', () => {
      if (opSelect.value === 'count') {
        endGrp.style.display = 'block';
        endInput.required = true;
        numGrp.style.display = 'none';
        numInput.required = false;
      } else {
        endGrp.style.display = 'none';
        endInput.required = false;
        numGrp.style.display = 'block';
        numInput.required = true;
      }
    });
  } else if (type === 'late-payment-fee') {
    const feeSelect = document.getElementById('fee-type');
    const feeLabel = document.getElementById('fee-amount-label');
    const overdueGrp = document.getElementById('days-overdue-group');
    const overdueInput = document.getElementById('days-overdue');
    feeSelect.addEventListener('change', () => {
      if (feeSelect.value === 'flat') {
        feeLabel.textContent = 'Fee Amount ($)';
        overdueGrp.style.display = 'none';
        overdueInput.required = false;
      } else if (feeSelect.value === 'percentage') {
        feeLabel.textContent = 'Fee Percentage (%)';
        overdueGrp.style.display = 'none';
        overdueInput.required = false;
      } else {
        feeLabel.textContent = 'Monthly Fee Percentage (%)';
        overdueGrp.style.display = 'block';
        overdueInput.required = true;
      }
    });
  } else if (type === 'invoice-discount') {
    const taxCheck = document.getElementById('apply-tax');
    const taxGrp = document.getElementById('tax-rate-group');
    const taxInput = document.getElementById('tax-rate');
    taxCheck.addEventListener('change', () => {
      if (taxCheck.checked) {
        taxGrp.style.display = 'block';
        taxInput.required = true;
      } else {
        taxGrp.style.display = 'none';
        taxInput.required = false;
      }
    });
  } else if (type === 'invoice-calc') {
    const addBtn = document.getElementById('add-item-btn');
    const lineItemsContainer = document.getElementById('line-items');
    addBtn.addEventListener('click', () => {
      const row = document.createElement('div');
      row.className = 'line-item form-group';
      row.style.display = 'flex';
      row.style.gap = '10px';
      row.innerHTML = `
        <input type="text" class="form-input item-desc" placeholder="Item description" style="flex:2">
        <input type="number" class="form-input item-qty" placeholder="Qty" value="1" style="flex:1" min="1">
        <input type="number" class="form-input item-rate" placeholder="Rate ($)" step="0.01" style="flex:1">
        <button type="button" class="btn btn--danger remove-btn">X</button>
      `;
      row.querySelector('.remove-btn').addEventListener('click', () => row.remove());
      lineItemsContainer.appendChild(row);
    });
  } else if (type === 'margin') {
    const modeSel = document.getElementById('mode');
    const marginGrp = document.getElementById('margin-group');
    const priceGrp = document.getElementById('price-group');
    const marginInp = document.getElementById('margin');
    const priceInp = document.getElementById('price');

    // Set initials
    marginInp.required = true;
    priceInp.required = false;

    modeSel.addEventListener('change', () => {
      if (modeSel.value === 'target_margin') {
        marginGrp.style.display = 'block';
        priceGrp.style.display = 'none';
        marginInp.required = true;
        priceInp.required = false;
      } else {
        marginGrp.style.display = 'none';
        priceGrp.style.display = 'block';
        marginInp.required = false;
        priceInp.required = true;
      }
    });
  }

  // Handle calculation logic
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let resHtml = '';

    const row = (label, value) => `<div class="calc-result__row"><span class="calc-result__row-label">${label}</span><span class="calc-result__row-value">${value}</span></div>`;

    switch (type) {
      case 'invoice-due-date': {
        const dateStr = document.getElementById('inv-date').value;
        const term = document.getElementById('inv-terms').value;
        let days = term === 'custom' ? parseInt(document.getElementById('custom-days').value || 0, 10) : parseInt(term, 10);

        let d = new Date(dateStr);
        d.setDate(d.getDate() + days);
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        let diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));

        currentCalculatedItem = {
          type: 'dueDate',
          dueDate: d.toISOString().split('T')[0],
          note: `Payment terms: ${term === 'custom' ? days + ' Days' : 'Net ' + term}`,
          desc: `Invoice Due: ${d.toLocaleDateString()}`
        };

        resHtml = row('Due Date', d.toDateString()) + row('Days Until Due', diff >= 0 ? diff : 'Overdue by ' + Math.abs(diff) + ' days');
        break;
      }
      case 'business-days': {
        const op = document.getElementById('op-type').value;
        const start = new Date(document.getElementById('start-date').value);
        if (op === 'count') {
          const end = new Date(document.getElementById('end-date').value);
          let count = 0;
          let cur = new Date(start);
          while (cur < end) {
            cur.setDate(cur.getDate() + 1);
            if (cur.getDay() !== 0 && cur.getDay() !== 6) count++;
          }
          currentCalculatedItem = {
            type: 'note',
            desc: `Project Schedule: ${count} working days required`
          };
          resHtml = row('Business Days Between', count);
        } else {
          let days = parseInt(document.getElementById('num-days').value || 0, 10);
          let cur = new Date(start);
          let added = 0;
          let dir = op === 'add' ? 1 : -1;
          while (added < days) {
            cur.setDate(cur.getDate() + dir);
            if (cur.getDay() !== 0 && cur.getDay() !== 6) added++;
          }
          currentCalculatedItem = {
            type: 'dueDate',
            dueDate: cur.toISOString().split('T')[0],
            desc: `Target Completion: ${cur.toLocaleDateString()}`
          };
          resHtml = row('Result Date', cur.toDateString());
        }
        break;
      }
      case 'late-payment-fee': {
        const amt = parseFloat(document.getElementById('inv-amount').value || 0);
        const ftype = document.getElementById('fee-type').value;
        const fval = parseFloat(document.getElementById('fee-amount').value || 0);
        let fee = 0;
        if (ftype === 'flat') fee = fval;
        else if (ftype === 'percentage') fee = amt * (fval / 100);
        else {
          const overdue = parseInt(document.getElementById('days-overdue').value || 0, 10);
          const months = Math.ceil(overdue / 30);
          fee = amt * (fval / 100) * months;
        }

        currentCalculatedItem = {
          type: 'item',
          desc: `Late Payment Penalty Fee (${ftype === 'percentage' ? fval + '%' : 'Overdue Penalty'})`,
          qty: 1,
          rate: fee
        };

        resHtml = row('Late Fee Amount', formatCurrency(fee)) + row('Total Due', formatCurrency(amt + fee));
        break;
      }
      case 'late-payment-interest': {
        const amt = parseFloat(document.getElementById('inv-amount').value || 0);
        const rate = parseFloat(document.getElementById('interest-rate').value || 0);
        const days = parseInt(document.getElementById('days-overdue').value || 0, 10);

        const dailyRate = (rate / 100) / 365;
        const interest = amt * dailyRate * days;

        currentCalculatedItem = {
          type: 'item',
          desc: `Accrued Late Payment Interest (${days} days overdue @ ${rate}% APR)`,
          qty: 1,
          rate: interest
        };

        resHtml = row('Interest Amount', formatCurrency(interest)) +
          row('Daily Rate', (dailyRate * 100).toFixed(4) + '%') +
          row('Total Due', formatCurrency(amt + interest));
        break;
      }
      case 'days-past-due': {
        const dueDate = new Date(document.getElementById('due-date').value);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const diff = Math.ceil((now - dueDate) / (1000 * 60 * 60 * 24));

        let bucket = 'Current';
        if (diff > 0) {
          if (diff <= 30) bucket = '1-30 Days';
          else if (diff <= 60) bucket = '31-60 Days';
          else if (diff <= 90) bucket = '61-90 Days';
          else bucket = '90+ Days';
        }

        currentCalculatedItem = {
          type: 'note',
          desc: `AR Aging Status: ${bucket} (${diff > 0 ? diff + ' days overdue' : 'Current'})`
        };

        resHtml = row('Days Past Due', Math.max(0, diff)) + row('AR Aging Bucket', bucket);
        break;
      }
      case 'sales-tax':
      case 'vat':
      case 'gst': {
        const amt = parseFloat(document.getElementById('amount').value || 0);
        const rate = parseFloat(document.getElementById('tax-rate').value || 0);
        const mode = document.getElementById('mode').value;
        let tax, pre, post;

        if (mode === 'add') {
          pre = amt;
          tax = amt * (rate / 100);
          post = amt + tax;
        } else {
          post = amt;
          pre = amt / (1 + (rate / 100));
          tax = post - pre;
        }

        const labelTax = type === 'sales-tax' ? 'Sales Tax' : (type === 'vat' ? 'VAT' : 'GST');

        currentCalculatedItem = {
          type: 'item',
          desc: `${labelTax} Eligible Goods & Services`,
          qty: 1,
          rate: pre,
          taxRate: rate
        };

        resHtml = row(labelTax + ' Amount', formatCurrency(tax)) +
          row('Base Amount (Net)', formatCurrency(pre)) +
          row('Total (Gross)', formatCurrency(post));
        break;
      }
      case 'invoice-discount': {
        const amt = parseFloat(document.getElementById('amount').value || 0);
        const dtype = document.getElementById('disc-type').value;
        const dval = parseFloat(document.getElementById('disc-val').value || 0);
        const applyTax = document.getElementById('apply-tax').checked;
        const trate = parseFloat(document.getElementById('tax-rate')?.value || 0);

        let discAmt = dtype === 'percent' ? amt * (dval / 100) : dval;
        let afterDisc = Math.max(0, amt - discAmt);

        let taxAmt = 0;
        if (applyTax) {
          taxAmt = afterDisc * (trate / 100);
        }

        let finalTot = afterDisc + taxAmt;

        currentCalculatedItem = {
          type: 'item',
          desc: `Discounted Goods / Services (Before ${dtype === 'percent' ? dval + '%' : formatCurrency(dval)} Discount)`,
          qty: 1,
          rate: amt,
          discount: discAmt,
          taxRate: (applyTax ? trate : 0)
        };

        resHtml = row('Discount Amount', formatCurrency(discAmt)) +
          row('After Discount', formatCurrency(afterDisc));
        if (applyTax) resHtml += row('Tax Amount', formatCurrency(taxAmt));
        resHtml += row('Final Total', formatCurrency(finalTot));
        break;
      }
      case 'early-payment-discount': {
        const amt = parseFloat(document.getElementById('amount').value || 0);
        const dpc = parseFloat(document.getElementById('disc-percent').value || 0);
        const ddays = parseInt(document.getElementById('disc-days').value || 0, 10);
        const ndays = parseInt(document.getElementById('net-days').value || 0, 10);

        const savings = amt * (dpc / 100);
        const paidEarly = amt - savings;

        const daysAdvanced = ndays - ddays;
        let annualized = 0;
        if (daysAdvanced > 0 && dpc < 100) {
          annualized = (dpc / (100 - dpc)) * (365 / daysAdvanced) * 100;
        }

        currentCalculatedItem = {
          type: 'item',
          desc: `Early Payment Terms (${dpc}% ${ddays} Net ${ndays})`,
          qty: 1,
          rate: amt,
          discount: savings,
          note: `Save ${formatCurrency(savings)} if paid within ${ddays} days.`
        };

        resHtml = row('Discount Amount', formatCurrency(savings)) +
          row('Amount if Paid Early', formatCurrency(paidEarly)) +
          row('Annualized Cost of Not Taking Discount', formatPercent(annualized));
        break;
      }
      case 'invoice-calc': {
        let subtotal = 0;
        const lineItems = [];
        document.querySelectorAll('.line-item').forEach(li => {
          let desc = li.querySelector('.item-desc').value || 'Line Item';
          let q = parseFloat(li.querySelector('.item-qty').value || 0);
          let r = parseFloat(li.querySelector('.item-rate').value || 0);
          subtotal += (q * r);
          lineItems.push({ desc, qty: q || 1, rate: r || 0 });
        });

        const disc = parseFloat(document.getElementById('discount').value || 0);
        const tax = parseFloat(document.getElementById('tax').value || 0);
        const paid = parseFloat(document.getElementById('payments').value || 0);

        const discAmt = subtotal * (disc / 100);
        const afterDisc = subtotal - discAmt;
        const taxAmt = afterDisc * (tax / 100);
        const total = afterDisc + taxAmt;
        const bal = total - paid;

        currentCalculatedItem = {
          type: 'multi',
          items: lineItems.length ? lineItems : [{ desc: 'Calculated Services', qty: 1, rate: subtotal }],
          discount: discAmt,
          taxRate: tax
        };

        resHtml = row('Subtotal', formatCurrency(subtotal)) +
          row('Discount', formatCurrency(discAmt)) +
          row('Tax', formatCurrency(taxAmt)) +
          row('Total', formatCurrency(total)) +
          row('Payments Made', formatCurrency(paid)) +
          row('Balance Due', formatCurrency(bal));
        break;
      }
      case 'hourly-invoice': {
        const hrs = parseFloat(document.getElementById('hours').value || 0);
        const rate = parseFloat(document.getElementById('rate').value || 0);
        const exp = parseFloat(document.getElementById('expenses').value || 0);
        const disc = parseFloat(document.getElementById('discount').value || 0);
        const tax = parseFloat(document.getElementById('tax').value || 0);
        const dep = parseFloat(document.getElementById('deposit').value || 0);

        const labor = hrs * rate;
        const subtotal = labor + exp;
        const discAmt = subtotal * (disc / 100);
        const afterDisc = subtotal - discAmt;
        const taxAmt = afterDisc * (tax / 100);
        const total = afterDisc + taxAmt;
        const bal = total - dep;

        const hourlyItems = [
          { desc: `Professional Consulting (${hrs} hrs @ ${formatCurrency(rate)}/hr)`, qty: hrs, rate: rate }
        ];
        if (exp > 0) {
          hourlyItems.push({ desc: 'Reimbursable Project Expenses', qty: 1, rate: exp });
        }

        currentCalculatedItem = {
          type: 'multi',
          items: hourlyItems,
          discount: discAmt,
          taxRate: tax
        };

        resHtml = row('Labor Total', formatCurrency(labor)) +
          row('Expenses', formatCurrency(exp)) +
          row('Subtotal', formatCurrency(subtotal)) +
          row('Discount', formatCurrency(discAmt)) +
          row('Tax', formatCurrency(taxAmt)) +
          row('Total', formatCurrency(total)) +
          row('Balance Due', formatCurrency(bal));
        break;
      }
      case 'contractor-invoice': {
        const lab = parseFloat(document.getElementById('labor').value || 0);
        const mat = parseFloat(document.getElementById('materials').value || 0);
        const oth = parseFloat(document.getElementById('other-costs').value || 0);
        const mu = parseFloat(document.getElementById('markup').value || 0);
        const tr = parseFloat(document.getElementById('tax').value || 0);

        const sub = lab + mat + oth;
        const muAmt = sub * (mu / 100);
        const preTax = sub + muAmt;
        const tax = preTax * (tr / 100);
        const total = preTax + tax;

        const contractorItems = [
          { desc: `Contractor Labor & Trade Services (with ${mu}% Markup)`, qty: 1, rate: lab * (1 + mu / 100) }
        ];
        if (mat > 0) contractorItems.push({ desc: `Job Materials & Supplies (with ${mu}% Markup)`, qty: 1, rate: mat * (1 + mu / 100) });
        if (oth > 0) contractorItems.push({ desc: `Job Site Equipment & Misc Costs`, qty: 1, rate: oth * (1 + mu / 100) });

        currentCalculatedItem = {
          type: 'multi',
          items: contractorItems,
          taxRate: tr
        };

        resHtml = row('Base Costs (Subtotal)', formatCurrency(sub)) +
          row('Markup Amount', formatCurrency(muAmt)) +
          row('Before Tax', formatCurrency(preTax)) +
          row('Tax', formatCurrency(tax)) +
          row('Total Invoice', formatCurrency(total));
        break;
      }
      case 'project-invoice': {
        const price = parseFloat(document.getElementById('price').value || 0);
        const exp = parseFloat(document.getElementById('expenses').value || 0);
        const disc = parseFloat(document.getElementById('discount').value || 0);
        const tax = parseFloat(document.getElementById('tax').value || 0);
        const dep = parseFloat(document.getElementById('deposit').value || 0);

        const sub = price + exp;
        const discAmt = sub * (disc / 100);
        const afterDisc = sub - discAmt;
        const taxAmt = afterDisc * (tax / 100);
        const total = afterDisc + taxAmt;
        const bal = total - dep;

        const projectItems = [
          { desc: 'Project Fixed Price / Milestone Deliverable', qty: 1, rate: price }
        ];
        if (exp > 0) projectItems.push({ desc: 'Project Expenses & Pass-Through Costs', qty: 1, rate: exp });

        currentCalculatedItem = {
          type: 'multi',
          items: projectItems,
          discount: discAmt,
          taxRate: tax
        };

        resHtml = row('Project + Expenses Subtotal', formatCurrency(sub)) +
          row('Discount', formatCurrency(discAmt)) +
          row('Tax', formatCurrency(taxAmt)) +
          row('Total', formatCurrency(total)) +
          row('Balance Due', formatCurrency(bal));
        break;
      }
      case 'markup': {
        const cost = parseFloat(document.getElementById('cost').value || 0);
        const mu = parseFloat(document.getElementById('markup').value || 0);

        const muAmt = cost * (mu / 100);
        const price = cost + muAmt;

        currentCalculatedItem = {
          type: 'item',
          desc: `Product / Merchandise (${mu}% Markup)`,
          qty: 1,
          rate: price
        };

        resHtml = row('Markup Amount (Profit)', formatCurrency(muAmt)) +
          row('Selling Price', formatCurrency(price)) +
          row('Margin (%)', formatPercent((muAmt / price) * 100));
        break;
      }
      case 'margin': {
        const mode = document.getElementById('mode').value;
        const cost = parseFloat(document.getElementById('cost').value || 0);

        if (mode === 'target_margin') {
          const targ = parseFloat(document.getElementById('margin').value || 0);
          let price = 0, profit = 0, markup = 0;
          if (targ < 100) {
            price = cost / (1 - (targ / 100));
            profit = price - cost;
            markup = (profit / cost) * 100;
          }
          currentCalculatedItem = {
            type: 'item',
            desc: `Custom Priced Item (${targ}% Target Margin)`,
            qty: 1,
            rate: price
          };
          resHtml = row('Selling Price', formatCurrency(price)) +
            row('Profit', formatCurrency(profit)) +
            row('Equivalent Markup', formatPercent(markup));
        } else {
          const price = parseFloat(document.getElementById('price').value || 0);
          const profit = price - cost;
          const margin = (profit / price) * 100;
          const markup = (profit / cost) * 100;

          currentCalculatedItem = {
            type: 'item',
            desc: `Item at Fixed Price (${margin.toFixed(1)}% Gross Margin)`,
            qty: 1,
            rate: price
          };

          resHtml = row('Profit', formatCurrency(profit)) +
            row('Gross Margin', formatPercent(margin)) +
            row('Markup', formatPercent(markup));
        }
        break;
      }
    }

    displayResult(resHtml);
  });

  // Convert to Invoice Click Handler
  const convertBtn = document.getElementById('btnConvertToInvoice');
  if (convertBtn) {
    convertBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!currentCalculatedItem) {
        if (window.CashHub?.showToast) {
          window.CashHub.showToast('Please click "Calculate" first to generate an amount!', 'warning');
        } else {
          alert('Please click "Calculate" first to generate an amount!');
        }
        return;
      }
      sessionStorage.setItem('cashhub_invoice_import', JSON.stringify(currentCalculatedItem));
      if (window.CashHub?.showToast) {
        window.CashHub.showToast('Calculation saved! Opening Invoice Generator...', 'success');
      }
      window.location.hash = '#/invoice';
    });
  }
};
