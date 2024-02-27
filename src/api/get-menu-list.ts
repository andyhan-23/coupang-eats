import getData from "@/mock/getData";
import handlers from "@/mock/handlers";

const getMenuList = () =>
  handlers("get", "/menuList", getData("menu"), (req, data) => data);

export default getMenuList;
