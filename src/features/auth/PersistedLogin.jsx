import { useEffect } from "react";
import { setCredentials } from "./authSlice";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function PersistedLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData?.refreshToken) {
      dispatch(setCredentials(userData));
      navigate("/profile");
    }
  }, [dispatch, navigate]);

  return <Outlet />;
}

export default PersistedLogin;
