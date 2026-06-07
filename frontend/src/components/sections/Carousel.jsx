import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const SLIDES = [
    { url: '/splide-img1.webp', alt: 'Obra Eeengenharia 1' },
    { url: '/splide-img2.webp', alt: 'Obra Eeengenharia 2' },
    { url: '/splide-img3.webp', alt: 'Obra Eeengenharia 3' },
];

const AUTOPLAY_MS = 5000;

export default function Carousel() {
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
        <div className="pt-0 md:pt-25 w-full">
            <div
                className="relative group h-[55vh] min-h-[320px] md:h-[600px] lg:h-[780px] w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {SLIDES.map((slide, i) => (
                    <div
                        key={i}
                        style={{ backgroundImage: `url(${slide.url})` }}
                        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ease-in-out ${
                            i === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        role="img"
                        aria-label={slide.alt}
                        aria-hidden={i !== currentIndex}
                    />
                ))}

                <button
                    onClick={prevSlide}
                    aria-label="Slide anterior"
                    className="flex md:hidden md:group-hover:flex absolute top-1/2 -translate-y-1/2 left-3 md:left-15 items-center justify-center rounded-full p-2 bg-black/20 text-white hover:bg-black/40 transition-colors"
                >
                    <BsChevronCompactLeft size={30} />
                </button>

                <button
                    onClick={nextSlide}
                    aria-label="Próximo slide"
                    className="flex md:hidden md:group-hover:flex absolute top-1/2 -translate-y-1/2 right-3 md:right-15 items-center justify-center rounded-full p-2 bg-black/20 text-white hover:bg-black/40 transition-colors"
                >
                    <BsChevronCompactRight size={30} />
                </button>
            </div>

            <div className="flex justify-center py-2" role="tablist" aria-label="Slides">
                {SLIDES.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        role="tab"
                        aria-selected={slideIndex === currentIndex}
                        aria-label={`Slide ${slideIndex + 1}`}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`text-3xl cursor-pointer ${slideIndex === currentIndex ? 'text-gray-400' : 'text-black dark:text-neutral-100'}`}
                    >
                        <RxDotFilled />
                    </button>
                ))}
            </div>
        </div>
    );
}
