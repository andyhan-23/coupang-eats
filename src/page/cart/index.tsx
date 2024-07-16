import OrderItemContiner from "@/container/order-item-container";
import HeaderContainer from "@/container/header-container";
import Basket from "@/components/basket";
import { AppUi, UI } from "@/layout";
import useFetchVendor from "@/hooks/use-fetch-vendor";
import { ArrowBack } from "@/assets/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const naviate = useNavigate();
  const handleBack = () => {
    naviate("/");
  };
  const {
    data: vendorData,
    isLoading: vendorDataLoading,
    error: vendorDataError,
  } = useFetchVendor();
  if (vendorDataLoading) return <div>가게 데이터 로딩중입니다.</div>;
  return (
    <UI>
      <AppUi>
        <ArrowBack className="m-4" onClick={handleBack} />
        <HeaderContainer data={vendorData} />
        <OrderItemContiner />
        <Basket />
      </AppUi>
    </UI>
  );
};

export default Cart;
