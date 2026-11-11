"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer({ t }) {
  // Smooth scroll helper to avoid modifying the URL hash
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="section-wrap footer-inner">
        <button type="button" className="brand" onClick={scrollToTop}>
          <span className="brand-mark">WB</span>
          <span>
            Wael<span className="brand-dot">.</span>
          </span>
        </button>

        <p>
          © {new Date().getFullYear()} Wael BEN FADHEL. {t.footer}
        </p>

        <button type="button" className="back-top" onClick={scrollToTop}>
          BACK TO TOP <ArrowUpRight size={14} />
        </button>
      </div>
    </footer>
  );
}
