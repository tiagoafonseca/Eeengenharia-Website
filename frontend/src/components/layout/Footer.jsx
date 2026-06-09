import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoCall, IoMailOutline } from "react-icons/io5";

const linkClass = "text-paper/70 hover:text-paper font-light transition-colors duration-300";
const colTitle = "uppercase text-xs tracking-[0.2em] text-paper/50 mb-6";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-ink text-paper">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-12">
                    <div className="col-span-2 lg:col-span-1">
                        <img src="/logo-footer.webp" alt="Eeengenharia" width="160" height="50" loading="lazy" decoding="async" className="h-10 w-auto" />
                    </div>

                    <div>
                        <h2 className={colTitle}>{t("portfolio")}</h2>
                        <div className="flex flex-col gap-3">
                            <Link className={linkClass} to="/portfolio">{t("works")}</Link>
                            <Link className={linkClass} to="/contactos">{t("budgets")}</Link>
                        </div>
                    </div>

                    <div>
                        <h2 className={colTitle}>{t("services")}</h2>
                        <div className="flex flex-col gap-3">
                            <Link className={linkClass} to="/servicos#moradias">{t("construction")}</Link>
                            <Link className={linkClass} to="/servicos#remodelacoes">{t("renovations")}</Link>
                            <Link className={linkClass} to="/servicos#projetos">{t("projectsLicenses")}</Link>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h2 className={colTitle}>{t("contacts")}</h2>
                        <div className="flex flex-col gap-4 text-paper/70 font-light">
                            <a href="mailto:geral@eeengenharia.pt" className="flex items-center gap-3 hover:text-paper transition-colors">
                                <IoMailOutline className="shrink-0" /> geral@eeengenharia.pt
                            </a>
                            <a href="tel:+351913928625" className="flex items-center gap-3 hover:text-paper transition-colors">
                                <IoCall className="shrink-0" /> +351 913 928 625
                            </a>
                            <div className="flex items-center gap-5 pt-2">
                                <a href="https://www.instagram.com/eeengenharia_pt/" aria-label="Instagram" className="hover:text-paper transition-colors">
                                    <FaInstagram className="text-xl" />
                                </a>
                                <a href="https://www.facebook.com/EEEngenharia/" aria-label="Facebook" className="hover:text-paper transition-colors">
                                    <FaFacebook className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-paper/15 mt-14 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <p className="text-xs tracking-[0.1em] text-paper/50 text-center md:text-left">
                        © Eeengenharia 2025 · {t("rightsReserved")} · {t("buildBy")}
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/privacidade" className="text-xs tracking-[0.1em] text-paper/50 hover:text-paper transition-colors">{t("privacyPolicy")}</Link>
                        <Link to="/cookies" className="text-xs tracking-[0.1em] text-paper/50 hover:text-paper transition-colors">{t("cookiePolicy")}</Link>
                        <Link to="/termos" className="text-xs tracking-[0.1em] text-paper/50 hover:text-paper transition-colors">{t("terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
