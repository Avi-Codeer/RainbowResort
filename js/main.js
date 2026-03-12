/* ============================================================
   Rainbow Resort – Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ─── Configuration ────────────────────────────────────────
  // Replace the placeholder below with the actual WhatsApp/phone number
  // (digits only, with country code, e.g. '919876543210')
  // then update all href="tel:..." and wa.me links in index.html too.
  var PHONE_NUMBER = '91XXXXXXXXXX';

  // ─── Navbar: scroll behaviour & mobile menu ───────────────
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  function handleNavbarScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ─── Scroll-to-top button ─────────────────────────────────
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Menu tabs ───────────────────────────────────────────
  const menuTabs   = document.querySelectorAll('.menu-tab');
  const menuPanels = document.querySelectorAll('.menu-panel');

  menuTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.dataset.tab;

      menuTabs.forEach(function (t) {
        t.classList.toggle('active', t === tab);
      });

      menuPanels.forEach(function (panel) {
        panel.classList.toggle('active', panel.id === target);
      });
    });
  });

  // ─── Contact form ────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name      = contactForm.querySelector('#name').value.trim();
      const phone     = contactForm.querySelector('#phone').value.trim();
      const eventType = contactForm.querySelector('#event-type').value;
      const message   = contactForm.querySelector('#message').value.trim();

      if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
      }

      // Compose WhatsApp message and redirect
      const waText = [
        'Hello, I would like to book Rainbow Resort.',
        name    ? 'Name: '  + name      : '',
        phone   ? 'Phone: ' + phone     : '',
        eventType ? 'Event: ' + eventType : '',
        message ? 'Details: ' + message  : '',
      ].filter(Boolean).join('%0A');

      const waURL = 'https://wa.me/91XXXXXXXXXX?text=' + waText;

      // Show success message
      const existing = contactForm.querySelector('.form-success');
      if (existing) existing.remove();

      const success = document.createElement('p');
      success.className = 'form-success';
      success.textContent = '✅ Thank you! Redirecting you to WhatsApp to complete your booking…';
      contactForm.insertBefore(success, contactForm.querySelector('button[type="submit"]'));

      // Redirect to WhatsApp after short delay
      setTimeout(function () {
        window.open(waURL, '_blank', 'noopener,noreferrer');
      }, 800);

      contactForm.reset();
    });
  }

  // ─── Smooth scroll for anchor links ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ─── Intersection Observer: fade-in on scroll ─────────────
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(
    '.event-card, .why-card, .amenity-item, .review-card, .gallery-item, .menu-item, .about-feature'
  ).forEach(function (el) {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

})();
