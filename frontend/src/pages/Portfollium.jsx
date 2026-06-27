import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";
import Lightbox from "../components/sections/Lightbox.jsx";
import Modal from "../components/sections/Modal.jsx";
import { PROJECTS, PROJECT_CATEGORIES, CATEGORY_LABELS } from "../data/projects.js";

const Portfollium = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeProject, setActiveProject] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const filtered = useMemo(() => {
        const list =
            activeCategory === "all"
                ? PROJECTS
                : PROJECTS.filter((p) => p.category === activeCategory);
        return list.map((p) => ({ ...p, label: t(CATEGORY_LABELS[p.category]) }));
    }, [activeCategory, t]);

    // Itens da galeria da obra aberta (uma entrada por foto).
    const lightboxItems = useMemo(() => {
        if (!activeProject) return [];
        return activeProject.photos.map((image) => ({
            image,
            label: `${activeProject.name} · ${t(CATEGORY_LABELS[activeProject.category])}`,
        }));
    }, [activeProject, t]);

    const openProject = (project) => {
        setActiveProject(project);
        setLightboxIndex(0);
    };

    const closeLightbox = () => {
        setActiveProject(null);
        setLightboxIndex(null);
    };

    const changeCategory = (id) => {
        setActiveCategory(id);
        closeLightbox();
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
                                    onClick={() => openProject(project)}
                                    aria-label={`${project.name} — ${project.label} (${project.photos.length} ${t("photos")})`}
                                    className="group relative block w-full overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={project.cover}
                                        alt={`${project.name} — ${project.label}`}
                                        width="400"
                                        height="300"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="absolute right-4 top-4 text-paper text-xs tracking-[0.12em] bg-ink/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                        {project.photos.length}
                                    </span>
                                    <span className="absolute left-5 bottom-5 right-5 flex flex-col items-start gap-1 transition-transform duration-500 group-hover:-translate-y-0.5">
                                        <span className="text-paper text-lg md:text-xl">{project.name}</span>
                                        <span className="text-paper/80 text-xs uppercase tracking-[0.18em]">{project.label}</span>
                                    </span>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                )}
            </section>

            {/* CTA */}
            <section className="bg-surface">
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
                    <Reveal>
                        <p className="eyebrow mb-6">{t("ebContact")}</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10">{t("ctaTitle")}</h2>
                        <button onClick={() => { setShowModal(true); window.gtag?.("event", "cta_click", { event_category: "engagement", event_label: "portfolio_cta" }); }} className="btn-primary">
                            {t("requestBudget")}
                        </button>
                    </Reveal>
                </div>
            </section>

            {lightboxIndex !== null && activeProject && (
                <Lightbox
                    items={lightboxItems}
                    index={lightboxIndex}
                    onClose={closeLightbox}
                    onNavigate={setLightboxIndex}
                />
            )}
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
};

export default Portfollium;
