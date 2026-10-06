import { currencyOptions } from '../data/currencies.js';

export function renderReceipt() {
  const today = new Date().toISOString().slice(0, 10);
  return `<section class="section receipt-page"><div class="container">
    <div class="page-hero animate-in"><span class="section-label">CashHub receipts</span><h1 class="section-title">Receipt Generator</h1><p class="section-desc">Create a clear proof of payment with live preview, custom colours and a downloadable PDF.</p></div>
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
          <div class="form-group"><label class="form-label">Customer</label><input id="recCustomer" class="form-input rec-trigger" value="Customer Name"></div>
        </div>
        <div class="sidebar-section"><h3 class="sidebar-section__title">Appearance</h3>
          <div class="receipt-colour-control"><div><label class="form-label">Accent colour</label><input id="recColor" type="color" class="colour-swatch rec-trigger" value="#6366F1"></div><div><label class="form-label">HEX code</label><input id="recColorHex" class="form-input hex-input" value="#6366F1" maxlength="7" pattern="^#[0-9a-fA-F]{6}$"></div></div>
        </div>
        <div class="sidebar-section"><h3 class="sidebar-section__title">Signature</h3><p class="form-hint">Draw below or upload a PNG signature. It will appear at the end of the receipt.</p><canvas id="recSignatureCanvas" class="signature-canvas" width="520" height="140"></canvas><div class="signature-tools"><input id="recSignatureColor" type="color" class="colour-swatch rec-trigger" value="#1E293B"><button type="button" id="recClearSignature" class="btn btn--secondary btn--sm">Clear</button><label class="btn btn--secondary btn--sm">Upload PNG<input id="recSignatureUpload" type="file" accept="image/png" hidden></label></div></div>
        <div class="sidebar-section"><div class="form-group"><label class="form-label">Notes</label><textarea id="recNotes" class="form-textarea rec-trigger">Thank you for your business.</textarea></div></div>
      </aside>
      <main class="receipt-preview-area"><div class="invoice-actions"><div class="invoice-actions__left"><span class="badge">Receipt Preview</span></div><div class="invoice-actions__right"><button type="button" id="recAddRow" class="btn btn--secondary btn--sm">+ Add item</button><button id="btnDownloadReceipt" class="btn btn--primary">Download PDF</button></div></div><div id="receiptPreview" class="receipt-template"><header class="receipt-preview__header"><div><span class="receipt-kicker">PAYMENT RECEIPT</span><h2 id="recPreviewSeller">Your Company LLC</h2><p id="recPreviewSellerContact">hello@yourcompany.com</p></div><div class="receipt-preview__number"><strong id="recPreviewNumber">REC-001</strong><span id="recPreviewDate">${today}</span></div></header><div class="receipt-preview__parties"><div><span>RECEIVED FROM</span><strong id="recPreviewCustomer">Customer Name</strong></div><div><span>PAYMENT</span><strong id="recPreviewPayment">Cash · Paid</strong></div></div><div class="receipt-items"><table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody id="receiptItemsBody"></tbody></table></div><div class="receipt-summary"><div><span>Subtotal</span><strong id="recPreviewSubtotal">$0.00</strong></div><div><span>Tax</span><strong id="recPreviewTax">$0.00</strong></div><div><span>Discount</span><strong id="recPreviewDiscount">-$0.00</strong></div><div class="receipt-total"><span>Total paid</span><strong id="recPreviewTotal">$0.00</strong></div></div><div class="receipt-preview__notes"><span>Notes</span><p id="recPreviewNotes">Thank you for your business.</p></div><div class="receipt-signature"><span>This signature represents the user's signature for this receipt.</span><img id="recPreviewSignature" alt="Receipt signature"></div><footer>Generated with CashHub · Keep this receipt for your records.</footer></div></main>
    </div></div></section>`;
}

export function initReceiptPage() {
  let items = [{ desc: 'Professional service', qty: 1, price: 250 }, { desc: 'Additional support', qty: 1, price: 50 }];
  const $ = id => document.getElementById(id);
  const preview = $('receiptPreview');
  const format = value => `${$('recCurrency').value}${Number(value || 0).toFixed(2)}`;
  const validHex = value => /^#[0-9a-fA-F]{6}$/.test(value);

  function renderItems() {
    $('receiptItemsBody').innerHTML = items.map((item, index) => `<tr><td data-label="Item"><input class="item-input rec-item" data-index="${index}" data-field="desc" value="${item.desc}"></td><td data-label="Qty"><input type="number" class="item-input rec-item" data-index="${index}" data-field="qty" value="${item.qty}" min="0"></td><td data-label="Price"><input type="number" class="item-input rec-item" data-index="${index}" data-field="price" value="${item.price}" min="0" step="0.01"></td><td data-label="Total"><span class="receipt-item-total">${format(item.qty * item.price)}</span><button type="button" class="btn-delete-row hide-in-pdf" data-index="${index}" aria-label="Delete item">×</button></td></tr>`).join('');
    updatePreview();
  }
  function updatePreview() {
    const subtotal = items.reduce((sum, item) => sum + Number(item.qty || 0) * Number(item.price || 0), 0);
    const tax = subtotal * (Number($('recTax').value || 0) / 100);
    const discount = Number($('recDiscount').value || 0);
    const total = Math.max(0, subtotal + tax - discount);
    const color = $('recColor').value;
    preview.style.setProperty('--receipt-accent', color);
    $('recPreviewSeller').textContent = $('recSeller').value || ' ';
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
  $('receiptItemsBody').addEventListener('input', e => { const index = e.target.dataset.index; if (index === undefined) return; const field = e.target.dataset.field; items[index][field] = field === 'desc' ? e.target.value : Number(e.target.value || 0); updatePreview(); });
  $('receiptItemsBody').addEventListener('click', e => { if (e.target.classList.contains('btn-delete-row')) { items.splice(Number(e.target.dataset.index), 1); renderItems(); } });
  $('recAddRow').addEventListener('click', () => { items.push({ desc: 'New item', qty: 1, price: 0 }); renderItems(); });
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
