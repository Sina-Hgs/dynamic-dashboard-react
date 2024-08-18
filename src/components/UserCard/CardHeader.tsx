import atSign from "../../assets/icons/At sign.svg";

interface CardHeaderProps {
  name: string;
  username: string;
}

const CardHeader = ({ name, username }: CardHeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-end mt-3">
        <h2 className="text-xl">{name}</h2>
        <span className="flex gap-0.5 px-3">
          <img src={atSign} alt="at-sign" width={20} height={20} />
          <h3 className="text-lightSecondary text-sm">{username}</h3>
        </span>
      </div>
      <hr className="mt-1" />
    </>
  );
};

export default CardHeader;
