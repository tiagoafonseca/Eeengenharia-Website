import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <main>
            <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20">
                <p className="font-serif text-8xl md:text-9xl leading-none text-ink">404</p>
                <h1 className="text-3xl md:text-4xl mt-6">{t("notFoundTitle")}</h1>
                <p className="text-lg text-ink/70 font-light mt-4 max-w-md">{t("notFoundDesc")}</p>
                <Link to="/" className="btn-primary mt-10">{t("backHome")}</Link>
            </div>
        </main>
    );
};

export default NotFound;
