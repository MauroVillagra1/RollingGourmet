import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import NavBar from "./components/cummon/navbar/NavBar";
import Home from "./components/view/home/Home";
import Login from "./components/view/login/Login";
import SignUp from "./components/view/signup/SignUp";
import ProductDetail from "./components/view/productdetail/ProductDetail";
import CardProgrammer from "./components/view/programmer/CardProgrammer";
import EncapsulateRoutes from "./components/routes/EncapsulateRoutes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useEffect, useState } from "react";
import Order from "./components/view/order/Order";
import Order2 from "./components/view/order/order/Order";
import CardOrder from "./components/view/order/orderCard/CardOrder";
import HomeOrder from "./components/view/order/orderHome/OrderHome";
import EditProduct from "./components/view/administrator/edit/EditProduct";
import Footer from "./components/cummon/footer/Footer";
import MyAccount from "./components/view/my-account/MyAccount";
import ProtectedRoutes_MyAccount from "./components/routes/my-account-routes/ProtectedRoutes_MyAccount";
import LoginEncapsulateRoutes from "./components/routes/Login-EncapsulateRoutes/LoginEncapsulateRoutes";
import Error404 from './components/view/error404/Error404'

function App() {
  const [userActive, setUserActive] = useState({});
  const [reload, setReload] = useState([]);

  const reloadNav = () => {
    window.location.reload();
  };

  return (
    <BrowserRouter>
      <NavBar setReload={setReload} reload={reload}></NavBar>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home userActive={userActive} setUserActive={setUserActive}></Home>
          }
        ></Route>
        <Route
          exact
          path="/my-orders"
          element={<Order2 userActive={userActive}></Order2>}
        ></Route>
        <Route exact path="/sing-up" element={<LoginEncapsulateRoutes><SignUp /></LoginEncapsulateRoutes>}></Route>
        <Route
          exact
          path="/login"
          element={<LoginEncapsulateRoutes> <Login reloadNav={reloadNav} /></LoginEncapsulateRoutes>
          }></Route>
        <Route exact path="/about-us" element={<CardProgrammer />}></Route>
        <Route
          exact
          path="my-account/*"
          element={
            <EncapsulateRoutes>
              <ProtectedRoutes_MyAccount></ProtectedRoutes_MyAccount>
            </EncapsulateRoutes>
          }
        ></Route>
        <Route
          exact
          path="/productDetail/:id"
          element={<ProductDetail />}
        ></Route>
        <Route
          path="/administrator/*"
          element={
            <EncapsulateRoutes>
              <ProtectedRoutes></ProtectedRoutes>
            </EncapsulateRoutes>
          }
        ></Route>
        <Route exact path="/error404" element={<Error404 />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;