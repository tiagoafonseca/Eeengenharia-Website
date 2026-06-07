import { useTranslation } from "react-i18next";
import ContactForm from "../components/sections/ContactForm.jsx";

const Contacts = () => {
    const { t } = useTranslation();

    const handleSubmit = (formData) => {
        console.log("Contacto submetido:", formData);
    };

    return (
        <main>
            <div className="bg-white text-black mt-30 mb-10 p-10">
                <div className="flex justify-center mb-10">
                    <h1 className="font-bold text-[40px]">{t("contactsTitle")}</h1>
                </div>
                <ContactForm onSubmit={handleSubmit} />
            </div>
        </main>
    );
};

export default Contacts;
