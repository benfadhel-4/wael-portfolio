"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Database,
  Server,
  Workflow,
  GraduationCap,
  Languages,
  Sparkles,
} from "lucide-react";

const copy = {
  fr: {
    nav: ["À propos", "Expérience", "Compétences", "Projets", "Contact"],
    available: "Ouvert aux opportunités en Europe",
    greeting: "Bonjour, je suis",
    role: "Ingénieur logiciel",
    intro:
      "Je conçois des applications web fiables et des solutions métier qui transforment des besoins opérationnels en outils concrets.",
    ctaProjects: "Découvrir mes projets",
    ctaContact: "Me contacter",
    location: "Nabeul, Tunisie · Mobile en Europe",
    aboutLabel: "À PROPOS",
    aboutTitle: "Du code utile, des solutions pensées pour le terrain.",
    aboutText:
      "Ingénieur en informatique et développeur Full-Stack .NET, je travaille sur des applications métier, des API REST et des bases de données. Mon expérience dans l'industrie textile m'a appris à comprendre les besoins des utilisateurs, améliorer les traitements de données et livrer des outils utiles au quotidien.",
    aboutText2:
      "Je recherche une nouvelle opportunité en Europe où contribuer à des produits robustes, apprendre avec une équipe et continuer à progresser en développement logiciel.",
    experienceLabel: "EXPÉRIENCE",
    experienceTitle: "Construire des solutions en production",
    current: "AOÛT 2023 — AUJOURD'HUI",
    job: "Développeur logiciel .NET",
    company: "VTL Groupe · Nabeul, Tunisie",
    jobIntro:
      "Développement et évolution d'applications internes pour le suivi de la production textile et les opérations métier.",
    duties: [
      "Conception et développement d'applications ASP.NET Core / MVC à partir des besoins métier.",
      "Développement d'API REST et intégration de données provenant de services externes / AWS.",
      "Optimisation de requêtes SQL Server et de procédures stockées Oracle.",
      "Génération de rapports PDF et accompagnement des utilisateurs dans la prise en main des outils.",
    ],
    skillsLabel: "COMPÉTENCES",
    skillsTitle: "Mes outils au quotidien",
    skillsIntro:
      "Une base solide en développement backend, données et interfaces web.",
    projectsLabel: "PROJETS",
    projectsTitle: "Quelques domaines sur lesquels j'ai travaillé",
    projectsIntro:
      "Sélection de projets et de réalisations représentatifs. Les détails confidentiels de l'entreprise ne sont pas publiés.",
    project1: "Suivi de production textile",
    project1desc:
      "Applications métier pour le suivi des ordres de fabrication, des opérations de coupe, de stock et de facturation.",
    project2: "Intégration API & synchronisation",
    project2desc:
      "Récupération de données depuis des services externes, traitement et synchronisation vers une base interne.",
    project3: "Reporting & données industrielles",
    project3desc:
      "Rapports opérationnels, génération de PDF et optimisation SQL pour rendre les données plus accessibles.",
    project4: "Tableaux de bord de consommation",
    project4desc:
      "Collecte et présentation de données industrielles liées aux compteurs et à la consommation des équipements.",
    educationLabel: "FORMATION",
    educationTitle: "Formation académique",
    degree: "Diplôme national d’ingénieur en informatique",
    school: "ESPRIT · Tunisie",
    degreeNote: "Diplôme obtenu en 2023",
    languagesLabel: "LANGUES",
    languagesTitle: "Communication & collaboration",
    languageFrench: "Français",
    languageFrenchLevel: "Professionnel — à préciser",
    languageEnglish: "Anglais",
    languageEnglishLevel: "Professionnel — à préciser",
    languageArabic: "Arabe",
    languageArabicLevel: "Langue maternelle",
    contactLabel: "CONTACT",
    contactTitle: "Parlons de votre prochain projet.",
    contactText:
      "Vous recrutez un développeur .NET ou souhaitez échanger autour d'un projet ? Je serai ravi de vous lire.",
    email: "Votre e-mail",
    message: "Votre message",
    send: "Envoyer un e-mail",
    footer: "Conçu avec soin · Next.js & React",
    cvNote:
      "Ajoutez votre CV PDF dans le dossier public sous le nom wael-benfadhel-cv.pdf.",
    featured: "SÉLECTION",
    details: "À présenter en entretien",
  },
  en: {
    nav: ["About", "Experience", "Skills", "Projects", "Contact"],
    available: "Open to opportunities across Europe",
    greeting: "Hello, I'm",
    role: "Software Engineer",
    intro:
      "I build reliable web applications and business solutions that turn operational needs into practical tools.",
    ctaProjects: "Explore my projects",
    ctaContact: "Get in touch",
    location: "Nabeul, Tunisia · Open to relocating in Europe",
    aboutLabel: "ABOUT",
    aboutTitle: "Useful code. Practical, real-world solutions.",
    aboutText:
      "I'm a Computer Science Engineer and Full-Stack .NET Developer working with business applications, REST APIs, and databases. My experience in textile manufacturing has taught me to understand user needs, improve data processing, and deliver tools that support day-to-day operations.",
    aboutText2:
      "I'm looking for my next opportunity in Europe, where I can contribute to robust products, learn from a team, and keep growing as a software engineer.",
    experienceLabel: "EXPERIENCE",
    experienceTitle: "Building solutions used in production",
    current: "AUG 2023 — PRESENT",
    job: ".NET Software Developer",
    company: "VTL Groupe · Nabeul, Tunisia",
    jobIntro:
      "Developing and maintaining internal business applications for textile production tracking and operational workflows.",
    duties: [
      "Designed and built ASP.NET Core / MVC applications from business requirements.",
      "Developed REST APIs and integrated data from external services / AWS.",
      "Optimized SQL Server queries and Oracle stored procedures.",
      "Generated PDF reports and supported users adopting internal tools.",
    ],
    skillsLabel: "SKILLS",
    skillsTitle: "Tools I work with",
    skillsIntro:
      "A strong foundation in backend development, data, and web interfaces.",
    projectsLabel: "PROJECTS",
    projectsTitle: "Areas I've worked on",
    projectsIntro:
      "A selection of representative project areas. Confidential company details are not published.",
    project1: "Textile production tracking",
    project1desc:
      "Business applications for tracking manufacturing orders, cutting operations, inventory, and invoicing.",
    project2: "API integration & synchronisation",
    project2desc:
      "Retrieving data from external services, processing it, and synchronising it with an internal database.",
    project3: "Industrial reporting & data",
    project3desc:
      "Operational reports, PDF generation, and SQL optimisation to make business data easier to use.",
    project4: "Consumption dashboards",
    project4desc:
      "Collecting and presenting industrial data related to meters and equipment consumption.",
    educationLabel: "EDUCATION",
    educationTitle: "Academic background",
    degree: "National Engineering Degree in Computer Science",
    school: "ESPRIT · Tunisia",
    degreeNote: "Graduated in 2023",
    languagesLabel: "LANGUAGES",
    languagesTitle: "Communication & collaboration",
    languageFrench: "French",
    languageFrenchLevel: "Professional — please confirm",
    languageEnglish: "English",
    languageEnglishLevel: "Professional — please confirm",
    languageArabic: "Arabic",
    languageArabicLevel: "Native",
    contactLabel: "CONTACT",
    contactTitle: "Let's talk about your next project.",
    contactText:
      "Hiring a .NET developer or interested in discussing a project? I'd be happy to hear from you.",
    email: "Your email",
    message: "Your message",
    send: "Send an email",
    footer: "Made with care · Next.js & React",
    cvNote:
      "Add your PDF CV to the public folder and name it wael-benfadhel-cv.pdf.",
    featured: "SELECTED",
    details: "Discuss in interview",
  },
};

