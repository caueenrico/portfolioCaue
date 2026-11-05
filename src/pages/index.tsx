import { useRef } from "react";

import { SEO } from "../components/seo/SEO";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Marquee } from "../components/marquee";
import { About } from "../components/about";
import { Systems } from "../components/systems";
import { Method } from "../components/method";
import { Path } from "../components/path";
import { Stack } from "../components/stack";
import { Education } from "../components/education";
import { Contact } from "../components/contact";
import { useTranslation } from "@/i18n/useTranslation";
import { useSmoothScroll } from "@/motion/useSmoothScroll";
import { useSiteMotion } from "@/motion/useSiteMotion";

export default function Home() {
  const { ready, lang } = useTranslation();
  const page = useRef<HTMLDivElement>(null);

  useSmoothScroll();
  useSiteMotion(page, ready, lang);

  return (
    <>
      <SEO />
      <div className="grain" aria-hidden="true" />
      <div ref={page}>
        <Header />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Systems />
          <Method />
          <Path />
          <Stack />
          <Education />
        </main>
        <Contact />
      </div>
    </>
  );
}
