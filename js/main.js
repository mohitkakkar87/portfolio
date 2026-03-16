/**
 * PORTFOLIO MAIN.JS
 * =================
 * All interactivity for Mohit Kakkar's portfolio.
 * Reads data from data.js (PORTFOLIO constant).
 *
 * Modules (in init order):
 *  1. Loader
 *  2. Particles canvas background
 *  3. Navbar (scroll + mobile menu)
 *  4. Hero rendering + typing animation
 *  5. Stats rendering + counter animation
 *  6. About rendering
 *  7. Skills rendering + filter
 *  8. Experience timeline rendering
 *  9. Projects rendering + filter
 * 10. Contact form
 * 11. Scroll reveal (Intersection Observer)
 * 12. Footer
 */

'use strict';

/* ─── HELPERS ────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls = '', attrs = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  Object.entries(attrs).forEach(([k, v]) => { k === 'html' ? (e.innerHTML = v) : e.setAttribute(k, v); });
  return e;
};

/* ─── 1. LOADER ──────────────────────────────────────────────── */
function initLoader() {
  const loader = $('#loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
}

/* ─── 2. PARTICLE CANVAS ──────────────────────────────────────  */
function initParticles() {
  const canvas = $('#particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); initParticleArray(); });

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x  = Math.random() * W;
      this.y  = initial ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r  = Math.random() * 1.4 + 0.4;
      this.a  = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,120,212,${this.a})`;
      ctx.fill();
    }
  }

  function initParticleArray() {
    const count = Math.min(Math.floor((W * H) / 12000), 80);
    particles = Array.from({ length: count }, () => new Particle());
  }
  initParticleArray();

  function drawConnections() {
    const maxDist = 100;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,120,212,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  let rafId;
  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    rafId = requestAnimationFrame(loop);
  }
  loop();

  // Pause when not visible (tab hidden)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else loop();
  });
}

/* ─── 3. NAVBAR ──────────────────────────────────────────────── */
function initNavbar() {
  const nav    = $('#navbar');
  const burger = $('#nav-burger');
  const menu   = $('#nav-mobile-menu');
  if (!nav) return;

  // Scroll glass effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  }, { passive: true });

  // Hamburger
  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      menu.classList.toggle('open');
    });
    // Close on link click
    $$('a', menu).forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
    }));
  }

  function updateActiveLink() {
    const sections = ['hero','about','skills','experience','projects','github-projects','contact'];
    const scrollY  = window.scrollY + 100;
    let current    = 'hero';
    sections.forEach(id => {
      const s = $(`#${id}`);
      if (s && s.offsetTop <= scrollY) current = id;
    });
    $$('.nav-links a, #nav-mobile-menu a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }
}

/* ─── 4. HERO ────────────────────────────────────────────────── */
function renderHero() {
  const p = PORTFOLIO.personal;

  // Name + greeting
  const nameEl = $('#hero-name');
  if (nameEl) nameEl.textContent = p.name;
  const bioEl = $('#hero-bio');
  if (bioEl) bioEl.textContent = p.bio;

  // Orbit tech icons (roles / technologies)
  const techIcons = ['☁️','🔐','🏗️','⚡','🐍','🔗','📊','🛡️'];
  const orbitWrap = $('#hero-orbit');
  if (orbitWrap) {
    const radius   = 165; // px from centre
    const duration = 20;  // seconds per full orbit
    techIcons.forEach((icon, i) => {
      const startDeg = (i / techIcons.length) * 360;
      // Arm: zero-size div at the orbit centre that rotates
      const arm = document.createElement('div');
      arm.style.cssText = `
        position:absolute;
        top:50%;left:50%;
        width:0;height:0;
        transform:rotate(${startDeg}deg);
        animation:orbit-spin ${duration}s linear infinite;
        pointer-events:none;
      `;
      // Dot: placed at (radius, 0) relative to arm centre; counter-rotates to stay upright
      const dot = el('div', 'hero-orbit-dot');
      dot.style.cssText = `
        position:absolute;
        left:${radius - 22}px;
        top:-22px;
        animation:orbit-spin-reverse ${duration}s linear infinite;
        pointer-events:auto;
      `;
      dot.textContent = icon;
      dot.title = icon;
      arm.appendChild(dot);
      orbitWrap.appendChild(arm);
    });
  }

  // CTA links
  const resumeBtn = $('#hero-resume');
  if (resumeBtn) resumeBtn.href = p.resume;
  const linkedinLink = $('#hero-linkedin');
  if (linkedinLink) linkedinLink.href = p.linkedin;
  const githubLink = $('#hero-github');
  if (githubLink) githubLink.href = p.github;

  // Profile image
  const img = $('#hero-profile-img');
  if (img) { img.src = p.profileImage; img.alt = p.name; }

  // Availability badge
  const badge = $('#hero-availability');
  if (badge) badge.textContent = p.availability;

  initTypingAnimation();
}

