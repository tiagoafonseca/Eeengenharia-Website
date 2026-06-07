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
            className="fixed inset-0 bg-opacity-25 backdrop-blur-md flex justify-center items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="p-5 bg-white w-auto h-auto flex flex-col justify-center items-center text-black rounded-xl border border-gray-500">
                <button
                    className="text-[20px] p-3 place-self-end hover:text-gray-500 transition-colors"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <IoClose />
                </button>
                <div className="text-[30px] font-bold pb-5">
                    <h2 id="modal-title">Vamos lá ouvir essa proposta!</h2>
                </div>
                <ContactForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Modal;
