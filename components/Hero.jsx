"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Database,
  MapPin,
} from "lucide-react";

export default function Hero({ t, lang }) {
  const [showScrollCue, setShowScrollCue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop - window.innerHeight / 2;
        setShowScrollCue(scrollY > 100 && scrollY < aboutTop);
      } else {
        setShowScrollCue(scrollY > 100 && scrollY < 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic text based on current language
  const scrollText =
    t.scrollExplore || (lang === "fr" ? "DÉCOUVRIR" : "SCROLL TO EXPLORE");

  return (
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

      {/* Floating Centered Button */}
      <button
        type="button"
        className={`scroll-cue ${showScrollCue ? "visible" : ""}`}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <span />
        {scrollText}
      </button>
    </section>
  );
}
