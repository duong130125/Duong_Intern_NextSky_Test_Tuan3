/**
 * UMINO DAWN THEME - Refactored Main JS
 * Uses Swiper.js for carousels and GLightbox for lightboxes
 */

class UminoTheme {
  constructor() {
    this.init();
  }

  init() {
    this.initHeader();
    this.initMobileMenu();
    this.initFooterAccordion();
    this.initScrollToTop();
    this.initSwiperSliders();
    this.initCart();
  }

  // Sticky Header
  initHeader() {
    const header = document.getElementById("Header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
    });
  }

  // Mobile Menu Toggle
  initMobileMenu() {
    const mobileMenuBtn = document.getElementById("MobileMenuBtn");
    const mobileMenuWrapper = document.getElementById("MobileMenuWrapper");
    const mobileMenuOverlay = document.getElementById("MobileMenuOverlay");

    if (!mobileMenuBtn || !mobileMenuWrapper || !mobileMenuOverlay) return;

    const toggleMenu = (open) => {
      mobileMenuWrapper.classList.toggle("active", open);
      mobileMenuOverlay.classList.toggle("active", open);
      document.body.style.overflow = open ? "hidden" : "";
    };

    mobileMenuBtn.addEventListener("click", () => toggleMenu(true));
    mobileMenuOverlay.addEventListener("click", () => toggleMenu(false));

    const closeBtn = document.getElementById("MobileMenuClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => toggleMenu(false));
    }
  }

  // Footer Accordion (Mobile Only)
  initFooterAccordion() {
    const accordions = document.querySelectorAll(".footer-col.accordion");
    accordions.forEach((acc) => {
      const title = acc.querySelector(".footer-title");
      if (title) {
        title.addEventListener("click", () => {
          if (window.innerWidth <= 767) {
            acc.classList.toggle("active");
          }
        });
      }
    });
  }

  // Scroll to Top/Down
  initScrollToTop() {
    const scrollBtn = document.getElementById("scrollToBtn");
    if (!scrollBtn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add("is-scrolled");
      } else {
        scrollBtn.classList.remove("is-scrolled");
      }
    });

    scrollBtn.addEventListener("click", () => {
      if (scrollBtn.classList.contains("is-scrolled")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  }

  // Initialize Swiper sliders matching index.html
  initSwiperSliders() {
    // Hero Banner Slider
    const heroSlider = document.querySelector(".hero-slider-fw");
    if (heroSlider) {
      new Swiper(heroSlider, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".hero-dots",
          clickable: true,
        },
        navigation: {
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      });
    }

    // New Arrivals Slider
    const arrivalsSlider = document.querySelector(".new-arrivals-slider");
    if (arrivalsSlider) {
      new Swiper(arrivalsSlider, {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".new-arrivals-next",
          prevEl: ".new-arrivals-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
    }

    // Testimonials Slider
    const testimonialsSlider = document.querySelector(".testimonials-slider");
    if (testimonialsSlider) {
      new Swiper(testimonialsSlider, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".testimonial-dots",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    }
  }

  // Cart Badge Synchronization
  initCart() {
    const cartBadgeHeader = document.getElementById("cart-badge-header");
    const cartBadgeMobile = document.getElementById("cart-badge-mobile");

    const updateBadge = (count) => {
      if (cartBadgeHeader) cartBadgeHeader.textContent = count;
      if (cartBadgeMobile) cartBadgeMobile.textContent = count;
    };

    // Update initial count from cart object
    // Note: In real Shopify, we'd fetch cart.json to be 100% sure after first load

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-add-cart");
      if (btn) {
        // Shopify AJAX Cart Logic would go here
        console.log("Add to cart clicked");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UminoTheme();
});
