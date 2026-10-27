'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', profession: '', email: '', use: '', experience: '', suggestions: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`CashHub feedback from ${formData.name}`);
    const body = encodeURIComponent([
      `Name: ${formData.name}`,
      `Work / profession: ${formData.profession || 'Not provided'}`,
      `Email: ${formData.email}`,
      '',
      `CashHub use case:\n${formData.use || 'Not provided'}`,
      `Experience:\n${formData.experience || 'Not provided'}`,
      `Suggestions:\n${formData.suggestions}`
    ].join('\n\n'));
    window.location.href = `mailto:hello@cashhub.app?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="page-hero page-hero--center animate-in is-visible">
          <span className="section-label">We listen</span>
          <h1 className="section-title">Help us make CashHub better</h1>
          <p className="section-desc">Tell us how you use CashHub, what works well, and what would make your invoicing or calculations easier.</p>
        </div>
        <div className="contact-layout">
          <aside className="card contact-aside">
            <div className="card__icon">✦</div>
            <h2>Share your perspective</h2>
            <p>Whether you create invoices, track payments, or use our calculators, your feedback helps make CashHub clearer and more useful.</p>
            <div className="contact-points">
              <div><strong>Use case</strong><span>Which tools you use and what you need to get done</span></div>
              <div><strong>Experience</strong><span>What felt simple, confusing, or slowed your workflow</span></div>
              <div><strong>Ideas</strong><span>Features or changes that would make CashHub more useful</span></div>
            </div>
          </aside>
          <form className="card contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contactName">Name</label>
                <input className="form-input" id="contactName" required placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contactProfession">Work / profession</label>
                <input className="form-input" id="contactProfession" placeholder="e.g. Freelancer, founder" value={formData.profession} onChange={e => setFormData({ ...formData, profession: e.target.value })} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contactEmail">Email address</label>
              <input type="email" className="form-input" id="contactEmail" required placeholder="you@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contactUse">What do you use CashHub for?</label>
              <textarea className="form-textarea" id="contactUse" rows="3" placeholder="Tell us about your workflow" value={formData.use} onChange={e => setFormData({ ...formData, use: e.target.value })}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contactExperience">How has your experience been?</label>
              <textarea className="form-textarea" id="contactExperience" rows="3" placeholder="What is working well or getting in the way?" value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contactSuggestions">Suggestions or missing features</label>
              <textarea className="form-textarea" id="contactSuggestions" rows="4" required placeholder="Share an improvement idea" value={formData.suggestions} onChange={e => setFormData({ ...formData, suggestions: e.target.value })}></textarea>
            </div>
            <button className="btn btn--primary btn--lg" type="submit">Send feedback</button>
            <p className="form-hint">This opens your email app with a neatly formatted message addressed to the CashHub team.</p>
          </form>
        </div>
      </div>
    </section>
  );
}