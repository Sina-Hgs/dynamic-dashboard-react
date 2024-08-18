import closeButton from "../../assets/icons/X.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-darkBlack bg-opacity-80">
      <div className="bg-darkSecondary rounded-lg shadow-lg w-[40%] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full p-0.5 hover:bg-error "
        >
          <img src={closeButton} width={30} height={30} alt="close button" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