function initTypingAnimation() {
  const el      = $('#hero-typing');
  if (!el) return;
  const taglines = PORTFOLIO.personal.taglines;
  let idx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = taglines[idx];
    if (deleting) {
      el.textContent = current.slice(0, charIdx--);
      if (charIdx < 0) { deleting = false; idx = (idx + 1) % taglines.length; setTimeout(tick, 400); return; }
      setTimeout(tick, 40);
    } else {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) { deleting = true; setTimeout(tick, 2200); return; }
      setTimeout(tick, 70);
    }
  }
  tick();
}

/* ─── 5. STATS ───────────────────────────────────────────────── */
let _countersAnimated = false;

function renderStats() {
  const grid = $('#stats-grid');
  if (!grid) return;
  PORTFOLIO.stats.forEach((s, i) => {
    const card = el('div', 'stat-card glass reveal');
    card.className += ` delay-${i + 1}`;
    card.innerHTML = `
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>`;
    grid.appendChild(card);
  });
}

function animateCounters() {
  if (_countersAnimated) return;
  _countersAnimated = true;
  $$('.stat-value[data-target]').forEach(el => {
    const raw    = el.dataset.target.replace(/[^0-9.]/g, '');
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.target.replace(/[0-9.]/g, '');
    const target = parseFloat(raw);
    if (isNaN(target)) { el.textContent = el.dataset.target; return; }
    let start = null;
    const duration = 1600;
    function step(ts) {
      if (!start) start = ts;
      const prog  = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      const val   = Math.round(eased * target);
      el.textContent = `${val}${prefix}${suffix}`;
      if (prog < 1) requestAnimationFrame(step);
      else el.textContent = `${el.dataset.target}${suffix}`;
    }
    requestAnimationFrame(step);
  });
}

/* ─── 6. ABOUT ───────────────────────────────────────────────── */
function renderAbout() {
  const p = PORTFOLIO.personal;

  // Profile img
  const img = $('#about-img');
  if (img) { img.src = p.profileImage; img.alt = p.name; }

  // Quick facts
  const factsEl = $('#about-facts');
  if (factsEl) {
    const facts = [
      { label: 'Location', value: p.location },
      { label: 'Email',    value: p.email },
      { label: 'Title',    value: p.title },
      { label: 'Status',   value: p.availability }
    ];
    factsEl.innerHTML = facts.map(f => `
      <div class="fact-item">
        <div class="fact-label">${f.label}</div>
        <div class="fact-value">${f.value}</div>
      </div>`).join('');
  }

  // Achievements
  const achEl = $('#about-achievements');
  if (achEl) {
    achEl.innerHTML = PORTFOLIO.achievements.map(a =>
      `<li class="achievement-item">${a}</li>`
    ).join('');
  }

  // Certifications
  const certEl = $('#about-certs');
  if (certEl) {
    certEl.innerHTML = PORTFOLIO.certifications.map(c => `
      <div class="cert-card glass" style="border-top: 2px solid ${c.color}">
        <span class="cert-code" style="background:${c.color}22;color:${c.color}">${c.code}</span>
        <div class="cert-name">${c.name}</div>
      </div>`).join('');
  }

  // Education
  const eduEl = $('#about-education');
  if (eduEl) {
    eduEl.innerHTML = PORTFOLIO.education.map(e => `
      <div class="fact-item" style="grid-column: 1 / -1;">
        <div class="fact-label">${e.period} · ${e.location}</div>
        <div class="fact-value">${e.degree}</div>
        <div class="fact-label" style="margin-top:0.15rem">${e.institution}</div>
      </div>`).join('');
  }
}

