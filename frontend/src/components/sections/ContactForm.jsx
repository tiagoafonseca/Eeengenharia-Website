import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoPerson } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneAndroid, MdOutlineMessage } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const EMPTY_FORM = { nome: "", email: "", telemovel: "", tipoObra: "", descricao: "", botcheck: "" };

const ContactForm = ({ onSuccess }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState(EMPTY_FORM);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const obraOptions = [
        { value: "moradia",      labelKey: "formHouse" },
        { value: "remodelacoes", labelKey: "formRenovations" },
        { value: "projetos",     labelKey: "formProjects" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ACCESS_KEY) {
            if (import.meta.env.DEV) {
                console.warn("VITE_WEB3FORMS_ACCESS_KEY em falta — define-a no .env");
            }
            setStatus("error");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    subject: `Novo pedido de orçamento — ${form.nome}`,
                    from_name: form.nome,
                    botcheck: form.botcheck,
                    Nome: form.nome,
                    Email: form.email,
                    Telemóvel: form.telemovel,
                    "Tipo de obra": form.tipoObra,
                    Descrição: form.descricao,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm(EMPTY_FORM);
                onSuccess?.();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const sending = status === "sending";
    const inputClass = "bg-gray-100 dark:bg-neutral-800 text-black dark:text-neutral-100 text-lg md:text-[22px] placeholder-black dark:placeholder-neutral-400 pl-10 pr-4 py-2 w-full disabled:opacity-60";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-4xl mx-auto mb-10 p-5">
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-x-15 w-full">
                {/* Honeypot anti-spam — escondido para humanos */}
                <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={handleChange}
                />

                <div className="flex flex-col gap-6 md:gap-y-10 w-full md:w-[340px]">
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
                            disabled={sending}
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
                            disabled={sending}
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
                            disabled={sending}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 md:gap-y-10 w-full md:w-[340px]">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IoConstructOutline />
                        </span>
                        <select
                            name="tipoObra"
                            value={form.tipoObra}
                            onChange={handleChange}
                            className={inputClass}
                            disabled={sending}
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
                            className="bg-gray-100 dark:bg-neutral-800 text-black dark:text-neutral-100 text-lg md:text-[22px] placeholder-black dark:placeholder-neutral-400 pl-10 pr-4 py-2 h-[150px] w-full disabled:opacity-60"
                            placeholder={t("formDescription")}
                            disabled={sending}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={sending}
                            className="bg-black dark:bg-white hover:bg-gray-300 dark:hover:bg-neutral-300 p-3 px-5 rounded-lg flex items-center gap-x-5 transition-all duration-200 ease-out text-white dark:text-black disabled:opacity-60 disabled:cursor-not-allowed"
                            aria-label={t("formSend")}
                        >
                            <span className="text-lg md:text-[22px]">{sending ? t("formSending") : t("formSend")}</span>
                            <BsFillSendFill className="text-lg md:text-[22px]" />
                        </button>
                    </div>
                </div>
            </div>

            {status === "success" && (
                <p role="status" className="mt-6 text-center text-green-700 dark:text-green-400 text-lg font-semibold">
                    {t("formSuccess")}
                </p>
            )}
            {status === "error" && (
                <p role="alert" className="mt-6 text-center text-red-600 dark:text-red-400 text-lg font-semibold">
                    {t("formError")}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
