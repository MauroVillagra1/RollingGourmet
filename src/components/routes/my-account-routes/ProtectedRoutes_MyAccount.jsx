import { Routes, Route } from "react-router-dom";
import MyAccount from "../../view/my-account/MyAccount";
import OrderHome from "../../view/order/orderHome/OrderHome";

const ProtectedRoutes_MyAccount = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MyAccount></MyAccount>}></Route>
      <Route exact path="/orders" element={<OrderHome></OrderHome>}></Route>

    </Routes>
  );
};

export default ProtectedRoutes_MyAccount;
