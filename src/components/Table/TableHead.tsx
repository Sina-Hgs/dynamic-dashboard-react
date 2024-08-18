const TableHead = () => {
  return (
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
  );
};

export default TableHead;
