import './global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'CashHub — Free Invoice Generator & Calculators',
  description: 'Create professional invoices, download PDFs, and use powerful financial calculators — all for free.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💰</text></svg>" />
      </head>
      <body>
        <Header />
        <main className="main" id="mainContent">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}