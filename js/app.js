/**
 * CashHub — Main Application Router & Theme Manager
 * Single Page Application with hash-based routing
 */

// ========== IMPORTS ==========
import { renderHome } from './pages/home.js';
import { renderPersonalCta } from './pages/personal-cta.js';
import { renderInvoice } from './pages/invoice.js';
import { renderCalculatorsHub, renderCalculator } from './pages/calculators.js';
import { renderBlog, renderBlogPost } from './pages/blog.js';
import { renderContact, initContactPage } from './pages/contact.js';
import { renderLegalPage } from './pages/legal.js';
import { renderReceipt, initReceiptPage } from './pages/receipt.js';

// ========== APP STATE ==========
const AppState = {
    currentPage: '',
    theme: localStorage.getItem('cashhub-theme') || 'light',
    scrollTopVisible: false
};

// ========== THEME MANAGEMENT ==========
function initTheme() {
    const savedTheme = localStorage.getItem('cashhub-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        AppState.theme = theme;
    }
}

function toggleTheme() {
    const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
    AppState.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.style.backgroundColor = newTheme === 'dark' ? '#0B1120' : '#F8FAFC';
    localStorage.setItem('cashhub-theme', newTheme);
}

// ========== TOAST NOTIFICATION SYSTEM ==========
let toastContainer = null;

function initToastContainer() {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
}

export function showToast(message, type = 'info', duration = 3500) {
    if (!toastContainer) initToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;

    const icons = {
        success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>',
        error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };

    toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Make showToast globally available
window.CashHub = window.CashHub || {};
window.CashHub.showToast = showToast;

// ========== ROUTER ==========
function getRoute() {
    const hash = window.location.hash || '#/';
    return hash.replace('#', '');
}

function parseRoute(path) {
    // Remove leading/trailing slashes and split
    const parts = path.replace(/^\/|\/$/g, '').split('/');
    return parts;
}

async function navigateTo(path) {
    const mainContent = document.getElementById('mainContent');
    const parts = parseRoute(path);
    const page = parts[0] || 'home';

    // Update active nav links
    updateActiveNav(page);

    // Close mobile menu if open
    closeMobileMenu();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Route matching
    try {
        let html = '';

        switch (page) {
            case '':
            case 'home':
                html = renderHome();
                AppState.currentPage = 'home';
                break;

            case 'invoice':
                html = renderInvoice();
                AppState.currentPage = 'invoice';
                break;

            case 'receipt':
                html = renderReceipt();
                AppState.currentPage = 'receipt';
                break;

            case 'calculators':
                html = renderCalculatorsHub();
                AppState.currentPage = 'calculators';
                break;

            case 'calculator':
                const calcType = parts[1] || 'sales-tax';
                html = renderCalculator(calcType);
                AppState.currentPage = 'calculators';
                break;

            case 'blog':
                if (parts[1]) {
                    html = renderBlogPost(parts[1]);
                } else {
                    html = renderBlog();
                }
                AppState.currentPage = 'blog';
                break;

            case 'contact':
                html = renderContact();
                AppState.currentPage = 'contact';
                break;

            case 'terms':
                html = renderLegalPage('terms');
                AppState.currentPage = 'terms';
                break;

            case 'privacy':
                html = renderLegalPage('privacy');
                AppState.currentPage = 'privacy';
                break;

            default:
                html = render404();
                AppState.currentPage = '';
                break;
        }

        if (page !== 'contact' && page !== '' && page !== 'home') {
            html += renderPersonalCta();
        }

        mainContent.innerHTML = html;
        requestAnimationFrame(updateScrollProgress);

        // Re-run page-specific initialization after rendering
        if (page === 'invoice' || page === '') {
            // Invoice page needs event listeners
            if (typeof window.initInvoicePage === 'function') {
                window.initInvoicePage();
            }
        }
        if (page === 'receipt') initReceiptPage();
        if (page === 'calculator') {
            if (typeof window.initCalculatorPage === 'function') {
                window.initCalculatorPage(parts[1]);
            }
        }
        if (page === 'contact') initContactPage();
        if (page === 'blog' && parts[1]) initBlogToc(mainContent);

        // Trigger entrance animations
        requestAnimationFrame(() => {
            const animElements = mainContent.querySelectorAll('.animate-in');
            animElements.forEach((el, i) => {
                el.style.animationDelay = `${i * 0.05}s`;
            });
            initScrollAnimations(mainContent);
            initCounters(mainContent);
            initFaq(mainContent);
            if (page === 'home' || page === '') initHeroWord(mainContent);
        });

    } catch (err) {
        console.error('Navigation error:', err);
        mainContent.innerHTML = render404();
    }
}

function initBlogToc(root = document) {
    root.querySelectorAll('.blog-post__toc a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = root.querySelector(link.getAttribute('href'));
            if (!target) return;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        });
    });
}

