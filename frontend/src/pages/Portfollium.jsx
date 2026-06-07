import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";
import Lightbox from "../components/sections/Lightbox.jsx";
import { PROJECTS, PROJECT_CATEGORIES, CATEGORY_LABELS } from "../data/projects.js";

const Portfollium = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filtered = useMemo(() => {
        const list =
            activeCategory === "all"
                ? PROJECTS
                : PROJECTS.filter((p) => p.category === activeCategory);
        return list.map((p) => ({ ...p, label: t(CATEGORY_LABELS[p.category]) }));
    }, [activeCategory, t]);

    const changeCategory = (id) => {
        setActiveCategory(id);
        setLightboxIndex(null);
    };

    return (
        <main>
            {/* Cabeçalho */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-12 md:pb-16 text-center">
                <p className="eyebrow mb-6">{t("ebProjects")}</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">{t("portfolio")}</h1>
            </section>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 pb-12 md:pb-16">
                {PROJECT_CATEGORIES.map(({ id, labelKey }) => (
                    <button
                        key={id}
                        onClick={() => changeCategory(id)}
                        className={`uppercase text-sm tracking-[0.18em] pb-1 border-b transition-colors duration-300 ${
                            activeCategory === id
                                ? "border-ink text-ink"
                                : "border-transparent text-muted hover:text-ink"
                        }`}
                    >
                        {t(labelKey)}
                    </button>
                ))}
            </div>

            {/* Galeria */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
                {filtered.length === 0 ? (
                    <p className="text-center text-muted py-20">{t("noProjects")}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {filtered.map((project, i) => (
                            <Reveal key={project.id} delay={(i % 3) * 100}>
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(i)}
                                    aria-label={`${project.label} — ${t("portfolio")}`}
                                    className="group relative block w-full overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.label}
                                        width="400"
                                        height="300"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                                    <span className="absolute left-5 bottom-5 text-paper text-sm uppercase tracking-[0.18em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        {project.label}
                                    </span>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                )}
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    items={filtered}
                    index={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                    onNavigate={setLightboxIndex}
                />
            )}
        </main>
    );
};

export default Portfollium;
