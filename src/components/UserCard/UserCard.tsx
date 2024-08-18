import React from "react";
import Modal from "../ui/Modal";

import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { UserType } from "../../types/userType";

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
      <CardHeader name={userData.name} username={userData.username} />
      <CardContent
        website={userData.website}
        email={userData.email}
        phone={userData.phone}
        address={userData.address}
        company={userData.company}
      />
    </Modal>
  );
};

export default UserCard;
