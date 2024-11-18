import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";

import { getNavLinksByStatus } from "../../utils/helpers";
import LogoutButton from "../logoutButton/LogoutButton";
import CustomNavLink from "../customNavLink/CustomNavLink";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { Link } from "react-router-dom";

function Navigation() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const status = isLoggedIn ? "private" : "public";

  return (
    <ul className={styles.nav}>
      {getNavLinksByStatus(status).map((link) => (
        <CustomNavLink key={link.path} path={link.path} text={link.text} />
      ))}

      {isLoggedIn && (
        <>
          <LogoutButton />
          <li>
            <Link to="/createPost">
              <ButtonWithIcon
                text="New post"
                iconSrc="../../../public/assets/plus.png"
              />
            </Link>
          </li>
        </>
      )}

      <li>{user.userName}</li>
    </ul>
  );
}

export default Navigation;
