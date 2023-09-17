
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";
import AdministratorProduct from "./components/view/administrator/administrator-product/AdministratorProduct";
import AdministratorUser from "./components/view/administrator/administrator-user/AdministratorUser";
import AdministratorOrder from "./components/view/administrator/administrator-order/AdministratorOrder";
import Home from "./components/view/home/Home"
function App() {
  return (
    <>
    {/* <CreateProduct></CreateProduct> */}
    {/* <Order></Order> */}
    {/* <CardProduct></CardProduct> */}
    {/* <CardOrder></CardOrder> */}
    <BrowserRouter>
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
    </BrowserRouter>
    </>
  )

    
}

export default App;
