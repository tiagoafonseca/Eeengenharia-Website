import React from 'react'
import {GoPerson} from "react-icons/go";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlineMessage, MdOutlinePhoneAndroid} from "react-icons/md";
import {IoConstructOutline} from "react-icons/io5";
import {BsFillSendFill} from "react-icons/bs";

const Contacts = () => {
    return (
        <main>
            <div className="bg-white text-black mt-30 mb-10 p-10">
                <div className="flex justify-center mb-10">
                    <h1 className="font-bold text-[40px]">CONTACTOS</h1>
                </div>

                <div className="flex flex-row justify-center gap-x-15 mb-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <GoPerson></GoPerson>
                            </span>
                            <input
                                type="text"
                                className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 w-full"
                                placeholder="Nome">
                            </input>
                        </div>

                        <div className="relative w-full mt-10">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <HiOutlineMail></HiOutlineMail>
                            </span>
                            <input
                                type="text"
                                className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 w-full"
                                placeholder="Email">
                            </input>
                        </div>

                        <div className="relative w-full mt-10">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdOutlinePhoneAndroid></MdOutlinePhoneAndroid>
                            </span>
                            <input
                                type="text"
                                className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 w-full"
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
        </main>
    )
}
export default Contacts
