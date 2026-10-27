'use client';
import React from 'react';

export default function PersonalCta() {
  return (
    <section className="section personal-cta-section">
      <div className="container">
        <div className="personal-cta animate-in is-visible">
          <div className="personal-cta__main">
            <div className="personal-cta__identity">
              <span className="personal-cta__avatar" aria-hidden="true">T</span>
              <span><strong>Tech <span className="personal-cta__brand-accent">SG</span> Studio <small className="personal-cta__legal-name">(SMC-Pvt.) Ltd.</small></strong><small>IT &amp; Software Development Company</small></span>
            </div>
            <span className="personal-cta__eyebrow">LET&apos;S BUILD SOMETHING MEANINGFUL</span>
            <h2>Digital solutions for your business</h2>
            <p className="personal-cta__bio">
              Tech SG Studio was born from a vision of passionate student innovators who wanted to create meaningful digital solutions for businesses of all sizes. We believed quality digital services should be accessible to everyone — not just big corporations.<br /><br />
              We build websites, software, mobile apps, marketing systems and hosting solutions with modern technologies and professional standards.<br /><br />
              Our mission is to empower businesses with affordable, creative and high-quality digital services.
            </p>
            <div className="personal-cta__actions">
              <a href="mailto:info@techsgstudio.com?subject=Project%20enquiry" className="btn btn--primary btn--lg">Start a project <span aria-hidden="true">→</span></a>
              <a href="https://wa.me/923069524047" className="btn btn--secondary btn--lg" target="_blank" rel="noopener noreferrer">WhatsApp — 24/7</a>
            </div>
          </div>
          <aside className="personal-cta__contact" aria-label="Tech SG Studio contact details">
            <h3>Contact Us</h3>
            <a className="personal-cta__detail" href="tel:+923069524047">
              <span className="personal-cta__detail-icon" aria-hidden="true">☎</span>
              <span><small>Phone</small><strong>+92 306 9524047</strong></span>
            </a>
            <a className="personal-cta__detail" href="https://wa.me/923069524047" target="_blank" rel="noopener noreferrer">
              <span className="personal-cta__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"></path><path d="M8.5 8.5c.3 2 2 3.7 4 4"></path></svg>
              </span>
              <span><small>WhatsApp · 24/7</small><strong>+92 306 9524047</strong></span>
            </a>
            <a className="personal-cta__detail" href="mailto:info@techsgstudio.com">
              <span className="personal-cta__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
              </span>
              <span><small>Email</small><strong>info@techsgstudio.com</strong></span>
            </a>
            <a className="personal-cta__detail" href="https://techsgstudio.com/" target="_blank" rel="noopener noreferrer">
              <span className="personal-cta__detail-icon" aria-hidden="true">🌐</span>
              <span><small>Website</small><strong>techsgstudio.com</strong></span>
            </a>
            <a className="personal-cta__detail" href="https://techsgstudio.com/index#" target="_blank" rel="noopener noreferrer">
              <span className="personal-cta__detail-icon" aria-hidden="true">⌖</span>
              <span><small>Location</small><strong>Faisalabad, Punjab, Pakistan</strong></span>
            </a>
          </aside>
          <nav className="personal-cta__socials" aria-label="Tech SG Studio links">
            <a href="https://www.linkedin.com/in/techsgstudio/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://techsgstudio.com/" aria-label="Tech SG Studio website" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"></path></svg>
            </a>
            <a href="https://wa.me/923069524047" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"></path><path d="M8.5 8.5c.3 2 2 3.7 4 4"></path></svg>
            </a>
            <p className="personal-cta__credit">Made by Raza Ullah Sajid <span>·</span> Intern ID: TSG-INT-2026-027</p>
          </nav>
        </div>
      </div>
    </section>
  );
}