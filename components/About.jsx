export default function About({ t }) {
  return (
    <section className="section section-light" id="about">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-label">
            <span>01</span> / {t.aboutLabel}
          </p>
          <h2>{t.aboutTitle}</h2>
        </div>

        <div className="about-grid">
          <div className="about-lead">
            <span className="quote-mark">“</span>
            <p>{t.aboutText}</p>
          </div>

          <div className="about-side">
            <p>{t.aboutText2}</p>

            <div className="mini-facts">
              <div>
                <strong>.NET</strong>
                <span>Core expertise</span>
              </div>

              <div>
                <strong>SQL</strong>
                <span>Data & performance</span>
              </div>

              <div>
                <strong>API</strong>
                <span>Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
