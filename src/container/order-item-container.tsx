import { useSelector } from "react-redux";
import OrderItem from "@/components/order-item";

const OrderItemContainer = () => {
  const cart = useSelector((state) => state.persistedReducer.cart.items);
  return (
    <div>
      {cart.map((value, index) => {
        return (
          <OrderItem
            key={value.id}
            index={index}
            mainMenuName={value.mainMenuName}
            quantity={value.quantity}
            subMenuName={value.subMenuName}
            sideMenuName={value.sideMenuName}
            totalPrice={value.totalPrice}
            id={value.key}
            menuId={value.menuId}
            totalQuantity={value.totalQuantity}
            allPrice={value.allPrice}
          />
        );
      })}
    </div>
  );
};

export default OrderItemContainer;
