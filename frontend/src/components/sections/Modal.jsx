import { IoClose } from "react-icons/io5";
import ContactForm from "./ContactForm.jsx";

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleSubmit = (formData) => {
        console.log("Orçamento submetido:", formData);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-opacity-25 backdrop-blur-md flex justify-center items-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="p-4 md:p-5 bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col items-center text-black rounded-xl border border-gray-500">
                <button
                    className="text-[20px] p-3 place-self-end hover:text-gray-500 transition-colors"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <IoClose />
                </button>
                <div className="text-2xl md:text-[30px] font-bold pb-5">
                    <h2 id="modal-title" className="text-center">Vamos lá ouvir essa proposta!</h2>
                </div>
                <ContactForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Modal;
