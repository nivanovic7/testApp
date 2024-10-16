import { useSelector } from "react-redux";

import CustomNavLink from "./ui/CustomNavLink";
import { getNavLinksByStatus } from "../utils/helpers";
import LogoutButton from "./ui/LogoutButton";

function Navigation() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <ul style={{ display: "flex", justifyContent: "center" }}>
      {isLoggedIn
        ? getNavLinksByStatus("private").map((link) => (
            <CustomNavLink key={link.path} path={link.path} text={link.text} />
          ))
        : getNavLinksByStatus("public").map((link) => (
            <CustomNavLink key={link.path} path={link.path} text={link.text} />
          ))}
      {isLoggedIn && <LogoutButton />}
    </ul>
  );
}

export default Navigation;
