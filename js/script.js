(function () {
  "use strict";
  const MOBILE_BREAKPOINT = 960;

  function pageName(pathname) {
    return pathname.split("/").pop() || "index.html";
  }

  async function loadFragment(id, url) {
    const container = document.getElementById(id);
    if (!container || container.firstElementChild) return;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Unable to load ${url}`);
      container.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  }

  function setActivePage() {
    const current = pageName(window.location.pathname);
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const target = pageName(new URL(link.href, window.location.href).pathname);
      const active = target === current;
      link.classList.toggle("is-active", active);
      active ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current");
    });
  }

  function initNavigation() {
    const header = document.querySelector("[data-site-header]");
    const nav = document.querySelector("[data-site-nav]");
    const toggle = document.querySelector("[data-nav-toggle]");
    if (!header || !nav || !toggle || toggle.dataset.initialized) return;
    toggle.dataset.initialized = "true";

    function closeMenu(returnFocus) {
      header.classList.remove("nav-is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      document.body.classList.remove("nav-open");
      if (returnFocus) toggle.focus();
    }

    function openMenu() {
      header.classList.add("nav-is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation");
      document.body.classList.add("nav-open");
    }

    toggle.addEventListener("click", () => {
      toggle.getAttribute("aria-expanded") === "true" ? closeMenu(false) : openMenu();
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a") && window.innerWidth < MOBILE_BREAKPOINT) closeMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("nav-is-open")) closeMenu(true);
    });

    document.addEventListener("click", (event) => {
      if (window.innerWidth < MOBILE_BREAKPOINT && header.classList.contains("nav-is-open") && !header.contains(event.target)) closeMenu(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) closeMenu(false);
    });

    window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });
    setActivePage();
  }

  function initDropdowns() {
    document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
      const button = dropdown.querySelector("[data-dropdown-toggle]");
      const menu = dropdown.querySelector("[data-dropdown-menu]");
      if (!button || !menu || button.dataset.initialized) return;
      button.dataset.initialized = "true";
      const close = () => { dropdown.classList.remove("is-open"); button.setAttribute("aria-expanded", "false"); };
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const open = button.getAttribute("aria-expanded") !== "true";
        close();
        if (open) { dropdown.classList.add("is-open"); button.setAttribute("aria-expanded", "true"); }
      });
      dropdown.addEventListener("keydown", (event) => { if (event.key === "Escape") { close(); button.focus(); } });
      document.addEventListener("click", (event) => { if (!dropdown.contains(event.target)) close(); });
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll(".stat h2");
    if (!counters.length || !("IntersectionObserver" in window)) return;
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent.replace(/\D/g, ""), 10);
      if (!Number.isFinite(target)) return;
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.unobserve(counter);
        const start = performance.now();
        const update = (now) => {
          const progress = Math.min((now - start) / 900, 1);
          counter.textContent = `${Math.ceil(target * progress)}+`;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }, { threshold: 0.35 });
      observer.observe(counter);
    });
  }

  function setYear() {
    document.querySelectorAll("[data-current-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
  }

  async function initSite() {
    await Promise.all([loadFragment("header", "header.html"), loadFragment("footer", "footer.html")]);
    initNavigation();
    initDropdowns();
    initCounters();
    setYear();
  }

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initSite, { once: true }) : initSite();
})();