/* ─── 7. SKILLS ──────────────────────────────────────────────── */
function renderSkills() {
  const container = $('#skills-grid');
  const filters   = $('#skills-filters');
  if (!container || !filters) return;

  // Build unique category list (preserving order)
  const cats = ['all', ...new Set(PORTFOLIO.skills.map(s => s.category))];
  filters.innerHTML = cats.map(c => `
    <button class="filter-btn${c === 'all' ? ' active' : ''}" data-cat="${c}">
      ${c.charAt(0).toUpperCase() + c.slice(1)}
    </button>`).join('');

  // Render cards
  container.innerHTML = PORTFOLIO.skills.map(s => {
    const iconHtml = s.icon
      ? `<div class="skill-icon"><img src="assets/icons/${s.icon}.svg" alt="${s.name}" onerror="this.parentElement.innerHTML='<span style=font-size:1rem>⚡</span>'"></div>`
      : `<div class="skill-icon"><span style="font-size:1rem">⚡</span></div>`;
    return `
      <div class="skill-card reveal" data-cat="${s.category}">
        <div class="skill-top">
          ${iconHtml}
          <span class="skill-name">${s.name}</span>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar" data-level="${s.level}"></div>
        </div>
      </div>`;
  }).join('');

  // Filter logic
  $$('.filter-btn', filters).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn', filters).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      $$('.skill-card', container).forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !show);
        if (show) {
          // Reset bar to 0 so the CSS transition re-fires
          $$('.skill-bar', card).forEach(b => { b.style.transition = 'none'; b.style.width = '0'; });
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            // Re-enable transition then animate
            $$('.skill-bar', card).forEach(b => { b.style.transition = ''; });
            setTimeout(() => card.classList.add('visible'), 30);
          });
        }
      });
      setTimeout(animateBars, 100);
    });
  });
}

function animateBars() {
  $$('.skill-bar[data-level]').forEach(bar => {
    const card = bar.closest('.skill-card');
    if (!card || card.classList.contains('hidden')) return;
    bar.style.width = bar.dataset.level + '%';
  });
}

/* ─── 8. EXPERIENCE ──────────────────────────────────────────── */
function renderExperience() {
  const timeline = $('#exp-timeline');
  if (!timeline) return;

  PORTFOLIO.experience.forEach(exp => {
    const item = el('div', `timeline-item${exp.current ? ' current' : ''}`);
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="exp-card reveal" style="--item-color:${exp.color}" tabindex="0" role="button" aria-expanded="false">
        <div class="exp-header">
          <div class="exp-logo">
            ${exp.logo
              ? `<img src="${exp.logo}" alt="${exp.company}" onerror="this.parentElement.textContent='${exp.logoText}'">`
              : exp.logoText}
          </div>
          <div class="exp-meta">
            <div class="exp-role">${exp.role}</div>
            <div class="exp-company">${exp.company}</div>
            <div class="exp-period">
              ${exp.period} · ${exp.location}
              ${exp.current ? '<span class="exp-current-badge">Current</span>' : ''}
            </div>
          </div>
          <div class="exp-chevron">▼</div>
        </div>
        <div class="exp-body">
          <ul class="exp-highlights">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
          <div class="exp-tags">
            ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>`;
    timeline.appendChild(item);

    // Toggle expand
    const card = item.querySelector('.exp-card');
    card.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      // Close all first
      $$('.exp-card').forEach(c => { c.classList.remove('open'); c.setAttribute('aria-expanded', 'false'); });
      if (!isOpen) { card.classList.add('open'); card.setAttribute('aria-expanded', 'true'); }
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });

  // Auto-open first (current job)
  const first = $('.exp-card', timeline);
  if (first) { first.classList.add('open'); first.setAttribute('aria-expanded', 'true'); }
}

/* ─── 9. PROJECTS ────────────────────────────────────────────── */
function renderProjects() {
  const grid    = $('#projects-grid');
  const filters = $('#projects-filters');
  if (!grid || !filters) return;

  const cats = ['all', ...new Set(PORTFOLIO.projects.map(p => p.category))];
  filters.innerHTML = cats.map(c => `
    <button class="filter-btn${c === 'all' ? ' active' : ''}" data-cat="${c}">
      ${c === 'all' ? 'All Projects' : c.charAt(0).toUpperCase() + c.slice(1)}
    </button>`).join('');

  grid.innerHTML = PORTFOLIO.projects.map(proj => `
    <div class="project-card reveal" data-cat="${proj.category}" style="--card-color:${proj.color}">
      <div class="project-top">
        <div class="project-icon">${proj.icon}</div>
        <div class="project-meta">
          <div class="project-category">${proj.category} · ${proj.period}</div>
          <div class="project-name">${proj.name}</div>
          <div class="project-client">${proj.client}</div>
        </div>
      </div>
      <p class="project-desc">${proj.description}</p>
      <div class="project-metrics">
        ${proj.metrics.map(m => `<div class="project-metric">${m}</div>`).join('')}
      </div>
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');

  $$('.filter-btn', filters).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn', filters).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      $$('.project-card', grid).forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !show);
        if (show) {
          card.classList.remove('visible');
          requestAnimationFrame(() => setTimeout(() => card.classList.add('visible'), 30));
        }
      });
    });
  });
}

