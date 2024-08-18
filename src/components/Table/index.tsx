import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="relative overflow-x-auto min-w-[95%]  transition-all">
      <table className="w-full text-sm text-left">
        <thead className="text-xs  h-6">
          <tr>
            <th scope="col" className="px-6">
              Name
            </th>
            <th scope="col" className="px-6">
              <div className="flex items-center">Email</div>
            </th>
            <th scope="col" className="px-6">
              <div className="flex items-center">Location</div>
            </th>

            <th scope="col" className="px-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-darkBlack bg-opacity-80 font-RobotoMono">
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
