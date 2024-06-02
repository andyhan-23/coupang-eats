import Layout from "@/layout";
import useFetchVendor from "@/queries/vendor";
import { useQuery } from "react-query";
import { useFetchMain } from "@/queries/menu";
import { useFetchSub } from "@/queries/menu";
import { useFetchSide } from "@/queries/menu";

const MainPageContainer = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["menuData"],
    queryFn: () => fetch("/menu").then(res => res.json()),
  });

  const { data: vendor, isLoading: vendorLoading } = useFetchVendor();

  const mainMenu = useFetchMain();
  const subMenu = useFetchSub();
  const sideMenu = useFetchSide();

  console.log("메인 메뉴", mainMenu);
  console.log("서브 메뉴", subMenu);
  console.log("사이드 메뉴", sideMenu);
  if (vendorLoading) return "loading";
  if (isLoading) return "loading";

  if (error) return "an error has occurred:" + error;

  return (
    <Layout>
      <p>{data["menu2"].name}</p>
      <p>{vendor.name}</p>
    </Layout>
  );
};

export default MainPageContainer;
