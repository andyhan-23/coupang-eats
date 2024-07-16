import { useFetchMenu } from "@/queries/menu";
import Menu from "@/components/menu";
import { useSelector } from "react-redux";

type MenuContainerTypes = {
  menuId: string | undefined;
  basketId: string | undefined;
};

const MenuContainer = (props: MenuContainerTypes) => {
  const { menuId, basketId } = props;

  const { data: menu, isLoading, error } = useFetchMenu(menuId);
  const cartArr = useSelector(
    (state: any) => state.persistedReducer.cart.items
  );
  const newArr = cartArr.filter(value => value.id === `basketItem${basketId}`);

  if (isLoading) return <div>로딩중입니다.</div>;
  if (error) console.log("error");
  return (
    <Menu
      name={menu.name}
      id={basketId}
      imageSrc={menu.imageSrc}
      price={menu.price}
      isUpdate={newArr[0]?.isUpdate}
      updateItem={newArr[0]}
    />
  );
};

export default MenuContainer;
