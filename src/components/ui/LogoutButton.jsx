import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../app/api/authSlice";
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
    <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
  );
}

export default LogoutButton;
