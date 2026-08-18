(() => {
  const nav = document.querySelector("[data-mm-nav]");
  if (!nav) return;

  const links = [...nav.querySelectorAll("[data-mm-trigger]")];
  const panels = [...nav.querySelectorAll("[data-mm-panel]")];
  const burger = nav.querySelector("[data-mm-burger]");
  const scrim = nav.querySelector("[data-mm-scrim]");
  const mq = window.matchMedia("(max-width: 1024px)");

  let closeTimer = 0;
  let openId = null;

  const isMobile = () => mq.matches;

  const setOpen = (id) => {
    openId = id;
    nav.classList.toggle("is-open", Boolean(id) && !isMobile());
    links.forEach((link) => {
      const on = link.dataset.mmTrigger === id;
      link.classList.toggle("is-open", on);
      link.setAttribute("aria-expanded", on ? "true" : "false");
    });
    panels.forEach((panel) => {
      panel.classList.toggle("is-open", panel.dataset.mmPanel === id);
    });
  };

  const scheduleClose = () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => setOpen(null), 140);
  };

  const cancelClose = () => window.clearTimeout(closeTimer);

  links.forEach((link) => {
    const id = link.dataset.mmTrigger;

    link.addEventListener("mouseenter", () => {
      if (isMobile()) return;
      cancelClose();
      setOpen(id);
    });

    link.addEventListener("focus", () => {
      if (isMobile()) return;
      cancelClose();
      setOpen(id);
    });

    link.addEventListener("click", (event) => {
      event.preventDefault();
      cancelClose();
      if (isMobile()) {
        setOpen(openId === id ? null : id);
        return;
      }
      setOpen(id);
    });
  });

  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      if (!isMobile()) cancelClose();
    });
    panel.addEventListener("mouseleave", () => {
      if (!isMobile()) scheduleClose();
    });
  });

  nav.querySelector(".mm_bar")?.addEventListener("mouseleave", () => {
    if (!isMobile()) scheduleClose();
  });

  burger?.addEventListener("click", () => {
    const next = !nav.classList.contains("is-mobile-open");
    nav.classList.toggle("is-mobile-open", next);
    burger.setAttribute("aria-expanded", next ? "true" : "false");
    if (!next) setOpen(null);
  });

  scrim?.addEventListener("click", () => {
    nav.classList.remove("is-mobile-open");
    burger?.setAttribute("aria-expanded", "false");
    setOpen(null);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    nav.classList.remove("is-mobile-open");
    burger?.setAttribute("aria-expanded", "false");
    setOpen(null);
  });

  mq.addEventListener("change", () => {
    nav.classList.remove("is-mobile-open");
    setOpen(null);
  });
})();
