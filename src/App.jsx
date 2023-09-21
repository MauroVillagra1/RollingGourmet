import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";
import AdministratorProduct from "./components/view/administrator/administrator-product/AdministratorProduct";
import AdministratorUser from "./components/view/administrator/administrator-user/AdministratorUser";
import AdministratorOrder from "./components/view/administrator/administrator-order/AdministratorOrder";

import Home from "./components/view/home/Home";
{/*No olvidar borrar navbar, footer y sus respectivos imports antes del pull request final!!!*/}
import NavBar from "./components/cummon/navbar/NavBar";
import Footer from "./components/cummon/footer/Footer";


function App() {
  return (
    <BrowserRouter>
    {/*No olvidar borrar navbar, footer y sus respectivos imports antes del pull request final!!!*/}
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/administrator" element={<Administrator />}></Route>
        <Route
          exact
          path="/administrator/products"
          element={<AdministratorProduct />}
        ></Route>
        <Route
          exact
          path="/administrator/users"
          element={<AdministratorUser />}
        ></Route>
        <Route
          exact
          path="/administrator/orders"
          element={<AdministratorOrder />}
        ></Route>
      </Routes>
      {/*No olvidar borrar navbar, footer y sus respectivos imports antes del pull request final!!!*/}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
