//import { useFetchMain } from "@/queries/menu";
import { useFetchMain } from "@/hooks/use-fetch-menu";
import MenuList from "@/components/menu-list";

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

const MenuListContainer = (props): JSX.Element => {
  const { mainMenuDataArr } = props;
  const mainMenuArr = useFetchMain();

  return (
    <div>
      <h1 className="text-3xl font-bold p-2">메뉴</h1>
      {mainMenuDataArr?.map((value: mainMenuArrType) => {
        return (
          <MenuList
            key={value.id}
            imageSrc={value.imageSrc}
            price={value.price.defaultPrice}
            name={value.name}
            id={value.id}
          />
        );
      })}
    </div>
  );
};

export default MenuListContainer;
