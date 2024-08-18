import { useState, useEffect } from "react";
import Search from "../../../components/Search";
import Table from "../../../components/Table";
import { UserType } from "../../../types/userType";

interface HomeContainerProps {
  userData: UserType[];
  isLoading: boolean;
}

const HomeContainer = ({ userData, isLoading }: HomeContainerProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<UserType[]>(userData);

  useEffect(() => {
    const lowercasedFilter = inputValue.toLowerCase();
    const filteredArray = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercasedFilter) ||
        user.email.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredData(filteredArray);
  }, [inputValue, userData]);

  return (
    <section className="bg-darkSecondary border border-borderPrimary shadow-lg rounded-lg w-[85%] px-12 max-[1000px]:px-2 max-[1000px]:w-[95%] py-8 m-auto relative top-6 bg-gradient-to-b from-darkSecondary from-0% to-darkBlack to-100% flex flex-col justify-center items-center">
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        isLoading={isLoading}
      />
      <Table userData={filteredData} />
    </section>
  );
};

export default HomeContainer;
