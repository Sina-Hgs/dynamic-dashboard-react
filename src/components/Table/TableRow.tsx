import React from "react";
import Button from "../ui/Button";

const TableRow = () => {
  return (
    <tr className="hover:bg-lightPrimary hover:bg-opacity-90 transition-all hover:text-darkPrimary">
      <th scope="row" className="px-6 py-4 ">
        Sina Haghshenas
      </th>
      <td className="px-6 py-4">example@gmail.com</td>
      <td className="px-6 py-4">New York</td>
      <td className="px-6 py-4 ">
        <Button variant="link">View</Button>
      </td>
    </tr>
  );
};

export default TableRow;
