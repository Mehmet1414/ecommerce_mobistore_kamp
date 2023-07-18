import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/about";
import MainPage from "./pages/main";
import { useApi } from "./hook/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "./redux/CategorySlice";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ContactUs from "./pages/contact";
import ProductList from "./pages/product/ProductList";
import ProductDetail from "./pages/product/ProductDetail";
import CheckOut from "./pages/checkOut";
import CartPage from "./pages/cart";
import BlogDefault from "./pages/blog/BlogDefault";
import BlogDetail from "./pages/blog/BlogDetail";
import { setCart } from "./redux/CartSlice";

function App() {
  const api = useApi();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);
  useEffect(() => {
    (async () => {
      const categoryRespons = await api.get("shop/taxons", {
        params: {
          page: 1,
          itemsPerPage: 30,
        },
      });
      //onsole.log(">>>category verileri >>", categoryRespons.data);
      dispatch(setCategories(categoryRespons.data));
    })();

    (async () => {
      const localStrorageCartToken = localStorage.getItem("cartToken");

      if (localStrorageCartToken === null) {
        //create Token
        const cartResponse = await api.post("shop/orders", {});
        console.log(cartResponse);
        //save Token
        localStorage.setItem("cartToken", cartResponse.data.tokenValue);

        dispatch(setCart(cartResponse.data));
      } else if (localStrorageCartToken && cartState.cart === null) {
        const cartResponse = await api.get(
          "shop/orders/" + localStrorageCartToken
        );
        dispatch(setCart(cartResponse.data));
      }
    })();
    
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="contact" element={<ContactUs />} />
        <Route path="product">
          <Route path="list/:code" element={<ProductList />} />
          <Route path="detail/:code" element={<ProductDetail />} />
        </Route>
        <Route path="checkout" element={<CheckOut />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="blog">
          <Route path="default" element={<BlogDefault />} />
          <Route path="detail" element={<BlogDetail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
