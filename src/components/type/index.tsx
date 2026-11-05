import { Fragment } from "react";

// Splits text into masked words so GSAP can slide each one up into place.
// The DOM structure stays stable across re-renders (no keys tied to language),
// which lets the animation context revert and re-run cleanly on language change.
export function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <span className="wi">{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

export function Chars({ text }: { text: string }) {
  return (
    <span aria-hidden="true">
      {text.split("").map((char, i) => (
        <span className="ch" key={i}>
          <span className="chi">{char}</span>
        </span>
      ))}
    </span>
  );
}

interface SectionHeadProps {
  index: string;
  label: string;
  title: string;
  titleEm: string;
  tone?: "dark";
}

export function SectionHead({ index, label, title, titleEm, tone }: SectionHeadProps) {
  return (
    <header className={`shead${tone === "dark" ? " shead--dark" : ""}`}>
      <span className="rule" aria-hidden="true" />
      <p className="shead__label">
        <span className="shead__index">({index})</span> {label}
      </p>
      <h2 className="shead__title" data-reveal="words">
        <Words text={title} /> <em><Words text={titleEm} /></em>
      </h2>
    </header>
  );
}
