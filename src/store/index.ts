import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import menu from "./menu";
import cart from "./cart";
import vendor from "./vendor";

const reducers = combineReducers({
  cart: cart.reducer,
});

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: {
    vendor: vendor,
    menu: menu,
    persistedReducer,
  },
});
