import { useSelector, useDispatch } from "react-redux";
import { addCart, clearCart } from "@/store/cart";
import { useNavigate, useLocation } from "react-router-dom";
import { changeColor } from "@/store/menu";
import useFormatNumber from "@/hooks/use-format-number";

const Basket = (props: any): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { price, id, name } = props;
  const orderItem = useSelector((state: any) => state.menu);
  const arr = useSelector((state: any) => state.persistedReducer.cart.items);
  console.log("arr확인", arr);
  const paymentAmount = arr.reduce((acc, cur) => acc + cur.allPrice, 0);
  const totalPrice =
    (price + orderItem.requiredPrice + orderItem.optionalPrice) *
    orderItem.quantity;
  const dispatch = useDispatch();
  const handleClickToHome = () => {
    if (orderItem.isChecked) {
      const cartObj = { ...orderItem, name, totalPrice, id, totalQuantity: 1 };
      dispatch(addCart(cartObj));
      navigate("/");
    } else {
      dispatch(changeColor());
    }
  };
  const handleClickToCart = () => {
    navigate("/cart");
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <>
      {location.pathname === "/" && arr.length > 0 && (
        <div
          className="bg-sky-500 rounded-md cursor-pointer flex p-5 justify-between shadow-md items-center sticky bottom-0"
          onClick={handleClickToCart}
        >
          <div className="flex items-center">
            <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center">
              <p className="text-sky-500 text-xl ">{arr.length}</p>
            </div>
            <p className="text-white text-xl m-1 ">카트 보기</p>
          </div>
          <p className="text-white text-xl">
            {useFormatNumber(paymentAmount)}원
          </p>
        </div>
      )}
      {location.pathname === `/detail/${id}` && (
        <div
          className="bg-sky-500 rounded-md cursor-pointer flex p-5 justify-around shadow-md items-center sticky bottom-0"
          onClick={handleClickToHome}
        >
          <p className="text-white text-xl">{orderItem.quantity}개 담기</p>
          <p className="text-white text-xl">{useFormatNumber(totalPrice)}원</p>
        </div>
      )}
      {location.pathname === "/cart" && arr.length > 0 && (
        <div
          className="bg-sky-500 rounded-md cursor-pointer flex p-5 justify-around shadow-md items-center sticky bottom-0"
          onClick={handleClearLocalStorage}
        >
          <p className="text-white text-xl">
            {useFormatNumber(paymentAmount)}원 결제하기
          </p>
        </div>
      )}
      {location.pathname === "/cart" && arr.length === 0 && (
        <div
          className="bg-sky-500 rounded-md cursor-pointer flex p-5 justify-around shadow-md items-center sticky bottom-0"
          onClick={handleClearLocalStorage}
        >
          <p className="text-white text-xl">맛집 구경가기</p>
        </div>
      )}
    </>
  );
};

export default Basket;
