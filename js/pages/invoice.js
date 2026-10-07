import { currencyOptions } from '../data/currencies.js';

export function renderInvoice() {
    return `
    <div class="container" style="padding-top:32px; padding-bottom:60px;">
    <div class="page-hero page-hero--center animate-in">
    <span class="section-label">CashHub invoices</span>
    <h1 class="section-title">Invoice Generator</h1>
    <p class="section-desc">Create a polished, itemized invoice with editable business and client details, flexible line items, tax and discount calculations, customizable columns, and a live preview. Choose your style, add payment terms or notes, then download a professional PDF ready to share.</p>
    </div>
    
    <div class="invoice-builder">
        <aside class="invoice-sidebar">
            <!-- Template Selection -->
            <div class="sidebar-section">
                <h3 class="sidebar-section__title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    Template Selection
                </h3>
                <div class="template-selector">
                    <div class="template-option active" data-template="classic">
                        <div class="template-color" style="background: #6366F1;"></div>
                        <span>Classic</span>
                    </div>
                    <div class="template-option" data-template="modern">
                        <div class="template-color" style="background: linear-gradient(to right, #4f46e5, #9333ea);"></div>
                        <span>Modern</span>
                    </div>
                    <div class="template-option" data-template="minimal">
                        <div class="template-color" style="background: #ffffff; border: 1px solid #cbd5e1;"></div>
                        <span>Minimal</span>
                    </div>
                    <div class="template-option" data-template="bold">
                        <div class="template-color" style="background: #1E293B;"></div>
                        <span>Bold</span>
                    </div>
                    <div class="template-option" data-template="elegant">
                        <div class="template-color" style="background: #7C3AED;"></div>
                        <span>Elegant</span>
                    </div>
                </div>
            </div>

            <!-- Business Details -->
            <div class="sidebar-section">
                <h3 class="sidebar-section__title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Business Details
                </h3>
                <div class="form-group">
                    <label class="form-label">Your Company Name</label>
                    <input type="text" class="form-input update-trigger" id="bizName" value="Your Company LLC" placeholder="Your Company LLC">
                </div>
                <div class="form-group">
                    <label class="form-label">Your Address</label>
                    <textarea class="form-textarea update-trigger" id="bizAddress" placeholder="123 Business St&#10;City, State 12345">123 Business St&#10;City, State 12345</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Your Email</label>
                    <input type="email" class="form-input update-trigger" id="bizEmail" value="hello@yourcompany.com" placeholder="hello@yourcompany.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Your Phone</label>
                    <input type="text" class="form-input update-trigger" id="bizPhone" value="(555) 123-4567" placeholder="(555) 123-4567">
                </div>
                <div class="form-group company-logo-upload">
                    <label class="form-label" for="invoiceLogoUpload">Company logo</label>
                    <label class="btn btn--secondary btn--sm company-logo-upload__button">Choose logo<input type="file" id="invoiceLogoUpload" accept="image/png,image/jpeg,image/webp" hidden></label>
                    <span class="form-hint" id="invoiceLogoStatus" role="status">PNG, JPG or WebP · up to 600 KB</span>
                </div>
            </div>

            <!-- Client Details -->
            <div class="sidebar-section">
                <h3 class="sidebar-section__title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Client Details
                </h3>
                <div class="form-group">
                    <label class="form-label">Client Name</label>
                    <input type="text" class="form-input update-trigger" id="clientName" value="Client Name" placeholder="Client Name">
                </div>
                <div class="form-group">
                    <label class="form-label">Client Address</label>
                    <textarea class="form-textarea update-trigger" id="clientAddress" placeholder="456 Client Rd&#10;City, State 67890">456 Client Rd&#10;City, State 67890</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Client Email</label>
                    <input type="email" class="form-input update-trigger" id="clientEmail" value="client@example.com" placeholder="client@example.com">
                </div>
            </div>

            <!-- Invoice Info -->
            <div class="sidebar-section">
                <h3 class="sidebar-section__title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Invoice Info
                </h3>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Invoice Number</label>
                        <input type="text" class="form-input update-trigger" id="invNumber" value="INV-001">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Currency</label>
                        <select class="form-select update-trigger" id="invCurrency">
                            ${currencyOptions}
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Invoice Date</label>
                        <input type="date" class="form-input update-trigger" id="invDate" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Due Date</label>
                        <input type="date" class="form-input update-trigger" id="invDueDate" value="${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}">
                    </div>
                </div>
                <div class="form-row invoice-adjustments">
                    <div class="form-group">
                        <label class="form-label" for="taxInput">Tax (%)</label>
                        <input type="number" class="form-input update-trigger" id="taxInput" value="0" min="0" step="0.1" inputmode="decimal">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="discountInput">Discount</label>
                        <input type="number" class="form-input update-trigger" id="discountInput" value="0" min="0" step="0.01" inputmode="decimal">
                    </div>
                </div>
            </div>

            <!-- Customization -->
            <div class="sidebar-section">
                <h3 class="sidebar-section__title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                    Customization
                </h3>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Header Row Color</label>
                        <div class="colour-picker-row"><input type="color" class="form-color-input colour-swatch update-trigger" id="customHeaderBg" value="#6366F1"><input class="form-input hex-input" id="customHeaderBgHex" value="#6366F1" maxlength="7" aria-label="Header row HEX colour"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Header Text Color</label>
                        <div class="colour-picker-row"><input type="color" class="form-color-input colour-swatch update-trigger" id="customHeaderColor" value="#FFFFFF"><input class="form-input hex-input" id="customHeaderColorHex" value="#FFFFFF" maxlength="7" aria-label="Header text HEX colour"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Font Size</label>
                    <select class="form-select update-trigger" id="invFontSize">
                        <option value="12px">Small</option>
                        <option value="14px" selected>Medium</option>
                        <option value="16px">Large</option>
                    </select>
                </div>
                <div style="margin-top:16px; padding-top:14px; border-top:1px solid var(--border);">
                    <label class="form-label" style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); margin-bottom:10px;">Customize Column Titles</label>
                    <div class="form-row" style="gap:8px; margin-bottom:8px;">
                        <div>
                            <span class="form-hint">Col 1</span>
                            <input type="text" class="form-input update-trigger" id="colTitleDesc" value="Description" style="padding:6px 10px; font-size:0.82rem;">
                        </div>
                        <div>
                            <span class="form-hint">Col 2</span>
                            <input type="text" class="form-input update-trigger" id="colTitleQty" value="Qty" style="padding:6px 10px; font-size:0.82rem;">
                        </div>
                    </div>
                    <div class="form-row" style="gap:8px;">
                        <div>
                            <span class="form-hint">Col 3</span>
                            <input type="text" class="form-input update-trigger" id="colTitleRate" value="Rate" style="padding:6px 10px; font-size:0.82rem;">
                        </div>
                        <div>
                            <span class="form-hint">Col 4</span>
                            <input type="text" class="form-input update-trigger" id="colTitleAmt" value="Amount" style="padding:6px 10px; font-size:0.82rem;">
                        </div>
                    </div>
                </div>
                <div class="custom-column-tools">
                    <label class="form-label" for="invCustomColumnTitle">Add a custom item column</label>
                    <form id="invCustomColumnForm" class="custom-column-add">
                        <input type="text" class="form-input" id="invCustomColumnTitle" maxlength="32" placeholder="e.g. SKU or Hours" required>
                        <button type="submit" class="btn btn--secondary btn--sm">Add column</button>
                    </form>
                    <p class="form-hint">Add details such as SKU, hours, or project code. Give each item its own value.</p>
                    <div id="invCustomColumnList" class="custom-column-list"></div>
                </div>
            </div>

            <div class="sidebar-section invoice-signature-notes">
                <h3 class="sidebar-section__title">Signature & Notes</h3>
                <p class="form-hint">Draw a signature or upload a PNG. It will appear at the bottom of the invoice.</p>
                <canvas id="invoiceSignatureCanvas" class="signature-canvas" width="520" height="140"></canvas>
                <div class="signature-tools"><input id="invoiceSignatureColor" type="color" class="colour-swatch update-trigger" value="#1E293B"><button type="button" id="clearInvoiceSignature" class="btn btn--secondary btn--sm">Clear</button><label class="btn btn--secondary btn--sm">Upload PNG<input id="invoiceSignatureUpload" type="file" accept="image/png" hidden></label></div>
                <div class="invoice-sidebar-notes">
                    <h4 class="sidebar-section__title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        Notes & Terms
                    </h4>
                    <div class="form-group">
                        <label class="form-label">Notes to Client</label>
                        <textarea class="form-textarea update-trigger" id="invNotes" placeholder="Thank you for your business.">Thank you for your business.</textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Terms & Conditions</label>
                        <textarea class="form-textarea update-trigger" id="invTerms" placeholder="Payment is due within 14 days.">Payment is due within 14 days. Please make checks payable to Your Company LLC.</textarea>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Right Area: Preview -->
        <main class="invoice-preview-area">
            <div class="invoice-actions">
                <div class="invoice-actions__left">
                    <span class="badge template-badge">Classic Template</span>
                </div>
                <div class="invoice-actions__right">
                    <button class="btn btn--secondary btn--sm" id="btnAddRow">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        Add Row
                    </button>
                    <button class="btn btn--ghost btn--sm danger-text" id="btnReset">Reset</button>
                    <button class="btn btn--primary" id="btnDownloadPdf">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download PDF
                    </button>
                </div>
            </div>

            <div class="invoice-wrapper">
                <div id="invoicePreview" class="invoice-template template-classic" style="font-size: 14px; background: white; color: #1e293b;">
                    <div class="invoice-header">
                        <div class="invoice-header__left">
                            <img id="previewBizLogo" class="company-logo-preview" alt="Company logo" hidden>
                            <h2 class="invoice-biz-name" id="previewBizName">Your Company LLC</h2>
                        </div>
                        <div class="invoice-header__right">
                            <h1 class="invoice-title">INVOICE</h1>
                            <div class="invoice-meta">
                                <div class="meta-item"><span class="meta-label">Invoice #:</span> <span class="meta-value" id="previewInvNumber">INV-001</span></div>
                                <div class="meta-item"><span class="meta-label">Date:</span> <span class="meta-value" id="previewInvDate">${new Date().toISOString().split('T')[0]}</span></div>
                                <div class="meta-item"><span class="meta-label">Due Date:</span> <span class="meta-value" id="previewInvDueDate">${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="invoice-parties">
                        <div class="party-box from-box">
                            <div class="party-label">From:</div>
                            <div class="party-details">
                                <div class="party-name" id="previewBizNameDetails">Your Company LLC</div>
                                <div class="party-address" id="previewBizAddress">123 Business St<br>City, State 12345</div>
                                <div class="party-contact" id="previewBizContact">hello@yourcompany.com<br>(555) 123-4567</div>
                            </div>
                        </div>
                        <div class="party-box to-box">
                            <div class="party-label">To:</div>
                            <div class="party-details">
                                <div class="party-name" id="previewClientName">Client Name</div>
                                <div class="party-address" id="previewClientAddress">456 Client Rd<br>City, State 67890</div>
                                <div class="party-contact" id="previewClientEmail">client@example.com</div>
                            </div>
                        </div>
                    </div>

                    <div class="invoice-items">
                        <table class="items-table">
                            <thead id="previewTableHeader" style="background-color: #6366F1; color: #FFFFFF;">
                                <tr id="previewTableHeaderRow">
                                    <th class="col-desc" id="thDesc">Description</th>
                                    <th class="col-qty" id="thQty">Qty</th>
                                    <th class="col-rate" id="thRate">Rate</th>
                                    <th class="col-amt" id="thAmt">Amount</th>
                                    <th class="col-action hide-in-pdf"></th>
                                </tr>
                            </thead>
                            <tbody id="previewTableBody">
                                <!-- Items will go here -->
                            </tbody>
                        </table>
                    </div>

                    <div class="invoice-totals">
                        <div class="totals-row">
                            <span class="totals-label">Subtotal:</span>
                            <span class="totals-value" id="previewSubtotal">$0.00</span>
                        </div>
                        <div class="totals-row">
                            <span class="totals-label">Tax (<span id="previewTaxRate">0%</span>):</span>
                            <span class="totals-value" id="previewTaxAmt">$0.00</span>
                        </div>
                        <div class="totals-row discount-row">
                            <span class="totals-label">Discount:</span>
                            <span class="totals-value discount-value">-<span class="currency-symbol">$</span><span id="previewDiscountAmt">0.00</span></span>
                        </div>
                        <div class="totals-row grand-total">
                            <span class="totals-label">Total:</span>
                            <span class="totals-value" id="previewTotal">$0.00</span>
                        </div>
                    </div>

                    <div class="invoice-notes">
                        <div class="notes-section">
                            <h4>Notes</h4>
                            <p id="previewNotes">Thank you for your business.</p>
                        </div>
                        <div class="notes-section">
                            <h4>Terms</h4>
                            <p id="previewTerms">Payment is due within 14 days. Please make checks payable to Your Company LLC.</p>
                        </div>
                    </div>

                    <div class="invoice-signature"><span>This signature represents the user's signature for this invoice.</span><img id="previewInvoiceSignature" alt="Invoice signature"></div>

                    <div class="invoice-footer">
                        Generated with CashHub
                    </div>
                </div>
            </div>
            <section class="sidebar-section invoice-pro-tips">
                <h3 class="sidebar-section__title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    Invoice Pro Tips
                </h3>
                <div class="invoice-pro-tips__content">
                    <p><strong>Faster Payments:</strong> Consider clear, shorter payment terms and make due dates easy to find.</p>
                    <p><strong>Clear Scope:</strong> Itemize deliverables with specific hours or milestones to reduce misunderstandings.</p>
                    <p><strong>Late Payments:</strong> State any late-payment terms clearly and ensure they comply with your agreement and local rules.</p>
                </div>
            </section>
        </main>
    </div>
    </div>
    `;
}

