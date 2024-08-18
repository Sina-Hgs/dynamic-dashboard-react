import { useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

interface TableProps {
  userData: UserType[];
}

const Table = ({ userData }: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  // current page table items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = userData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative overflow-x-auto min-w-[95%] transition-all">
      <table className="w-full text-sm text-left">
        <TableHead />
        <tbody className="bg-darkBlack bg-opacity-80 font-RobotoMono">
          {currentItems.map((user, index) => (
            <TableRow key={index} userData={user} />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(userData.length / itemsPerPage)}
      />
    </div>
  );
};

export default Table;
