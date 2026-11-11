"use client";

import { useState } from "react";
import { ArrowUpRight, Code2, X, Image as ImageIcon } from "lucide-react";

export default function Projects({ t, lang }) {
  const [activeImageModal, setActiveImageModal] = useState(null);

  const projects = [
    {
      n: "01",
      title: t.project1,
      desc: t.project1desc,
      tags: [".NET", "React", "SQL Server", "Business apps"],
      images: [
        "images//projects/project1/c7.png",
        "images//projects/project1/c2.png",
        "images//projects/project1/c3.png",
        "images//projects/project1/c4.png",
        "images//projects/project1/c5.png",
        "images//projects/project1/c6.png",
      ],
    },
    {
      n: "02",
      title: t.project2,
      desc: t.project2desc,
      tags: ["REST API", "AWS", "Integration"],
      //images: [""],
    },
    {
      n: "03",
      title: t.project3,
      desc: t.project3desc,
      tags: ["Oracle", "SQL", "PDF reporting"],
      images: [
        "images//projects/project3/R1.png",
        "images//projects/project3/R2.png",
      ],
    },
    {
      n: "04",
      title: t.project4,
      desc: t.project4desc,
      tags: ["ASP.NET Core", "Data", "Reporting"],
      images: [
        "images//projects/project4/m1.png",
        "images//projects/project4/m2.png",
        "images//projects/project4/m3.png",
      ],
    },
  ];

  return (
    <section className="section section-accent" id="projects">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-label">
            <span>04</span> / {t.projectsLabel}
          </p>
          <p className="section-description">{t.projectsIntro}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.n}>
              <div
                className="project-visual"
                onClick={() => setActiveImageModal(project)}
                style={{ cursor: "pointer" }}
              >
                <span className="project-index">{project.n} / 04</span>

                <div className={`project-symbol symbol-${project.n}`}>
                  <Code2 size={36} />
                </div>

                <span className="project-visual-caption">
                  ENGINEERING / SOFTWARE{" "}
                  <ImageIcon
                    size={12}
                    style={{ display: "inline", marginLeft: 4 }}
                  />
                </span>
              </div>

              <div className="project-body">
                <p className="project-kicker">{t.featured} PROJECT</p>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div
                  className="project-bottom"
                  onClick={() => setActiveImageModal(project)}
                  style={{ cursor: "pointer" }}
                >
                  <span>{t.details || "View Gallery"}</span>
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* IMAGE GALLERY MODAL POPUP */}
      {activeImageModal && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveImageModal(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h3>{activeImageModal.title}</h3>
            <p>{activeImageModal.desc}</p>

            <div className="modal-gallery-grid">
              {activeImageModal.images.map((imgSrc, idx) => (
                <div className="modal-image-wrap" key={idx}>
                  <img
                    src={imgSrc}
                    alt={`${activeImageModal.title} screenshot ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
