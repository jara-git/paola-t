// src/hooks/useFadeInOnScroll.js
import { useEffect, useRef, useState } from "react";

export default function useFadeInOnScroll({ threshold = 0.12, rootMargin = "0px" } = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            // Activar por defecto si no hay IntersectionObserver (SSR o navegador antiguo)
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        return () => {
            if (observer) observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return [ref, visible];
}

