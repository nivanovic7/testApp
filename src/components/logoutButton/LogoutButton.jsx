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
    <li className={styles.logoutButtonItem}>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </li>
  );
}

export default LogoutButton;
