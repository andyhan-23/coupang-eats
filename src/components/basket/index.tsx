import { useSelector, useDispatch } from "react-redux";
import { addCart } from "@/store/cart";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { changeColor } from "@/store/menu";

const Basket = (props: any): JSX.Element => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { price, id, name } = props;
  const orderItem = useSelector((state: any) => state.menu);
  const arr = useSelector((state: any) => state.persistedReducer.cart.items);
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
  return (
    <>
      {location.pathname === "/" && arr.length > 0 && (
        <div
          className="bg-cyan-300 rounded-md cursor-pointer flex p-5 justify-around shadow-md items-center sticky bottom-0"
          onClick={handleClickToCart}
        >
          <div className="flex items-center">
            <p className="text-white text-xl m-1 ">장바구니로 이동</p>
            <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center">
              <p className="text-cyan-300 text-xl ">{arr.length}</p>
            </div>
          </div>
          <p className="text-white text-xl">{paymentAmount}원</p>
        </div>
      )}
      {location.pathname === `/detail/${id}` && (
        <div
          className="bg-cyan-300 rounded-md cursor-pointer flex p-5 justify-around shadow-md items-center sticky bottom-0"
          onClick={handleClickToHome}
        >
          <p className="text-white text-xl">{orderItem.quantity}개 담기</p>
          <p className="text-white text-xl">{totalPrice}원</p>
        </div>
      )}
      {location.pathname === "/cart" && (
        <div className="bg-cyan-300 rounded-md cursor-pointer flex p-5 justify-around shadow-md items-center sticky bottom-0">
          <p className="text-white text-xl">{paymentAmount}원 결제하기</p>
        </div>
      )}
    </>
  );
};

export default Basket;
