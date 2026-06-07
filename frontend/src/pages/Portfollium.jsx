import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";
import Lightbox from "../components/sections/Lightbox.jsx";
import { PROJECTS, PROJECT_CATEGORIES, CATEGORY_LABELS } from "../data/projects.js";

const Portfollium = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Projetos filtrados pela categoria ativa, já com o rótulo traduzido.
    const filtered = useMemo(() => {
        const list =
            activeCategory === "all"
                ? PROJECTS
                : PROJECTS.filter((p) => p.category === activeCategory);
        return list.map((p) => ({ ...p, label: t(CATEGORY_LABELS[p.category]) }));
    }, [activeCategory, t]);

    const changeCategory = (id) => {
        setActiveCategory(id);
        setLightboxIndex(null); // fecha o lightbox se a filtragem mudar
    };

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-24 md:mt-30 mb-10 px-6 md:p-10">
                <h1 className="font-bold text-3xl md:text-[40px] mb-10 text-center">{t("portfolioTitle")}</h1>

                <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-x-15 text-lg md:text-[25px] mb-10">
                    {PROJECT_CATEGORIES.map(({ id, labelKey }) => (
                        <div key={id} className="group inline-block relative">
                            <button onClick={() => changeCategory(id)}>{t(labelKey)}</button>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                                    activeCategory === id ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <p className="text-lg text-gray-500 py-20">{t("noProjects")}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
                        {filtered.map((project, i) => (
                            <Reveal key={project.id} delay={(i % 3) * 100}>
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(i)}
                                    aria-label={`${project.label} — ${t("portfolio")}`}
                                    className="portfolio-item group block w-full overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.label}
                                        width="400"
                                        height="300"
                                        loading="lazy"
                                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                                    />
                                </button>
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>

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
