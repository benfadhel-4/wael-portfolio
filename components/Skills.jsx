"use client";

import { skills } from "@/data/skills";

export default function Skills({ t, lang }) {
  const currentSkills = skills[lang] || skills.en;

  return (
    <section className="section section-light" id="skills">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-label">
            <span>03</span> / {t.skillsLabel}
          </p>

          <h2>{t.skillsTitle}</h2>

          <p className="section-description">{t.skillsIntro}</p>
        </div>

        <div className="skills-grid">
          {currentSkills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={20} />
                  </span>

                  <span className="skill-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{skill.name}</h3>
                <p>{skill.items}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
