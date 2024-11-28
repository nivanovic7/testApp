import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";

import { getNavLinksByStatus } from "../../utils/helpers";
import LogoutButton from "../logoutButton/LogoutButton";
import CustomNavLink from "../customNavLink/CustomNavLink";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { Link } from "react-router-dom";

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const status = isLoggedIn ? "private" : "public";

  return (
    <ul
      onClick={() => setIsMenuOpen(false)}
      className={`${styles.nav} ${
        styles[isMenuOpen ? "toggleNav" : ""]
      } d-flex align-center gap-20 `}
    >
      {getNavLinksByStatus(status).map((link) => (
        <CustomNavLink key={link.path} path={link.path} text={link.text} />
      ))}
      <>
        <li className={`${styles.loginWrap} ml-auto`}>
          <LogoutButton />
        </li>

        <li>
          <Link to="/createPost">
            <ButtonWithIcon
              text="Create post"
              iconSrc="../../../assets/plus.svg"
            />
          </Link>
        </li>
      </>
    </ul>
  );
}

export default Navigation;
