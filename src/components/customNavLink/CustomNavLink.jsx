import styles from "./CustomNavLink.module.css";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

const BASE_PATH = "../../../assets/";

function CustomNavLink({ path, text }) {
  return (
    <li className={styles.link}>
      <img
        src={`${BASE_PATH}${path}.png
        `}
        alt={`${path} icon`}
      />
      <NavLink to={`/${path}`}>{capitalizeFirstLetter(text)}</NavLink>
    </li>
  );
}

export default CustomNavLink;
