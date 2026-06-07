import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm.jsx";

const Modal = ({ isVisible, onClose }) => {
    const { t } = useTranslation();
    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex justify-center items-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={onClose}
        >
            <div
                className="relative bg-paper w-full max-w-2xl max-h-[90vh] overflow-y-auto px-6 md:px-12 py-12 md:py-14 text-ink shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-5 right-5 text-2xl text-muted hover:text-ink transition-colors"
                    onClick={onClose}
                    aria-label={t("close")}
                >
                    <IoClose />
                </button>

                <div className="text-center mb-10">
                    <p className="eyebrow mb-5">{t("ebContact")}</p>
                    <h2 id="modal-title" className="text-3xl md:text-4xl">{t("requestBudget")}</h2>
                </div>

                <ContactForm onSuccess={() => {}} />
            </div>
        </div>
    );
};

export default Modal;
