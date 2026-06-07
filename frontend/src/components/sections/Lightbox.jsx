import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

/**
 * Lightbox acessível para galerias de imagens.
 *
 * @param {Array<{image: string, label?: string}>} items
 * @param {number}   index    - índice atual em `items`
 * @param {Function} onClose
 * @param {Function} onNavigate - recebe o novo índice
 */
const Lightbox = ({ items, index, onClose, onNavigate }) => {
    const { t } = useTranslation();
    const total = items.length;

    const goPrev = useCallback(
        () => onNavigate((index - 1 + total) % total),
        [index, total, onNavigate]
    );
    const goNext = useCallback(
        () => onNavigate((index + 1) % total),
        [index, total, onNavigate]
    );

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowLeft") goPrev();
            else if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose, goPrev, goNext]);

    const item = items[index];
    if (!item) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={item.label}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                aria-label={t("close")}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            >
                <IoClose />
            </button>

            {total > 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    aria-label={t("previous")}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-gray-300 transition-colors"
                >
                    <BsChevronLeft />
                </button>
            )}

            <figure
                className="flex flex-col items-center max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={item.image}
                    alt={item.label || ""}
                    className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                />
                {item.label && (
                    <figcaption className="text-white text-lg md:text-xl mt-4 text-center">
                        {item.label}
                        {total > 1 && (
                            <span className="text-gray-400 text-base ml-3">
                                {index + 1} / {total}
                            </span>
                        )}
                    </figcaption>
                )}
            </figure>

            {total > 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    aria-label={t("next")}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-gray-300 transition-colors"
                >
                    <BsChevronRight />
                </button>
            )}
        </div>
    );
};

export default Lightbox;
