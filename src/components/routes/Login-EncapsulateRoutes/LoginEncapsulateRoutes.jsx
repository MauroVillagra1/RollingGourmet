import { Navigate } from "react-router-dom";

const LoginEncapsulateRoutes = ({ children }) => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userActive")) || null;
  if (usuarioLogueado) {
    return <Navigate to={"/"}></Navigate>;
  } else {
    return children;
  }
};

export default LoginEncapsulateRoutes;
