import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoCall, IoMailOutline } from "react-icons/io5";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black p-6 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-x-[100px] text-white w-auto mx-auto p-4 md:p-10">
                <div>
                    <img src="/logo-footer.webp" alt="Eeengenharia" width="160" height="50" loading="lazy" decoding="async" />
                    <div className="pt-10 flex flex-col gap-y-[20px]">
                        <Link to="/privacidade" className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left">
                            {t("privacyPolicy")}
                        </Link>
                        <Link to="/cookies" className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left">
                            {t("cookiePolicy")}
                        </Link>
                        <Link to="/termos" className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left">
                            {t("terms")}
                        </Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl md:text-[25px]">{t("portfolio")}</h2>
                    <div className="pt-5 flex flex-col gap-y-[20px]">
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/portfolio">{t("works")}</Link>
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/contactos">{t("budgets")}</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl md:text-[25px]">{t("services")}</h2>
                    <div className="pt-5 flex flex-col gap-y-[20px]">
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/servicos#moradias">{t("construction")}</Link>
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/servicos#remodelacoes">{t("renovations")}</Link>
                        <Link className="inline-block text-base transition-transform duration-200 hover:scale-105 origin-left" to="/servicos#projetos">{t("projectsLicenses")}</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl md:text-[25px]">{t("contacts")}</h2>
                    <div className="pt-5 flex flex-col gap-y-[20px]">
                        <div className="flex flex-row gap-x-[10px]">
                            <IoMailOutline className="text-[20px]" />
                            <p>geral@eeengenharia.pt</p>
                        </div>
                        <div className="flex flex-row gap-x-[10px]">
                            <IoCall className="text-[20px]" />
                            <p>+351 913 928 625 | 917 982 411</p>
                        </div>
                        <div className="flex flex-row gap-x-[10px]">
                            <a href="https://www.instagram.com/eeengenharia_pt/" aria-label="Instagram">
                                <FaInstagram className="text-[20px] hover:scale-110 transition-transform duration-200" />
                            </a>
                            <a href="https://www.facebook.com/EEEngenharia/" aria-label="Facebook">
                                <FaFacebook className="text-[20px] hover:scale-110 transition-transform duration-200" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[2px]">
                <hr className="w-4/5 max-w-screen-lg mx-auto border-t border-gray-300 my-4" />
                <p className="text-center text-sm text-white">
                    © EENGENHARIA 2025 {t("rightsReserved")} | {t("buildBy")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
