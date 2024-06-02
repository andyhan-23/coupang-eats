import Header from "@/components/header";

const HeaderContainer = (props): JSX.Element => {
  const { data } = props;

  return <Header name={data.name} />;
};

export default HeaderContainer;
