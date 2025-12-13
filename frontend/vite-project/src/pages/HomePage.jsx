import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {GrStatusGood} from "react-icons/gr";
import {LuCalendarCheck} from "react-icons/lu";
import {GrUserWorker} from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import Modal from "../components/Modal.jsx";
import Carousel from "../components/Carousel.jsx";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <main>
            <div>
                <Carousel></Carousel>
            </div>

            <div className="flex flex-row items-center justify-center px-25 py-20">
                <div className="p-10 m-15">
                    <h1 className="font-bold text-[30px] pb-5">Quem somos?</h1>
                    <p className="text-[25px]">Somos uma empresa familiar de construção civil, focada na tecnologia
                        LSF.</p>

                    <div className="group inline-block relative cursor-pointer mt-15">
                        <Link to="/sobrenos"
                              className="font-semibold text-black text-[25px] transition-colors duration-300 group-hover:text-black">
                            Saber mais...
                        </Link>
                        <span
                            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"
                        />
                    </div>
                </div>

                <div>
                    <img src="/quem-somos.png" alt="Quem somos"/>
                </div>
            </div>

            <div className="relative w-full h-[500px] bg-black flex items-center justify-center">
                <div className="grid grid-cols-3 gap-x-[200px] text-white w-full max-w-6xl mx-auto">
                    {/* Icons Row */}
                    <div className="flex justify-center pb-4">
                        <Link className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white
                            hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black
                            transition-all duration-300 ease-linear" to="/portfolio"
                        >
                            <GrUserWorker className="text-[80px]"/>
                        </Link>
                    </div>

                    <div className="flex justify-center pb-4">
                        <Link className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white
                            hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black
                            transition-all duration-300 ease-linear" to="/reviews"
                        >
                            <GrStatusGood className="text-[80px]"/>
                        </Link>
                    </div>

                    <div className="flex justify-center pb-4">
                        <Link className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white
                            hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black
                            transition-all duration-300 ease-linear" to="/portfolio"
                        >
                            <LuCalendarCheck className="text-[80px]"/>
                        </Link>
                    </div>

                    {/* Titles Row */}
                    <div className="text-center font-bold text-[30px] pt-2">Experiência</div>
                    <div className="text-center font-bold text-[30px] pt-2">Qualidade</div>
                    <div className="text-center font-bold text-[30px] pt-2">Compromisso</div>

                    {/* Links Row */}
                    <div className="text-center text-[20px] pt-5">
                        <a href="/portfolio">
                            Disponibilizamos o nosso Quadro Técnico, que estuda as soluções técnicas mais favoráveis e
                            adequadas ao âmbito das
                        </a>
                    </div>
                    <div className="text-center text-[20px] pt-5">
                        <a href="/">
                            (Hiperligação para Reviews).
                            Trabalhamos continuamente com empenho e dedicação para garantir aos nossos.
                        </a>
                    </div>
                    <div className="text-center text-[20px] pt-5">
                        <a href="/portfolio">
                            Prazos de entrega cumpridos. Conscientes da importância de cada investimento, fazemos
                            questão
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="mt-25 mb-25 flex flex-col items-center justify-center">
                    <div className="grid grid-cols-3 gap-x-[200px] text-black w-full mx-auto mb-4">
                        {/* Icons Row */}
                        <div className="flex justify-center">
                            <img src="/orcamento-img1.png"/>
                        </div>
                        <div className="flex justify-center">
                            <img src="/orcamento-img2.png"/>
                        </div>
                        <div className="flex justify-center">
                            <img src="/orcamento-img3.png"/>
                        </div>

                        {/* Titles Row */}
                        <div className="text-center font-bold text-[30px] pt-5">Construção de Moradias</div>
                        <div className="text-center font-bold text-[30px] pt-5">Remodelações</div>
                        <div className="text-center font-bold text-[30px] pt-5">Elaboração de Projetos</div>

                        {/* Text Row */}
                        <p className="text-center text-[20px] pt-5">Foco na construção em LSF</p>
                        <p className="text-center text-[20px] pt-5">Remodelações à medida</p>
                        <p className="text-center text-[20px] pt-5">Projetos à medida</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <button onClick={() => setShowModal(true)}
                                className="bg-black mt-10 px-3 py-4 text-white text-[20px] hover:bg-gray-400 transform-all duration-300 easy-linear"
                        >
                            Pedir Orçamento
                        </button>
                    </div>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
        </main>
    )
}

export default HomePage;
