import { useQuery } from "@tanstack/react-query";

import HomeContainer from "./components/HomeContainer";
import { getUsers } from "../../api/services/getUsers";
import Loading from "../../components/Loading";

const HomePage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["usersData"],

    queryFn: async () => {
      const response = (await getUsers()) as UserType[];
      return response;
    },
  });

  if (isPending) return <Loading />;

  return (
    <div className="font-RobotoCondensed">
      {data && <HomeContainer userData={data} isLoading={isPending} />}
    </div>
  );
};

export default HomePage;
