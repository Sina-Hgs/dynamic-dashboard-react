import { Address, Company } from "../../types/userType";
import AddressInfo from "./AddressInfo";
import CompanyInfo from "./CompanyInfo";
import UserInfo from "./UserInfo";

interface CardContentProps {
  email: string;
  phone: number;
  website: string;
  address: Address;
  company: Company;
}

const CardContent = ({
  email,
  phone,
  website,
  address,
  company,
}: CardContentProps) => {
  return (
    <div className="py-6">
      <div className="flex flex-col justify-start items-start gap-2">
        <UserInfo email={email} phone={phone} website={website} />
        <AddressInfo address={address} />
        <CompanyInfo company={company} />
      </div>
    </div>
  );
};

export default CardContent;
