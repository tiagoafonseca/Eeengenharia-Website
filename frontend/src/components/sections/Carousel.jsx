import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const SLIDES = [
    { url: '/splide-img1.webp', alt: 'Obra Eeengenharia 1' },
    { url: '/splide-img2.webp', alt: 'Obra Eeengenharia 2' },
    { url: '/splide-img3.webp', alt: 'Obra Eeengenharia 3' },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () =>
        setCurrentIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));

    const nextSlide = () =>
        setCurrentIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

    return (
        <div className="h-[780px] w-full pt-25 relative group">
            <div
                style={{ backgroundImage: `url(${SLIDES[currentIndex].url})` }}
                className="w-full h-full bg-center bg-cover duration-500"
                role="img"
                aria-label={SLIDES[currentIndex].alt}
            />

            <button
                onClick={prevSlide}
                aria-label="Slide anterior"
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-15 items-center justify-center rounded-full p-2 bg-black/20 text-white hover:bg-black/40 transition-colors"
            >
                <BsChevronCompactLeft size={30} />
            </button>

            <button
                onClick={nextSlide}
                aria-label="Próximo slide"
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-15 items-center justify-center rounded-full p-2 bg-black/20 text-white hover:bg-black/40 transition-colors"
            >
                <BsChevronCompactRight size={30} />
            </button>

            <div className="flex justify-center py-2" role="tablist" aria-label="Slides">
                {SLIDES.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        role="tab"
                        aria-selected={slideIndex === currentIndex}
                        aria-label={`Slide ${slideIndex + 1}`}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`text-3xl cursor-pointer ${slideIndex === currentIndex ? 'text-gray-400' : 'text-black'}`}
                    >
                        <RxDotFilled />
                    </button>
                ))}
            </div>
        </div>
    );
}
