'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CURRENCIES } from '../../data/currencies';

export default function InvoicePage() {
  const [template, setTemplate] = useState('classic');
  const [bizName, setBizName] = useState('Your Company LLC');
  const [bizAddress, setBizAddress] = useState('123 Business St\nCity, State 12345');
  const [bizEmail, setBizEmail] = useState('hello@yourcompany.com');
  const [bizPhone, setBizPhone] = useState('(555) 123-4567');
  const [clientName, setClientName] = useState('Client Name');
  const [clientAddress, setClientAddress] = useState('456 Client Rd\nCity, State 67890');
  const [clientEmail, setClientEmail] = useState('client@example.com');
  const [invNumber, setInvNumber] = useState('INV-001');
  const [currency, setCurrency] = useState('$');
  const [invDate, setInvDate] = useState(new Date().toISOString().split('T')[0]);
  const [invDueDate, setInvDueDate] = useState(new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]);
  const [taxRate, setTaxRate] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [notes, setNotes] = useState('Thank you for your business.');
  const [terms, setTerms] = useState('Payment is due within 14 days.');
  const [headerBg, setHeaderBg] = useState('#6366F1');
  const [headerColor, setHeaderColor] = useState('#FFFFFF');
  const [logoSrc, setLogoSrc] = useState('');
  const [signatureSrc, setSignatureSrc] = useState('');

  const [items, setItems] = useState([
    { desc: 'Web Design Services', qty: 1, rate: 1000 },
    { desc: 'Hosting (1 year)', qty: 1, rate: 120 },
    { desc: 'Domain Registration', qty: 1, rate: 15 }
  ]);

  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  // Calculator import hook
  useEffect(() => {
    const raw = sessionStorage.getItem('cashhub_invoice_import');
    if (raw) {
      try {
        const data = JSON.parse(raw);
        sessionStorage.removeItem('cashhub_invoice_import');
        if (data.type === 'item') {
          setItems([{ desc: data.desc || 'Calculated Service', qty: data.qty || 1, rate: data.rate || 0 }]);
          if (data.taxRate) setTaxRate(data.taxRate);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const subtotal = items.reduce((acc, item) => acc + (Number(item.qty) || 0) * (Number(item.rate) || 0), 0);
  const taxAmt = subtotal * ((parseFloat(taxRate) || 0) / 100);
  const grandTotal = Math.max(0, subtotal + taxAmt - (parseFloat(discount) || 0));

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogoSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const startDrawing = (e) => {
    isDrawing.current = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 2;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing.current && canvasRef.current) {
      isDrawing.current = false;
      setSignatureSrc(canvasRef.current.toDataURL());
    }
  };

  const handleDownloadPdf = async () => {
    const element = document.getElementById('invoicePreview');
    if (!element) return;
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      element.classList.add('pdf-mode');
      await html2pdf().set({
        margin: 0.4,
        filename: `${invNumber}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }).from(element).save();
      element.classList.remove('pdf-mode');
    } catch {
      window.print();
    }
  };

  return (
    <div className="container" style={{ paddingTop: '32px', paddingBottom: '60px' }}>
      <div className="page-hero page-hero--center animate-in is-visible">
        <span className="section-label">CashHub invoices</span>
        <h1 className="section-title">Invoice Generator</h1>
        <p className="section-desc">Create a polished, itemized invoice with editable business details, flexible items, tax and live preview.</p>
      </div>

      <div className="invoice-builder">
        <aside className="invoice-sidebar">
          {/* Templates */}
          <div className="sidebar-section">
            <h3 className="sidebar-section__title">Template Selection</h3>
            <div className="template-selector">
              {['classic', 'modern', 'minimal', 'bold', 'elegant'].map((t) => (
                <div
                  key={t}
                  className={`template-option ${template === t ? 'active' : ''}`}
                  onClick={() => setTemplate(t)}
                >
                  <span style={{ textTransform: 'capitalize' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Details */}
          <div className="sidebar-section">
            <h3 className="sidebar-section__title">Business Details</h3>
            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input className="form-input" value={bizName} onChange={e => setBizName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-textarea" value={bizAddress} onChange={e => setBizAddress(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" value={bizEmail} onChange={e => setBizEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-input" value={bizPhone} onChange={e => setBizPhone(e.target.value)} />
            </div>
            <div className="form-group company-logo-upload">
              <label className="form-label">Company Logo</label>
              <input type="file" accept="image/*" onChange={handleLogoUpload} />
            </div>
          </div>

          {/* Client Details */}
          <div className="sidebar-section">
            <h3 className="sidebar-section__title">Client Details</h3>
            <div className="form-group">
              <label className="form-label">Client Name</label>
              <input className="form-input" value={clientName} onChange={e => setClientName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Client Address</label>
              <textarea className="form-textarea" value={clientAddress} onChange={e => setClientAddress(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Client Email</label>
              <input className="form-input" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
            </div>
          </div>

          {/* Meta & Info */}
          <div className="sidebar-section">
            <h3 className="sidebar-section__title">Invoice Info</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Invoice Number</label>
                <input className="form-input" value={invNumber} onChange={e => setInvNumber(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Currency</label>
                <select className="form-select" value={currency} onChange={e => setCurrency(e.target.value)}>
                  {CURRENCIES.map(c => <option key={c.code} value={c.symbol}>{c.code} ({c.symbol})</option>)}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Invoice Date</label>
                <input type="date" className="form-input" value={invDate} onChange={e => setInvDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Due Date</label>
                <input type="date" className="form-input" value={invDueDate} onChange={e => setInvDueDate(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Tax (%)</label>
                <input type="number" step="0.1" className="form-input" value={taxRate} onChange={e => setTaxRate(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Discount</label>
                <input type="number" step="0.01" className="form-input" value={discount} onChange={e => setDiscount(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="sidebar-section">
            <h3 className="sidebar-section__title">Signature Pad</h3>
            <canvas
              ref={canvasRef}
              className="signature-canvas"
              width={300}
              height={100}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />
            <button
              type="button"
              className="btn btn--secondary btn--sm"
              style={{ marginTop: '8px' }}
              onClick={() => {
                const cvs = canvasRef.current;
                cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
                setSignatureSrc('');
              }}
            >
              Clear Signature
            </button>
          </div>
        </aside>

        {/* Live Preview & PDF area */}
        <main className="invoice-preview-area">
          <div className="invoice-actions">
            <span className="badge">{template.toUpperCase()} Template</span>
            <div className="invoice-actions__right">
              <button
                className="btn btn--secondary btn--sm"
                onClick={() => setItems([...items, { desc: 'New Line Item', qty: 1, rate: 0 }])}
              >
                + Add Item
              </button>
              <button className="btn btn--primary" onClick={handleDownloadPdf}>
                Download PDF
              </button>
            </div>
          </div>

          <div id="invoicePreview" className={`invoice-template template-${template}`}>
            <div className="invoice-header">
              <div className="invoice-header__left">
                {logoSrc && <img src={logoSrc} alt="Logo" className="company-logo-preview" />}
                <h2 className="invoice-biz-name">{bizName}</h2>
              </div>
              <div className="invoice-header__right">
                <h1 className="invoice-title">INVOICE</h1>
                <div className="invoice-meta">
                  <div><strong>#:</strong> {invNumber}</div>
                  <div><strong>Date:</strong> {invDate}</div>
                  <div><strong>Due:</strong> {invDueDate}</div>
                </div>
              </div>
            </div>

            <div className="invoice-parties">
              <div className="party-box from-box">
                <div className="party-label">From:</div>
                <div className="party-details">
                  <div className="party-name">{bizName}</div>
                  <div style={{ whiteSpace: 'pre-line' }}>{bizAddress}</div>
                  <div>{bizEmail}</div>
                  <div>{bizPhone}</div>
                </div>
              </div>
              <div className="party-box to-box">
                <div className="party-label">To:</div>
                <div className="party-details">
                  <div className="party-name">{clientName}</div>
                  <div style={{ whiteSpace: 'pre-line' }}>{clientAddress}</div>
                  <div>{clientEmail}</div>
                </div>
              </div>
            </div>

            <div className="invoice-items">
              <table className="items-table">
                <thead style={{ backgroundColor: headerBg, color: headerColor }}>
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th className="hide-in-pdf">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it, idx) => (
                    <tr key={idx}>
                      <td>
                        <input
                          className="item-input hide-in-pdf"
                          value={it.desc}
                          onChange={e => {
                            const copy = [...items];
                            copy[idx].desc = e.target.value;
                            setItems(copy);
                          }}
                        />
                        <span className="show-in-pdf-only">{it.desc}</span>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="item-input hide-in-pdf"
                          value={it.qty}
                          onChange={e => {
                            const copy = [...items];
                            copy[idx].qty = parseFloat(e.target.value) || 0;
                            setItems(copy);
                          }}
                        />
                        <span className="show-in-pdf-only">{it.qty}</span>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="item-input hide-in-pdf"
                          value={it.rate}
                          onChange={e => {
                            const copy = [...items];
                            copy[idx].rate = parseFloat(e.target.value) || 0;
                            setItems(copy);
                          }}
                        />
                        <span className="show-in-pdf-only">{it.rate}</span>
                      </td>
                      <td>{currency}{(it.qty * it.rate).toFixed(2)}</td>
                      <td className="hide-in-pdf">
                        <button
                          className="btn btn--ghost btn--sm danger-text"
                          onClick={() => setItems(items.filter((_, i) => i !== idx))}
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="invoice-totals">
              <div className="totals-row">
                <span>Subtotal:</span>
                <span>{currency}{subtotal.toFixed(2)}</span>
              </div>
              <div className="totals-row">
                <span>Tax ({taxRate}%):</span>
                <span>{currency}{taxAmt.toFixed(2)}</span>
              </div>
              <div className="totals-row">
                <span>Discount:</span>
                <span>-{currency}{Number(discount).toFixed(2)}</span>
              </div>
              <div className="totals-row grand-total">
                <strong>Total:</strong>
                <strong>{currency}{grandTotal.toFixed(2)}</strong>
              </div>
            </div>

            <div className="invoice-notes">
              <h4>Notes</h4>
              <p>{notes}</p>
              <h4>Terms</h4>
              <p>{terms}</p>
            </div>

            {signatureSrc && (
              <div className="invoice-signature">
                <span>Authorized Signatory</span>
                <img src={signatureSrc} alt="Signature" />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}