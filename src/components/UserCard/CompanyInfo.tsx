import { Company } from "../../types/userType";
import CompanySign from "../../assets/icons/Briefcase.svg";

interface CompanyInfoProps {
  company: Company;
}

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <span className="flex flex-col gap-1 px-3 pt-4">
      <div className="flex gap-2 items-center">
        <img src={CompanySign} alt="Company-sign" width={20} height={20} />
        <span className="text-md">Company:</span>
      </div>
      <p className="text-lightSecondary text-xs flex flex-col gap-1 justify-start pl-6">
        <span>{company.name}</span>
        <span>{company.catchPhrase}</span>
        <span>{company.bs}</span>
      </p>
    </span>
  );
};

export default CompanyInfo;
