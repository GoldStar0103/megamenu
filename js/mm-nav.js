(() => {
  const nav = document.querySelector("[data-mm-nav]");
  if (!nav) return;

  const overlay = nav.querySelector("[data-mm-overlay]");
  const items = [...nav.querySelectorAll("[data-mm-panel]")];
  const panels = [...nav.querySelectorAll("[data-panel]")];
  const burger = nav.querySelector("[data-mm-burger]");
  const backdrop = nav.querySelector("[data-mm-backdrop]");
  const closeBtns = [...nav.querySelectorAll("[data-mm-close]")];
  const accordionBtns = [...nav.querySelectorAll("[data-mm-tab]")];
  const mq = window.matchMedia("(max-width: 991px)");

  const OPEN_DELAY = 70;
  const CLOSE_DELAY = 180;
  let openTimer = null;
  let closeTimer = null;
  let current = null;

  function isMobile() {
    return mq.matches;
  }

  function showPanel(name) {
    current = name;
    nav.classList.add("is-open");
    items.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.mmPanel === name);
    });
    panels.forEach((panel) => {
      panel.classList.toggle("is-visible", panel.dataset.panel === name);
    });
    accordionBtns.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.mmTab === name);
      btn.setAttribute("aria-expanded", String(btn.dataset.mmTab === name));
    });
    items.forEach((item) => {
      const btn = item.querySelector(".mm_trigger");
      if (btn) btn.setAttribute("aria-expanded", String(item.dataset.mmPanel === name));
    });
  }

  function close() {
    current = null;
    nav.classList.remove("is-open");
    if (!nav.classList.contains("is-mobile-open")) {
      items.forEach((item) => item.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-visible"));
      items.forEach((item) => {
        const btn = item.querySelector(".mm_trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  }

  function openMobile(name) {
    nav.classList.add("is-mobile-open");
    document.body.style.overflow = "hidden";
    showPanel(name || "solutions");
  }

  function closeMobile() {
    nav.classList.remove("is-mobile-open");
    document.body.style.overflow = "";
    close();
  }

  items.forEach((item) => {
    const name = item.dataset.mmPanel;
    item.addEventListener("mouseenter", () => {
      if (isMobile()) return;
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
      openTimer = setTimeout(() => showPanel(name), current ? 0 : OPEN_DELAY);
    });

    const trigger = item.querySelector(".mm_trigger");
    if (trigger) {
      trigger.addEventListener("click", (event) => {
        if (!isMobile()) {
          event.preventDefault();
          if (current === name) close();
          else showPanel(name);
        }
      });
    }
  });

  nav.addEventListener("mouseleave", () => {
    if (isMobile()) return;
    clearTimeout(openTimer);
    closeTimer = setTimeout(close, CLOSE_DELAY);
  });

  overlay?.addEventListener("mouseenter", () => {
    if (isMobile()) return;
    clearTimeout(closeTimer);
  });

  burger?.addEventListener("click", () => openMobile("solutions"));
  backdrop?.addEventListener("click", close);
  closeBtns.forEach((btn) => btn.addEventListener("click", closeMobile));

  overlay?.addEventListener("click", (event) => {
    if (isMobile() && event.target === overlay) closeMobile();
  });

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", () => showPanel(btn.dataset.mmTab));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (nav.classList.contains("is-mobile-open")) closeMobile();
    else close();
  });

  mq.addEventListener("change", () => {
    closeMobile();
  });
})();
