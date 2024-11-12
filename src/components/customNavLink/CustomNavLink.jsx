import { NavLink } from "react-router-dom";

function CustomNavLink({ path, text }) {
  return (
    <li>
      <NavLink to={`/${path}`}>{text}</NavLink>
    </li>
  );
}

export default CustomNavLink;
