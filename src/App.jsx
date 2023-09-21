import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/view/home/Home";
import SignUp from "./components/view/signup/SignUp";
import Login from "./components/view/login/Login";
import ProductDetail from "./components/view/productdetail/ProductDetail";
import CardProgrammer from "./components/view/programmer/CardProgrammer";
import EncapsulateRoutes from "./components/routes/EncapsulateRoutes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
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
