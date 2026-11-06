"use client";

import { useState } from "react";

import { copy } from "@/data/translations";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = copy[lang];

  return (
    <main>
      <Navbar
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />

      <Hero t={t} />

      <About t={t} />

      <Experience t={t} lang={lang} />

      <Skills t={t} lang={lang} />

      <Projects t={t} lang={lang} />

      <Education t={t} />

      <Languages t={t} />

      <Contact t={t} />

      <Footer t={t} />
    </main>
  );
}
