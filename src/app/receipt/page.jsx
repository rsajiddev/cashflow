'use client';
import React, { useState } from 'react';
import { CURRENCIES } from '../../data/currencies';

export default function ReceiptPage() {
  const [recNumber, setRecNumber] = useState('REC-001');
  const [recDate, setRecDate] = useState(new Date().toISOString().slice(0, 10));
  const [seller, setSeller] = useState('Your Company LLC');
  const [customer, setCustomer] = useState('Customer Name');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [status, setStatus] = useState('Paid');
  const [currency, setCurrency] = useState('$');
  const [items, setItems] = useState([
    { desc: 'Professional service', qty: 1, price: 250 },
    { desc: 'Additional support', qty: 1, price: 50 }
  ]);

  const subtotal = items.reduce((acc, it) => acc + (it.qty * it.price), 0);

  const downloadPdf = async () => {
    const element = document.getElementById('receiptPreview');
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await html2pdf().set({
        margin: 0.45,
        filename: `receipt-${recNumber}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }).from(element).save();
    } catch {
      window.print();
    }
  };

  return (
    <section className="section receipt-page">
      <div className="container">
        <div className="page-hero page-hero--center animate-in is-visible">
          <span className="section-label">CashHub receipts</span>
          <h1 className="section-title">Receipt Generator</h1>
          <p className="section-desc">Create proof of payment with editable details, itemized columns, and instant PDF download.</p>
        </div>

        <div className="receipt-builder">
          <aside className="receipt-form-panel">
            <div className="sidebar-section">
              <h3 className="sidebar-section__title">Receipt Details</h3>
              <div className="form-group">
                <label className="form-label">Receipt Number</label>
                <input className="form-input" value={recNumber} onChange={e => setRecNumber(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Currency</label>
                <select className="form-select" value={currency} onChange={e => setCurrency(e.target.value)}>
                  {CURRENCIES.map(c => <option key={c.code} value={c.symbol}>{c.code} ({c.symbol})</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select className="form-select" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
                  <option>Cash</option><option>Bank transfer</option><option>Card</option><option>Cheque</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Seller Name</label>
                <input className="form-input" value={seller} onChange={e => setSeller(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Customer Name</label>
                <input className="form-input" value={customer} onChange={e => setCustomer(e.target.value)} />
              </div>
            </div>
          </aside>

          <main className="receipt-preview-area">
            <div className="invoice-actions">
              <span className="badge">Receipt Preview</span>
              <button className="btn btn--primary" onClick={downloadPdf}>Download PDF</button>
            </div>

            <div id="receiptPreview" className="receipt-template">
              <header className="receipt-preview__header">
                <div>
                  <span className="receipt-kicker">PAYMENT RECEIPT</span>
                  <h2>{seller}</h2>
                </div>
                <div className="receipt-preview__number">
                  <strong>{recNumber}</strong>
                  <span>{recDate}</span>
                </div>
              </header>

              <div className="receipt-preview__parties">
                <div><span>RECEIVED FROM</span><strong>{customer}</strong></div>
                <div><span>PAYMENT</span><strong>{paymentMethod} · {status}</strong></div>
              </div>

              <div className="receipt-items">
                <table>
                  <thead>
                    <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
                  </thead>
                  <tbody>
                    {items.map((it, idx) => (
                      <tr key={idx}>
                        <td>{it.desc}</td>
                        <td>{it.qty}</td>
                        <td>{currency}{it.price.toFixed(2)}</td>
                        <td>{currency}{(it.qty * it.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="receipt-summary">
                <div className="receipt-total">
                  <span>Total Paid</span>
                  <strong>{currency}{subtotal.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}