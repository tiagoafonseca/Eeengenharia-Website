import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const SLIDES = [
    { url: '/splide-img1.webp', alt: 'Obra Eeengenharia 1' },
    { url: '/splide-img2.webp', alt: 'Obra Eeengenharia 2' },
    { url: '/splide-img3.webp', alt: 'Obra Eeengenharia 3' },
];

const AUTOPLAY_MS = 3000;

export default function Carousel() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prevSlide = () =>
        setCurrentIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));

    const nextSlide = () =>
        setCurrentIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isPaused || reduce) return;

        const id = setTimeout(
            () => setCurrentIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1)),
            AUTOPLAY_MS
        );
        return () => clearTimeout(id);
    }, [currentIndex, isPaused]);

    return (
        <section
            className="relative group h-[88vh] min-h-[560px] w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides com crossfade + leve zoom (Ken Burns) no slide ativo */}
            {SLIDES.map((slide, i) => (
                <div
                    key={i}
                    style={{ backgroundImage: `url(${slide.url})` }}
                    className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
                        i === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    role="img"
                    aria-label={slide.alt}
                    aria-hidden={i !== currentIndex}
                />
            ))}

            {/* Gradiente para legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />

            {/* Conteúdo editorial */}
            <div className="absolute inset-0 flex items-end">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-28">
                    <p className="uppercase text-xs tracking-[0.28em] text-white/80 mb-6">
                        {t('heroEyebrow')}
                    </p>
                    <h1 className="font-serif font-medium text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] max-w-4xl">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-white/85 text-lg md:text-xl font-light mt-7 max-w-xl">
                        {t('heroSubtitle')}
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-3 bg-paper text-ink uppercase text-sm tracking-[0.2em] px-9 py-4 hover:bg-white/85 transition-colors duration-300"
                        >
                            {t('viewProjects')}
                        </Link>
                        <Link
                            to="/contactos"
                            className="inline-flex items-center justify-center gap-3 border border-white/70 text-white uppercase text-sm tracking-[0.2em] px-9 py-4 hover:bg-white hover:text-ink transition-colors duration-300"
                        >
                            {t('requestBudget')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Setas (subtis, só no hover em desktop) */}
            <button
                onClick={prevSlide}
                aria-label="Slide anterior"
                className="flex md:opacity-0 md:group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 left-4 md:left-8 items-center justify-center text-white/80 hover:text-white text-2xl transition-opacity duration-300"
            >
                <BsChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Próximo slide"
                className="flex md:opacity-0 md:group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 right-4 md:right-8 items-center justify-center text-white/80 hover:text-white text-2xl transition-opacity duration-300"
            >
                <BsChevronRight />
            </button>

            {/* Indicadores em linha fina */}
            <div
                className="absolute bottom-10 right-6 md:right-12 flex gap-3"
                role="tablist"
                aria-label="Slides"
            >
                {SLIDES.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        role="tab"
                        aria-selected={slideIndex === currentIndex}
                        aria-label={`Slide ${slideIndex + 1}`}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`h-px w-10 transition-all duration-300 ${
                            slideIndex === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
