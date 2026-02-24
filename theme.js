// theme.js
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  const saved = localStorage.getItem("theme");
  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  function setTheme(mode) {
    const isDark = mode === "dark";
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", mode);
    if (btn) btn.textContent = isDark ? "☀️" : "🌙";
  }

  // initial
  if (saved === "dark" || saved === "light") {
    setTheme(saved);
  } else {
    setTheme(systemPrefersDark ? "dark" : "light");
  }

  // toggle
  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.classList.contains("dark") ? "light" : "dark";
      setTheme(next);
    });
  }
})();