const skills = [
  {
    name: ".NET / C#",
    icon: Code2,
    items: "ASP.NET Core · MVC · .NET Framework",
  },
  {
    name: "Databases",
    icon: Database,
    items: "SQL Server · Oracle · SQL tuning",
  },
  {
    name: "APIs & integration",
    icon: Workflow,
    items: "REST APIs · JSON · Data synchronisation",
  },
  {
    name: "Frontend",
    icon: Globe2,
    items: "React · JavaScript · HTML · CSS · Bootstrap",
  },
  {
    name: "Tools",
    icon: Server,
    items: "Git · Visual Studio · Crystal Reports",
  },
  {
    name: "Currently learning",
    icon: Sparkles,
    items: "AI · RAG · Cloud & DevOps fundamentals",
  },
];

export default function Home() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  const navIds = ["about", "experience", "skills", "projects", "contact"];

  return (
    <main>
      <header className="header">
        <a className="brand" href="#home" aria-label="Wael BEN FADHEL home">
          <span className="brand-mark">WB</span>
          <span>
            Wael<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {t.nav.map((item, i) => (
            <a
              key={item}
              href={`#${navIds[i]}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label="Switch language"
          >
            <Languages size={16} /> {lang === "fr" ? "EN" : "FR"}
          </button>
          <a className="header-contact" href="#contact">
            {t.ctaContact} <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            {t.available}
          </div>
          <p className="eyebrow">{t.greeting}</p>
          <h1>
            Wael
            <br />
            <span>BEN FADHEL</span>
            <b>.</b>
          </h1>
          <h2>
            {t.role} <span className="hero-slash">/</span>{" "}
            <span className="hero-stack">Full-Stack .NET</span>
          </h2>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">
              {t.ctaProjects} <ArrowDownRight size={17} />
            </a>
            <a className="button button-ghost" href="#contact">
              {t.ctaContact} <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="hero-location">
            <MapPin size={15} />
            {t.location}
          </p>
        </div>
        <div className="hero-art" aria-label="Abstract developer illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-grid" />
          <div className="hero-card card-code">
            <span className="code-dots">
              <i />
              <i />
              <i />
            </span>
            <code>
              <span className="code-purple">const</span> developer = {"{"}
              <br />
              &nbsp; stack: <span className="code-green">".NET"</span>,<br />
              &nbsp; mindset: <span className="code-green">"builder"</span>,
              <br />
              &nbsp; focus: <span className="code-green">"impact"</span>
              <br />
              {"}"};
            </code>
          </div>
          <div className="hero-card card-tag">
            <Code2 size={18} />
            <span>C# / .NET</span>
          </div>
          <div className="hero-card card-tag card-tag-two">
            <Database size={18} />
            <span>SQL & APIs</span>
          </div>
          <div className="hero-initials">
            WB<span>.</span>
          </div>
          <div className="art-caption">BUILD · IMPROVE · DELIVER</div>
        </div>
        <a className="scroll-cue" href="#about">
          <span />
          SCROLL TO EXPLORE
        </a>
      </section>

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
                  <strong> .NET </strong>
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
          <p className="small-note">
            *{" "}
            {lang === "fr"
              ? "Dates et responsabilités à vérifier avant publication finale."
              : "Please verify dates and responsibilities before publishing."}
          </p>
        </div>
      </section>

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
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top">
                    <span className="skill-icon">
                      <Icon size={20} />
                    </span>
                    <span className="skill-number">0{i + 1}</span>
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.items}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
            {[
              {
                n: "01",
                title: t.project1,
                desc: t.project1desc,
                tags: [".NET", "SQL Server", "Business apps"],
                icon: "01",
              },
              {
                n: "02",
                title: t.project2,
                desc: t.project2desc,
                tags: ["REST API", "AWS", "Integration"],
                icon: "02",
              },
              {
                n: "03",
                title: t.project3,
                desc: t.project3desc,
                tags: ["Oracle", "SQL", "PDF reporting"],
                icon: "03",
              },
              {
                n: "04",
                title: t.project4,
                desc: t.project4desc,
                tags: ["ASP.NET Core", "Data", "Reporting"],
                icon: "04",
              },
            ].map((project) => (
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
          <p className="project-disclaimer">
            {lang === "fr"
              ? "Les projets sont présentés sous forme de domaines d’intervention. Ajoutez des captures d’écran anonymisées ou des dépôts publics si vous en disposez."
              : "Projects are described as areas of work. Add anonymised screenshots or public repositories where available."}
          </p>
        </div>
      </section>

      <section className="section section-light" id="education">
        <div className="section-wrap education-grid">
          <div>
            <p className="section-label">
              <span>05</span> / {t.educationLabel}
            </p>
            <h2>{t.educationTitle}</h2>
          </div>
          <div className="education-card">
            <span className="education-icon">
              <GraduationCap size={23} />
            </span>
            <div>
              <p className="education-date">2023</p>
              <h3>{t.degree}</h3>
              <p>{t.school}</p>
              <span className="education-note">{t.degreeNote}</span>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section contact-section" id="contact">
        <div className="section-wrap contact-grid">
          <div className="contact-copy">
            <p className="section-label">
              <span>07</span> / {t.contactLabel}
            </p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="email-link" href="mailto:your.email@example.com">
              <Mail size={18} />
              your.email@example.com <ArrowUpRight size={16} />
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
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
