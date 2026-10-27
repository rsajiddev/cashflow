import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/blogs';
import PersonalCta from '../../components/PersonalCta';

export default function BlogIndexPage() {
  return (
    <section className="section blog-page">
      <div className="container">
        <div className="page-hero page-hero--center animate-in is-visible">
          <span className="section-label">Resources</span>
          <h1 className="section-title">Invoice &amp; Business Blog</h1>
          <p className="section-desc">Practical guides to creating invoices, managing payments and cash flow, with clear advice on taxes, pricing, and everyday business finances.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card animate-in is-visible">
              <div className="blog-card__image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-card__body">
                <div className="blog-card__category">{post.category}</div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.description}</p>
                <div className="blog-card__meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <PersonalCta />
    </section>
  );
}