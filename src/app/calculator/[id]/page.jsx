'use client';
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CalculatorPage() {
  const { id } = useParams();
  const router = useRouter();

  // Common Form States
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(10);
  const [cost, setCost] = useState(50);
  const [markup, setMarkup] = useState(30);
  const [margin, setMargin] = useState(25);
  const [mode, setMode] = useState('add');
  const [result, setResult] = useState(null);
  const [calculatedItem, setCalculatedItem] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount) || 0;
    const numRate = parseFloat(rate) || 0;
    let res = {};
    let item = null;

    if (id === 'sales-tax' || id === 'vat' || id === 'gst') {
      if (mode === 'add') {
        const taxVal = numAmount * (numRate / 100);
        res = { 'Tax Amount': `$${taxVal.toFixed(2)}`, 'Pre-Tax Total': `$${numAmount.toFixed(2)}`, 'Final Total': `$${(numAmount + taxVal).toFixed(2)}` };
        item = { type: 'item', desc: `Taxed Item (${numRate}%)`, qty: 1, rate: numAmount, taxRate: numRate };
      } else {
        const pre = numAmount / (1 + numRate / 100);
        const taxVal = numAmount - pre;
        res = { 'Tax Extracted': `$${taxVal.toFixed(2)}`, 'Base Net': `$${pre.toFixed(2)}`, 'Gross Amount': `$${numAmount.toFixed(2)}` };
        item = { type: 'item', desc: 'Net Taxed Item', qty: 1, rate: pre, taxRate: numRate };
      }
    } else if (id === 'markup') {
      const c = parseFloat(cost) || 0;
      const m = parseFloat(markup) || 0;
      const profit = c * (m / 100);
      const sell = c + profit;
      res = { 'Selling Price': `$${sell.toFixed(2)}`, 'Profit Amount': `$${profit.toFixed(2)}`, 'Gross Margin': `${((profit / sell) * 100).toFixed(2)}%` };
      item = { type: 'item', desc: `Priced Product (${m}% Markup)`, qty: 1, rate: sell };
    } else if (id === 'margin') {
      const c = parseFloat(cost) || 0;
      const mg = parseFloat(margin) || 0;
      const sell = c / (1 - mg / 100);
      const profit = sell - c;
      res = { 'Required Selling Price': `$${sell.toFixed(2)}`, 'Profit': `$${profit.toFixed(2)}`, 'Markup Equivalent': `${((profit / c) * 100).toFixed(2)}%` };
      item = { type: 'item', desc: `Product with ${mg}% Margin`, qty: 1, rate: sell };
    } else {
      res = { 'Calculated Value': 'Result Ready', 'Base': `$${numAmount.toFixed(2)}` };
      item = { type: 'item', desc: 'Calculated Service', qty: 1, rate: numAmount };
    }

    setResult(res);
    setCalculatedItem(item);
  };

  const importToDoc = (target) => {
    if (!calculatedItem) {
      alert('Please click calculate first!');
      return;
    }
    const storageKey = target === 'receipt' ? 'cashhub_receipt_import' : 'cashhub_invoice_import';
    sessionStorage.setItem(storageKey, JSON.stringify(calculatedItem));
    router.push(`/${target}`);
  };

  return (
    <section className="section calculator-page calculator-detail-page">
      <header className="blog-post__hero calculator-detail__hero">
        <div className="blog-post__hero-shade"></div>
        <div className="blog-post__hero-content">
          <Link href="/calculators" className="blog-post__back">← Back to Calculators</Link>
          <span className="section-label calculator-detail__eyebrow">CashHub Calculator</span>
          <h1 className="blog-post__title">{id?.toUpperCase().replace(/-/g, ' ')}</h1>
        </div>
      </header>

      <div className="container">
        <div className="calculator-detail__layout">
          <aside className="calculator-detail__sidebar">
            <section className="calculator-detail__info-card">
              <h2>About this tool</h2>
              <p>Easily calculate precision business and billing figures with automatic rounding and live export.</p>
            </section>
          </aside>

          <main className="calc-form-card calculator-detail__calculator">
            <div className="calc-form-body">
              <form onSubmit={handleCalculate}>
                {(id === 'markup' || id === 'margin') ? (
                  <>
                    <div className="form-group">
                      <label className="form-label">Cost Price ($)</label>
                      <input type="number" step="0.01" className="form-input" value={cost} onChange={e => setCost(e.target.value)} required />
                    </div>
                    {id === 'markup' ? (
                      <div className="form-group">
                        <label className="form-label">Markup (%)</label>
                        <input type="number" step="0.01" className="form-input" value={markup} onChange={e => setMarkup(e.target.value)} required />
                      </div>
                    ) : (
                      <div className="form-group">
                        <label className="form-label">Target Margin (%)</label>
                        <input type="number" step="0.01" className="form-input" value={margin} onChange={e => setMargin(e.target.value)} required />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label className="form-label">Amount ($)</label>
                      <input type="number" step="0.01" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Rate / Percentage (%)</label>
                      <input type="number" step="0.01" className="form-input" value={rate} onChange={e => setRate(e.target.value)} required />
                    </div>
                    {(id === 'sales-tax' || id === 'vat' || id === 'gst') && (
                      <div className="form-group">
                        <label className="form-label">Mode</label>
                        <select className="form-select" value={mode} onChange={e => setMode(e.target.value)}>
                          <option value="add">Add Tax (Amount is Pre-Tax)</option>
                          <option value="remove">Remove / Extract Tax</option>
                        </select>
                      </div>
                    )}
                  </>
                )}
                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>Calculate</button>
              </form>

              {result && (
                <div className="calc-result" style={{ marginTop: '20px' }}>
                  <div className="calc-result__details">
                    {Object.entries(result).map(([k, v]) => (
                      <div className="calc-result__row" key={k}>
                        <span className="calc-result__row-label">{k}</span>
                        <span className="calc-result__row-value">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="calc-import-actions" style={{ marginTop: '24px' }}>
                <p className="calc-import-actions__title">Use this result in a document</p>
                <div className="calc-import-actions__buttons">
                  <button type="button" className="btn btn--primary" onClick={() => importToDoc('invoice')}>Import to Invoice</button>
                  <button type="button" className="btn btn--secondary" onClick={() => importToDoc('receipt')}>Import to Receipt</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}