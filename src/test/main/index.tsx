import Layout from "@/layout";
import getData from "@/model/get-data";
import SubMainPage from "../../page/sub-main";

import { useEffect, useState } from "react";

const MainPage = () => {
  const { data: store, isLoading: storeLoading } = getData(
    "storeInfo",
    "/store"
  );

  const { data: menu, isLoading: menuLoading } = getData("menuInfo", "/menu");

  const { data: menuDeatil, isLoading: detailLoading } = getData(
    "menuDetail",
    "/menu/pizzaSchoolJuyeob"
  );

  const [storeItems, setStoreItems] = useState(null);

  const [menuItems, setMenuItems] = useState(null);

  const [storeId, setStoreId] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (storeLoading && menuLoading && detailLoading) setIsError(true);
    if (!storeLoading && !menuLoading && !detailLoading) {
      setIsError(false);
      setStoreItems(store);
      setMenuItems(menu);
      const storeId = Object.keys(store);
      setStoreId(storeId);
    }
  }, [store, menu]);
  return (
    <Layout>
      {storeId.map((value) => {
        return (
          <SubMainPage
            storeId={value}
            key={value}
            storeName={storeItems[value].name}
            isError={isError}
            getMenuByStore={menu.id}
          />
        );
      })}
    </Layout>
  );
};

export default MainPage;
