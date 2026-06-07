import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <main>
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center mt-24 md:mt-30 mb-16 px-6">
                <p className="font-bold text-7xl md:text-9xl leading-none">404</p>
                <h1 className="font-bold text-2xl md:text-3xl mt-6">{t("notFoundTitle")}</h1>
                <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-neutral-400">{t("notFoundDesc")}</p>

                <Link
                    to="/"
                    className="mt-10 bg-black dark:bg-white px-6 py-4 text-white dark:text-black text-lg hover:bg-gray-400 dark:hover:bg-neutral-300 transition-all duration-300 ease-linear"
                >
                    {t("backHome")}
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
