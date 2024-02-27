import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
  subMenuName: "",
  sideMenuName: [],
  requiredPrice: 0,
  optionalPrice: 0,
  isChecked: false,
  isRed: false,
  previousQuantity: 0,
};

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addQuantity(state, action) {
      if (action.payload?.isUpdate) {
        state.previousQuantity = action.payload.previousQuantity;
        state.previousQuantity += 1;
      } else state.quantity += 1;
    },
    minusQuantity(state) {
      state.quantity -= 1;
    },
    radioButton(state, action) {
      state.requiredPrice = action.payload.price;
      state.subMenuName = action.payload.name;
      state.isChecked = action.payload.isChecked;
    },
    checkBox(state, action) {
      if (action.payload.check) {
        state.optionalPrice += action.payload.price;
        const obj = {};
        obj.price = action.payload.price;
        obj.name = action.payload.name;
        //state.sideMenuName.push(action.payload.name);
        state.sideMenuName.push(obj);
      } else {
        state.optionalPrice -= action.payload.price;
        state.sideMenuName = state.sideMenuName.filter(
          (item) => item.name !== action.payload.name
        );
      }
    },
    setInitialState: () => initialState,
    changeColor(state) {
      state.isRed = true;
    },
  },
});

export const {
  addQuantity,
  minusQuantity,
  radioButton,
  checkBox,
  setInitialState,
  changeColor,
} = menu.actions;

export default menu.reducer;
