import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";
import AdministratorProduct from "./components/view/administrator/administrator-product/AdministratorProduct";
import AdministratorUser from "./components/view/administrator/administrator-user/AdministratorUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Hello world</h1>}></Route>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
