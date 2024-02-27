import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuantity, minusQuantity, isUpdate } from "@/store/cart";

const OrderItem = props => {
  const dispatch = useDispatch();
  const {
    index,
    totalPrice,
    mainMenuName,
    quantity,
    subMenuName,
    sideMenuName,
    id,
    menuId,
    totalQuantity,
    allPrice,
  } = props;

  const navigate = useNavigate();

  const handleAddQuantity = () => {
    dispatch(addQuantity(id));
  };

  const handleMinusQuantity = () => {
    dispatch(minusQuantity(id));
  };

  const handleClickToUpdatePage = () => {
    navigate(`/update/${menuId}/${id}`);
    dispatch(isUpdate(id));
  };

  return (
    <div>
      <div className="my-8 border-1 rounded-lg overflow-x-hidden shadow-lg">
        <p className="text-3xl"> {index + 1}</p>
        <p className="text-2xl">{mainMenuName}</p>
        <p>도우: {subMenuName}</p>
        {sideMenuName.map((value, index) => {
          return (
            <p key={value.name}>
              사이드 메뉴 추가선택:{index + 1}:{value.name}
            </p>
          );
        })}
        <p className="text-xl text-bold">{allPrice}원</p>
        <div className="flex items-center">
          <button
            className="rounded-full bg-gray-200 w-8 h-8 items-center justify-center m-1"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <p>{totalQuantity}</p>
          <button
            className="rounded-full bg-gray-200 w-8 h-8 items-center justify-center m-1"
            onClick={handleAddQuantity}
          >
            +
          </button>
        </div>
        <button onClick={handleClickToUpdatePage}>수정하기</button>
      </div>
    </div>
  );
};

export default OrderItem;
