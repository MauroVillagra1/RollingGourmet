import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/cummon/navbar/NavBar";
import Home from "./components/view/home/Home";
import Login from "./components/view/login/Login";
import SignUp from "./components/view/signup/SignUp";
import ProductDetail from "./components/view/productdetail/ProductDetail";
import Order from "./components/view/order/Order";
import Footer from "./components/cummon/footer/Footer";
import EncapsulateRoutes from "./components/routes/EncapsulateRoutes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useState } from "react";
import Orders from "./components/view/order/order/Orders";
import ProtectedRoutes_MyAccount from "./components/routes/my-account-routes/ProtectedRoutes_MyAccount";
import LoginEncapsulateRoutes from "./components/routes/Login-EncapsulateRoutes/LoginEncapsulateRoutes";
import AboutUs from "./components/view/AboutUs"
import Error from "./components/view/error404/Error404"
import Error404 from "./components/view/error404/Error404";
import { useEffect } from "react";

function App() {
  const [reload, setReload] = useState([]);
  const [userActive, setUserActive] = useState({})
  const reloadNav = () => {
    window.location.reload();
  };

  useEffect(()=>{
    const sessionP = JSON.parse(sessionStorage.getItem("userActive"))
    if (sessionP)
    {
      localStorage.setItem("userActive2", JSON.stringify(sessionP));
    }
  },[userActive])



  useEffect(() => {
    const sessionP = JSON.parse(sessionStorage.getItem("userActive"));
    const localStorageData = JSON.parse(localStorage.getItem("userActive2"));
  
    if (localStorageData) {
      sessionStorage.setItem("userActive", JSON.stringify(localStorageData));
    } else if (sessionP) {
      localStorage.setItem("userActive2", JSON.stringify(sessionP));
    }

  }, []);


  return (
    <BrowserRouter>
      <NavBar setReload={setReload} userActive={userActive} reload={reload}></NavBar>
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
          element={<Orders userActive={userActive}></Orders>}
        ></Route>
        <Route
          exact
          path="/sing-up"
          element={
            <LoginEncapsulateRoutes>
              <SignUp />
            </LoginEncapsulateRoutes>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <LoginEncapsulateRoutes>
              <Login reloadNav={reloadNav} setUserActive={setUserActive}/>
            </LoginEncapsulateRoutes>
          }
        ></Route>
        <Route exact path="/about-us" element={<AboutUs></AboutUs>}></Route>
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
        <Route
          path="*"
          element={
            <Error404></Error404>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
