import { Routes, Route } from "react-router-dom";
import MainPage from "./page/main";
import DetailPage from "./page/detail";
import Cart from "./page/cart";
import UpdatePage from "./page/update";
import StoreInformationPage from "./page/store-information";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/update/:menuId/:basketId" element={<UpdatePage />} />
      <Route path="/storeinfo/" element={<StoreInformationPage />} />
    </Routes>
  );
}

export default App;
