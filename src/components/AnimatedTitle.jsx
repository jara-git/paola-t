import React from "react";
import "../styles/_animations.scss";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function AnimatedTitle({ text, as = "h1", className = "" }) {
    const [ref, visible] = useFadeInOnScroll({ threshold: 0.1 });

    const words = text.split(" ");
    const Component = as;

    let letterIndex = 0;

    return (
        <Component
            ref={ref}
            className={`animated-title ${className} ${visible ? "is-visible" : ""}`}
        >
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    <span className="word">
                        {Array.from(word).map((letter, i) => {
                            const delay = visible ? `${letterIndex * 60}ms` : "0ms";
                            letterIndex++;

                            return (
                                <span
                                    key={i}
                                    className="letter"
                                    style={{ transitionDelay: delay }}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                    </span>

                    {wordIndex < words.length - 1 && (
                        <span className="space">&nbsp;</span>
                    )}
                </React.Fragment>
            ))}
        </Component>
    );
}