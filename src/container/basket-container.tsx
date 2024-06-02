import Basket from "@/components/basket";
import { useFetchMenu } from "@/queries/menu";

type BasketContainerType = {
  id: string | undefined;
};
const BasketContainer = (props: BasketContainerType) => {
  const { id } = props;
  const { data, isLoading, error } = useFetchMenu(id);
  if (isLoading) return <div>로딩중</div>;
  if (error) console.log("error");

  return (
    <Basket
      price={data.price.defaultPrice}
      id={id as string}
      name={data.name}
    />
  );
};

export default BasketContainer;
