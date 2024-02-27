import Header from "@/components/header";
import useFetchVendor from "@/hooks/use-fetch-vendor";

const HeaderContainer = (): JSX.Element => {
  const { data, isLoading, error } = useFetchVendor();
  if (isLoading) return <div>로딩중</div>;
  if (error) {
    console.log("가게 데이터를 받아오는 도중 에러 발생:", error);
  }

  return <Header name={data.name} />;
};

export default HeaderContainer;
