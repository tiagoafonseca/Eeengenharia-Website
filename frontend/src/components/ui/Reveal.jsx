import { useInView } from "../../hooks/useInView";

const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Envolve conteúdo e anima-o (fade + slide-up) quando entra no viewport.
 * Respeita a preferência "prefers-reduced-motion".
 *
 * @param {React.ElementType} [as="div"] - tag/componente a renderizar
 * @param {number}            [delay=0]  - atraso da transição em ms (para stagger)
 * @param {string}            [className]
 */
const Reveal = ({ as = "div", delay = 0, className = "", children, ...rest }) => {
    const Tag = as;
    const [ref, inView] = useInView({ threshold: 0.15 });

    if (prefersReducedMotion) {
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${className}`}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
