import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  //valida si el usuario está loggeado o no
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  } // ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRoute;
