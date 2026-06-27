import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const EMPTY_FORM = { nome: "", email: "", telemovel: "", tipoObra: "", descricao: "", botcheck: "" };

const COUNTRY_CODES = [
    { code: "+351", flag: "🇵🇹", name: "Portugal" },
    { code: "+55",  flag: "🇧🇷", name: "Brasil" },
    { code: "+34",  flag: "🇪🇸", name: "Espanha" },
    { code: "+33",  flag: "🇫🇷", name: "França" },
    { code: "+44",  flag: "🇬🇧", name: "Reino Unido" },
    { code: "+49",  flag: "🇩🇪", name: "Alemanha" },
    { code: "+41",  flag: "🇨🇭", name: "Suíça" },
    { code: "+352", flag: "🇱🇺", name: "Luxemburgo" },
    { code: "+244", flag: "🇦🇴", name: "Angola" },
    { code: "+258", flag: "🇲🇿", name: "Moçambique" },
    { code: "other", flag: null, name: "Outro" },
];

const PHONE_RULES = {
    "+351": { min: 9,  max: 9,  placeholder: "912 345 678" },
    "+55":  { min: 10, max: 11, placeholder: "11 91234-5678" },
    "+34":  { min: 9,  max: 9,  placeholder: "612 345 678" },
    "+33":  { min: 9,  max: 9,  placeholder: "06 12 34 56 78" },
    "+44":  { min: 10, max: 10, placeholder: "07911 123456" },
    "+49":  { min: 10, max: 11, placeholder: "0151 23456789" },
    "+41":  { min: 9,  max: 9,  placeholder: "079 123 45 67" },
    "+352": { min: 9,  max: 9,  placeholder: "621 123 456" },
    "+244": { min: 9,  max: 9,  placeholder: "923 123 456" },
    "+258": { min: 9,  max: 9,  placeholder: "84 123 4567" },
    "other": { min: 6, max: 15, placeholder: "Número de telemóvel" },
};

const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const validatePhone = (v, cc) => {
    const digits = v.replace(/\D/g, "").length;
    const rule = PHONE_RULES[cc] ?? { min: 6, max: 15 };
    return digits >= rule.min && digits <= rule.max;
};
const validateDesc  = (v) => v.trim().split(/\s+/).filter(Boolean).length >= 3;

const GlobeIcon = ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" strokeLinecap="round" />
    </svg>
);

