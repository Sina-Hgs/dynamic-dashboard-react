import { useQuery } from "@tanstack/react-query";

import HomeContainer from "./components/HomeContainer";
import { getUsers } from "../../api/services/getUsers";

const HomePage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["usersData"],

    queryFn: async () => {
      const response = (await getUsers()) as UserType;
      return response;
    },
  });

  if (isPending) return <></>;

  return (
    <div className="font-RobotoCondensed">
      {data && <HomeContainer userData={data} />}
    </div>
  );
};

export default HomePage;
