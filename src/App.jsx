import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";
import AdministratorProduct from "./components/view/administrator/administrator-product/AdministratorProduct";
import AdministratorUser from "./components/view/administrator/administrator-user/AdministratorUser";
import AdministratorOrder from "./components/view/administrator/administrator-order/AdministratorOrder";
import Home from "./components/view/home/Home"
import Order from "./components/view/order/order/Order"
import OrderHome from "./components/view/order/orderHome/OrderHome";
import { useEffect, useState } from "react";

function App() {
  const user_ID_SessionStorage = sessionStorage.getItem("user_ID");
  const user_ID = JSON.parse(user_ID_SessionStorage);
const [userActive, setUserActive] = useState(user_ID || {})

useEffect(()=>{
   var user_ID = {
      _id: "123"
    }    
    localStorage.setItem("user_ID", user_ID);
    setUserActive(user_ID)
},[])
  return (
    <>
    {/* <Home></Home> */}
    {/* <CreateProduct></CreateProduct> */}
    
    {/* <CardProduct></CardProduct> */}
    {/* <CardOrder></CardOrder> */}
    {/* <Order></Order> */}
    {/* <OrderHome></OrderHome> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home userActive={userActive}></Home>}></Route>
        <Route exact path="/administrator" element={<Administrator />}></Route>
        <Route exact path="/Order" element={<Order userActive={userActive} />}></Route>
        <Route exact path="/Order/Home" element={<OrderHome />}></Route>

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
