/**
 * Cosmic Surgicals - Modern JavaScript
 * Premium Medical Equipment Supplier
 * Version: 2.0
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    CosmicApp.init();
  });

  // Main Application Object
  const CosmicApp = {
    init: function() {
      this.pageLoader();
      this.headerScroll();
      this.mobileMenu();
      this.smoothScroll();
      this.scrollAnimations();
      this.backToTop();
      this.counterAnimation();
      this.testimonialSlider();
      this.categorySlider();
      this.productSlider();
      this.parallaxEffects();
      this.formValidation();
      this.rippleEffect();
      this.lazyLoading();
    },

    // Page Loader
    pageLoader: function() {
      const loader = document.querySelector('.page-loader');
      if (loader) {
        window.addEventListener('load', function() {
          setTimeout(function() {
            loader.classList.add('hidden');
            document.body.style.overflow = 'visible';
          }, 500);
        });
      }
    },

    // Header Scroll Effect
    headerScroll: function() {
      const header = document.querySelector('.header');
      if (!header) return;

      let lastScroll = 0;
      const scrollThreshold = 100;

      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > scrollThreshold) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
      });
    },

    // Mobile Menu
    mobileMenu: function() {
      const menuToggle = document.querySelector('.menu-toggle');
      const mobileNav = document.querySelector('.mobile-nav');
      const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
      const mobileNavClose = document.querySelector('.mobile-nav-close');
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

      if (!menuToggle || !mobileNav) return;

      const openMenu = () => {
        menuToggle.classList.add('active');
        mobileNav.classList.add('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      const closeMenu = () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
      };

      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (mobileNav.classList.contains('active')) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMenu);
      }

      if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMenu);
      }

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      // Close on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
          closeMenu();
        }
      });
    },

    // Smooth Scroll for Anchor Links
    smoothScroll: function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    },

    // Scroll Animations using Intersection Observer
    scrollAnimations: function() {
      const animatedElements = document.querySelectorAll('[data-animate]');
      if (animatedElements.length === 0) return;

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      animatedElements.forEach(element => {
        observer.observe(element);
      });
    },

    // Back to Top Button
    backToTop: function() {
      const backToTopBtn = document.querySelector('.back-to-top');
      if (!backToTopBtn) return;

      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      });

      backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    },

    // Counter Animation
    counterAnimation: function() {
      const counters = document.querySelectorAll('[data-counter]');
      if (counters.length === 0) return;

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };

      const animateCounter = (element) => {
        const target = parseInt(element.dataset.counter);
        const duration = parseInt(element.dataset.duration) || 2000;
        const suffix = element.dataset.suffix || '';
        const start = 0;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(easeOutQuart * (target - start) + start);

          element.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            element.textContent = target + suffix;
          }
        };

        requestAnimationFrame(updateCounter);
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      counters.forEach(counter => {
        observer.observe(counter);
      });
    },

    // Testimonial Slider
    testimonialSlider: function() {
      const slider = document.querySelector('.testimonials-slider');
      if (!slider) return;

      const slides = slider.querySelectorAll('.testimonial-card');
      const dotsContainer = slider.querySelector('.testimonial-dots');
      const prevBtn = slider.querySelector('.testimonial-nav-btn.prev');
      const nextBtn = slider.querySelector('.testimonial-nav-btn.next');

      if (slides.length <= 1) return;

      let currentSlide = 0;
      let autoplayInterval;

      // Create dots
      if (dotsContainer) {
        slides.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('testimonial-dot');
          if (index === 0) dot.classList.add('active');
          dot.addEventListener('click', () => goToSlide(index));
          dotsContainer.appendChild(dot);
        });
      }

      const dots = dotsContainer?.querySelectorAll('.testimonial-dot');

      const updateSlides = () => {
        slides.forEach((slide, index) => {
          slide.style.display = index === currentSlide ? 'block' : 'none';
          slide.style.opacity = index === currentSlide ? '1' : '0';
        });

        dots?.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      };

      const goToSlide = (index) => {
        currentSlide = index;
        updateSlides();
        resetAutoplay();
      };

      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
      };

      const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
      };

      const startAutoplay = () => {
        autoplayInterval = setInterval(nextSlide, 5000);
      };

      const resetAutoplay = () => {
        clearInterval(autoplayInterval);
        startAutoplay();
      };

      if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
      if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });

      // Touch/Swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          resetAutoplay();
        }
      };

      updateSlides();
      startAutoplay();
    },

    // Category Slider (if using Swiper)
    categorySlider: function() {
      const categorySlider = document.querySelector('.categories-slider');
      if (!categorySlider || typeof Swiper === 'undefined') return;

      new Swiper('.categories-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }
      });
    },

    // Product Slider (if using Swiper)
    productSlider: function() {
      const productSlider = document.querySelector('.products-slider');
      if (!productSlider || typeof Swiper === 'undefined') return;

      new Swiper('.products-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }
      });
    },

    // Parallax Effects
    parallaxEffects: function() {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      if (parallaxElements.length === 0) return;

      const handleParallax = () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
          const speed = parseFloat(element.dataset.parallax) || 0.5;
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrolled;
          const offset = (scrolled - elementTop) * speed;

          element.style.transform = `translateY(${offset}px)`;
        });
      };

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleParallax();
            ticking = false;
          });
          ticking = true;
        }
      });
    },

    // Form Validation
    formValidation: function() {
      const forms = document.querySelectorAll('form[data-validate]');

      forms.forEach(form => {
        form.addEventListener('submit', function(e) {
          let isValid = true;
          const requiredFields = form.querySelectorAll('[required]');

          requiredFields.forEach(field => {
            const errorMessage = field.parentElement.querySelector('.error-message');

            if (!field.value.trim()) {
              isValid = false;
              field.classList.add('error');
              if (errorMessage) errorMessage.style.display = 'block';
            } else {
              field.classList.remove('error');
              if (errorMessage) errorMessage.style.display = 'none';
            }

            // Email validation
            if (field.type === 'email' && field.value) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
              }
            }

            // Phone validation
            if (field.type === 'tel' && field.value) {
              const phoneRegex = /^[\d\s\-+()]{10,}$/;
              if (!phoneRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
              }
            }
          });

          if (!isValid) {
            e.preventDefault();
            const firstError = form.querySelector('.error');
            if (firstError) {
              firstError.focus();
            }
          }
        });

        // Real-time validation
        form.querySelectorAll('input, textarea, select').forEach(field => {
          field.addEventListener('blur', function() {
            if (this.required && !this.value.trim()) {
              this.classList.add('error');
            } else {
              this.classList.remove('error');
            }
          });

          field.addEventListener('input', function() {
            this.classList.remove('error');
          });
        });
      });
    },

    // Ripple Effect for Buttons
    rippleEffect: function() {
      const buttons = document.querySelectorAll('.btn-ripple');

      buttons.forEach(button => {
        button.addEventListener('click', function(e) {
          const rect = button.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;

          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';

          button.appendChild(ripple);

          setTimeout(() => ripple.remove(), 600);
        });
      });
    },

    // Lazy Loading Images
    lazyLoading: function() {
      const lazyImages = document.querySelectorAll('img[data-src]');
      if (lazyImages.length === 0) return;

      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px'
        });

        lazyImages.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        });
      }
    }
  };

  // Make CosmicApp available globally
  window.CosmicApp = CosmicApp;

})();

// Additional utility functions
const Utils = {
  // Debounce function
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle: function(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport: function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  scrollToElement: function(element, offset = 0) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  },

  // Format number with commas
  formatNumber: function(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

window.Utils = Utils;
