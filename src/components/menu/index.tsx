import { useDispatch, useSelector } from "react-redux";
import { addQuantity, minusQuantity } from "@/store/menu";
import { useState } from "react";
import { ArrowBack } from "@/assets/icons";
import { useNavigate } from "react-router-dom";

const Menu = props => {
  const naigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  const menuStore = useSelector((state: any) => state.menu);

  const dispatch = useDispatch();
  const { name, imageSrc, price, isUpdate, updateItem, description } = props;

  const handleIncrease = () => {
    if (isUpdate) {
      const obj = { isUpdate: isUpdate, previousQuantity: updateItem.quantity };
      dispatch(addQuantity(obj));
      setIsDisable(false);
    } else {
      const obj = { isUpdate: isUpdate };
      dispatch(addQuantity(obj));
      setIsDisable(false);
    }
  };
  const handleDecrease = () => {
    dispatch(minusQuantity());
    if (menuStore.quantity === 2) {
      setIsDisable(true);
    }
  };
  const handleBack = () => {
    naigate(-1);
  };
  return (
    <div>
      <div>
        <ArrowBack className="m-4" onClick={handleBack} />
        <div className="flex items-center justify-center">
          <img src={imageSrc} width="300px" />
        </div>
        <p className="text-3xl font-bold text-left m-4">{name}</p>
        <p className="text-lg text-gray-400 text-left m-4">{description}</p>
        <div className="border-1 rounded-lg overflow-x-hidden shadow-lg ">
          <div className="flex justify-between p-4">
            <p className="text-2xl font-semibold">가격</p>
            <p className="text-xl">{price.defaultPrice}원</p>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="text-2xl font-semibold">수량</div>
            <div className="flex items-center">
              <button
                className="rounded-full bg-gray-200 w-10 h-10 items-center justify-center m-1"
                onClick={handleDecrease}
                disabled={isDisable}
              >
                -
              </button>
              <p className="text-2xl">
                {isUpdate ? updateItem.quantity : menuStore.quantity}
              </p>
              <button
                className="rounded-full bg-gray-200 w-10 h-10 items-center justify-center m-1"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Menu;
