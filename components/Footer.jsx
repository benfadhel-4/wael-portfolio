import { ArrowUpRight } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="section-wrap footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">WB</span>
          <span>
            Wael<span className="brand-dot">.</span>
          </span>
        </a>

        <p>
          © {new Date().getFullYear()} Wael BEN FADHEL. {t.footer}
        </p>

        <a href="#home" className="back-top">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
