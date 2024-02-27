import loadData from "../load-data";
import URL from "../constant";

const getMenu = async (id: string) => {
  const data = await loadData(`${URL.menu}/${id}`);
  return data;
};

export default getMenu;
