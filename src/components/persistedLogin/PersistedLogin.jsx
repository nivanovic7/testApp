import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setCredentials } from "../../app/slices/authSlice";

function PersistedLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData?.refreshToken) {
      dispatch(setCredentials(userData));
      navigate("/dashboard");
    }
  }, [dispatch, navigate]);

  return <Outlet />;
}

export default PersistedLogin;
