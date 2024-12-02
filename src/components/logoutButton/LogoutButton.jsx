import styles from "./LogoutButton.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../app/slices/authSlice";
import { apiSlice } from "../../app/api/apiSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logOut());
    dispatch(apiSlice.util.resetApiState());
    navigate("/login");
  }
  return (
    <button
      className={`${styles.logoutButton} bg-accent-primary border-0 clr-neutral-100 px-20 fs-300 fw-700`}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
