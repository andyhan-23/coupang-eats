import { useNavigate } from "react-router-dom";

type MenuListType = {
  name: string;
  imageSrc: string;
  price: number;
  id: string;
};

const MenuList = (props: MenuListType) => {
  const { name, imageSrc, price, id } = props;
  const navigae = useNavigate();
  const onClick = () => {
    navigae(`/detail/${id}`);
  };
  return (
    <div
      className="cursor-pointer flex flex-row-reverse justify-between rounded-md overflow-hidden shadow-md w-full p-4 max-w-400 my-5 bg-white"
      onClick={onClick}
    >
      <img src={imageSrc} width="100px" height="100px" />
      <div className="flex flex-col items-start ml-4 justify-between">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{price}원</p>
      </div>
    </div>
  );
};

export default MenuList;
