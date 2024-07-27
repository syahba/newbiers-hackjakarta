import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ListProductPage from "./pages/ListProductPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/products" element={<ListProductPage></ListProductPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
