"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Code2,
  X,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Projects({ t, lang }) {
  const [activeImageModal, setActiveImageModal] = useState(null);
  const galleryRef = useRef(null);
  const animationRef = useRef(null);
  const pausedRef = useRef(false);

  const projects = [
    {
      n: "01",
      title: t.project1,
      desc: t.project1desc,
      tags: [".NET", "React", "SQL Server", "Business Apps"],
      images: [
        "/images/projects/project1/c7.png",
        "/images/projects/project1/c2.png",
        "/images/projects/project1/c3.png",
        "/images/projects/project1/c4.png",
        "/images/projects/project1/c5.png",
        "/images/projects/project1/c6.png",
      ],
    },
    {
      n: "02",
      title: t.project2,
      desc: t.project2desc,
      tags: ["ASP.NET Core", "REST API", "SQL Server"],
      images: [],
    },
    {
      n: "03",
      title: t.project3,
      desc: t.project3desc,
      tags: ["ASP.NET Core", "Energy Monitoring", "SQL Server"],
      images: [
        "/images/projects/project3/R1.png",
        "/images/projects/project3/R2.png",
      ],
    },
    {
      n: "04",
      title: t.project4,
      desc: t.project4desc,
      tags: ["ASP.NET Core", "REST API", "AWS", "Integration"],
      images: [
        "/images/projects/project4/m1.png",
        "/images/projects/project4/m2.png",
        "/images/projects/project4/m3.png",
      ],
    },
    {
      n: "05",
      title: t.project5,
      desc: t.project5desc,
      tags: ["Crystal Reports", "SQL Server", "Oracle", "PDF"],
      images: [
        "/images/projects/project5/e1.png",
        "/images/projects/project5/e2.png",
      ],
    },
  ];

  // Close modal with Escape
  useEffect(() => {
    if (!activeImageModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImageModal(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImageModal]);

  // Automatic horizontal movement
  useEffect(() => {
    if (!activeImageModal?.images?.length) return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    let frame;

    const animate = () => {
      if (!pausedRef.current) {
        const halfWidth = gallery.scrollWidth / 2;

        gallery.scrollLeft += 0.5;

        // Infinite loop
        if (gallery.scrollLeft >= halfWidth) {
          gallery.scrollLeft = 0;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    animationRef.current = frame;

    return () => cancelAnimationFrame(frame);
  }, [activeImageModal]);

  const openGallery = (project) => {
    if (project.images.length > 0) {
      pausedRef.current = false;
      setActiveImageModal(project);
    }
  };

  const closeGallery = () => {
    setActiveImageModal(null);
  };

  const scrollGallery = (direction) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });

    pausedRef.current = true;

    setTimeout(() => {
      pausedRef.current = false;
    }, 2500);
  };

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
                className={`project-visual ${
                  project.images.length ? "has-gallery" : ""
                }`}
                onClick={() => openGallery(project)}
                style={{
                  cursor: project.images.length ? "pointer" : "default",
                }}
              >
                <span className="project-index">{project.n} / 05</span>

                <div className={`project-symbol symbol-${project.n}`}>
                  <Code2 size={36} />
                </div>

                <span className="project-visual-caption">
                  ENGINEERING / SOFTWARE
                  {project.images.length > 0 && (
                    <ImageIcon
                      size={12}
                      style={{ display: "inline", marginLeft: 4 }}
                    />
                  )}
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

                {project.images.length > 0 && (
                  <div
                    className="project-bottom"
                    onClick={() => openGallery(project)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>{t.details || "View Gallery"}</span>
                    <ArrowUpRight size={17} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULLSCREEN HORIZONTAL GALLERY */}
      {activeImageModal && (
        <div className="project-gallery-modal" onClick={closeGallery}>
          {/* Close button */}
          <button
            className="gallery-close"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X size={25} />
          </button>

          {/* Gallery header */}
          <div className="gallery-header">
            <span className="gallery-project-number">
              PROJECT {activeImageModal.n} / 05
            </span>

            <h2>{activeImageModal.title}</h2>

            <p>{activeImageModal.desc}</p>
          </div>

          {/* Navigation buttons */}
          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              scrollGallery(-1);
            }}
            aria-label="Previous images"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              scrollGallery(1);
            }}
            aria-label="Next images"
          >
            <ChevronRight size={26} />
          </button>

          {/* Horizontal scrolling gallery */}
          <div
            className="gallery-viewport"
            ref={galleryRef}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
            onTouchEnd={() => {
              setTimeout(() => {
                pausedRef.current = false;
              }, 2000);
            }}
          >
            <div className="gallery-track">
              {activeImageModal.images.map((imgSrc, idx) => (
                <div className="gallery-slide" key={idx}>
                  <img
                    src={imgSrc}
                    alt={`${activeImageModal.title} screenshot ${idx + 1}`}
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-footer">
            <span>{activeImageModal.images.length} IMAGES</span>
            <span>
              {lang === "fr"
                ? "Survolez ou faites glisser pour explorer"
                : "Hover or swipe to explore"}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
