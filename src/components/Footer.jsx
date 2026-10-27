import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="header__logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="var(--accent)" />
                  <path d="M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm1 15.93V23h-2v-1.07A5.008 5.008 0 0111 17h2a3 3 0 006 0c0-1.3-.84-2.4-2-2.82V10.07A5.008 5.008 0 0121 15h-2a3 3 0 00-6 0c0 1.3.84 2.4 2 2.82v4.11z" fill="white" />
                </svg>
              </div>
              <span className="logo-text">Cash<span className="logo-highlight">Hub</span></span>
            </Link>
            <p className="footer__desc">Create professional invoices and receipts, calculate payments, and manage your billing — completely free.</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Tools</h4>
            <Link href="/invoice" className="footer__link">Invoice Generator</Link>
            <Link href="/receipt" className="footer__link">Receipt Generator</Link>
            <Link href="/calculators" className="footer__link">All Calculators</Link>
            <Link href="/calculator/sales-tax" className="footer__link">Sales Tax Calculator</Link>
            <Link href="/calculator/markup" className="footer__link">Markup Calculator</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Resources</h4>
            <Link href="/blog" className="footer__link">Blog</Link>
            <Link href="/blog/days-sales-outstanding" className="footer__link">DSO Guide</Link>
            <Link href="/blog/accounts-receivable-turnover" className="footer__link">AR Turnover Guide</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Calculators</h4>
            <Link href="/calculator/vat" className="footer__link">VAT Calculator</Link>
            <Link href="/calculator/gst" className="footer__link">GST Calculator</Link>
            <Link href="/calculator/margin" className="footer__link">Margin Calculator</Link>
            <Link href="/calculator/late-payment-fee" className="footer__link">Late Fee Calculator</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 CashHub. Free invoice &amp; receipt tools.</p>
          <div className="footer__bottom-links">
            <Link href="/terms" className="footer__link">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="footer__link">Privacy Policy</Link>
          </div>
          <span className="footer__made-with">A Project of <a className="footer__made-with_company" href="https://techsgstudio.com/" target="_blank" rel="noopener noreferrer">Tech SG Studio</a></span>
        </div>
      </div>
    </footer>
  );
}