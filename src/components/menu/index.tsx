import { useDispatch, useSelector } from "react-redux";
import { addQuantity, minusQuantity } from "@/store/menu";
import { useState } from "react";

const Menu = props => {
  const [isDisable, setIsDisable] = useState(true);
  const menuStore = useSelector(state => state.menu);

  const dispatch = useDispatch();
  const { name, imageSrc, price, isUpdate, updateItem } = props;

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
  return (
    <div>
      <div>
        <div className="flex items-center justify-center">
          <img src={imageSrc} width="300px" />
        </div>
        <p className="text-lg font-bold text-center m-4">{name}</p>

        <div className="border-1 rounded-lg overflow-x-hidden shadow-lg ">
          <div className="flex justify-between p-4">
            <p className="text-lg font-semibold">가격</p>
            <p className="text-gray-500 text-sm">{price.defaultPrice}원</p>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="text-lg font-semibold">수량</div>
            <div className="flex items-center">
              <button
                className="rounded-full bg-gray-200 w-8 h-8 items-center justify-center m-1"
                onClick={handleDecrease}
                disabled={isDisable}
              >
                -
              </button>
              <p>{isUpdate ? updateItem.quantity : menuStore.quantity}</p>
              <button
                className="rounded-full bg-gray-200 w-8 h-8 items-center justify-center m-1"
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
