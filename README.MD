# CashHub — Free Invoice Generator & Financial Calculators

CashHub is a modern, responsive web application designed for freelancers, contractors, and small businesses to create polished invoices and receipts, run crucial financial calculations, and access structured business billing guides — completely free and without requiring account sign-up.

---

## 🌟 Key Features

- **Invoice Generator:** 
  - 5 customizable visual templates (Classic, Modern, Minimal, Bold, Elegant).
  - Live real-time preview of changes.
  - Custom column manager (e.g., SKU, Hours, Project Code).
  - Business and client detail management with company logo upload.
  - Interactive signature pad (draw on canvas or upload transparent PNG).
  - Currency selector supporting 16 major currencies.
  - Tax (%), discount, and subtotal auto-calculations.

- **Receipt Generator:**
  - Dedicated proof-of-payment creator with transaction status (Paid, Partial, Pending).
  - Itemized rows, accent color personalization, and real-time total summary.
  - Live signature and logo integration.

- **16+ Financial Calculators:**
  - **Payment Timing:** Invoice Due Date, Business Days, Late Payment Fee, Late Payment Interest, Days Past Due (AR aging).
  - **Taxes & Savings:** Sales Tax, VAT, GST, Invoice Discount, Early Payment Discount (e.g., 2/10 Net 30).
  - **Invoicing & Pricing:** Invoice Calculator, Hourly Invoice, Contractor Job Invoice, Project Milestone Invoice, Markup, and Margin.
  - **One-Click Handoff:** Directly export calculator results and tax rates into the Invoice or Receipt generator.

- **Business Guides & Blog:**
  - 18 comprehensive guides on invoicing best practices, cash application, DSO, reconciliation, and payment terms.
  - Auto-generated on-page Table of Contents and interactive collapsible FAQs.

- **UI & Accessibility:**
  - Native Light / Dark theme support with preference persistence.
  - Scroll progress indicator and reduced-motion accommodations.
  - 100% responsive across mobile, tablet, and widescreen desktop layouts.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Styling:** Custom CSS3 with CSS Custom Properties (Theme tokens & layout systems)
- **PDF Generation:** `html2pdf.js` with browser print / Save-as-PDF fallback
- **Icons & Graphics:** Inline SVG, HTML5 Canvas API

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17 or later) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rsajiddev/cashflow.git
   cd cashflow