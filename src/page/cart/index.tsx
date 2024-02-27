import OrderItemContiner from "@/container/order-item-container";
import HeaderContainer from "@/container/header-container";
import Basket from "@/components/basket";
import Layout from "@/layout";
import useFetchVendor from "@/hooks/use-fetch-vendor";

const Cart = () => {
  const {
    data: vendorData,
    isLoading: vendorDataLoading,
    error: vendorDataError,
  } = useFetchVendor();
  if (vendorDataLoading) return <div>가게 데이터 로딩중입니다.</div>;
  return (
    <Layout>
      <HeaderContainer data={vendorData} />
      <OrderItemContiner />
      <Basket />
    </Layout>
  );
};

export default Cart;
