'use client';
import React from 'react';

export default function PersonalCta() {
  return (
    <section className="section personal-cta-section">
      <div className="container">
        <div className="personal-cta animate-in is-visible">
          <div className="personal-cta__main">
            <div className="personal-cta__identity">
              <span className="personal-cta__avatar" aria-hidden="true">R</span>
              <span>
                <strong>Raza Ullah Sajid <span className="personal-cta__legal-name">(@rsajiddev)</span></strong>
                <small>Full Stack Developer &amp; Software Engineer</small>
              </span>
            </div>
            <span className="personal-cta__eyebrow">OPEN FOR COLLABORATIONS &amp; PROJECTS</span>
            <h2>Let&apos;s build impactful digital solutions together</h2>
            <p className="personal-cta__bio">
              Hi, I&apos;m <strong>Raza Ullah Sajid</strong> — a passionate software engineer and full stack web developer dedicated to building fast, clean, and scalable web applications like CashHub.<br /><br />
              Whether you need modern frontend interfaces, full-stack web platforms, custom business tools, or API integrations, I bring ideas to life with professional engineering standards and modern technologies.<br /><br />
              Let&apos;s connect to discuss how we can collaborate on your next project.
            </p>
            <div className="personal-cta__actions">
              <a 
                href="https://www.linkedin.com/in/rsajiddev/" 
                className="btn btn--primary btn--lg" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">→</span>
              </a>
              <a 
                href="https://wa.me/923069524047" 
                className="btn btn--secondary btn--lg" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp — Quick Chat
              </a>
            </div>
          </div>
          <aside className="personal-cta__contact" aria-label="Raza Ullah Sajid contact details">
            <h3>Get in Touch</h3>
            <a className="personal-cta__detail" href="https://www.linkedin.com/in/rsajiddev/" target="_blank" rel="noopener noreferrer">
              <span className="personal-cta__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
              <span><small>LinkedIn</small><strong>/in/rsajiddev</strong></span>
            </a>
            <a className="personal-cta__detail" href="https://wa.me/923069524047" target="_blank" rel="noopener noreferrer">
              <span className="personal-cta__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"></path><path d="M8.5 8.5c.3 2 2 3.7 4 4"></path></svg>
              </span>
              <span><small>WhatsApp · Direct</small><strong>+92 306 9524047</strong></span>
            </a>
            <div className="personal-cta__detail">
              <span className="personal-cta__detail-icon" aria-hidden="true">⚡</span>
              <span><small>Availability</small><strong>Freelance &amp; Full-Time</strong></span>
            </div>
            <div className="personal-cta__detail">
              <span className="personal-cta__detail-icon" aria-hidden="true">⌖</span>
              <span><small>Location</small><strong>Punjab, Pakistan</strong></span>
            </div>
          </aside>
          <nav className="personal-cta__socials" aria-label="Raza Ullah Sajid social profiles">
            <a href="https://www.linkedin.com/in/rsajiddev/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://wa.me/923069524047" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"></path><path d="M8.5 8.5c.3 2 2 3.7 4 4"></path></svg>
            </a>
            <p className="personal-cta__credit">Developed by <strong>Raza Ullah Sajid</strong> <span>·</span> <a href="https://www.linkedin.com/in/rsajiddev/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-text)', textDecoration: 'none' }}>@rsajiddev</a></p>
          </nav>
        </div>
      </div>
    </section>
  );
}