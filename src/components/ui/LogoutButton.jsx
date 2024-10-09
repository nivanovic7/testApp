import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTokens } from "../../utils/helpers";
import { logOut } from "../../features/auth/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logOut());
    deleteTokens();
    navigate("/login");
  }
  return (
    <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
  );
}

export default LogoutButton;
