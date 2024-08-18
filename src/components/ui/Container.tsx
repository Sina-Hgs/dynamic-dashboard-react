interface ContainerProps {
  header?: React.ReactNode | string;
  children: React.ReactNode | string;
}

const Container = ({ header, children }: ContainerProps) => {
  return (
    <section className="bg-darkSecondary border border-borderPrimary shadow-lg rounded-lg w-[85%] p-12 m-auto relative top-6 bg-gradient-to-b from-darkSecondary from-0% to-darkBlack to-100% flex flex-col justify-center items-center">
      <div>{header}</div>
      <div>{children}</div>
    </section>
  );
};

export default Container;
