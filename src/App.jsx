import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/cummon/navbar/NavBar";
import Home from "./components/view/home/Home";
import Login from "./components/view/login/Login";
import SignUp from "./components/view/signup/SignUp";
import ProductDetail from "./components/view/productdetail/ProductDetail";
import AboutUs from "./components/view/programmer/CardProgrammer";
import Order from "./components/view/order/Order";
import Footer from "./components/cummon/footer/Footer";
import EncapsulateRoutes from "./components/routes/EncapsulateRoutes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useState } from "react";

function App() {
  const [userActive, setUserActive] = useState({});
  // useEffect(()=>{
  //   sessionStorage.setItem("userActive", JSON.stringify(userActive));
  // },[userActive])

  return (
    <BrowserRouter>
      <NavBar></NavBar>
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
          element={<Order userActive={userActive}></Order>}
        ></Route>

        <Route exact path="/sing-up" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
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
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