/* ─── 10. GITHUB PROJECTS ────────────────────────────────────── */
function renderGithubProjects() {
  const grid = $('#gh-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.githubProjects.map(proj => `
    <div class="gh-card reveal" style="--gh-color:${proj.color}">
      <div class="gh-card-top">
        <span class="gh-icon">${proj.icon}</span>
        <div class="gh-links">
          <a href="${proj.github}" target="_blank" rel="noopener" class="gh-link-btn" title="View on GitHub" aria-label="GitHub repository">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          ${proj.live ? `
          <a href="${proj.live}" target="_blank" rel="noopener" class="gh-link-btn gh-link-live" title="View live demo" aria-label="Live demo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>` : ''}
        </div>
      </div>
      <h3 class="gh-name">${proj.name}</h3>
      <p class="gh-desc">${proj.description}</p>
      <ul class="gh-highlights">
        ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="gh-tags">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');
}

/* ─── 11. CONTACT FORM ───────────────────────────────────────── */
function initContactForm() {
  const p   = PORTFOLIO.personal;

  // Render static contact items
  const itemsEl = $('#contact-items');
  if (itemsEl) {
    const waNum = p.phone[0].replace(/\D/g, ''); // digits only for wa.me link
    const items = [
      { icon: '✉️', label: 'Email',              value: p.email,                          href: `mailto:${p.email}` },
      { icon: '📱', label: p.phoneLabels[0],     value: p.phone[0] + ' · WhatsApp',       href: `https://wa.me/${waNum}` },
      { icon: '📞', label: p.phoneLabels[1],     value: p.phone[1],                        href: `tel:${p.phone[1]}` },
      { icon: '📍', label: 'Location',           value: p.location,                        href: null },
      { icon: '💼', label: 'LinkedIn',           value: 'View Profile',                    href: p.linkedin }
    ];
    itemsEl.innerHTML = items.map(i => `
      <${i.href ? `a href="${i.href}" target="_blank" rel="noopener"` : 'div'} class="contact-item">
        <div class="contact-item-icon">${i.icon}</div>
        <div>
          <div class="contact-item-label">${i.label}</div>
          <div class="contact-item-value">${i.value}</div>
        </div>
      </${i.href ? 'a' : 'div'}>`).join('');
  }

  // Social links
  const socialsEl = $('#contact-socials');
  if (socialsEl) {
    socialsEl.innerHTML = `
      <a href="${p.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <a href="${p.github}" target="_blank" rel="noopener" class="social-link" title="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>`;
  }

  // Form submission (mailto for GitHub Pages)
  const form = $('#contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !message) return;
    const body = encodeURIComponent(`Hi Mohit,\n\nMy name is ${name} (${email}).\n\n${message}`);
    const sub  = encodeURIComponent(subject || `Portfolio enquiry from ${name}`);
    window.open(`mailto:${PORTFOLIO.personal.email}?subject=${sub}&body=${body}`, '_blank');
    const successEl = $('#form-success');
    if (successEl) successEl.classList.add('show');
    form.reset();
    setTimeout(() => successEl && successEl.classList.remove('show'), 5000);
  });
}

/* ─── 11. SCROLL REVEAL ──────────────────────────────────────── */
function initScrollReveal() {
  const revealOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
  const observer   = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger stat counters once
        if (entry.target.closest('#stats')) animateCounters();
        // Trigger skill bars once
        if (entry.target.classList.contains('skill-card')) {
          setTimeout(animateBars, 200);
        }
        observer.unobserve(entry.target);
      }
    });
  }, revealOpts);

  $$('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

/* ─── 12. FOOTER ─────────────────────────────────────────────── */
function renderFooter() {
  const year = $('#footer-year');
  if (year) year.textContent = new Date().getFullYear();
  const name = $('#footer-name');
  if (name) name.textContent = PORTFOLIO.personal.name;
}

/* ─── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initParticles();
  initNavbar();

  renderHero();
  renderStats();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderGithubProjects();

  initContactForm();
  initScrollReveal();
  renderFooter();

  // Reveal hero elements immediately
  setTimeout(() => {
    $$('#hero .reveal, #hero .reveal-left, #hero .reveal-right').forEach(e => e.classList.add('visible'));
  }, 500);
});
