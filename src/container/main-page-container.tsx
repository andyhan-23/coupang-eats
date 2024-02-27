import { useEffect, useState } from "react";
import getData from "@/model/get-data";
import Layout from "@/layout";
import MainMenuList from "@/page/main-menu-list";
import MenuListContainer from "./menu-list-container";
import useFetchVendor from "@/queries/vendor";
import { useQuery } from "react-query";
import { useFetchMain } from "@/queries/menu";
import { useFetchSub } from "@/queries/menu";
import { useFetchSide } from "@/queries/menu";

const MainPageContainer = () => {
  //const { data, isLoading, error } = getData("getMenu", "/menu");
  const { isLoading, error, data } = useQuery({
    queryKey: ["menuData"],
    queryFn: () => fetch("/menu").then((res) => res.json()),
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
  // const [menu, setMenu] = useState(null);
  // const [menuId, setMenuId] = useState([]);
  // const [isError, setIsError] = useState(null);
  // useEffect(() => {
  //   if (isLoading) setIsError(error);
  //   if (!isLoading) {
  //     setIsError(null);
  //     setMenu(data);
  //     const menuId = Object.keys(data);
  //     setMenuId(menuId);
  //   }
  // }, [data]);

  return (
    <Layout>
      {/* <MenuListContainer menus={menu}/>
      {menuId.map((id) => {
        return (
          <MenuListContainer
            key={id}
            id={id}
            name={menu[id].name}
            image={menu[id].imageSrc}
            price={menu[id].price}
            quantity={menu[id].quantity}
            type={menu[id].type}
            isError={isError}
            isLoading={isLoading}
            menus={[menu[id]]}
          />
        );
      })} */}
      <p>{data["menu2"].name}</p>
      <p>{vendor.name}</p>
    </Layout>
  );
};

export default MainPageContainer;
