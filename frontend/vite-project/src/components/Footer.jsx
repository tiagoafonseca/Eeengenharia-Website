import React from 'react'
import {Link} from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-black h-[400px] p-10">
            <div className="grid grid-cols-4 gap-x-[100px] text-white w-auto mx-auto p-10">
                <div>
                    <img src="/logo-footer.png"/>
                    <div className="pt-10 flex flex-col gap-y-[20px]">
                        <a href="">
                            <p className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left">
                                Políticas de Privacidade
                            </p>
                        </a>

                        <a href="">
                            <p className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left">
                                Políticas de Cookies
                            </p>
                        </a>

                        <a href="">
                            <p className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left">
                                Termos e Condições
                            </p>
                        </a>
                    </div>
                </div>

                <div>
                    <h1 className="text-[25px]">Portfólio</h1>
                    <div className="pt-5 flex flex-col gap-y-[20px]">
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/portfolio">Obras</Link>
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/contactos">Orçamentos</Link>
                    </div>
                </div>

                <div>
                    <h1 className="text-[25px]">Serviços</h1>
                    <div className="pt-5 flex flex-col gap-y-[20px]">
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/construcao">Construção</Link>
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/remodelacoes">Remodelações</Link>
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/projetos">Projetos & Licenciamentos</Link>
                    </div>
                </div>

                <div>
                    <h1 className="text-[25px]">Contactos</h1>
                    <div className="pt-5 flex flex-col gap-y-[20px]">
                        <div className="flex flex-row gap-x-[10px]">
                            <IoMailOutline className="text-[20px]"></IoMailOutline>
                            <p>geral@eeengenharia.pt</p>
                        </div>
                        <div className="flex flex-row gap-x-[10px]">
                            <IoCall className="text-[20px]"></IoCall>
                            <p>+351 913 928 625  |  917 982 411 </p>
                        </div>
                        <div className="flex flex-row gap-x-[10px]">
                            <a href="https://www.instagram.com/eeengenharia_pt/">
                                <FaInstagram className="text-[20px] hover:scale-110 transition-transform duration-200"></FaInstagram>
                            </a>
                            <a href="https://www.facebook.com/EEEngenharia/?ref=_xav_ig_profile_page_web#">
                                <FaFacebook className="text-[20px] hover:scale-110 transition-transform duration-200"></FaFacebook>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[2px]">
                <hr className="w-4/5 max-w-screen-lg mx-auto border-t border-gray-300 my-4" />
                <p className="text-center text-sm text-white">
                    © EENGENHARIA 2025 All rights reserved | Build by Tiago Afonseca
                </p>
            </div>
        </div>
    )
}
export default Footer
