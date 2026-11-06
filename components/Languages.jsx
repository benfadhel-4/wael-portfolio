export default function Languages({ t }) {
  return (
    <section className="section section-dark languages-section">
      <div className="section-wrap languages-grid">
        <div>
          <p className="section-label">
            <span>06</span> / {t.languagesLabel}
          </p>

          <h2>{t.languagesTitle}</h2>
        </div>

        <div className="language-list">
          <div>
            <span>{t.languageFrench}</span>
            <span>{t.languageFrenchLevel}</span>
          </div>

          <div>
            <span>{t.languageEnglish}</span>
            <span>{t.languageEnglishLevel}</span>
          </div>

          <div>
            <span>{t.languageArabic}</span>
            <span>{t.languageArabicLevel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
