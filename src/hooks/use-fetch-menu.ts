import getMenuList from "@/model/menu/list";
import getMenu from "@/model/menu";
import { useQuery } from "react-query";
import axios from "axios";

export const useFetchMenuList = () =>
  useQuery(["fetchList"], getMenuList, {
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: 10000,
  });

export const useFetchMenu = (id: string) =>
  useQuery(["fetchMenu", id], () => getMenu(id));

type mainMenuArrType = {
  id: string;
  imageSrc: string;
  name: string;
  price: {
    defaultPrice: number;
    salePrice: number;
  };
  quantity: number;
  type: string;
};

export const useFetchMain = (): mainMenuArrType[] | undefined | Error => {
  const {
    data: menuData,
    isLoading: menuDataLoading,
    error: menuDataError,
  } = useFetchMenuList();

  if (menuDataLoading) return;
  if (menuDataError) return new Error("error fetching main menu data");

  const mainMenus = Object.keys(menuData)
    .filter(menuId => menuData[menuId].type === "main")
    .map(menuId => menuData[menuId]);
  return mainMenus;
};

export const useFetchSub = () => {
  const {
    data: menuData,
    isLoading: menuDataLoading,
    error: menuDataError,
  } = useFetchMenuList();

  if (menuDataLoading) return;
  if (menuDataError) return menuDataError;
  const subMenus = Object.keys(menuData)
    .filter(menuId => menuData[menuId].type === "sub")
    .map(menuId => menuData[menuId]);
  return subMenus;
};

export const useFetchSide = () => {
  const {
    data: menuData,
    isLoading: menuDataLoading,
    error: menuDataError,
  } = useFetchMenuList();

  if (menuDataLoading) return;
  if (menuDataError) return menuDataError;
  const sideMenus = Object.keys(menuData)
    .filter(menuId => menuData[menuId].type === "side")
    .map(menuId => menuData[menuId]);
  return sideMenus;
};
