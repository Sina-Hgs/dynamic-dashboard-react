const TableHead = () => {
  return (
    <thead className="text-xs h-6">
      <tr>
        <th scope="col" className="px-6 max-[1000px]:px-1 ">
          Name
        </th>
        <th scope="col" className="px-6 max-[1000px]:px-1">
          <div className="flex items-center">Email</div>
        </th>
        <th scope="col" className="px-6 max-[1000px]:px-1">
          <div className="flex items-center">Location</div>
        </th>

        <th scope="col" className="px-3">
          <span className="flex items-center">More Details</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
