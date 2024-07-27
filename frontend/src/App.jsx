import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListProductPage from "./pages/ListProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import CreateNutritionPage from "./pages/CreateNutritionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/products"
          element={<ListProductPage></ListProductPage>}
        ></Route>
        <Route
          path="/products/create"
          element={<CreateProductPage></CreateProductPage>}
        ></Route>
        <Route
          path="/products/nutrition"
          element={<CreateNutritionPage></CreateNutritionPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
