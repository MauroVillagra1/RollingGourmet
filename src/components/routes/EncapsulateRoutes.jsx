import { Navigate } from "react-router-dom";

const EncapsulateRoutes = ({ children }) => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogin")) || null;
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default EncapsulateRoutes;
