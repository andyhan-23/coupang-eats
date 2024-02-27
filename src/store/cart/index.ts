import { createSlice } from "@reduxjs/toolkit";

interface ItemsT {
  items: undefined[];
}

type initialStateType = {
  id: string;
  mainMenuName: string;
  quantity: number;
  subMenuName: string;
  requiredPrice: number;
  sideMenuName: string[];
  optionalPrice: number;
  totalPrice: number;
  menuId: string;
  totalQuantity: number;
  isUpdate: boolean;
  items: ItemsT;
  nextItemId: number;
};

const initialState: any = {
  items: [],
  nextItemId: 1,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const newItem = {
        id: `basketItem${state.nextItemId}`,
        totalQuantity: action.payload.totalQuantity,
        mainMenuName: action.payload.name,
        quantity: action.payload.quantity,
        subMenuName: action.payload.subMenuName,
        requiredPrice: action.payload.requiredPrice,
        sideMenuName: action.payload.sideMenuName,
        optionalPrice: action.payload.optionalPrice,
        totalPrice: action.payload.totalPrice,
        menuId: action.payload.id,
        allPrice: action.payload.totalPrice * action.payload.totalQuantity,
        key: state.nextItemId,
        isUpdate: false,
      };
      state.items.push(newItem);
      state.nextItemId += 1;
    },
    addQuantity(state, action) {
      const findItem = state.items.find(
        value => value.id === `basketItem${action.payload}`
      );
      findItem.totalQuantity += 1;
      findItem.allPrice = findItem.totalPrice * findItem.totalQuantity;
    },
    minusQuantity(state, action) {
      const findItem = state.items.find(
        value => value.id === `basketItem${action.payload}`
      );
      findItem.totalQuantity -= 1;
      findItem.allPrice = findItem.totalPrice * findItem.totalQuantity;
      const id = state.items.findIndex(v => {
        return v.id === `basketItem${action.payload}`;
      });

      if (findItem.totalQuantity === 0) {
        state.items.splice(id, 1);
      }
    },
    isUpdate(state, action) {
      const findItem = state.items.find(
        value => value.id === `basketItem${action.payload}`
      );
      findItem.isUpdate = true;
    },
  },
});

export const { addCart, addQuantity, minusQuantity, isUpdate } = cart.actions;

export default cart;
