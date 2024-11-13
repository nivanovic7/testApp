import { useSelector } from "react-redux";
import Navigation from "../../navigation/Navigation";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../utils/helpers";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const currentPath = useLocation();
  const currentPage = currentPath.pathname.split("/")[1];

  return (
    <div>
      {isLoggedIn && <Navigation />}
      <h1>{capitalizeFirstLetter(currentPage)}</h1>
      <p>Home{currentPath.pathname.replaceAll("/", "-->")}</p>
    </div>
  );
}

export default Header;
