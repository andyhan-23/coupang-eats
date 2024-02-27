import { Routes, Route } from "react-router-dom";
import MainPage from "./page/main";
import DetailPage from "./page/detail";
import Cart from "./page/cart";
import UpdatePage from "./page/update";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/update/:menuId/:basketId" element={<UpdatePage />} />
    </Routes>
  );
}

export default App;
