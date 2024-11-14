import styles from "./Footer.module.css";
import { useSelector } from "react-redux";

function Footer() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) return false;

  return (
    <div className={styles.footer}>
      <img src="https://pimengineering.com/images/Logo.PIM.png" alt="logo" />
      <h2>Social app</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        omnis id sequi?
      </p>
    </div>
  );
}

export default Footer;
