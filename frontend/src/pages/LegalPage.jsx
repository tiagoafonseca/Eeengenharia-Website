import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LEGAL_CONTENT, LEGAL_UPDATED } from "../data/legalContent.js";

/**
 * Página legal genérica (privacidade, cookies, termos).
 * Conteúdo preliminar — recomenda-se revisão jurídica antes da versão definitiva.
 *
 * @param {string} titleKey - chave de tradução do título
 * @param {"privacy"|"cookies"|"terms"} page - identifica o conteúdo a apresentar
 */
const LegalPage = ({ titleKey, page }) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.resolvedLanguage;
    const content = (LEGAL_CONTENT[lang] ?? LEGAL_CONTENT.pt)[page];

    return (
        <main>
            <div className="max-w-3xl mx-auto pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-center">{t(titleKey)}</h1>
                <p className="eyebrow text-center mb-16">
                    {t("legalUpdated")}: {LEGAL_UPDATED}
                </p>

                <div className="flex flex-col gap-12">
                    {content.sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-2xl md:text-3xl mb-5">{section.title}</h2>
                            {section.body.map((paragraph, i) => (
                                <p key={i} className="text-ink/70 font-light leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}

                            {section.table && (
                                <div className="overflow-x-auto mt-6">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-ink">
                                                {section.table.headers.map((h) => (
                                                    <th key={h} className="py-3 pr-4 font-medium uppercase tracking-[0.1em] text-xs">
                                                        {h}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table.rows.map((row, ri) => (
                                                <tr key={ri} className="border-b border-line">
                                                    {row.map((cell, ci) => (
                                                        <td key={ci} className="py-3 pr-4 text-ink/70 font-light align-top">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/contactos" className="link-arrow">
                        {t("contactUs")} <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default LegalPage;
