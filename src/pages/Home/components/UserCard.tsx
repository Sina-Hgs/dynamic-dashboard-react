import React from "react";
import Modal from "../../../components/ui/Modal";
import atSign from "../../../assets/icons/At sign.svg";
import mail from "../../../assets/icons/Mail.svg";
import phone from "../../../assets/icons/Phone.svg";
import location from "../../../assets/icons/location_on.svg";
import globe from "../../../assets/icons/Globe.svg";
import Company from "../../../assets/icons/Briefcase.svg";

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
      <div className="flex justify-between items-end mt-3">
        <h2 className="text-xl">{userData.name}</h2>
        <span className="flex gap-0.5 px-3">
          <img src={atSign} alt="at-sign" width={20} height={20} />
          <h3 className="text-lightSecondary text-sm">{userData.username}</h3>
        </span>
      </div>
      <hr className="mt-1" />

      <div className="py-6">
        <div className="flex flex-col justify-start items-start gap-2">
          <span className="flex gap-2 px-3">
            <img src={mail} alt="mail-sign" width={20} height={20} />
            <h3 className="text-lightSecondary text-sm">{userData.email}</h3>
          </span>
          <span className="flex gap-2 px-3">
            <img src={phone} alt="phone-sign" width={20} height={20} />
            <h3 className="text-lightSecondary text-sm">{userData.phone}</h3>
          </span>
          <span className="flex gap-2 px-3">
            <img src={globe} alt="globe-sign" width={20} height={20} />
            <h3 className="text-lightSecondary text-sm">{userData.website}</h3>
          </span>

          <span className="flex flex-col gap-1 px-3 pt-4">
            <div className="flex gap-2 items-center">
              <img src={location} alt="location-sign" width={20} height={20} />
              <span className="text-md">Address:</span>
            </div>
            <p className="text-lightSecondary text-xs flex flex-col gap-1 justify-start pl-6">
              <span>{userData.address.zipcode}</span>
              <span>
                {userData.address.suite}, {userData.address.street},
                {userData.address.city}
              </span>
              <span>
                {userData.address.geo.lat}, {userData.address.geo.lng}
              </span>
            </p>
          </span>
        </div>
        <span className="flex flex-col gap-1 px-3 pt-4">
          <div className="flex gap-2 items-center">
            <img src={Company} alt="Company-sign" width={20} height={20} />
            <span className="text-md">Company:</span>
          </div>
          <p className="text-lightSecondary text-xs flex flex-col gap-1 justify-start pl-6">
            <span>{userData.company.name}</span>
            <span>{userData.company.catchPhrase}</span>
            <span>{userData.company.bs}</span>
          </p>
        </span>
      </div>
    </Modal>
  );
};

export default UserCard;
