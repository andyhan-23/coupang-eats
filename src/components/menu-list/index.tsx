import { useNavigate } from "react-router-dom";
import useFormatNumber from "@/hooks/use-format-number";

type MenuListType = {
  name: string;
  imageSrc: string;
  price: number;
  description: string;
  id: string;
};

const MenuList = (props: MenuListType) => {
  const { name, imageSrc, price, description, id } = props;
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
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-gray-500 text-xl">{useFormatNumber(price)}원</p>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default MenuList;
