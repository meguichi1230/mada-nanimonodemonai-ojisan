// script.js
(() => {
  const DEFAULT_LANG = "jp";

  function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang") !== lang;
    });

    document.documentElement.lang = (lang === "jp") ? "ja" : "en";

    document.querySelectorAll("[data-set-lang]").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-set-lang") === lang);
    });

    requestAnimationFrame(() => {
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY > maxY) window.scrollTo(0, 0);
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-set-lang]");
    if (!btn) return;
    setLang(btn.getAttribute("data-set-lang"));
  });

  setLang(DEFAULT_LANG);
})();
