import Header from "@/components/header";
import useFetchVendor from "@/hooks/use-fetch-vendor";

const HeaderContainer = (props): JSX.Element => {
  const { data } = props;
  // const { data, isLoading, error } = useFetchVendor();

  // if (isLoading) return <div>로딩중 입니다</div>;
  // if (error) {
  //   if (import.meta.env.DEV)
  //     console.log("가게 데이터를 받아오는 도중 에러 발생:", error);
  // }

  return <Header name={data.name} />;
};

export default HeaderContainer;
