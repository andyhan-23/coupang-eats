import getData from "@/mock/getData";
import handlers from "@/mock/handlers";

const getVendor = () =>
  handlers("get", "/vendor", getData("vendor"), (req, data) => data);

export default getVendor;
