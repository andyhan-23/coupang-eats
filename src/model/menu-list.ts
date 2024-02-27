import loadData from "./load-data";
import URL from "./constant";

const getMenuList = async () => {
  const data = await loadData(URL.menuList);
  return data;
};

export default getMenuList;
