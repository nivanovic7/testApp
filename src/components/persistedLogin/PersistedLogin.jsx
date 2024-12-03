import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  setCredentials,
  setUserProfileImage,
} from "../../app/slices/authSlice";

function PersistedLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userProfileImage = JSON.parse(
      localStorage.getItem("userProfileImage")
    );
    if (userData?.data?.refreshToken) {
      dispatch(setCredentials(userData));
      navigate("/");
    }

    if (userProfileImage) {
      dispatch(setUserProfileImage(userProfileImage));
    }
  }, [dispatch, navigate]);

  return <Outlet />;
}

export default PersistedLogin;
