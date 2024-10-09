import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function GuardRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default GuardRoute;
