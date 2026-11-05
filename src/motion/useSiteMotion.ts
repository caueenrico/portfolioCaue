import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Every scroll and load animation on the page lives here, scoped to `scope`.
// It re-runs on language change (text lengths change, so pins and splits must be
// measured again) but the hero intro only plays once.
export function useSiteMotion(scope: RefObject<HTMLElement>, ready: boolean, lang: string) {
  const introPlayed = useRef(false);

  useEffect(() => {
    const root = scope.current;
    if (!ready || !root) return;

    gsap.registerPlugin(ScrollTrigger);
    const playIntro = !introPlayed.current;
    introPlayed.current = true;

    const mm = gsap.matchMedia(root);

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 900px)",
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
        gsap.set(".hero", { visibility: "visible" });
        if (!motion) return;

        intro(playIntro);
        heroScroll();
        headerAutoHide();
        reveals();
        marquee();
        aboutScrub();
        systems(desktop);
        rows();
      }
    );

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, [scope, ready, lang]);
}

function intro(play: boolean) {
  if (!play) return;
  const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.3 } });
  tl.from(".hero .chi", { yPercent: 115, stagger: 0.045 })
    .from(
      ".hero__portrait",
      { clipPath: "inset(100% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
      0.15
    )
    .from(".hero__portrait img", { scale: 1.35, duration: 2 }, 0.15)
    .from(".hero .wi", { yPercent: 110, stagger: 0.012, duration: 1.1 }, 0.55)
    .from("[data-hero-fade]", { y: 16, autoAlpha: 0, stagger: 0.07, duration: 1 }, 0.75)
    .from(".site-header", { yPercent: -100, autoAlpha: 0, duration: 1 }, 0.6);
}

function heroScroll() {
  const trigger = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
  gsap.to(".hero__line--a", { xPercent: -6, ease: "none", scrollTrigger: trigger });
  gsap.to(".hero__line--b", { xPercent: 5, ease: "none", scrollTrigger: trigger });
  gsap.to(".hero__portrait img", { yPercent: 12, ease: "none", scrollTrigger: trigger });
}

function headerAutoHide() {
  ScrollTrigger.create({
    start: "top -160",
    end: "max",
    onUpdate: (self) =>
      gsap.to(".site-header", {
        yPercent: self.direction === 1 ? -110 : 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      }),
    onLeaveBack: () => gsap.to(".site-header", { yPercent: 0, duration: 0.4, overwrite: "auto" }),
  });
}

function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal="words"]').forEach((el) => {
    gsap.from(el.querySelectorAll(".wi"), {
      yPercent: 110,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
    gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
    });
  });

  gsap.utils.toArray<HTMLElement>(".rule").forEach((el) => {
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.4,
      ease: "expo.inOut",
      scrollTrigger: { trigger: el, start: "top 92%" },
    });
  });
}

function marquee() {
  const loop = gsap.to(".marquee__track", { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const boost = Math.min(1 + Math.abs(self.getVelocity()) / 350, 6);
      gsap.to(loop, { timeScale: boost, duration: 0.2, overwrite: true });
      gsap.to(loop, { timeScale: 1, duration: 1.4, delay: 0.2, ease: "power2.out" });
    },
  });
}

function aboutScrub() {
  gsap.fromTo(
    ".about__text .wi",
    { opacity: 0.14 },
    {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: { trigger: ".about__text", start: "top 78%", end: "bottom 50%", scrub: true },
    }
  );
}

function drawDiagram(panel: Element, scrollTrigger: ScrollTrigger.Vars) {
  const strokes = panel.querySelectorAll<SVGGeometryElement>("[data-draw]");
  const labels = panel.querySelectorAll("[data-label], [data-dashed]");
  const tl = gsap.timeline({ scrollTrigger });
  strokes.forEach((el) => {
    const length = el.getTotalLength();
    gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
  });
  tl.to(strokes, { strokeDashoffset: 0, duration: 1.1, stagger: 0.06, ease: "power2.inOut" }).from(
    labels,
    { autoAlpha: 0, duration: 0.5, stagger: 0.03 },
    0.5
  );
}

function systems(desktop: boolean) {
  const track = document.querySelector<HTMLElement>(".systems__track");
  if (!track) return;
  const panels = gsap.utils.toArray<HTMLElement>(".system");

  if (!desktop) {
    panels.forEach((panel) => drawDiagram(panel, { trigger: panel, start: "top 75%" }));
    return;
  }

  const distance = () => track.scrollWidth - window.innerWidth;
  const slide = gsap.to(track, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      trigger: ".systems__pin",
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });

  gsap.fromTo(
    ".systems__progress span",
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".systems__pin",
        start: "top top",
        end: () => `+=${distance()}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );

  panels.forEach((panel) =>
    drawDiagram(panel, { trigger: panel, containerAnimation: slide, start: "left 70%" })
  );
}

function rows() {
  gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
    gsap.from(row.children, {
      y: 36,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.06,
      scrollTrigger: { trigger: row, start: "top 90%" },
    });
  });
}
