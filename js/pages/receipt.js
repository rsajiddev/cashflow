import { currencyOptions } from '../data/currencies.js';

export function renderReceipt() {
  const today = new Date().toISOString().slice(0, 10);
  return `<section class="section receipt-page"><div class="container">
    <div class="page-hero page-hero--center animate-in"><span class="section-label">CashHub receipts</span><h1 class="section-title">Receipt Generator</h1><p class="section-desc">Create a professional proof of payment with editable seller and customer details, customizable item columns, and a clear breakdown of tax, discounts, and totals. Choose your payment method, add notes or a signature, preview every change, and download a polished receipt PDF.</p></div>
    <div class="receipt-builder">
      <aside class="receipt-form-panel">
        <div class="sidebar-section"><h3 class="sidebar-section__title">Receipt details</h3>
          <div class="form-row"><div class="form-group"><label class="form-label">Receipt number</label><input id="recNumber" class="form-input rec-trigger" value="REC-001"></div><div class="form-group"><label class="form-label">Date</label><input id="recDate" type="date" class="form-input rec-trigger" value="${today}"></div></div>
          <div class="form-group"><label class="form-label">Currency</label><select id="recCurrency" class="form-select rec-trigger">${currencyOptions}</select></div>
          <div class="form-group"><label class="form-label">Payment method</label><select id="recPayment" class="form-select rec-trigger"><option>Cash</option><option>Bank transfer</option><option>Card</option><option>Mobile wallet</option><option>Cheque</option></select></div>
          <div class="form-group"><label class="form-label">Payment status</label><select id="recStatus" class="form-select rec-trigger"><option>Paid</option><option>Partially paid</option><option>Pending</option></select></div>
          <div class="form-row"><div class="form-group"><label class="form-label">Tax (%)</label><input id="recTax" type="number" min="0" step="0.1" class="form-input rec-trigger" value="0"></div><div class="form-group"><label class="form-label">Discount</label><input id="recDiscount" type="number" min="0" step="0.01" class="form-input rec-trigger" value="0"></div></div>
        </div>
        <div class="sidebar-section"><h3 class="sidebar-section__title">Seller & customer</h3>
          <div class="form-group"><label class="form-label">Business / seller</label><input id="recSeller" class="form-input rec-trigger" value="Your Company LLC"></div>
          <div class="form-group"><label class="form-label">Seller contact</label><input id="recSellerContact" class="form-input rec-trigger" value="hello@yourcompany.com"></div>
          <div class="form-group company-logo-upload"><label class="form-label" for="receiptLogoUpload">Company logo</label><label class="btn btn--secondary btn--sm company-logo-upload__button">Choose logo<input id="receiptLogoUpload" type="file" accept="image/png,image/jpeg,image/webp" hidden></label><span class="form-hint" id="receiptLogoStatus" role="status">PNG, JPG or WebP · up to 600 KB</span></div>
          <div class="form-group"><label class="form-label">Customer</label><input id="recCustomer" class="form-input rec-trigger" value="Customer Name"></div>
        </div>
        <div class="sidebar-section"><h3 class="sidebar-section__title">Appearance</h3>
          <div class="receipt-colour-control"><div><label class="form-label">Accent colour</label><input id="recColor" type="color" class="colour-swatch rec-trigger" value="#6366F1"></div><div><label class="form-label">HEX code</label><input id="recColorHex" class="form-input hex-input" value="#6366F1" maxlength="7" pattern="^#[0-9a-fA-F]{6}$"></div></div>
          <div class="receipt-signature-controls">
            <h4 class="sidebar-section__title">Signature</h4>
            <p class="form-hint">Draw below or upload a PNG signature. It will appear at the end of the receipt.</p>
            <canvas id="recSignatureCanvas" class="signature-canvas" width="520" height="140"></canvas>
            <div class="signature-tools"><input id="recSignatureColor" type="color" class="colour-swatch rec-trigger" value="#1E293B"><button type="button" id="recClearSignature" class="btn btn--secondary btn--sm">Clear</button><label class="btn btn--secondary btn--sm">Upload PNG<input id="recSignatureUpload" type="file" accept="image/png" hidden></label></div>
          </div>
        </div>
        <div class="sidebar-section"><div class="form-group"><label class="form-label">Notes</label><textarea id="recNotes" class="form-textarea rec-trigger">Thank you for your business.</textarea></div></div>
      </aside>
      <main class="receipt-preview-area"><div class="invoice-actions"><div class="invoice-actions__left"><span class="badge">Receipt Preview</span></div><div class="invoice-actions__right"><button type="button" id="recAddRow" class="btn btn--secondary btn--sm">+ Add item</button><button id="btnDownloadReceipt" class="btn btn--primary">Download PDF</button></div></div><div id="receiptPreview" class="receipt-template"><header class="receipt-preview__header"><div class="receipt-preview__seller"><img id="recPreviewLogo" class="company-logo-preview" alt="Company logo" hidden><div><span class="receipt-kicker">PAYMENT RECEIPT</span><h2 id="recPreviewSeller">Your Company LLC</h2><p id="recPreviewSellerContact">hello@yourcompany.com</p></div></div><div class="receipt-preview__number"><strong id="recPreviewNumber">REC-001</strong><span id="recPreviewDate">${today}</span></div></header><div class="receipt-preview__parties"><div><span>RECEIVED FROM</span><strong id="recPreviewCustomer">Customer Name</strong></div><div><span>PAYMENT</span><strong id="recPreviewPayment">Cash · Paid</strong></div></div><div class="receipt-items"><table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody id="receiptItemsBody"></tbody></table></div><div class="receipt-summary"><div><span>Subtotal</span><strong id="recPreviewSubtotal">$0.00</strong></div><div><span>Tax</span><strong id="recPreviewTax">$0.00</strong></div><div><span>Discount</span><strong id="recPreviewDiscount">-$0.00</strong></div><div class="receipt-total"><span>Total paid</span><strong id="recPreviewTotal">$0.00</strong></div></div><div class="receipt-preview__notes"><span>Notes</span><p id="recPreviewNotes">Thank you for your business.</p></div><div class="receipt-signature"><span>This signature represents the user's signature for this receipt.</span><img id="recPreviewSignature" alt="Receipt signature"></div><footer>Generated with CashHub · Keep this receipt for your records.</footer></div></main>
    </div></div></section>`;
}

