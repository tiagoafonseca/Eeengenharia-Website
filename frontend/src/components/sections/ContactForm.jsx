import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoPerson } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneAndroid, MdOutlineMessage } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";

const ContactForm = ({ onSubmit }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telemovel: "",
        tipoObra: "",
        descricao: "",
    });

    const obraOptions = [
        { value: "moradia",      labelKey: "formHouse" },
        { value: "remodelacoes", labelKey: "formRenovations" },
        { value: "projetos",     labelKey: "formProjects" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
    };

    const inputClass = "bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 w-full";

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-center gap-x-15 mb-10 p-5">
            <div className="flex flex-col gap-y-10">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GoPerson />
                    </span>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("formName")}
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineMail />
                    </span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("formEmail")}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdOutlinePhoneAndroid />
                    </span>
                    <input
                        type="tel"
                        name="telemovel"
                        value={form.telemovel}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("formPhone")}
                        autoComplete="tel"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-y-10">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoConstructOutline />
                    </span>
                    <select
                        name="tipoObra"
                        value={form.tipoObra}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">{t("formType")}</option>
                        {obraOptions.map(({ value, labelKey }) => (
                            <option key={value} value={value}>{t(labelKey)}</option>
                        ))}
                    </select>
                </div>

                <div className="relative">
                    <span className="absolute top-[17px] left-0 pl-3 pointer-events-none">
                        <MdOutlineMessage />
                    </span>
                    <textarea
                        name="descricao"
                        value={form.descricao}
                        onChange={handleChange}
                        className="bg-gray-100 text-black text-[25px] placeholder-black pl-10 pr-4 py-2 h-[150px] w-full"
                        placeholder={t("formDescription")}
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-300 p-3 px-5 rounded-lg flex items-center gap-x-5 transition-all duration-200 ease-out text-white"
                        aria-label={t("formSend")}
                    >
                        <span className="text-[25px]">{t("formSend")}</span>
                        <BsFillSendFill className="text-[25px]" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
