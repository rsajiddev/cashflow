'use client';
import React from 'react';

export default function PersonalCta() {
  return (
    <section className="section personal-cta-section">
      <div className="container">
        <div className="personal-cta animate-in is-visible">
          {/* Ambient background decor circles */}
          <div className="personal-cta__decor" aria-hidden="true">
            <span className="personal-cta__decor-circle personal-cta__decor-circle--1" />
            <span className="personal-cta__decor-circle personal-cta__decor-circle--2" />
            <span className="personal-cta__decor-circle personal-cta__decor-circle--3" />
          </div>

          <div className="personal-cta__inner">
            {/* Left Content */}
            <div className="personal-cta__left">
              <div className="personal-cta__status-badge">
                <span className="personal-cta__status-dot" aria-hidden="true" />
                <span>Available for Projects &amp; Hire</span>
              </div>
              <h2 className="personal-cta__title">Ready to Elevate Your Project?</h2>
              <p className="personal-cta__desc">
                Need a modern full-stack web application, high-converting digital tool, or custom software solution? Let&apos;s build something exceptional together.
              </p>
              <div className="personal-cta__meta-links">
                <a href="mailto:rsajiddev@gmail.com" className="personal-cta__meta-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  <span>rsajiddev@gmail.com</span>
                </a>
                <span className="personal-cta__meta-sep">•</span>
                <span className="personal-cta__meta-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Punjab, Pakistan</span>
                </span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="personal-cta__right">
              <div className="personal-cta__btn-row">
                <a 
                  href="https://www.linkedin.com/in/rsajiddev/" 
                  className="personal-cta__btn-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Connect on LinkedIn</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                </a>
                <a 
                  href="https://wa.me/923012496214" 
                  className="personal-cta__btn-secondary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8.5 8.5c.3 2 2 3.7 4 4"/></svg>
                  <span>WhatsApp: 0301 2496214</span>
                </a>
              </div>

              <div className="personal-cta__bottom-row">
                <div className="personal-cta__social-icons" aria-label="Social and developer links">
                  <a 
                    href="https://github.com/rsajiddev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="personal-cta__icon-link" 
                    title="GitHub: rsajiddev"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rsajiddev/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="personal-cta__icon-link" 
                    title="LinkedIn: rsajiddev"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a 
                    href="mailto:rsajiddev@gmail.com" 
                    className="personal-cta__icon-link" 
                    title="Email: rsajiddev@gmail.com"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  </a>
                </div>
                <span className="personal-cta__author">
                  Raza Ullah Sajid <span>·</span> @rsajiddev
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}