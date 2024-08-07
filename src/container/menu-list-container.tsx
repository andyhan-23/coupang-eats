import MenuList from "@/components/menu-list";

type mainMenuArrType = {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  price: {
    defaultPrice: number;
    salePrice: number;
  };
  quantity: number;
  type: string;
};

const MenuListContainer = (props): JSX.Element => {
  const { mainMenuDataArr } = props;

  return (
    <div>
      <h1 className="text-3xl font-bold p-2 bg-white z-1">메뉴</h1>
      {mainMenuDataArr?.map((value: mainMenuArrType) => {
        return (
          <MenuList
            key={value.id}
            imageSrc={value.imageSrc}
            price={value.price.defaultPrice}
            name={value.name}
            description={value.description}
            id={value.id}
          />
        );
      })}
    </div>
  );
};

export default MenuListContainer;
