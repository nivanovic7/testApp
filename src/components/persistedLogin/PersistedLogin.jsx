import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setCredentials } from "../../app/slices/authSlice";

function PersistedLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData?.data.refreshToken) {
      dispatch(setCredentials(userData));
      navigate("/");
    }
  }, [dispatch, navigate]);

  return <Outlet />;
}

export default PersistedLogin;
