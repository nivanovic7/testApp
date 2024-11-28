import styles from "./CustomNavLink.module.css";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

const BASE_PATH = "../../../assets/";

function CustomNavLink({ path, text }) {
  return (
    <li className={`{styles.link} d-flex align-center`}>
      <NavLink to={`/${path}`}>
        {text ? capitalizeFirstLetter(text) : "Profile"}
      </NavLink>
      <img
        className={`img-20 `}
        src={`${BASE_PATH}/${path}.svg
        `}
        alt={`${path} icon`}
      />
    </li>
  );
}

export default CustomNavLink;
