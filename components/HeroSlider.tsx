"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";

const slides = [
  { src: "/images/slide-1.jpg", lines: ["Established for over", "20 years in Bournemouth"] },
  { src: "/images/slide-2.jpg", lines: ["Gentle and effective", "treatment for people", "of all ages"] },
  {
    src: "/images/slide-3.jpg",
    lines: ["The maintenance of good", "mechanical function is", "essential to good health"],
  },
];

const INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(1), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Welcome"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero__slide${i === index ? " is-active" : ""}`}
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
          aria-hidden={i !== index}
        >
          <Image src={slide.src} alt="" fill sizes="100vw" preload={i === 0} />
          <p className="hero__caption">
            {slide.lines.map((line, n) => (
              <span key={line} style={{ transitionDelay: `${300 + n * 200}ms` }}>
                {line}
              </span>
            ))}
          </p>
        </div>
      ))}

      <div className="hero__actions">
        <a href={site.phoneHref} className="button button--solid">
          <PhoneIcon size={16} /> Call {site.phone}
        </a>
        <Link href="/contact/" className="button button--ghost">
          Find the clinic
        </Link>
      </div>

      <button type="button" className="hero__arrow hero__arrow--prev" onClick={() => go(-1)}>
        <span className="sr-only">Previous slide</span>
      </button>
      <button type="button" className="hero__arrow hero__arrow--next" onClick={() => go(1)}>
        <span className="sr-only">Next slide</span>
      </button>

      <div className="hero__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
