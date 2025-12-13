import React, {useState} from 'react'
import {Link} from "react-router-dom";

const Services = () => {
    const Botoes = ["Moradias", "Remodelações", "Projetos 3D"];
    const [active, setActive] = useState("Moradias");

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-30 mb-10 p-10">
                <h1 className="font-bold text-[40px] mb-10">SERVIÇOS</h1>

                <div className="flex flex-row justify-center items-center gap-x-15 text-[25px] mb-10">
                    {Botoes.map((label) => (
                        <div key={label} className="group inline-block relative">
                            <a href="#projetos" onClick={() => setActive(label)}>{label}</a>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                                    active === label ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center my-15 w-[85%]">
                    <div className="flex-1 h-[2px] border-t-2 border-black"></div>
                    <Link to="/contactos"
                          className="mx-4 text-xl font-bold transition-transform duration-200 hover:scale-105 origin-center">
                        PEDIR ORÇAMENTO
                    </Link>
                    <div className="flex-1 h-[2px] border-t-2 border-black"></div>
                </div>
                <section className="w-[85%]" id="moradias">
                    <div className="flex flex-row justify-center items-center gap-x-15 mt-15 mb-10">
                        <div className="flex flex-col justify-start gap-y-5 w-[60%]">
                            <h1 className="font-bold text-[25px]">Contrução de Moradias</h1>
                            <p className="text-[20px]">Trabalhamos com os melhores profissionais na construção de
                                moradias.
                                Acompanhamos e ajudamos os nossos clientes durante todo o processo de uma
                                obra. Fazemos o caminho ao lado do cliente e distinguimo-nos no mercado ao
                                ficarmos encarregues de todas as etapas da construção: tratamos das
                                burocracias relacionadas com licenciamentos e questões legais, desenhamos
                                o projeto, de forma personalizada, executamos a obra, recorrendo aos
                                melhores materiais e entregamos a casa pronta a habitar de acordo
                                com os prazos estipulados.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8">
                            <img src="/orcamento-img2.png"/>
                            <Link
                                to="/portfolio"
                                className="bg-white border-2 border-black text-black text-center p-2 w-[50%]
                        hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                            >
                                Ver Projetos
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="flex items-center justify-center my-15 w-[85%]">
                    <div className="flex-1 h-[2px] border-t-2 border-black"></div>
                    <Link to="/contactos"
                          className="mx-4 text-xl font-bold transition-transform duration-200 hover:scale-105 origin-center">
                        PEDIR ORÇAMENTO
                    </Link>
                    <div className="flex-1 h-[2px] border-t-2 border-black"></div>
                </div>

                <section className="w-[85%]" id="remodelacoes">
                    <div className="flex flex-row justify-center items-center gap-x-15 mt-15 mb-10">
                        <div className="flex flex-col justify-start gap-y-5 w-[60%]">
                            <h1 className="font-bold text-[25px]">Remodelações de Interiores</h1>
                            <p className="text-[20px]">Trabalhamos com os melhores profissionais na construção de
                                moradias.
                                Acompanhamos e ajudamos os nossos clientes durante todo o processo de uma
                                obra. Fazemos o caminho ao lado do cliente e distinguimo-nos no mercado ao
                                ficarmos encarregues de todas as etapas da construção: tratamos das
                                burocracias relacionadas com licenciamentos e questões legais, desenhamos
                                o projeto, de forma personalizada, executamos a obra, recorrendo aos
                                melhores materiais e entregamos a casa pronta a habitar de acordo
                                com os prazos estipulados.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8">
                            <img src="/orcamento-img2.png"/>
                            <Link
                                to="/portfolio"
                                className="bg-white border-2 border-black text-black text-center p-2 w-[50%]
                            hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                            >
                                Ver Projetos
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="flex items-center justify-center my-15 w-[85%]">
                    <div className="flex-1 h-[2px] border-t-2 border-black"></div>
                    <Link to="/contactos"
                          className="mx-4 text-xl font-bold transition-transform duration-200 hover:scale-105 origin-center">
                        PEDIR ORÇAMENTO
                    </Link>
                    <div className="flex-1 h-[2px] border-t-2 border-black"></div>
                </div>

                <section className="w-[85%]" id="projetos">
                    <div className="flex flex-row justify-center items-center gap-x-15 mt-15 mb-10 ">
                        <div className="flex flex-col justify-start gap-y-5 w-[60%]">
                            <h1 className="font-bold text-[25px]">Projetos & Licenciamentos</h1>
                            <p className="text-[20px]">Trabalhamos com os melhores profissionais na construção de
                                moradias.
                                Acompanhamos e ajudamos os nossos clientes durante todo o processo de uma
                                obra. Fazemos o caminho ao lado do cliente e distinguimo-nos no mercado ao
                                ficarmos encarregues de todas as etapas da construção: tratamos das
                                burocracias relacionadas com licenciamentos e questões legais, desenhamos
                                o projeto, de forma personalizada, executamos a obra, recorrendo aos
                                melhores materiais e entregamos a casa pronta a habitar de acordo
                                com os prazos estipulados.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8">
                            <img src="/orcamento-img2.png"/>
                            <Link
                                to="/portfolio"
                                className="bg-white border-2 border-black text-black text-center p-2 w-[50%]
                            hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                            >
                                Ver Projetos
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Services
