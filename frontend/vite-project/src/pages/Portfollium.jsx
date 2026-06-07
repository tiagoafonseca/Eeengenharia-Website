import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ROW_COUNT = 5;

const Portfollium = () => {
    const { t } = useTranslation();
    const botoes = [t("portfolio"), "Filtrar", "Reviews", t("requestBudget")];
    const [active, setActive] = useState(botoes[0]);

    const rowsRef = useRef([]);
    const [visibleStates, setVisibleStates] = useState(Array(ROW_COUNT).fill(false));

    useEffect(() => {
        const observers = rowsRef.current.map((node, index) => {
            if (!node) return null;
            const observer = new IntersectionObserver(([entry]) => {
                setVisibleStates((prev) => {
                    const updated = [...prev];
                    updated[index] = entry.isIntersecting;
                    return updated;
                });
            });
            observer.observe(node);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-30 mb-10 p-10">
                <h1 className="font-bold text-[40px] mb-10">{t("portfolioTitle")}</h1>

                <div className="flex flex-row justify-center items-center gap-x-15 text-[25px] mb-10">
                    {botoes.map((label) => (
                        <div key={label} className="group inline-block relative">
                            <button onClick={() => setActive(label)}>{label}</button>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                                    active === label ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-y-5">
                    {Array.from({length: ROW_COUNT}).map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => { rowsRef.current[i] = el; }}
                            className={`flex flex-row justify-center gap-x-5 transition-opacity ease-in duration-700 ${
                                visibleStates[i] ? "opacity-100" : "opacity-0"
                            }`}
                            id="row"
                        >
                            <img src="/img1.webp" alt="" width="400" height="300" loading="lazy" />
                            <img src="/img1.webp" alt="" width="400" height="300" loading="lazy" />
                            <img src="/img1.webp" alt="" width="400" height="300" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
export default Portfollium
