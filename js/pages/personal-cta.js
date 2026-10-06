export function renderPersonalCta() {
  return `
    <section class="section personal-cta-section">
      <div class="container">
        <div class="personal-cta animate-in">
          <div class="personal-cta__main">
            <div class="personal-cta__identity">
              <span class="personal-cta__avatar" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
                </svg>
              </span>
              <span><strong>Raza - Ullah Sajid</strong><small>Kot Sabzal, Punjab, Pakistan</small></span>
            </div>
            <span class="personal-cta__eyebrow">LET'S WORK TOGETHER</span>
            <h2>Have a project in mind?</h2>
            <p class="personal-cta__bio">I’m a 7th-semester BSCS student with 1.5 years of SwiftUI experience and a published App Store app. I build production-ready web projects with Next.js, including a site ranked #1 on Google in two weeks. I also work on AI projects, graphic design and video editing.</p>
            <div class="personal-cta__actions">
              <a href="mailto:rsajiddev@gmail.com?subject=Let%27s%20work%20together" class="btn btn--primary btn--lg">Start a project <span aria-hidden="true">→</span></a>
              <a href="https://wa.me/923012496214" class="btn btn--secondary btn--lg" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
          <aside class="personal-cta__contact" aria-label="Contact details">
            <h3>Get in touch</h3>
            <a class="personal-cta__detail" href="mailto:rsajiddev@gmail.com">
              <span class="personal-cta__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
              </span>
              <span><small>Email</small><strong>rsajiddev@gmail.com</strong></span>
            </a>
            <a class="personal-cta__detail" href="https://wa.me/923012496214" target="_blank" rel="noopener noreferrer">
              <span class="personal-cta__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"></path><path d="M8.5 8.5c.3 2 2 3.7 4 4"></path></svg>
              </span>
              <span><small>Phone / WhatsApp</small><strong>0301 2496214</strong></span>
            </a>
          </aside>
          <nav class="personal-cta__socials" aria-label="Social profiles">
            <a href="https://github.com/rsajiddev" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.2a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.9s-1.2-.4-4 1.5a13.7 13.7 0 0 0-7.2 0C6.2.1 5 .5 5 .5a5.2 5.2 0 0 0-.1 3.9 5.6 5.6 0 0 0-1.5 3.9c0 5.6 3.5 6.8 6.8 7.2a3.4 3.4 0 0 0-1 2.6V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/rsajiddev/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://wa.me/923012496214" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z"></path><path d="M8.5 8.5c.3 2 2 3.7 4 4"></path></svg>
            </a>
          </nav>
        </div>
      </div>
    </section>
  `;
}
