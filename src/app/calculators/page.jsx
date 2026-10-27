import React from 'react';
import Link from 'next/link';

export default function CalculatorsHubPage() {
  return (
    <section className="section">
      <div className="container calculators-hub-container">
        <div className="page-hero page-hero--center animate-in is-visible">
          <span className="section-label">CashHub tools</span>
          <h1 className="section-title">Free Invoice &amp; Business Calculators</h1>
          <p className="section-desc">Practical tools to set payment dates, calculate taxes, apply discounts, and make sound pricing decisions.</p>
        </div>

        <div className="calc-category">
          <div className="calc-category__header">
            <span className="calc-category__eyebrow">PAYMENT TIMING</span>
            <h2>Due dates &amp; late payments</h2>
          </div>
          <div className="calc-grid">
            <Link href="/calculator/invoice-due-date" className="card card--clickable">
              <h3 className="card__title">Invoice Due Date</h3>
              <p className="card__desc">Set a due date from Net terms or custom days.</p>
            </Link>
            <Link href="/calculator/business-days" className="card card--clickable">
              <h3 className="card__title">Business Days</h3>
              <p className="card__desc">Add, subtract, or count weekdays between dates.</p>
            </Link>
            <Link href="/calculator/late-payment-fee" className="card card--clickable">
              <h3 className="card__title">Late Payment Fee</h3>
              <p className="card__desc">Calculate flat, percentage, or recurring fees.</p>
            </Link>
            <Link href="/calculator/late-payment-interest" className="card card--clickable">
              <h3 className="card__title">Late Payment Interest</h3>
              <p className="card__desc">Estimate interest accrued on unpaid invoices.</p>
            </Link>
            <Link href="/calculator/days-past-due" className="card card--clickable">
              <h3 className="card__title">Days Past Due</h3>
              <p className="card__desc">Check AR aging buckets and overdue days.</p>
            </Link>
          </div>
        </div>

        <div className="calc-category">
          <div className="calc-category__header">
            <span className="calc-category__eyebrow">TAXES &amp; SAVINGS</span>
            <h2>Tax &amp; discounts</h2>
          </div>
          <div className="calc-grid">
            <Link href="/calculator/sales-tax" className="card card--clickable">
              <h3 className="card__title">Sales Tax</h3>
              <p className="card__desc">Calculate pre-tax or post-tax sales tax.</p>
            </Link>
            <Link href="/calculator/vat" className="card card--clickable">
              <h3 className="card__title">VAT Calculator</h3>
              <p className="card__desc">Add or extract VAT from prices.</p>
            </Link>
            <Link href="/calculator/gst" className="card card--clickable">
              <h3 className="card__title">GST Calculator</h3>
              <p className="card__desc">Add or extract GST amounts.</p>
            </Link>
            <Link href="/calculator/invoice-discount" className="card card--clickable">
              <h3 className="card__title">Invoice Discount</h3>
              <p className="card__desc">Percentage and flat discounts with tax options.</p>
            </Link>
            <Link href="/calculator/early-payment-discount" className="card card--clickable">
              <h3 className="card__title">Early Payment Discount</h3>
              <p className="card__desc">Evaluate terms like 2/10 Net 30.</p>
            </Link>
          </div>
        </div>

        <div className="calc-category">
          <div className="calc-category__header">
            <span className="calc-category__eyebrow">INVOICING &amp; PRICING</span>
            <h2>Build invoices &amp; set prices</h2>
          </div>
          <div className="calc-grid">
            <Link href="/calculator/invoice-calc" className="card card--clickable">
              <h3 className="card__title">Invoice Calculator</h3>
              <p className="card__desc">Combine items, tax, and payments.</p>
            </Link>
            <Link href="/calculator/hourly-invoice" className="card card--clickable">
              <h3 className="card__title">Hourly Invoice</h3>
              <p className="card__desc">Hours, rates, expenses, and deposits.</p>
            </Link>
            <Link href="/calculator/contractor-invoice" className="card card--clickable">
              <h3 className="card__title">Contractor Invoice</h3>
              <p className="card__desc">Labor, materials, and job markup.</p>
            </Link>
            <Link href="/calculator/project-invoice" className="card card--clickable">
              <h3 className="card__title">Project Invoice</h3>
              <p className="card__desc">Fixed fee deliverables and milestones.</p>
            </Link>
            <Link href="/calculator/markup" className="card card--clickable">
              <h3 className="card__title">Markup Calculator</h3>
              <p className="card__desc">Markup percentage on cost.</p>
            </Link>
            <Link href="/calculator/margin" className="card card--clickable">
              <h3 className="card__title">Margin Calculator</h3>
              <p className="card__desc">Target gross profit margin and pricing.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}