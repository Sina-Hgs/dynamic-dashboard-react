import Search from "../../components/Search";
import Table from "../../components/Table";
import Container from "../../components/ui/Container";

const HomePage = () => {
  return (
    <div className="font-RobotoCondensed">
      <Container header={<Search />}>
        <Table />
      </Container>
    </div>
  );
};

export default HomePage;
