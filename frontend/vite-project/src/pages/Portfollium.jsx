import {useRef, useEffect, useState} from "react";
import Modal from "../components/Modal.jsx";

const Portfollium = () => {
    const Botoes = ["Todos", "Filtrar", "Reviews", "Orçamento"];
    const [active, setActive] = useState("Todos");

    const refs = Array.from({length: 5}, () => useRef());
    const [visibleStates, setVisibleStates] = useState(Array(5).fill(false));

    useEffect(() => {
        const observers = refs.map((ref, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleStates((prev) => {
                        const updated = [...prev];
                        updated[index] = entry.isIntersecting;
                        return updated;
                    });
                } else {
                    setVisibleStates((prev) => {
                        const updated = [...prev];
                        updated[index] = false;
                        return updated;
                    });
                }
            });

            if (ref.current) observer.observe(ref.current);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [refs]);

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-30 mb-10 p-10">
                <h1 className="font-bold text-[40px] mb-10">PORTFÓLIO</h1>

                <div className="flex flex-row justify-center items-center gap-x-15 text-[25px] mb-10">
                    {Botoes.map((label) => (
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
                    {refs.map((ref, i) => (
                        <div
                            key={i}
                            ref={ref}
                            className={`flex flex-row justify-center gap-x-5 transition-opacity ease-in duration-700 ${
                                visibleStates[i] ? "opacity-100" : "opacity-0"
                            }`}
                            id="row"
                        >
                            <img src="/img1.png"/>
                            <img src="/img1.png"/>
                            <img src="/img1.png"/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
export default Portfollium
