import { useTranslation } from "react-i18next";
import ContactForm from "../components/sections/ContactForm.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { TEAM } from "../data/team.js";

const VALUES = ["Exclusividade", "Transparência", "Inovação", "Qualidade"];

const AboutUs = () => {
    const { t } = useTranslation();

    const handleContactSubmit = (formData) => {
        console.log("Contacto submetido:", formData);
    };

    return (
        <main>
            <div className="text-black">
                <div className="flex flex-col justify-center items-center text-black pb-12 md:pb-20 mt-24 md:mt-30 mb-10 px-6 md:p-10">
                    <h1 className="font-bold text-3xl md:text-[40px] text-center">{t("ourHistory")}</h1>
                    <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-x-20 pt-12 md:pt-20 w-full">
                        <Reveal className="text-lg md:text-xl font-normal lg:pt-10 lg:w-1/2">
                            <p className="p-2">{t("historyP1")}</p>
                            <p className="p-2">{t("historyP2")}</p>
                            <p className="p-2">{t("historyP3")}</p>
                            <p className="font-bold p-2">{t("ourValues")}</p>
                            <ul className="list-disc list-inside pl-5">
                                {VALUES.map((v) => <li key={v}>{v}</li>)}
                            </ul>
                            <p className="p-2">{t("historyP4")}</p>
                        </Reveal>

                        <Reveal delay={150} className="lg:w-1/2 flex justify-center">
                            <img className="w-full max-w-[1000px] h-auto" src="/aboutUs-img1.webp" alt={t("ourHistory")} width="1000" height="600" loading="lazy" />
                        </Reveal>
                    </div>
                </div>

                <div className="bg-black text-white flex flex-col justify-center items-center px-6 py-12 md:p-10 w-auto">
                    <h2 className="font-bold text-3xl md:text-[40px] text-center">{t("ourTeam")}</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-x-50 w-auto pt-12 md:pt-20">
                        {TEAM.map((member, i) => (
                            <Reveal key={i} delay={i * 100} className="flex flex-col justify-center items-center">
                                <img className="pb-5" src={member.image} alt={member.name} width="120" height="120" loading="lazy" />
                                <h3 className="text-xl md:text-[25px] font-bold text-center">{member.name}</h3>
                                <p className="text-center">{member.role}</p>
                            </Reveal>
                        ))}
                    </div>

                    <div className="my-12 md:m-25 px-2 md:px-10 text-lg md:text-xl max-w-4xl">
                        <p className="pb-5">{t("teamP1")}</p>
                        <p className="pb-2">{t("teamP2")}</p>
                    </div>
                </div>

                <div className="bg-white pt-12 md:pt-20 text-black mb-16 md:mb-25">
                    <div className="flex justify-center mb-10">
                        <h2 className="font-bold text-3xl md:text-[40px] text-center px-6">{t("contactUs")}</h2>
                    </div>
                    <ContactForm onSubmit={handleContactSubmit} />
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
