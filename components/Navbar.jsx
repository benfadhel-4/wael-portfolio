import { ArrowUpRight, Languages, Menu, X } from "lucide-react";

export default function Navbar({ lang, setLang, menuOpen, setMenuOpen, t }) {
  const navIds = ["about", "experience", "skills", "projects", "contact"];

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Wael BEN FADHEL home">
        <span className="brand-mark">WB</span>
        <span>
          Wael<span className="brand-dot">.</span>
        </span>
      </a>

      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {t.nav.map((item, i) => (
          <a
            key={item}
            href={`#${navIds[i]}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
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

        <a className="header-contact" href="#contact">
          {t.ctaContact} <ArrowUpRight size={15} />
        </a>

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
