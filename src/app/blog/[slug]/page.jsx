'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../data/blogs';
import PersonalCta from '../../../components/PersonalCta';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container" style={{ margin: '4rem auto', textAlign: 'center' }}>
        <h2>Blog post not found</h2>
        <Link href="/blog" style={{ color: 'var(--accent)' }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post animate-in is-visible">
      <header className="blog-post__hero" style={{ backgroundImage: `url('${post.image}')` }}>
        <div className="blog-post__hero-shade"></div>
        <div className="blog-post__hero-content">
          <Link href="/blog" className="blog-post__back">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
            <span>Back to all guides</span>
          </Link>
          <h1 className="blog-post__title">{post.title}</h1>
          <p className="blog-post__hero-description">{post.description}</p>
          <div className="blog-post__meta">
            <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
          </div>
        </div>
      </header>
      <div className="blog-post__layout">
        <main className="blog-post__body">
          <div className="blog-post__content">
            <p className="lead">{post.description} This guide explains key ideas, records to keep, and practical operational steps.</p>
            <h2 id="sec-1">1. What {post.title} means</h2>
            <p>Start by agreeing what this process achieves, who is responsible, and which records provide evidence. Clear definitions help teams and clients interpret information consistently.</p>
            <h2 id="sec-2">2. A practical workflow</h2>
            <ol>
              <li><strong>Confirm source details:</strong> Check names, references, quantities, and rates against source contracts.</li>
              <li><strong>State next actions explicitly:</strong> Clarify dates, deliverables, and payment timelines.</li>
              <li><strong>Audit trail:</strong> Retain notes, emails, and transaction receipts.</li>
            </ol>
            <h2 id="sec-3">3. Frequently Asked Questions</h2>
            <section className="blog-faq">
              {post.faq.map(([q, a], idx) => (
                <details key={idx}>
                  <summary>{q}</summary>
                  <p style={{ padding: '8px 0' }}>{a}</p>
                </details>
              ))}
            </section>
          </div>
        </main>
        <aside className="blog-post__toc">
          <h2>On this page</h2>
          <nav>
            <a href="#sec-1"><span>01</span> Overview</a>
            <a href="#sec-2"><span>02</span> Workflow</a>
            <a href="#sec-3"><span>03</span> FAQ</a>
          </nav>
        </aside>
      </div>
      <PersonalCta />
    </article>
  );
}