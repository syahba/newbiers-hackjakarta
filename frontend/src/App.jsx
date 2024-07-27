import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ListProductPage from "./pages/ListProductPage"
import CreateProductPage from "./pages/CreateProductPage"
import CreateProductNutritionPage from "./pages/CreateProductNutritionPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/products" element={<ListProductPage></ListProductPage>}></Route>
        <Route path="/products/create" element={<CreateProductPage></CreateProductPage>}></Route>
        <Route path="/products/create/nutrition" element={<CreateProductNutritionPage></CreateProductNutritionPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
