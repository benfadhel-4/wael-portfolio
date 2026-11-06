import { BriefcaseBusiness } from "lucide-react";

export default function Experience({ t, lang }) {
  return (
    <section className="section section-dark" id="experience">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-label">
            <span>02</span> / {t.experienceLabel}
          </p>
          <h2>{t.experienceTitle}</h2>
        </div>

        <article className="experience-card">
          <div className="experience-meta">
            <span className="timeline-dot" />
            <p>{t.current}</p>

            <span className="experience-type">
              <BriefcaseBusiness size={14} /> Full-time
            </span>
          </div>

          <div className="experience-main">
            <h3>{t.job}</h3>
            <p className="company">{t.company}</p>
            <p className="job-intro">{t.jobIntro}</p>

            <ul>
              {t.duties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </article>

        <p className="small-note">* {lang === "fr" ? "" : ""}</p>
      </div>
    </section>
  );
}
