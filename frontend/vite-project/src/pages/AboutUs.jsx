import React from 'react'
import {GoPerson} from "react-icons/go";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlinePhoneAndroid} from "react-icons/md";
import {IoConstructOutline} from "react-icons/io5"
import {MdOutlineMessage} from "react-icons/md";
import {LuSend} from "react-icons/lu";
import {BsFillSendFill} from "react-icons/bs";

const AboutUs = () => {
    return (
        <main>
            <div className="text-black">
                <div className="flex flex-col justify-center items-center text-black pb-20 mt-30 mb-10 p-10">
                    <h1 className="font-bold text-[40px]">A NOSSA HISTÓRIA...</h1>
                    <div className="flex flex-row justify-evenly gap-x-20 pt-20">
                        <div className="text-[20px] font-normal pt-10">
                            <p className="p-2">
                                A Eengenharia é uma empresa especializada no setor da construção civil,
                                atuando em obras públicas e privadas, nas áreas de construção residencial,
                                comercial e industrial.
                            </p>

                            <p className="p-2">
                                Fundada por um profissional apaixonado pela construção, esta empresa nasceu com o
                                objetivo
                                de oferecer soluções inovadoras e personalizadas, que respondem de forma eficaz às
                                necessidades e metas de cada cliente.
                            </p>

                            <p className="p-2">
                                Atualmente, a Eengenharia destaca-se pela capacidade de transformar ideias em realidade,
                                contando com várias parcerias estratégicas e com o know-how necessário para entregar
                                resultados únicos e totalmente adaptados a cada projeto.
                            </p>

                            <p className="font-bold p-2">Os nossos valores:</p>
                            <ul className="list-disc list-inside pl-5">
                                <li>Exclusividade</li>
                                <li>Transparência</li>
                                <li>Inovação</li>
                                <li>Qualidade</li>
                            </ul>

                            <p className="p-2">
                                Dispomos de uma vasta equipa de profissionais qualificados, pronta para orientar,
                                esclarecer
                                e acompanhar cada cliente em todas as fases do processo.
                            </p>
                        </div>

                        <div>
                            <img className="h-[600px] w-[1000px]" src="/aboutUs-img1.png" alt=""></img>
                        </div>
                    </div>
                </div>


                <div className="bg-black text-white flex flex-col justify-center items-center p-10 w-auto">
                    <div className="">
                        <h1 className="font-bold text-[40px]">A NOSSA EQUIPA</h1>
                    </div>

                    <div className="flex flex-row gap-x-50 w-auto pt-20">
                        <div className="flex flex-col justify-center items-center">
                            <img className="pb-5" src="/profile-team.png" alt=""/>
                            <h3 className="text-[25px] font-bold">David Matias</h3>
                            <p>Engenheiro de Obra</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="pb-5" src="/profile-team.png" alt=""/>
                            <h3 className="text-[25px] font-bold">David Matias</h3>
                            <p>Engenheiro de Obra</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="pb-5" src="/profile-team.png" alt=""/>
                            <h3 className="text-[25px] font-bold">David Matias</h3>
                            <p>Engenheiro de Obra</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="pb-5" src="/profile-team.png" alt=""/>
                            <h3 className="text-[25px] font-bold">David Matias</h3>
                            <p>Engenheiro de Obra</p>
                        </div>
                    </div>

                    <div className="m-25 px-10 text-[20px]">
                        <p className="pb-5">
                            Na Eengenharia, contamos com uma equipa multidisciplinar altamente qualificada,
                            especializada
                            em todas as áreas da construção civil, incluindo arquitetura, engenharia civil e gestão de
                            projetos.
                        </p>
                        <p className="pb-2">
                            Trabalhamos em estreita colaboração com diversos parceiros e fornecedores para garantir o
                            fornecimento de serviços e materiais essenciais à execução de cada obra, como construção
                            civil,
                            eletricidade, canalização, serralharia, carpintaria, entre outros.
                        </p>
                    </div>
                </div>

                <div className="bg-white pt-20 text-black mb-25">
                    <div className="flex justify-center mb-10">
                        <h1 className="font-bold text-[40px]">Contacte-nos</h1>
                    </div>

                    <div className="flex flex-row justify-center gap-x-15 mb-10">
                        <div className="flex flex-col justify-center items-center">
                            <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <GoPerson></GoPerson>
                            </span>
                                <input
                                    type="text"
                                    className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2"
                                    placeholder="Nome">
                                </input>
                            </div>

                            <div className="relative w-full mt-10">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <HiOutlineMail></HiOutlineMail>
                            </span>
                                <input
                                    type="text"
                                    className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2"
                                    placeholder="Email">
                                </input>
                            </div>

                            <div className="relative w-full mt-10">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdOutlinePhoneAndroid></MdOutlinePhoneAndroid>
                            </span>
                                <input
                                    type="text"
                                    className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2"
                                    placeholder="Telemóvel">
                                </input>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="relative w-full">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IoConstructOutline></IoConstructOutline>
                                </span>
                                <select
                                    id="options"
                                    name="options"
                                    className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 w-full"
                                >
                                    <option value="">Tipo de Obra...</option>
                                    <option value="opcao1">Moradia</option>
                                    <option value="opcao2">Remodelações</option>
                                    <option value="opcao3">Projetos & Licenciamentos</option>
                                </select>
                            </div>

                            <div className="relative w-full mt-10">
                                <span className="absolute top-[17px] left-0 pl-3 pointer-events-none">
                                    <MdOutlineMessage></MdOutlineMessage>
                                </span>
                                <textarea
                                    type="text"
                                    className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 h-[150px] w-full"
                                    placeholder="Descrição">
                                </textarea>
                            </div>
                        </div>

                        <div className="text-[40px] flex flex-col justify-end">
                            <button className="hover:bg-gray-100 p-3 rounded-full">
                                <BsFillSendFill></BsFillSendFill>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default AboutUs;
