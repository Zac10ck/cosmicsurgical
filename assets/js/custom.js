(function () {
  'use strict';

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
      if (event.key === 'Escape') closeMenu();
    });
  }

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
