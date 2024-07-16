import HeaderContainer from "@/container/header-container";
import MenuListContainer from "@/container/menu-list-container";
import SideBar from "@/components/side-bar";
import Basket from "@/components/basket";
import { AppUi, UI } from "@/layout";
import useFetchVendor from "@/hooks/use-fetch-vendor";
import { useFetchMenuList } from "@/hooks/use-fetch-menu";
import { useEffect } from "react";

const MainPage = () => {
  const { data: vendorData, isLoading: vendorDataLoading } = useFetchVendor();

  const { data: menuData, isLoading: menuDataLoading } = useFetchMenuList();

  if (menuDataLoading) return <div>메뉴 데이터 로딩중 입니다.</div>;
  if (vendorDataLoading) return <div>가게 데이터 로딩중 입니다.</div>;

  const mainMenus = Object.keys(menuData)
    .filter(menuId => menuData[menuId].type === "main")
    .map(menuId => menuData[menuId]);

  return (
    <UI>
      <AppUi>
        <HeaderContainer data={vendorData} />
        <SideBar
          deliveryFee={vendorData.deliveryFee}
          minimunOrderAmount={vendorData.minimumOrderAmount}
        />
        <MenuListContainer mainMenuDataArr={mainMenus} />
        <Basket />
      </AppUi>
    </UI>
  );
};

export default MainPage;