const Chevron = () => (
    <svg className="h-3.5 w-3.5 text-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Dropdown simples sem pesquisa (para listas curtas)
const ObraSelect = ({ value, onChange, options, placeholder, disabled, hasError }) => {
    const [open, setOpen] = useState(false);
    const containerRef    = useRef(null);
    const selected        = options.find((o) => o.value === value);

    useEffect(() => {
        if (!open) return;
        const onOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", onOutside);
        return () => document.removeEventListener("pointerdown", onOutside);
    }, [open]);

    const select = (val) => { onChange(val); setOpen(false); };

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => !disabled && setOpen((v) => !v)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`w-full flex items-center justify-between border-b h-12 transition-colors duration-300 focus:outline-none disabled:opacity-50 cursor-pointer ${
                    hasError ? "border-red-400" : "border-line focus:border-ink"
                }`}
            >
                <span className={selected ? "text-ink" : "text-muted"}>
                    {selected ? selected.label : placeholder}
                </span>
                <Chevron />
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-2 z-50 bg-paper border border-line shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)] w-full">
                    <ul role="listbox">
                        {options.map(({ value: val, label }) => (
                            <li
                                key={val}
                                role="option"
                                aria-selected={val === value}
                                onClick={() => select(val)}
                                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-150 ${
                                    val === value
                                        ? "text-ink bg-surface"
                                        : "text-ink/70 hover:text-ink hover:bg-surface"
                                }`}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Combobox de indicativo com pesquisa
const CountryCodeSelect = ({ value, onChange, disabled }) => {
    const [open, setOpen]     = useState(false);
    const [search, setSearch] = useState("");
    const containerRef        = useRef(null);
    const searchRef           = useRef(null);

    const selected = COUNTRY_CODES.find((c) => c.code === value) ?? COUNTRY_CODES[0];
    const filtered = COUNTRY_CODES.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.code.includes(search)
    );

    useEffect(() => {
        if (!open) { setSearch(""); return; }
        searchRef.current?.focus();
        const onOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", onOutside);
        return () => document.removeEventListener("pointerdown", onOutside);
    }, [open]);

    const select = (code) => { onChange(code); setOpen(false); };

    return (
        <div ref={containerRef} className="relative shrink-0">
            <button
                type="button"
                onClick={() => !disabled && setOpen((v) => !v)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-1.5 text-sm text-ink focus:outline-none disabled:opacity-50 cursor-pointer"
            >
                {selected.flag ? <span>{selected.flag}</span> : <GlobeIcon />}
                <span>{selected.code !== "other" ? selected.code : ""}</span>
                <Chevron />
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-2 z-50 bg-paper border border-line shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)] w-56">
                    <div className="px-3 py-2 border-b border-line">
                        <input
                            ref={searchRef}
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Pesquisar país..."
                            className="w-full text-sm bg-transparent text-ink placeholder-muted focus:outline-none"
                            onKeyDown={(e) => {
                                if (e.key === "Escape") setOpen(false);
                                if (e.key === "Enter" && filtered.length > 0) select(filtered[0].code);
                            }}
                        />
                    </div>
                    <ul role="listbox" className="max-h-48 overflow-y-auto">
                        {filtered.length === 0 ? (
                            <li className="px-3 py-2 text-sm text-muted">Sem resultados</li>
                        ) : filtered.map(({ code, flag, name }) => (
                            <li
                                key={code}
                                role="option"
                                aria-selected={code === value}
                                onClick={() => select(code)}
                                className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                                    code === value
                                        ? "text-ink bg-surface"
                                        : "text-ink/70 hover:text-ink hover:bg-surface"
                                }`}
                            >
                                {flag ? <span>{flag}</span> : <GlobeIcon className="h-4 w-4 shrink-0 text-ink" />}
                                <span className="flex-1">{name}</span>
                                <span className="text-muted text-xs">{code}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const ContactForm = ({ onSuccess }) => {
    const { t } = useTranslation();
    const [form, setForm]               = useState(EMPTY_FORM);
    const [countryCode, setCountryCode] = useState("+351");
    const [errors, setErrors]           = useState({});
    const [touched, setTouched]         = useState({});
    const [status, setStatus]           = useState("idle");

    const obraOptions = [
        { value: "moradia",      labelKey: "formHouse" },
        { value: "remodelacoes", labelKey: "formRenovations" },
        { value: "projetos",     labelKey: "formProjects" },
    ];

    const validate = (name, value) => {
        if (name === "email"     && value) return validateEmail(value) ? "" : t("formErrorEmail");
        if (name === "telemovel" && value) return validatePhone(value, countryCode) ? "" : t("formErrorPhone");
        if (name === "descricao" && value) return validateDesc(value)  ? "" : t("formErrorDesc");
        return "";
    };

    useEffect(() => {
        if (touched.telemovel) {
            setErrors((prev) => ({ ...prev, telemovel: validate("telemovel", form.telemovel) }));
        }
    }, [countryCode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {
            email:     validate("email",     form.email),
            telemovel: form.telemovel ? validate("telemovel", form.telemovel) : "",
            descricao: validate("descricao", form.descricao),
        };
        setErrors(newErrors);
        setTouched({ email: true, telemovel: true, descricao: true });
        if (Object.values(newErrors).some(Boolean)) return;

        if (!ACCESS_KEY) {
            if (import.meta.env.DEV) console.warn("VITE_WEB3FORMS_ACCESS_KEY em falta — define-a no .env");
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
                    Telemóvel: form.telemovel ? (countryCode === "other" ? form.telemovel : `${countryCode} ${form.telemovel}`) : "",
                    "Tipo de obra": form.tipoObra,
                    Descrição: form.descricao,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm(EMPTY_FORM);
                setErrors({});
                setTouched({});
                window.gtag?.("event", "form_submit", { event_category: "contact", event_label: "orcamento" });
                onSuccess?.();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const sending = status === "sending";
    const fieldBase = "w-full bg-transparent border-b py-3 text-ink placeholder-muted focus:outline-none transition-colors duration-300 disabled:opacity-50";
    const fieldCls  = (name) => `${fieldBase} ${errors[name] ? "border-red-400 focus:border-red-400" : "border-line focus:border-ink"}`;
    const errMsg    = (name) => errors[name]
        ? <p className="mt-1.5 text-xs text-red-500 font-light">{errors[name]}</p>
        : null;

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <p className="text-center text-ink/70 font-light max-w-2xl mx-auto mb-10 md:mb-12">
                {t("formIntro")}
            </p>

            {/* Honeypot anti-spam */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 items-start">

                {/* Nome */}
                <div>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        className={fieldCls("nome")}
                        placeholder={t("formName")}
                        autoComplete="name"
                        required
                        disabled={sending}
                    />
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldCls("email")}
                        placeholder={t("formEmail")}
                        autoComplete="email"
                        required
                        disabled={sending}
                    />
                    {errMsg("email")}
                </div>

                {/* Telemóvel com indicativo pesquisável */}
                <div>
                    <div className={`flex items-center border-b h-12 transition-colors duration-300 ${
                        errors.telemovel ? "border-red-400" : "border-line focus-within:border-ink"
                    }`}>
                        <CountryCodeSelect value={countryCode} onChange={setCountryCode} disabled={sending} />
                        <span className="mx-3 text-line select-none">|</span>
                        <input
                            type="tel"
                            name="telemovel"
                            value={form.telemovel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="flex-1 bg-transparent text-ink placeholder-muted focus:outline-none disabled:opacity-50"
                            placeholder={PHONE_RULES[countryCode]?.placeholder ?? t("formPhone")}
                            autoComplete="tel-national"
                            disabled={sending}
                        />
                    </div>
                    {errMsg("telemovel")}
                </div>

                {/* Tipo de obra */}
                <ObraSelect
                    value={form.tipoObra}
                    onChange={(val) => {
                        setForm((prev) => ({ ...prev, tipoObra: val }));
                    }}
                    options={obraOptions.map(({ value, labelKey }) => ({ value, label: t(labelKey) }))}
                    placeholder={t("formType")}
                    disabled={sending}
                    hasError={!!errors.tipoObra}
                />

                {/* Descrição */}
                <div className="md:col-span-2">
                    <textarea
                        name="descricao"
                        value={form.descricao}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${fieldCls("descricao")} h-32 resize-none`}
                        placeholder={t("formDescription")}
                        disabled={sending}
                    />
                    {errMsg("descricao")}
                </div>

                <div className="md:col-span-2 flex justify-center md:justify-end pt-4">
                    <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                        {sending ? t("formSending") : t("formSend")}
                    </button>
                </div>
            </div>

            {status === "success" && (
                <p role="status" className="mt-8 text-center text-ink font-light">{t("formSuccess")}</p>
            )}
            {status === "error" && (
                <p role="alert" className="mt-8 text-center text-red-600 font-light">{t("formError")}</p>
            )}
        </form>
    );
};

export default ContactForm;
