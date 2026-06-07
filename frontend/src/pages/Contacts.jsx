import { useTranslation } from "react-i18next";
import ContactForm from "../components/sections/ContactForm.jsx";

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <main>
            <div className="bg-white dark:bg-neutral-950 text-black dark:text-neutral-100 mt-24 md:mt-30 mb-10 px-6 md:p-10">
                <div className="flex justify-center mb-10">
                    <h1 className="font-bold text-3xl md:text-[40px] text-center">{t("contactsTitle")}</h1>
                </div>
                <ContactForm />
            </div>
        </main>
    );
};

export default Contacts;
