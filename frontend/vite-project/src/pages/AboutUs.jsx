import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm.jsx";

const TEAM = [
    { name: "David Matias", role: "Engenheiro de Obra" },
    { name: "David Matias", role: "Engenheiro de Obra" },
    { name: "David Matias", role: "Engenheiro de Obra" },
    { name: "David Matias", role: "Engenheiro de Obra" },
];

const VALUES = ["Exclusividade", "Transparência", "Inovação", "Qualidade"];

const AboutUs = () => {
    const { t } = useTranslation();

    const handleContactSubmit = (formData) => {
        console.log("Contacto submetido:", formData);
    };

    return (
        <main>
            <div className="text-black">
                <div className="flex flex-col justify-center items-center text-black pb-20 mt-30 mb-10 p-10">
                    <h1 className="font-bold text-[40px]">{t("ourHistory")}</h1>
                    <div className="flex flex-row justify-evenly gap-x-20 pt-20">
                        <div className="text-[20px] font-normal pt-10">
                            <p className="p-2">{t("historyP1")}</p>
                            <p className="p-2">{t("historyP2")}</p>
                            <p className="p-2">{t("historyP3")}</p>
                            <p className="font-bold p-2">{t("ourValues")}</p>
                            <ul className="list-disc list-inside pl-5">
                                {VALUES.map((v) => <li key={v}>{v}</li>)}
                            </ul>
                            <p className="p-2">{t("historyP4")}</p>
                        </div>

                        <div>
                            <img className="h-[600px] w-[1000px]" src="/aboutUs-img1.webp" alt={t("ourHistory")} width="1000" height="600" loading="lazy" />
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white flex flex-col justify-center items-center p-10 w-auto">
                    <h2 className="font-bold text-[40px]">{t("ourTeam")}</h2>

                    <div className="flex flex-row gap-x-50 w-auto pt-20">
                        {TEAM.map((member, i) => (
                            <div key={i} className="flex flex-col justify-center items-center">
                                <img className="pb-5" src="/profile-team.webp" alt={member.name} width="120" height="120" loading="lazy" />
                                <h3 className="text-[25px] font-bold">{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>

                    <div className="m-25 px-10 text-[20px]">
                        <p className="pb-5">{t("teamP1")}</p>
                        <p className="pb-2">{t("teamP2")}</p>
                    </div>
                </div>

                <div className="bg-white pt-20 text-black mb-25">
                    <div className="flex justify-center mb-10">
                        <h2 className="font-bold text-[40px]">{t("contactUs")}</h2>
                    </div>
                    <ContactForm onSubmit={handleContactSubmit} />
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
