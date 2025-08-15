// src/components/AnimatedTitle.jsx
import React from "react";
import "../styles/_animations.scss";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function AnimatedTitle({ text, as = "h1", className = "" }) {
    const [ref, visible] = useFadeInOnScroll({ threshold: 0.1 });
    const letters = Array.from(text);

    const Component = as; // define la variable para JSX

    return (
        <Component ref={ref} className={`animated-title ${className} ${visible ? "is-visible" : ""}`}>
            {letters.map((letter, i) => (
                <span
                    key={i}
                    className="letter"
                    style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </Component>
    );
}