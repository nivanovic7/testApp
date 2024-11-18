import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import Navigation from "../../navigation/Navigation";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) return false;

  return <div className={styles.header}>{isLoggedIn && <Navigation />}</div>;
}

export default Header;
