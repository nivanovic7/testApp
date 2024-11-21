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
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`${styles.nav} ${styles[isMenuOpen ? "toggleNav" : ""]}`}
    >
      {getNavLinksByStatus(status).map((link) => (
        <CustomNavLink key={link.path} path={link.path} text={link.text} />
      ))}
      <>
        <li className={styles.loginWrap}>
          <LogoutButton />
        </li>

        <li>
          <Link to="/createPost">
            <ButtonWithIcon
              text="New post"
              iconSrc="../../../assets/plus.png"
            />
          </Link>
        </li>
      </>
    </ul>
  );
}

export default Navigation;
