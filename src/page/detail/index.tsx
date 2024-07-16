import MenuContainer from "@/container/menu-container";
import MenuOptionContainer from "@/container/menu-option-container";
import BasketContainer from "@/container/basket-container";
import { AppUi, UI } from "@/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "@/store/menu";

import { useParams } from "react-router-dom";
const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setInitialState());
    };
  }, []);
  return (
    <UI>
      <AppUi>
        <MenuContainer menuId={id} basketId={id} />
        <MenuOptionContainer id={id} />
        <BasketContainer id={id} />
      </AppUi>
    </UI>
  );
};

export default DetailPage;
