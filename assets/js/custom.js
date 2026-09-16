(function () {
  'use strict';

  // Lead tracking: phone, WhatsApp and email clicks -> GA4 'contact_click' event
  document.addEventListener('click', function (event) {
    const a = event.target.closest('a[href]');
    if (!a || typeof window.gtag !== 'function') return;
    const href = a.getAttribute('href') || '';
    let method = null;
    if (href.indexOf('tel:') === 0) method = 'phone';
    else if (href.indexOf('mailto:') === 0) method = 'email';
    else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) method = 'whatsapp';
    if (method) {
      window.gtag('event', 'contact_click', { method: method, link_text: (a.textContent || '').trim().slice(0, 60), page_path: location.pathname });
    }
  }, true);

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  function closeMenu() {
    if (!menuButton || !navigation) return;
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      const willOpen = !navigation.classList.contains('open');
      navigation.classList.toggle('open', willOpen);
      menuButton.setAttribute('aria-expanded', String(willOpen));
      document.body.classList.toggle('menu-open', willOpen);
    });

    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
        document.querySelectorAll('.has-menu.open').forEach(function (o) { o.classList.remove('open'); });
      }
    });
  }

  // Products dropdown: hover/focus opens on desktop via CSS; on touch devices the
  // first tap opens the menu and the second follows the link.
  document.querySelectorAll('.has-menu > a').forEach(function (trigger) {
    const item = trigger.parentElement;
    trigger.addEventListener('click', function (event) {
      const touch = window.matchMedia('(hover: none)').matches;
      const wide = window.matchMedia('(min-width: 821px)').matches;
      if (touch && wide && !item.classList.contains('open')) {
        event.preventDefault();
        document.querySelectorAll('.has-menu.open').forEach(function (o) { o.classList.remove('open'); });
        item.classList.add('open');
      }
    });
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.has-menu')) {
      document.querySelectorAll('.has-menu.open').forEach(function (o) { o.classList.remove('open'); });
    }
  });


  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  const inquiryForm = document.querySelector('[data-whatsapp-form]');
  if (inquiryForm) {
    const requestedProduct = new URLSearchParams(window.location.search).get('product');
    const productField = inquiryForm.querySelector('[name="product"]');
    if (requestedProduct && productField) productField.value = requestedProduct;

    inquiryForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(inquiryForm);
      const name = String(data.get('name') || '').trim();
      const buyer = String(data.get('buyer') || '').trim();
      const product = String(data.get('product') || '').trim();
      const location = String(data.get('location') || '').trim();
      const details = String(data.get('details') || '').trim();

      // GA4 key event: quotation form completed (no personal data sent)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { method: 'whatsapp_form', buyer_type: buyer || '(not set)', product_category: product ? product.slice(0, 60) : '(not set)' });
      }

      const lines = [
        'Hello Cosmic Surgicals, I found your details on the website and would like assistance with medical equipment.',
        '',
        name ? 'Name: ' + name : '',
        buyer ? 'Requirement for: ' + buyer : '',
        product ? 'Product / category: ' + product : '',
        location ? 'Delivery location: ' + location : '',
        details ? 'Details: ' + details : '',
        '',
        'Please share suitable options, availability, specifications and a quotation. Thank you.'
      ].filter(function (line, index, array) {
        if (line !== '') return true;
        return index > 0 && array[index - 1] !== '';
      });

      window.open('https://wa.me/919447302140?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer');
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
