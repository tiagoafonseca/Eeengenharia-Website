import React from 'react'
import {GoPerson} from "react-icons/go";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlineMessage, MdOutlinePhoneAndroid} from "react-icons/md";
import {IoConstructOutline} from "react-icons/io5";
import {BsFillSendFill} from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null

    return (
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-md flex justify-center items-center">
            <div className="p-5 bg-white w-auto h-auto flex flex-col justify-center items-center text-black rounded-xl border-1 border-gray-500">
                <button className="text-[20px] p-3 place-self-end" onClick={() => onClose()}>
                    <IoClose />
                </button>
                <div className="text-[30px] font-bold pb-5">
                    <h1>Vamos lá ouvir essa proposta!</h1>
                </div>

                <div className=" flex flex-row justify-center gap-x-15 mb-10 p-5">
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
                </div>
                <div className="text-white mb-10">
                    <button className="bg-black hover:bg-gray-300 p-3 py-3 px-5 rounded-lg flex flex-row items-center gap-x-5 transition-all duration-200 ease-out">
                        <span className="text-[25px]">Enviar</span>
                        <BsFillSendFill className="text-[25px]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal

