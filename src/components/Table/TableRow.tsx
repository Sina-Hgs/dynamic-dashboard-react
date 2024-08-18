import Button from "../ui/Button";

interface TableRowProps {
  useData: UserType;
}

const TableRow = ({ useData }: TableRowProps) => {
  return (
    <tr className="hover:bg-lightPrimary hover:bg-opacity-90 transition-all hover:text-darkPrimary">
      <th scope="row" className="px-6 py-4 ">
        {useData.name}
      </th>
      <td className="px-6 py-4">{useData.email}</td>
      <td className="px-6 py-4">{useData.address.city}</td>
      <td className="px-6 py-4 ">
        <Button variant="link">View</Button>
      </td>
    </tr>
  );
};

export default TableRow;
