'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (mobileToggle && mobileClose && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
  }

  // 3. Language Toggle
  const langToggle = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');
  const htmlEl = document.documentElement;

  if (langToggle) {
    let currentLang = 'pt';

    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';

      htmlEl.setAttribute('lang', currentLang === 'pt' ? 'pt-BR' : 'en');
      htmlEl.setAttribute('data-lang', currentLang);

      langLabel.textContent = currentLang === 'pt' ? 'EN' : 'PT';

      const elements = document.querySelectorAll('[data-pt], [data-en]');
      elements.forEach(el => {
        const newText = el.getAttribute(`data-${currentLang}`);
        if (newText) {
          if (el.children.length === 0) {
            el.textContent = newText;
          } else {
            Array.from(el.childNodes).forEach(node => {
              if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                node.textContent = newText;
              }
            });
          }
        }
      });
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  const workItems = document.querySelectorAll('.work-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImg && lightboxClose) {

    const openLightbox = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    };

    workItems.forEach(item => {
      const img = item.querySelector('img');
      if (img) {
        item.style.cursor = 'zoom-in';
        item.addEventListener('click', () => openLightbox(img.src, img.alt));
      }
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
