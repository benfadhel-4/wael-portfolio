import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Contact({ t }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-wrap contact-grid">
        <div className="contact-copy">
          <p className="section-label">
            <span>07</span> / {t.contactLabel}
          </p>

          <h2>{t.contactTitle}</h2>

          <p>{t.contactText}</p>

          <a className="email-link" href="mailto:wael12345benfadhel@gmail.com">
            <Mail size={18} />
            wael12345benfadhel@gmail.com
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="contact-panel">
          <span className="contact-panel-label">LET'S CONNECT</span>

          <a
            href="https://www.linkedin.com/in/wael-benfadhel/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <Linkedin size={18} /> LinkedIn
            </span>
            <ArrowUpRight size={18} />
          </a>

          <a
            href="https://github.com/benfadhel-4"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <Github size={18} /> GitHub
            </span>
            <ArrowUpRight size={18} />
          </a>

          <a href="mailto:wael12345benfadhel@gmail.com">
            <span>
              <Mail size={18} /> Email
            </span>
            <ArrowUpRight size={18} />
          </a>

          <div className="cv-area">
            <p>{t.cvNote}</p>

            <a
              className="button button-primary"
              href="/wael-benfadhel-cv.pdf"
              download
            >
              <Download size={16} />
              {t.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