function initHeroWord(root = document) {
    const word = root.querySelector('#heroDocumentWord');
    if (!word || word.dataset.rotating === 'true') return;
    if (window.CashHub.heroTimeout) window.clearTimeout(window.CashHub.heroTimeout);
    word.dataset.rotating = 'true';
    const words = ['Invoice', 'Receipt'];
    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    const type = () => {
        const activeWord = words[wordIndex];
        if (!deleting) {
            characterIndex += 1;
            word.textContent = activeWord.slice(0, characterIndex);
            if (characterIndex === activeWord.length) {
                deleting = true;
                window.CashHub.heroTimeout = window.setTimeout(type, 1300);
                return;
            }
        } else {
            characterIndex -= 1;
            word.textContent = activeWord.slice(0, characterIndex);
            if (characterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        window.CashHub.heroTimeout = window.setTimeout(type, deleting ? 75 : 125);
    };
    word.textContent = '';
    type();
}

function initFaq(root = document) {
    root.querySelectorAll('.faq-list details').forEach(details => {
        const summary = details.querySelector('summary');
        if (!summary || summary.dataset.bound === 'true') return;
        summary.dataset.bound = 'true';
        summary.addEventListener('click', event => {
            event.preventDefault();
            const opening = !details.classList.contains('is-open');
            if (opening) {
                details.open = true;
                requestAnimationFrame(() => details.classList.add('is-open'));
            } else {
                details.classList.remove('is-open');
                window.setTimeout(() => { details.open = false; }, 260);
            }
        });
    });
}

function initScrollAnimations(root = document) {
    root.querySelectorAll('.card, .sidebar-section, .calc-category, .blog-card').forEach(el => el.classList.add('reveal-on-scroll'));
    const elements = root.querySelectorAll('.reveal-on-scroll, .animate-in');
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    elements.forEach((el, index) => {
        el.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`);
        observer.observe(el);
    });
}

function initCounters(root = document) {
    root.querySelectorAll('[data-counter]').forEach(counter => {
        if (counter.dataset.counted === 'true') return;
        counter.dataset.counted = 'true';
        const target = Number(counter.dataset.counter) || 0;
        const suffix = counter.dataset.suffix || '';
        const start = performance.now();
        const duration = 1000;
        const tick = now => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });
}

function render404() {
    return `
        <div class="empty-state" style="min-height: 60vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div class="empty-state__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
            </div>
            <h2 class="empty-state__title">Page Not Found</h2>
            <p class="empty-state__desc">The page you're looking for doesn't exist or has been moved.</p>
            <a href="#/" class="btn btn--primary">Go Home</a>
        </div>
    `;
}

function updateActiveNav(page) {
    // Desktop nav
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.dataset.page;
        link.classList.toggle('active', linkPage === page || (page === '' && linkPage === 'home'));
    });

    // Mobile nav
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        const linkPage = link.dataset.page;
        link.classList.toggle('active', linkPage === page || (page === '' && linkPage === 'home'));
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    const closeBtn = document.getElementById('mobileNavClose');

    toggle?.addEventListener('click', () => {
        const isOpen = nav.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    overlay?.addEventListener('click', closeMobileMenu);
    closeBtn?.addEventListener('click', closeMobileMenu);

    // Close on link click
    document.querySelectorAll('.mobile-nav-link, .mobile-nav__cta').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMobileMenu, 100);
        });
    });
}

function openMobileMenu() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    const toggle = document.getElementById('mobileMenuToggle');

    nav?.classList.add('active');
    overlay?.classList.add('active');
    toggle?.classList.add('active');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.getElementById('mobileNavClose')?.focus();
}

function closeMobileMenu() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    const toggle = document.getElementById('mobileMenuToggle');

    nav?.classList.remove('active');
    overlay?.classList.remove('active');
    toggle?.classList.remove('active');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggle?.focus();
}

// ========== HEADER SCROLL EFFECT ==========
function initHeaderScroll() {
    const header = document.getElementById('header');
    const updateHeader = () => {
        header?.classList.toggle('scrolled', window.scrollY > 10);
    };

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
}

// ========== GLOBAL PAGE SCROLL PROGRESS ==========
let scrollProgressFrame = 0;

function updateScrollProgress() {
    const progress = document.getElementById('scrollProgress');
    const fill = document.getElementById('scrollProgressFill');
    if (!progress || !fill) return;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollableHeight > 0
        ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
        : 0;

    fill.style.height = `${percentage}%`;
    progress.setAttribute('aria-valuenow', String(Math.round(percentage)));
}

function scheduleScrollProgressUpdate() {
    if (scrollProgressFrame) return;

    scrollProgressFrame = window.requestAnimationFrame(() => {
        scrollProgressFrame = 0;
        updateScrollProgress();
    });
}

function initScrollProgress() {
    window.addEventListener('scroll', scheduleScrollProgressUpdate, { passive: true });
    window.addEventListener('resize', scheduleScrollProgressUpdate);

    const mainContent = document.getElementById('mainContent');
    const footer = document.querySelector('.footer');
    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(scheduleScrollProgressUpdate);
        if (mainContent) observer.observe(mainContent);
        if (footer) observer.observe(footer);
    }

    updateScrollProgress();
}

// ========== SCROLL TO TOP BUTTON ==========
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18,15 12,9 6,15"/></svg>';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
}

// ========== INITIALIZATION ==========
function init() {
    // Init theme
    initTheme();

    // Init toast container
    initToastContainer();

    // Init mobile menu
    initMobileMenu();

    // Init header scroll
    initHeaderScroll();

    // Init global scroll progress
    initScrollProgress();

    // Init scroll to top
    initScrollToTop();

    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    // Handle initial route
    const route = getRoute();
    navigateTo(route);

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        const route = getRoute();
        navigateTo(route);
    });
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
