import TableHead from "./TableHead";
import TableRow from "./TableRow";

interface TableProps {
  userData: UserType[];
}

const Table = ({ userData }: TableProps) => {
  return (
    <div className="relative overflow-x-auto min-w-[95%]  transition-all">
      <table className="w-full text-sm text-left">
        <TableHead />
        <tbody className="bg-darkBlack bg-opacity-80 font-RobotoMono">
          {userData.map((user, index) => {
            return <TableRow key={index} useData={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
