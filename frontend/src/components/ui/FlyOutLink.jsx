import { useState, useRef } from "react";

const FlyOutLink = ({ children, FlyOutContent, currentLanguage, setCurrentLanguage }) => {
    const [open, setOpen] = useState(false);
    const closeTimer = useRef(null);

    const show = () => {
        clearTimeout(closeTimer.current);
        setOpen(true);
    };

    // Pequeno atraso no fecho para o rato poder viajar até ao painel
    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setOpen(false), 200);
    };

    if (!FlyOutContent) return null;

    return (
        <div
            onMouseEnter={show}
            onMouseLeave={scheduleClose}
            className="relative h-fit w-fit"
        >
            <button
                type="button"
                className="font-sans font-light flex flex-row items-center text-ink dark:text-neutral-100 gap-x-2 hover:text-muted transition-colors duration-300"
            >
                {children}
            </button>

            {/* Painel sempre montado — animado por opacidade/translação (entra e sai suave) */}
            <div
                className={`absolute left-1/2 top-full pt-3 -translate-x-1/2 z-50 origin-top transition-[opacity,transform] duration-300 ease-out ${
                    open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                aria-hidden={!open}
            >
                <div className="bg-paper/95 dark:bg-neutral-800/95 backdrop-blur-sm text-ink dark:text-neutral-100 border border-line dark:border-neutral-700 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.25)]">
                    <FlyOutContent
                        currentLanguage={currentLanguage}
                        setCurrentLanguage={setCurrentLanguage}
                    />
                </div>
            </div>
        </div>
    );
};

export default FlyOutLink;
