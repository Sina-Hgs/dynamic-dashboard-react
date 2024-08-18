import { useState } from "react";
import Button from "../ui/Button";
import UserCard from "../UserCard/UserCard";
import { UserType } from "../../types/userType";

interface TableRowProps {
  userData: UserType;
}

const TableRow = ({ userData }: TableRowProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <tr className="hover:bg-lightPrimary hover:bg-opacity-90 transition-all hover:text-darkPrimary">
        <th scope="row" className="px-6 py-4 ">
          {userData.name}
        </th>
        <td className="px-6 py-4">{userData.email}</td>
        <td className="px-6 py-4">{userData.address.city}</td>
        <td className="px-6 py-4 ">
          <Button
            variant="link"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            View
          </Button>
        </td>
      </tr>

      <UserCard
        userData={userData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default TableRow;
