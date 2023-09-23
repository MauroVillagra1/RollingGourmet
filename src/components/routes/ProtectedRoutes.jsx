import { Routes, Route } from "react-router-dom";
import Administrator from "../view/administrator/Administrator";
import CreateProduct from "../view/administrator/create/CreateProduct";
import EditProduct from "../view/administrator/edit/EditProduct";
import AdministratorOrder from "../view/administrator/administrator-order/AdministratorOrder";
import AdministratorUser from "../view/administrator/administrator-user/AdministratorUser";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrator />}></Route>
      <Route exact path="/create" element={<CreateProduct />}></Route>
      <Route exact path="/edit/:id" element={<EditProduct />}></Route>
      <Route exact path="/order" element={<AdministratorOrder />}></Route>
      <Route exact path="/user" element={<AdministratorUser />}></Route>
    </Routes>
  );
};

export default ProtectedRoutes;
