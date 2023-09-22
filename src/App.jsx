import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";
import AdministratorProduct from "./components/view/administrator/administrator-product/AdministratorProduct";
import AdministratorUser from "./components/view/administrator/administrator-user/AdministratorUser";
import AdministratorOrder from "./components/view/administrator/administrator-order/AdministratorOrder";
import NavBar from "./components/cummon/navbar/NavBar";
import Home from "./components/view/home/Home";
import Login from "./components/view/login/Login";

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Login></Login>
    </BrowserRouter>
  );
}

export default App;
