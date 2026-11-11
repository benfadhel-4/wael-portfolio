"use client";

import { ArrowUpRight, Languages, Menu, X } from "lucide-react";

export default function Navbar({
  lang,
  setLang,
  menuOpen,
  setMenuOpen,
  t,
  navigateTo,
}) {
  const navIds = ["about", "experience", "skills", "projects", "contact"];

  return (
    <header className="header">
      <button
        type="button"
        className="brand"
        onClick={() => navigateTo("home")}
        aria-label="Wael BEN FADHEL home"
      >
        <span className="brand-mark">WB</span>
        <span>
          Wael<span className="brand-dot">.</span>
        </span>
      </button>

      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {t.nav.map((item, i) => (
          <button
            type="button"
            key={item}
            onClick={() => navigateTo(navIds[i])}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          aria-label="Switch language"
        >
          <Languages size={16} />
          {lang === "fr" ? "EN" : "FR"}
        </button>

        <button
          type="button"
          className="header-contact"
          onClick={() => navigateTo("contact")}
        >
          {t.ctaContact} <ArrowUpRight size={15} />
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
