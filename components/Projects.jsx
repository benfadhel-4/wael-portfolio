import { ArrowUpRight, Code2 } from "lucide-react";

export default function Projects({ t, lang }) {
  const projects = [
    {
      n: "01",
      title: t.project1,
      desc: t.project1desc,
      tags: [".NET", "SQL Server", "Business apps"],
    },
    {
      n: "02",
      title: t.project2,
      desc: t.project2desc,
      tags: ["REST API", "AWS", "Integration"],
    },
    {
      n: "03",
      title: t.project3,
      desc: t.project3desc,
      tags: ["Oracle", "SQL", "PDF reporting"],
    },
    {
      n: "04",
      title: t.project4,
      desc: t.project4desc,
      tags: ["ASP.NET Core", "Data", "Reporting"],
    },
  ];

  return (
    <section className="section section-accent" id="projects">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-label">
            <span>04</span> / {t.projectsLabel}
          </p>

          <h2>{t.projectsTitle}</h2>

          <p className="section-description">{t.projectsIntro}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.n}>
              <div className="project-visual">
                <span className="project-index">{project.n} / 04</span>

                <div className={`project-symbol symbol-${project.n}`}>
                  <Code2 size={36} />
                </div>

                <span className="project-visual-caption">
                  ENGINEERING / SOFTWARE
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

                <div className="project-bottom">
                  <span>{t.details}</span>
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
