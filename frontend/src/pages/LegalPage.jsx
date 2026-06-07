import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LAST_UPDATED = "06/2026";

/**
 * Página legal genérica (privacidade, cookies, termos).
 * Conteúdo preliminar — substituir o texto pela versão legal definitiva.
 *
 * @param {string} titleKey - chave de tradução do título
 * @param {string} introKey - chave de tradução do parágrafo introdutório
 */
const LegalPage = ({ titleKey, introKey }) => {
    const { t } = useTranslation();

    return (
        <main>
            <div className="max-w-3xl mx-auto mt-24 md:mt-30 mb-16 md:mb-25 px-6 md:px-10">
                <h1 className="font-bold text-3xl md:text-[40px] mb-2 text-center">{t(titleKey)}</h1>
                <p className="text-center text-sm text-gray-500 dark:text-neutral-400 mb-10">
                    {t("legalUpdated")}: {LAST_UPDATED}
                </p>

                <p className="text-lg md:text-xl leading-relaxed mb-8">{t(introKey)}</p>

                <p className="text-base md:text-lg leading-relaxed bg-gray-100 dark:bg-neutral-800 border-l-4 border-black dark:border-neutral-100 p-5">
                    {t("legalNote")}
                </p>

                <div className="mt-12 text-center">
                    <Link
                        to="/contactos"
                        className="inline-block font-semibold text-lg border-b-2 border-black dark:border-neutral-100 hover:opacity-70 transition-opacity"
                    >
                        {t("contactUs")}
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default LegalPage;
