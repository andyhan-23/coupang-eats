import getData from "@/mock/getData";
import handlers from "@/mock/handlers";

const getMenuById = () =>
  handlers(
    "get",
    "/menu/:id",
    getData("menu"),
    (req, data) => data?.[req.params.id]
  );

export default getMenuById;
