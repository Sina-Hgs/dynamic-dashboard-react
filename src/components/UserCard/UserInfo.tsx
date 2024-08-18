import mail from "../../assets/icons/Mail.svg";
import phoneSign from "../../assets/icons/Phone.svg";
import globe from "../../assets/icons/Globe.svg";

interface UserInfoProps {
  email: string;
  phone: number;
  website: string;
}

const UserInfo = ({ email, phone, website }: UserInfoProps) => {
  return (
    <>
      <span className="flex gap-2 px-3">
        <img src={mail} alt="mail-sign" width={20} height={20} />
        <h3 className="text-lightSecondary text-sm">{email}</h3>
      </span>
      <span className="flex gap-2 px-3">
        <img src={phoneSign} alt="phone-sign" width={20} height={20} />
        <h3 className="text-lightSecondary text-sm">{phone}</h3>
      </span>
      <span className="flex gap-2 px-3">
        <img src={globe} alt="globe-sign" width={20} height={20} />
        <h3 className="text-lightSecondary text-sm">{website}</h3>
      </span>
    </>
  );
};

export default UserInfo;
