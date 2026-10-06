export function renderContact() {
  return `
    <section class="section contact-page">
      <div class="container">
        <div class="page-hero page-hero--center animate-in">
          <span class="section-label">We listen</span>
          <h1 class="section-title">Help us make CashHub better</h1>
          <p class="section-desc">Tell us how you use CashHub, what works well, and what would make your invoicing, payments, or calculations easier.</p>
        </div>
        <div class="contact-layout">
          <aside class="card contact-aside">
            <div class="card__icon">✦</div>
            <h2>Share your perspective</h2>
            <p>Whether you create invoices, track payments, or use our calculators, your feedback helps make CashHub clearer and more useful for everyday work.</p>
            <div class="contact-points">
              <div><strong>Use case</strong><span>Which tools you use and what you need to get done</span></div>
              <div><strong>Experience</strong><span>What felt simple, confusing, or slowed your workflow</span></div>
              <div><strong>Ideas</strong><span>Features or changes that would make CashHub more useful</span></div>
            </div>
          </aside>
          <form class="card contact-form" id="contactForm">
            <div class="form-row">
              <div class="form-group"><label class="form-label" for="contactName">Name</label><input class="form-input" id="contactName" name="name" required placeholder="Your name"></div>
              <div class="form-group"><label class="form-label" for="contactProfession">Work / profession</label><input class="form-input" id="contactProfession" name="profession" placeholder="e.g. Freelancer, founder"></div>
            </div>
            <div class="form-group"><label class="form-label" for="contactEmail">Email address</label><input type="email" class="form-input" id="contactEmail" name="email" required placeholder="you@example.com"></div>
            <div class="form-group"><label class="form-label" for="contactUse">What do you use CashHub for?</label><textarea class="form-textarea" id="contactUse" name="use" rows="3" placeholder="Tell us about your workflow"></textarea></div>
            <div class="form-group"><label class="form-label" for="contactExperience">How has your experience been?</label><textarea class="form-textarea" id="contactExperience" name="experience" rows="3" placeholder="What is working well or getting in the way?"></textarea></div>
            <div class="form-group"><label class="form-label" for="contactSuggestions">Suggestions or missing features</label><textarea class="form-textarea" id="contactSuggestions" name="suggestions" rows="4" required placeholder="Share an improvement idea or feature request"></textarea></div>
            <button class="btn btn--primary btn--lg" type="submit">Send feedback</span></button>
            <p class="form-hint">This opens your email app with a neatly formatted message addressed to the CashHub team.</p>
          </form>
        </div>
      </div>
    </section>`;
}

export function initContactPage() {
  document.getElementById('contactForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`CashHub feedback from ${data.get('name')}`);
    const body = encodeURIComponent([
      `Name: ${data.get('name')}`, `Work / profession: ${data.get('profession') || 'Not provided'}`, `Email: ${data.get('email')}`,
      '', `CashHub use case:\n${data.get('use') || 'Not provided'}`, `Experience:\n${data.get('experience') || 'Not provided'}`, `Suggestions:\n${data.get('suggestions')}`
    ].join('\n\n'));
    window.location.href = `mailto:hello@cashhub.app?subject=${subject}&body=${body}`;
    window.CashHub?.showToast('Your email app is ready with the feedback form.', 'success');
  });
}
