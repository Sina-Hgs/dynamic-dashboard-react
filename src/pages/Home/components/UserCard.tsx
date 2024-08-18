import React from "react";
import Modal from "../../../components/ui/Modal";
import atSign from "../../../assets/icons/At sign.svg";

interface UserCardProps {
  userData: UserType;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserCard = ({ isModalOpen, setIsModalOpen, userData }: UserCardProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
      }}
    >
      <div className="flex justify-between items-end">
        <h2 className="text-xl">{userData.name}</h2>
        <span className="flex gap-0.5 px-3">
          <img src={atSign} alt="at-sign" width={20} height={20} />
          <h3 className="text-lightSecondary text-sm">{userData.username}</h3>
        </span>
      </div>
      <hr className="mt-1" />
    </Modal>
  );
};

export default UserCard;
