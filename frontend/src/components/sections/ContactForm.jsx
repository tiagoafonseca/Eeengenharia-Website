import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    const fieldClass =
        "w-full bg-transparent border-b border-line py-3 text-ink placeholder-muted focus:border-ink focus:outline-none transition-colors duration-300 disabled:opacity-50";

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <p className="text-center text-ink/70 font-light max-w-2xl mx-auto mb-10 md:mb-12">
                {t("formIntro")}
            </p>

            {/* Honeypot anti-spam — escondido para humanos */}
            <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder={t("formName")}
                    autoComplete="name"
                    required
                    disabled={sending}
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder={t("formEmail")}
                    autoComplete="email"
                    required
                    disabled={sending}
                />
                <input
                    type="tel"
                    name="telemovel"
                    value={form.telemovel}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder={t("formPhone")}
                    autoComplete="tel"
                    disabled={sending}
                />
                <div className="relative">
                    <select
                        name="tipoObra"
                        value={form.tipoObra}
                        onChange={handleChange}
                        className={`${fieldClass} appearance-none cursor-pointer pr-8 ${form.tipoObra ? "text-ink" : "text-muted"}`}
                        disabled={sending}
                    >
                        <option value="">{t("formType")}</option>
                        {obraOptions.map(({ value, labelKey }) => (
                            <option key={value} value={value} className="text-ink">{t(labelKey)}</option>
                        ))}
                    </select>
                    <svg
                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                    >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <textarea
                    name="descricao"
                    value={form.descricao}
                    onChange={handleChange}
                    className={`${fieldClass} md:col-span-2 h-32 resize-none`}
                    placeholder={t("formDescription")}
                    disabled={sending}
                />

                <div className="md:col-span-2 flex justify-center md:justify-end pt-4">
                    <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                        {sending ? t("formSending") : t("formSend")}
                    </button>
                </div>
            </div>

            {status === "success" && (
                <p role="status" className="mt-8 text-center text-ink font-light">
                    {t("formSuccess")}
                </p>
            )}
            {status === "error" && (
                <p role="alert" className="mt-8 text-center text-red-600 font-light">
                    {t("formError")}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
