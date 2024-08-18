import Search from "../../../components/Search";
import Table from "../../../components/Table";

interface HomeContainerProps {
  userData: UserType;
}

const HomeContainer = ({ userData }: HomeContainerProps) => {
  return (
    <section className="bg-darkSecondary border border-borderPrimary shadow-lg rounded-lg w-[85%] p-12 m-auto relative top-6 bg-gradient-to-b from-darkSecondary from-0% to-darkBlack to-100% flex flex-col justify-center items-center">
      <Search />

      <Table />
    </section>
  );
};

export default HomeContainer;
