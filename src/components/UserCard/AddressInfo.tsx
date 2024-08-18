import location from "../../assets/icons/location_on.svg";
import { Address } from "../../types/userType";

interface AddressInfoProps {
  address: Address;
}

const AddressInfo = ({ address }: AddressInfoProps) => {
  return (
    <span className="flex flex-col gap-1 px-3 pt-4 max-[1000px]:text-xs">
      <div className="flex gap-2 items-center">
        <img src={location} alt="location-sign" width={20} height={20} />
        <span className="text-md">Address:</span>
      </div>
      <p className="text-lightSecondary text-xs flex flex-col gap-1 justify-start pl-6">
        <span>{address.zipcode}</span>
        <span>
          {address.suite}, {address.street},{address.city}
        </span>
        <span>
          {address.geo.lat}, {address.geo.lng}
        </span>
      </p>
    </span>
  );
};

export default AddressInfo;
