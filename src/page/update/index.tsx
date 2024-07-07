import Layout from "@/layout/app-ui";
import MenuContainer from "@/container/menu-container";
import MenuOptionContainer from "@/container/menu-option-container";
import BasketContainer from "@/container/basket-container";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const { menuId, basketId } = useParams();
  return (
    <Layout>
      <MenuContainer menuId={menuId} basketId={basketId} />
      {/* <MenuOptionContainer id={id} />
      <BasketContainer id={id} /> */}
    </Layout>
  );
};

export default UpdatePage;
