import HeaderContainer from "@/container/header-container";
import MenuListContainer from "@/container/menu-list-container";
import Basket from "@/components/basket";
import Layout from "@/layout";
import useFetchVendor from "@/hooks/use-fetch-vendor";
import { useFetchMenuList } from "@/hooks/use-fetch-menu";

const MainPage = () => {
  const { data: vendorData, isLoading: vendorDataLoading } = useFetchVendor();

  const { data: menuData, isLoading: menuDataLoading } = useFetchMenuList();

  if (menuDataLoading) return <div>메뉴 데이터 로딩중 입니다.</div>;
  if (vendorDataLoading) return <div>가게 데이터 로딩중 입니다.</div>;

  const mainMenus = Object.keys(menuData)
    .filter(menuId => menuData[menuId].type === "main")
    .map(menuId => menuData[menuId]);

  return (
    <Layout>
      <HeaderContainer data={vendorData} />
      <MenuListContainer mainMenuDataArr={mainMenus} />
      <Basket />
    </Layout>
  );
};

export default MainPage;
