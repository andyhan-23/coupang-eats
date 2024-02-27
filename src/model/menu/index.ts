import loadData from "../load-data";
import URL from "../constant";

const getMenu = async (id: string) => {
  const response = await loadData(`${URL.menu}/${id}`);
  return response.data;
};

export default getMenu;
