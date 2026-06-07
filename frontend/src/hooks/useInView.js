import { useEffect, useRef, useState } from "react";

/**
 * Observa um elemento e indica quando entra no viewport.
 *
 * @param {Object}  options
 * @param {number}  [options.threshold=0.15] - fração visível para disparar
 * @param {string}  [options.rootMargin="0px"] - margem do root do observer
 * @param {boolean} [options.once=true] - se true, deixa de observar após a 1ª aparição
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
export function useInView({ threshold = 0.15, rootMargin = "0px", once = true } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, inView];
}