// Add these custom styles inside JS to ensure it works if CSS is missing, or user can put in CSS file.
// The prompt implies CSS classes are provided or expected to be in global CSS.

window.initInvoicePage = function () {
    let items = [
        { desc: 'Web Design Services', qty: 1, rate: 1000 },
        { desc: 'Hosting (1 year)', qty: 1, rate: 120 },
        { desc: 'Domain Registration', qty: 1, rate: 15 }
    ];

    // Check for imported calculation from Calculators
    const rawImport = sessionStorage.getItem('cashhub_invoice_import');
    if (rawImport) {
        try {
            const imported = JSON.parse(rawImport);
            sessionStorage.removeItem('cashhub_invoice_import');

            if (imported.type === 'item') {
                items = [{
                    desc: imported.desc || 'Calculated Service',
                    qty: imported.qty || 1,
                    rate: imported.rate || 0
                }];
                if (imported.taxRate !== undefined && imported.taxRate > 0) {
                    const taxEl = document.getElementById('taxInput');
                    if (taxEl) taxEl.value = imported.taxRate;
                }
                if (imported.discount !== undefined && imported.discount > 0) {
                    const discEl = document.getElementById('discountInput');
                    if (discEl) discEl.value = imported.discount;
                }
                if (imported.note) {
                    const termsEl = document.getElementById('invTerms');
                    if (termsEl) termsEl.value += '\n' + imported.note;
                }
            } else if (imported.type === 'multi' && Array.isArray(imported.items)) {
                items = imported.items;
                if (imported.taxRate !== undefined) {
                    const taxEl = document.getElementById('taxInput');
                    if (taxEl) taxEl.value = imported.taxRate;
                }
                if (imported.discount !== undefined) {
                    const discEl = document.getElementById('discountInput');
                    if (discEl) discEl.value = imported.discount;
                }
            } else if (imported.type === 'dueDate') {
                if (imported.dueDate) {
                    const dueEl = document.getElementById('invDueDate');
                    if (dueEl) dueEl.value = imported.dueDate;
                }
                if (imported.note) {
                    const termsEl = document.getElementById('invTerms');
                    if (termsEl) termsEl.value += '\n' + imported.note;
                }
            } else if (imported.type === 'note' && imported.desc) {
                const notesEl = document.getElementById('invNotes');
                if (notesEl) notesEl.value += '\n' + imported.desc;
            }

        } catch (err) {
            console.error('Error importing calculation:', err);
        }
    }

    let currentCurrency = '$';
    let invoiceLogoSource = '';
    let customColumns = [];
    let nextCustomColumnId = 1;

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    function formatCurrency(amount) {
        return currentCurrency + amount.toFixed(2);
    }

    function renderCustomColumnHeaders() {
        const headerRow = document.getElementById('previewTableHeaderRow');
        const actionHeader = headerRow?.querySelector('.col-action');
        if (!headerRow || !actionHeader) return;

        headerRow.closest('.invoice-items')?.classList.toggle('invoice-items--custom-columns', customColumns.length > 0);
        headerRow.querySelectorAll('[data-custom-column-header]').forEach(header => header.remove());
        customColumns.forEach(column => {
            const header = document.createElement('th');
            header.className = 'custom-item-column';
            header.dataset.customColumnHeader = column.id;
            header.textContent = column.title;
            header.style.backgroundColor = document.getElementById('customHeaderBg').value;
            header.style.color = document.getElementById('customHeaderColor').value;
            headerRow.insertBefore(header, actionHeader);
        });
    }

    function renderCustomColumnManager() {
        const list = document.getElementById('invCustomColumnList');
        if (!list) return;
        list.replaceChildren();

        customColumns.forEach(column => {
            const row = document.createElement('div');
            row.className = 'custom-column-row';
            const title = document.createElement('input');
            title.type = 'text';
            title.className = 'form-input';
            title.maxLength = 32;
            title.value = column.title;
            title.setAttribute('aria-label', 'Custom column heading');
            title.dataset.customColumnTitle = column.id;
            const remove = document.createElement('button');
            remove.type = 'button';
            remove.className = 'btn btn--ghost btn--sm danger-text';
            remove.textContent = 'Remove';
            remove.dataset.removeCustomColumn = column.id;
            row.append(title, remove);
            list.append(row);
        });
    }

    function renderItems() {
        const tbody = document.getElementById('previewTableBody');
        if (!tbody) return;

        tbody.innerHTML = '';
        let subtotal = 0;

        items.forEach((item, index) => {
            const amount = item.qty * item.rate;
            subtotal += amount;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="col-desc">
                    <input type="text" class="item-input desc-input hide-in-pdf" value="${escapeHTML(item.desc)}" data-index="${index}" data-field="desc">
                    <span class="show-in-pdf-only">${escapeHTML(item.desc)}</span>
                </td>
                <td class="col-qty">
                    <input type="number" class="item-input qty-input hide-in-pdf" value="${item.qty}" data-index="${index}" data-field="qty" min="0" step="1">
                    <span class="show-in-pdf-only">${item.qty}</span>
                </td>
                <td class="col-rate">
                    <input type="number" class="item-input rate-input hide-in-pdf" value="${item.rate}" data-index="${index}" data-field="rate" min="0" step="0.01">
                    <span class="show-in-pdf-only">${item.rate}</span>
                </td>
                <td class="col-amt">${formatCurrency(amount)}</td>
                ${customColumns.map(column => {
                    const value = item.customFields?.[column.id] || '';
                    return `<td class="custom-item-column" data-label="${escapeHTML(column.title)}"><input type="text" class="item-input custom-item-input hide-in-pdf" value="${escapeHTML(value)}" data-index="${index}" data-field="custom:${column.id}" aria-label="${escapeHTML(column.title)}"><span class="show-in-pdf-only">${escapeHTML(value)}</span></td>`;
                }).join('')}
                <td class="col-action hide-in-pdf">
                    <button class="btn-delete-row" data-index="${index}" title="Delete Row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        calculateTotals(subtotal);
    }

    function calculateTotals(subtotal) {
        const taxRate = parseFloat(document.getElementById('taxInput')?.value) || 0;
        const discount = parseFloat(document.getElementById('discountInput')?.value) || 0;

        const taxAmt = subtotal * (taxRate / 100);
        const total = subtotal + taxAmt - discount;

        document.getElementById('previewSubtotal').textContent = formatCurrency(subtotal);
        document.getElementById('previewTaxAmt').textContent = formatCurrency(taxAmt);
        document.getElementById('previewTaxRate').textContent = taxRate + '%';
        document.getElementById('previewDiscountAmt').textContent = discount.toFixed(2);
        document.getElementById('previewTotal').textContent = formatCurrency(total);

        // Update currency symbols across DOM
        document.querySelectorAll('.currency-symbol').forEach(el => el.textContent = currentCurrency);
    }

    function updatePreview() {
        // Business
        document.getElementById('previewBizName').textContent = document.getElementById('bizName').value || ' ';
        document.getElementById('previewBizNameDetails').textContent = document.getElementById('bizName').value || ' ';
        const logoPreview = document.getElementById('previewBizLogo');
        logoPreview.hidden = !invoiceLogoSource;
        if (invoiceLogoSource && logoPreview.src !== invoiceLogoSource) logoPreview.src = invoiceLogoSource;
        document.getElementById('previewBizAddress').innerHTML = (document.getElementById('bizAddress').value || ' ').replace(/\\n/g, '<br>');

        const phone = document.getElementById('bizPhone').value;
        const email = document.getElementById('bizEmail').value;
        document.getElementById('previewBizContact').innerHTML = `${email}${phone ? '<br>' + phone : ''}`;

        // Client
        document.getElementById('previewClientName').textContent = document.getElementById('clientName').value || ' ';
        document.getElementById('previewClientAddress').innerHTML = (document.getElementById('clientAddress').value || ' ').replace(/\\n/g, '<br>');
        document.getElementById('previewClientEmail').textContent = document.getElementById('clientEmail').value || ' ';

        // Info
        document.getElementById('previewInvNumber').textContent = document.getElementById('invNumber').value || ' ';
        document.getElementById('previewInvDate').textContent = document.getElementById('invDate').value || ' ';
        document.getElementById('previewInvDueDate').textContent = document.getElementById('invDueDate').value || ' ';

        currentCurrency = document.getElementById('invCurrency').value;

        // Customization
        const headerBg = document.getElementById('customHeaderBg').value;
        const headerColor = document.getElementById('customHeaderColor').value;
        const fontSize = document.getElementById('invFontSize').value;

        document.getElementById('previewTableHeader').style.backgroundColor = headerBg;
        document.getElementById('previewTableHeader').style.color = headerColor;
        document.querySelectorAll('#previewTableHeader th').forEach(cell => {
            cell.style.color = headerColor;
        });
        document.getElementById('invoicePreview').style.fontSize = fontSize;

        // Custom Column Titles
        const thDesc = document.getElementById('thDesc');
        const thQty = document.getElementById('thQty');
        const thRate = document.getElementById('thRate');
        const thAmt = document.getElementById('thAmt');

        if (thDesc) thDesc.textContent = document.getElementById('colTitleDesc')?.value || 'Description';
        if (thQty) thQty.textContent = document.getElementById('colTitleQty')?.value || 'Qty';
        if (thRate) thRate.textContent = document.getElementById('colTitleRate')?.value || 'Rate';
        if (thAmt) thAmt.textContent = document.getElementById('colTitleAmt')?.value || 'Amount';
        renderCustomColumnHeaders();

        // Notes
        document.getElementById('previewNotes').innerHTML = (document.getElementById('invNotes').value || ' ').replace(/\\n/g, '<br>');
        document.getElementById('previewTerms').innerHTML = (document.getElementById('invTerms').value || ' ').replace(/\\n/g, '<br>');

        renderItems();
    }

    document.getElementById('invCustomColumnForm')?.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.getElementById('invCustomColumnTitle');
        const title = input.value.trim();
        if (!title) {
            input.focus();
            return;
        }

        const column = { id: `custom-${nextCustomColumnId++}`, title };
        customColumns.push(column);
        items.forEach(item => {
            item.customFields = item.customFields || {};
            item.customFields[column.id] = '';
        });
        renderCustomColumnManager();
        updatePreview();
        document.getElementById('invCustomColumnTitle').focus();
    });

    document.getElementById('invCustomColumnList')?.addEventListener('input', event => {
        const columnId = event.target.dataset.customColumnTitle;
        if (!columnId) return;
        const column = customColumns.find(item => item.id === columnId);
        if (!column) return;
        column.title = event.target.value;
        const header = document.querySelector(`[data-custom-column-header="${columnId}"]`);
        if (header) header.textContent = column.title;
        document.querySelectorAll(`#previewTableBody [data-field="custom:${columnId}"]`).forEach(input => {
            input.setAttribute('aria-label', column.title);
            input.closest('td').dataset.label = column.title;
        });
    });

    document.getElementById('invCustomColumnList')?.addEventListener('click', event => {
        const columnId = event.target.closest('[data-remove-custom-column]')?.dataset.removeCustomColumn;
        if (!columnId) return;
        customColumns = customColumns.filter(column => column.id !== columnId);
        items.forEach(item => { if (item.customFields) delete item.customFields[columnId]; });
        renderCustomColumnManager();
        updatePreview();
    });

    // Event Delegation for Table Inputs & Deletes
    document.getElementById('previewTableBody')?.addEventListener('input', (e) => {
        if (e.target.classList.contains('item-input')) {
            const index = Number(e.target.getAttribute('data-index'));
            const field = e.target.getAttribute('data-field');
            if (field.startsWith('custom:')) {
                const columnId = field.slice('custom:'.length);
                items[index].customFields = items[index].customFields || {};
                items[index].customFields[columnId] = e.target.value;
                e.target.nextElementSibling.textContent = e.target.value;
                return;
            }
            if (field === 'desc') {
                items[index][field] = e.target.value;
                e.target.nextElementSibling.textContent = e.target.value;
            } else {
                items[index][field] = parseFloat(e.target.value) || 0;
                const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
                e.target.closest('tr').querySelector('.col-amt').textContent = formatCurrency(items[index].qty * items[index].rate);
                calculateTotals(subtotal);
            }
        }
    });

    document.getElementById('previewTableBody')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-delete-row');
        if (btn) {
            const index = btn.getAttribute('data-index');
            items.splice(index, 1);
            renderItems();
        }
    });

    // Add Row
    document.getElementById('btnAddRow')?.addEventListener('click', () => {
        items.push({ desc: 'New Item', qty: 1, rate: 0, customFields: {} });
        renderItems();
    });

    // Update triggers
    document.querySelectorAll('.update-trigger').forEach(el => {
        el.addEventListener('input', updatePreview);
    });

    document.getElementById('invoiceLogoUpload')?.addEventListener('change', event => {
        const input = event.currentTarget;
        const file = input.files?.[0];
        const status = document.getElementById('invoiceLogoStatus');
        if (!file) return;
        const acceptedTypes = ['image/png', 'image/jpeg', 'image/webp'];
        const supported = file.type ? acceptedTypes.includes(file.type) : /\.(png|jpe?g|webp)$/i.test(file.name);
        if (!supported) {
            status.textContent = 'Choose a PNG, JPG or WebP image.';
            input.value = '';
            return;
        }
        if (file.size > 600 * 1024) {
            status.textContent = 'Logo must be 600 KB or smaller.';
            input.value = '';
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            invoiceLogoSource = reader.result;
            status.textContent = `Logo added · ${file.name}`;
            updatePreview();
        };
        reader.onerror = () => { status.textContent = 'Could not read this image. Please try another file.'; };
        reader.readAsDataURL(file);
    });

    const isHex = value => /^#[0-9a-fA-F]{6}$/.test(value);
    const syncInvoiceColour = (pickerId, hexId, source) => {
        const value = source.value;
        if (!isHex(value)) { source.setCustomValidity('Enter a valid HEX colour such as #6366F1'); return; }
        source.setCustomValidity('');
        document.getElementById(pickerId).value = value;
        document.getElementById(hexId).value = value.toUpperCase();
        updatePreview();
    };
    [['customHeaderBg', 'customHeaderBgHex'], ['customHeaderColor', 'customHeaderColorHex']].forEach(([pickerId, hexId]) => {
        document.getElementById(pickerId)?.addEventListener('input', e => syncInvoiceColour(pickerId, hexId, e.target));
        document.getElementById(hexId)?.addEventListener('input', e => { if (isHex(e.target.value)) syncInvoiceColour(pickerId, hexId, e.target); });
    });

    const signatureCanvas = document.getElementById('invoiceSignatureCanvas');
    if (signatureCanvas) {
        const signatureCtx = signatureCanvas.getContext('2d');
        let drawing = false;
        let signatureSource = '';
        const signaturePoint = event => { const rect = signatureCanvas.getBoundingClientRect(); return { x: (event.clientX - rect.left) * signatureCanvas.width / rect.width, y: (event.clientY - rect.top) * signatureCanvas.height / rect.height }; };
        signatureCanvas.addEventListener('pointerdown', event => { drawing = true; const p = signaturePoint(event); signatureCtx.beginPath(); signatureCtx.moveTo(p.x, p.y); });
        signatureCanvas.addEventListener('pointermove', event => { if (!drawing) return; const p = signaturePoint(event); signatureCtx.strokeStyle = document.getElementById('invoiceSignatureColor').value; signatureCtx.lineWidth = 2.2; signatureCtx.lineCap = 'round'; signatureCtx.lineTo(p.x, p.y); signatureCtx.stroke(); signatureSource = signatureCanvas.toDataURL('image/png'); document.getElementById('previewInvoiceSignature').src = signatureSource; });
        ['pointerup', 'pointerleave'].forEach(type => signatureCanvas.addEventListener(type, () => { drawing = false; }));
        document.getElementById('clearInvoiceSignature')?.addEventListener('click', () => { signatureCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height); signatureSource = ''; document.getElementById('previewInvoiceSignature').removeAttribute('src'); });
        document.getElementById('invoiceSignatureUpload')?.addEventListener('change', event => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = result => { signatureSource = result.target.result; document.getElementById('previewInvoiceSignature').src = signatureSource; }; reader.readAsDataURL(file); });
    }

    // Template Switching
    const templateOptions = document.querySelectorAll('.template-option');
    templateOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            templateOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');

            const template = opt.getAttribute('data-template');
            const preview = document.getElementById('invoicePreview');

            // Remove existing template classes
            preview.className = 'invoice-template';
            preview.classList.add(`template-${template}`);

            document.querySelector('.template-badge').textContent = opt.querySelector('span').textContent + ' Template';
        });
    });

    // PDF Download
    document.getElementById('btnDownloadPdf')?.addEventListener('click', async () => {
        const element = document.getElementById('invoicePreview');
        const invoiceNumber = document.getElementById('invNumber').value || 'draft';
        element.classList.add('pdf-mode');
        if (window.html2pdf) {
            try {
                if (document.fonts?.ready) await document.fonts.ready;
                await Promise.all([...element.querySelectorAll('img')].map(image => image.decode?.().catch(() => { })));
                await window.html2pdf().set({
                    margin: 0.5,
                    filename: `invoice-${invoiceNumber}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        backgroundColor: '#ffffff',
                        scrollX: 0,
                        scrollY: 0,
                        onclone: clonedDocument => {
                            const clonedPreview = clonedDocument.getElementById('invoicePreview');
                            if (!clonedPreview) return;
                            clonedPreview.style.cssText += ';display:block!important;position:static!important;width:740px!important;max-width:none!important;height:auto!important;min-height:0!important;overflow:visible!important;opacity:1!important;visibility:visible!important;transform:none!important;background:#fff!important';
                            clonedPreview.querySelectorAll('.hide-in-pdf').forEach(node => { node.style.display = 'none'; });
                            clonedPreview.querySelectorAll('.show-in-pdf-only').forEach(node => { node.style.display = 'inline'; });
                            clonedPreview.querySelectorAll('*').forEach(node => { node.style.visibility = 'visible'; });
                        }
                    },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                }).from(element).save();
                element.classList.remove('pdf-mode');
                return;
            } catch (error) {
                console.error('Invoice PDF export failed; using print fallback.', error);
                element.classList.remove('pdf-mode');
            }
        }

        document.body.classList.add('invoice-print-mode');
        const cleanup = () => {
            document.body.classList.remove('invoice-print-mode');
            element.classList.remove('pdf-mode');
        };
        window.addEventListener('afterprint', cleanup, { once: true });
        window.print();
    });

    // Reset
    document.getElementById('btnReset')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all fields to default?')) {
            items = [
                { desc: 'Web Design Services', qty: 1, rate: 1000 },
                { desc: 'Hosting (1 year)', qty: 1, rate: 120 },
                { desc: 'Domain Registration', qty: 1, rate: 15 }
            ];
            customColumns = [];
            nextCustomColumnId = 1;
            document.getElementById('invCustomColumnTitle').value = '';
            renderCustomColumnManager();
            ['colTitleDesc', 'colTitleQty', 'colTitleRate', 'colTitleAmt'].forEach((id, index) => {
                document.getElementById(id).value = ['Description', 'Qty', 'Rate', 'Amount'][index];
            });

            // Reset form fields
            document.getElementById('bizName').value = 'Your Company LLC';
            document.getElementById('bizAddress').value = '123 Business St\\nCity, State 12345';
            document.getElementById('bizEmail').value = 'hello@yourcompany.com';
            document.getElementById('bizPhone').value = '(555) 123-4567';
            invoiceLogoSource = '';
            document.getElementById('invoiceLogoUpload').value = '';
            document.getElementById('invoiceLogoStatus').textContent = 'PNG, JPG or WebP · up to 600 KB';

            document.getElementById('clientName').value = 'Client Name';
            document.getElementById('clientAddress').value = '456 Client Rd\\nCity, State 67890';
            document.getElementById('clientEmail').value = 'client@example.com';

            document.getElementById('invNumber').value = 'INV-001';
            document.getElementById('invCurrency').value = '$';
            document.getElementById('invDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('invDueDate').value = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

            document.getElementById('customHeaderBg').value = '#6366F1';
            document.getElementById('customHeaderColor').value = '#FFFFFF';
            document.getElementById('invFontSize').value = '14px';

            document.getElementById('invNotes').value = 'Thank you for your business.';
            document.getElementById('invTerms').value = 'Payment is due within 14 days. Please make checks payable to Your Company LLC.';

            document.getElementById('taxInput').value = 0;
            document.getElementById('discountInput').value = 0;

            // Reset template
            templateOptions[0].click();

            updatePreview();
        }
    });

    // Add a simple style injection to handle PDF mode visibility toggles
    if (!document.getElementById('invoice-pdf-styles')) {
        const style = document.createElement('style');
        style.id = 'invoice-pdf-styles';
        style.textContent = `
            .show-in-pdf-only { display: none; }
            .pdf-mode .hide-in-pdf { display: none !important; }
            .pdf-mode .show-in-pdf-only { display: inline !important; }
        `;
        document.head.appendChild(style);
    }

    // Initial render
    updatePreview();
};
