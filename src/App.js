import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import MainPage from "./Layer/MainPage";
import HomePage from "./pages/HomePage";
import CartProvider from "./CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

    </Route>
  )
);


function App() {
  return (
    <CartProvider>
    <div>
      <RouterProvider router={router} />
    </div>
  </CartProvider>
  )
}

export default App;