export function initReceiptPage() {
  let items = [{ desc: 'Professional service', qty: 1, price: 250 }, { desc: 'Additional support', qty: 1, price: 50 }];
  let customColumns = [];
  let nextCustomColumnId = 1;
  let receiptLogoSource = '';
  const $ = id => document.getElementById(id);
  const preview = $('receiptPreview');
  const format = value => `${$('recCurrency').value}${Number(value || 0).toFixed(2)}`;
  const validHex = value => /^#[0-9a-fA-F]{6}$/.test(value);
  const importedCalculationRaw = sessionStorage.getItem('cashhub_receipt_import');
  let importedCalculation = null;
  if (importedCalculationRaw) {
    try {
      importedCalculation = JSON.parse(importedCalculationRaw);
      sessionStorage.removeItem('cashhub_receipt_import');
      const importedItems = importedCalculation.type === 'multi' && Array.isArray(importedCalculation.items)
        ? importedCalculation.items
        : importedCalculation.type === 'item' ? [importedCalculation] : [];
      if (importedItems.length) {
        items = importedItems.map(item => ({
          desc: item.desc || 'Calculated item',
          qty: Number(item.qty) || 1,
          price: Number(item.price ?? item.rate) || 0,
          customFields: {}
        }));
      }
      if (importedCalculation.taxRate !== undefined) $('recTax').value = Number(importedCalculation.taxRate) || 0;
      if (importedCalculation.discount !== undefined) $('recDiscount').value = Number(importedCalculation.discount) || 0;
      if (importedCalculation.note) $('recNotes').value = `${$('recNotes').value}\n${importedCalculation.note}`;
    } catch (error) {
      console.error('Could not import calculator result into receipt:', error);
      sessionStorage.removeItem('cashhub_receipt_import');
    }
  }
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  const customColumnPanel = document.createElement('section');
  customColumnPanel.className = 'sidebar-section';
  customColumnPanel.innerHTML = `<h3 class="sidebar-section__title">Custom item columns</h3>
    <form id="recCustomColumnForm" class="custom-column-add">
      <input type="text" class="form-input" id="recCustomColumnTitle" maxlength="32" placeholder="e.g. SKU or Hours" aria-label="New column heading" required>
      <button type="submit" class="btn btn--secondary btn--sm">Add column</button>
    </form>
    <p class="form-hint">Add details such as SKU, hours, or project code. Give each item its own value.</p>
    <div id="recCustomColumnList" class="custom-column-list"></div>`;
  document.querySelector('.receipt-form-panel').querySelector('.sidebar-section').insertAdjacentElement('afterend', customColumnPanel);

  function renderCustomColumnHeaders() {
    const headerRow = preview.querySelector('.receipt-items thead tr');
    if (!headerRow) return;
    headerRow.querySelectorAll('[data-custom-column-header]').forEach(header => header.remove());
    const totalHeader = headerRow.lastElementChild;
    customColumns.forEach(column => {
      const header = document.createElement('th');
      header.dataset.customColumnHeader = column.id;
      header.textContent = column.title;
      headerRow.insertBefore(header, totalHeader);
    });
  }

  function renderCustomColumnManager() {
    const list = $('recCustomColumnList');
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
    renderCustomColumnHeaders();
    $('receiptItemsBody').innerHTML = items.map((item, index) => `<tr><td data-label="Item"><input class="item-input rec-item" data-index="${index}" data-field="desc" value="${escapeHTML(item.desc)}"></td><td data-label="Qty"><input type="number" class="item-input rec-item" data-index="${index}" data-field="qty" value="${item.qty}" min="0"></td><td data-label="Price"><input type="number" class="item-input rec-item" data-index="${index}" data-field="price" value="${item.price}" min="0" step="0.01"></td>${customColumns.map(column => `<td data-label="${escapeHTML(column.title)}"><input class="item-input rec-item custom-item-input" data-index="${index}" data-field="custom:${column.id}" aria-label="${escapeHTML(column.title)}" value="${escapeHTML(item.customFields?.[column.id] || '')}"></td>`).join('')}<td data-label="Total"><span class="receipt-item-total" data-index="${index}">${format(item.qty * item.price)}</span><button type="button" class="btn-delete-row hide-in-pdf" data-index="${index}" aria-label="Delete item">×</button></td></tr>`).join('');
    updatePreview();
  }
  function updatePreview() {
    const subtotal = items.reduce((sum, item) => sum + Number(item.qty || 0) * Number(item.price || 0), 0);
    items.forEach((item, index) => {
      const lineTotal = preview.querySelector(`.receipt-item-total[data-index="${index}"]`);
      if (lineTotal) lineTotal.textContent = format(Number(item.qty || 0) * Number(item.price || 0));
    });
    const tax = subtotal * (Number($('recTax').value || 0) / 100);
    const discount = Number($('recDiscount').value || 0);
    const total = Math.max(0, subtotal + tax - discount);
    const color = $('recColor').value;
    preview.style.setProperty('--receipt-accent', color);
    $('recPreviewSeller').textContent = $('recSeller').value || ' ';
    const logo = $('recPreviewLogo');
    logo.hidden = !receiptLogoSource;
    if (receiptLogoSource && logo.src !== receiptLogoSource) logo.src = receiptLogoSource;
    $('recPreviewSellerContact').textContent = $('recSellerContact').value || ' ';
    $('recPreviewCustomer').textContent = $('recCustomer').value || ' ';
    $('recPreviewNumber').textContent = $('recNumber').value || ' ';
    $('recPreviewDate').textContent = $('recDate').value || ' ';
    $('recPreviewPayment').textContent = `${$('recPayment').value} · ${$('recStatus').value}`;
    $('recPreviewSubtotal').textContent = format(subtotal);
    $('recPreviewTax').textContent = format(tax);
    $('recPreviewDiscount').textContent = `-${format(discount)}`;
    $('recPreviewTotal').textContent = format(total);
    $('recPreviewNotes').textContent = $('recNotes').value || ' ';
  }
  function syncColour(source) {
    const value = source.value;
    if (!validHex(value)) { source.setCustomValidity('Use a HEX value such as #6366F1'); return; }
    source.setCustomValidity('');
    $('recColor').value = value;
    $('recColorHex').value = value.toUpperCase();
    updatePreview();
  }
  document.querySelectorAll('.rec-trigger').forEach(el => el.addEventListener('input', e => e.target.id === 'recColor' ? syncColour(e.target) : updatePreview()));
  $('recColorHex').addEventListener('input', e => { if (validHex(e.target.value)) syncColour(e.target); });
  $('receiptLogoUpload').addEventListener('change', e => {
    const input = e.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    const acceptedTypes = ['image/png', 'image/jpeg', 'image/webp'];
    const supported = file.type ? acceptedTypes.includes(file.type) : /\.(png|jpe?g|webp)$/i.test(file.name);
    if (!supported) {
      $('receiptLogoStatus').textContent = 'Choose a PNG, JPG or WebP image.';
      input.value = '';
      return;
    }
    if (file.size > 600 * 1024) {
      $('receiptLogoStatus').textContent = 'Logo must be 600 KB or smaller.';
      input.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      receiptLogoSource = reader.result;
      $('receiptLogoStatus').textContent = `Logo added · ${file.name}`;
      updatePreview();
    };
    reader.onerror = () => { $('receiptLogoStatus').textContent = 'Could not read this image. Please try another file.'; };
    reader.readAsDataURL(file);
  });
  $('recCustomColumnForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = $('recCustomColumnTitle');
    const title = input.value.trim();
    if (!title) { input.focus(); return; }
    const column = { id: `custom-${nextCustomColumnId++}`, title };
    customColumns.push(column);
    items.forEach(item => {
      item.customFields = item.customFields || {};
      item.customFields[column.id] = '';
    });
    renderCustomColumnManager();
    renderItems();
    $('recCustomColumnTitle').focus();
  });
  $('recCustomColumnList').addEventListener('input', event => {
    const columnId = event.target.dataset.customColumnTitle;
    const column = customColumns.find(item => item.id === columnId);
    if (!column) return;
    column.title = event.target.value;
    const header = preview.querySelector(`[data-custom-column-header="${columnId}"]`);
    if (header) header.textContent = column.title;
    preview.querySelectorAll(`[data-field="custom:${columnId}"]`).forEach(input => {
      input.setAttribute('aria-label', column.title);
      input.closest('td').dataset.label = column.title;
    });
  });
  $('recCustomColumnList').addEventListener('click', event => {
    const columnId = event.target.closest('[data-remove-custom-column]')?.dataset.removeCustomColumn;
    if (!columnId) return;
    customColumns = customColumns.filter(column => column.id !== columnId);
    items.forEach(item => { if (item.customFields) delete item.customFields[columnId]; });
    renderCustomColumnManager();
    renderItems();
  });
  $('receiptItemsBody').addEventListener('input', e => {
    const index = Number(e.target.dataset.index);
    if (e.target.dataset.index === undefined) return;
    const field = e.target.dataset.field;
    if (field.startsWith('custom:')) {
      const columnId = field.slice('custom:'.length);
      items[index].customFields = items[index].customFields || {};
      items[index].customFields[columnId] = e.target.value;
    } else {
      items[index][field] = field === 'desc' ? e.target.value : Number(e.target.value || 0);
    }
    updatePreview();
  });
  $('receiptItemsBody').addEventListener('click', e => { if (e.target.classList.contains('btn-delete-row')) { items.splice(Number(e.target.dataset.index), 1); renderItems(); } });
  $('recAddRow').addEventListener('click', () => { items.push({ desc: 'New item', qty: 1, price: 0, customFields: {} }); renderItems(); });
  $('recClearSignature').addEventListener('click', () => { const ctx = $('recSignatureCanvas').getContext('2d'); ctx.clearRect(0, 0, 520, 140); $('recPreviewSignature').removeAttribute('src'); });
  $('recSignatureUpload').addEventListener('change', e => { const file = e.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = event => $('recPreviewSignature').src = event.target.result; reader.readAsDataURL(file); });
  const canvas = $('recSignatureCanvas'); const ctx = canvas.getContext('2d'); let drawing = false;
  const point = event => { const rect = canvas.getBoundingClientRect(); return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height }; };
  canvas.addEventListener('pointerdown', e => { drawing = true; const p = point(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); });
  canvas.addEventListener('pointermove', e => { if (!drawing) return; const p = point(e); ctx.strokeStyle = $('recSignatureColor').value; ctx.lineWidth = 2.2; ctx.lineCap = 'round'; ctx.lineTo(p.x, p.y); ctx.stroke(); $('recPreviewSignature').src = canvas.toDataURL('image/png'); });
  ['pointerup', 'pointerleave'].forEach(event => canvas.addEventListener(event, () => { drawing = false; }));
  $('btnDownloadReceipt').addEventListener('click', async () => {
    preview.classList.add('pdf-mode');
    if (window.html2pdf) {
      try {
        if (document.fonts?.ready) await document.fonts.ready;
        await Promise.all([...preview.querySelectorAll('img')].map(image => image.decode?.().catch(() => { })));
        await window.html2pdf().set({
          margin: .45,
          filename: `receipt-${$('recNumber').value || 'draft'}.pdf`,
          image: { type: 'jpeg', quality: .98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            scrollX: 0,
            scrollY: 0,
            onclone: clonedDocument => {
              const clonedPreview = clonedDocument.getElementById('receiptPreview');
              if (!clonedPreview) return;
              clonedPreview.style.cssText += ';display:block!important;position:static!important;width:740px!important;max-width:none!important;height:auto!important;min-height:0!important;overflow:visible!important;opacity:1!important;visibility:visible!important;transform:none!important;background:#fff!important';
              clonedPreview.querySelectorAll('*').forEach(node => { node.style.visibility = 'visible'; });
            }
          },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        }).from(preview).save();
        preview.classList.remove('pdf-mode');
        return;
      } catch (error) {
        console.error('Receipt PDF export failed; using print fallback.', error);
        preview.classList.remove('pdf-mode');
      }
    }

    // Browser's Save as PDF fallback: isolate printing to the receipt itself.
    document.body.classList.add('receipt-print-mode');
    const cleanup = () => {
      document.body.classList.remove('receipt-print-mode');
      preview.classList.remove('pdf-mode');
    };
    window.addEventListener('afterprint', cleanup, { once: true });
    window.print();
  });
  renderItems();
}
