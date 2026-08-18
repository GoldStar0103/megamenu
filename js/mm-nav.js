(() => {
  const nav = document.querySelector("[data-mm-nav]");
  if (!nav) return;

  const bar = nav.querySelector(".mm_bar");
  const links = [...nav.querySelectorAll("[data-mm-trigger]")];
  const panels = [...nav.querySelectorAll("[data-mm-panel]")];
  const burger = nav.querySelector("[data-mm-burger]");
  const scrim = nav.querySelector("[data-mm-scrim]");
  const mq = window.matchMedia("(max-width: 1100px)");

  let closeTimer = 0;
  let openId = null;

  const isMobile = () => mq.matches;

  const lockScroll = (on) => {
    document.body.style.overflow = on ? "hidden" : "";
  };

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

  const closeAll = () => {
    nav.classList.remove("is-mobile-open");
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Open menu");
    lockScroll(false);
    setOpen(null);
  };

  const scheduleClose = () => {
    if (isMobile()) return;
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => setOpen(null), 160);
  };

  const cancelClose = () => window.clearTimeout(closeTimer);

  links.forEach((link) => {
    const id = link.dataset.mmTrigger;

    link.addEventListener("pointerenter", (event) => {
      if (isMobile() || event.pointerType === "touch") return;
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

    link.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      setOpen(id);
      const panel = panels.find((item) => item.dataset.mmPanel === id);
      panel?.querySelector("a")?.focus();
    });
  });

  panels.forEach((panel) => {
    panel.addEventListener("pointerenter", cancelClose);
    panel.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      closeAll();
    });
  });

  nav.querySelectorAll("[data-mm-dismiss]").forEach((node) => {
    node.addEventListener("pointerenter", scheduleClose);
  });

  bar?.addEventListener("pointerleave", scheduleClose);

  burger?.addEventListener("click", () => {
    const next = !nav.classList.contains("is-mobile-open");
    nav.classList.toggle("is-mobile-open", next);
    burger.setAttribute("aria-expanded", next ? "true" : "false");
    burger.setAttribute("aria-label", next ? "Close menu" : "Open menu");
    lockScroll(next);
    if (!next) setOpen(null);
  });

  scrim?.addEventListener("click", closeAll);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });

  mq.addEventListener("change", closeAll);
})();
