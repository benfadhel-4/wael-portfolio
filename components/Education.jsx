"use client";

import { useState } from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export default function Education({ t }) {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="section section-light" id="education">
      <div className="section-wrap education-grid">
        {/* LEFT SIDE - STATIC */}
        <div>
          <p className="section-label">
            <span>05</span> / {t.educationLabel}
          </p>

          <h2>{t.educationTitle}</h2>
        </div>

        {/* RIGHT SIDE - DYNAMIC */}
        <div className="education-content">
          {/* TABS */}

          <div className="education-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "education"}
              className={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap size={18} />
              <span>{t.educationTab}</span>
              <small>01</small>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "certifications"}
              className={activeTab === "certifications" ? "active" : ""}
              onClick={() => setActiveTab("certifications")}
            >
              <Award size={18} />
              <span>{t.certificationsTab}</span>
              <small>02</small>
            </button>
          </div>

          {/* ACADEMIC EDUCATION */}
          {activeTab === "education" && (
            <div className="education-list" role="tabpanel">
              {t.educationData.map((item, index) => (
                <div className="education-card" key={index}>
                  <span className="education-icon">
                    <GraduationCap size={23} />
                  </span>

                  <div>
                    <p className="education-date">{item.period}</p>

                    <h3>{item.degree}</h3>

                    <p>{item.institution}</p>

                    <span className="education-note">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PROFESSIONAL CERTIFICATIONS */}
          {activeTab === "certifications" && (
            <div className="education-list" role="tabpanel">
              {t.certificationsData.map((item, index) => (
                <div className="education-card" key={index}>
                  <span className="education-icon">
                    <Award size={23} />
                  </span>

                  <div>
                    <p className="education-date">
                      {item.provider}
                      {item.period && ` · ${item.period}`}
                    </p>

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    {item.skills?.length > 0 && (
                      <div className="certification-skills">
                        {item.skills.map((skill, i) => (
                          <span key={i}>{skill}</span>
                        ))}
                      </div>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-certificate-link"
                      >
                        {t.viewCertificate}
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
