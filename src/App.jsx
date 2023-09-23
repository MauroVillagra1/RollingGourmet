import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/cummon/navbar/NavBar";
import Home from "./components/view/home/Home";
import Login from "./components/view/login/Login";
import SignUp from "./components/view/signup/SignUp";
import ProductDetail from "./components/view/productdetail/ProductDetail";
import CardProgrammer from "./components/view/programmer/CardProgrammer";
import EncapsulateRoutes from "./components/routes/EncapsulateRoutes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useEffect, useState } from "react";
import Order from "./components/view/order/Order"
import Order2 from "./components/view/order/order/Order"
import CardOrder from "./components/view/order/orderCard/CardOrder"
import HomeOrder from "./components/view/order/orderHome/OrderHome"
import EditProduct from "./components/view/administrator/edit/EditProduct";


function App() {
  const [userActive, setUserActive] = useState({})
  useEffect(()=>{
    let x = {
      _id:"123"
    }
    setUserActive(x)
  },[])

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home userActive={userActive}></Home>}></Route>
        <Route exact path="/my-orders" element={<Order2 userActive={userActive}></Order2>}></Route>
        <Route exact path="/Edit" element={<EditProduct></EditProduct>}></Route>
        <Route exact path="/sing-up" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/about-us" element={<CardProgrammer />}></Route>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
