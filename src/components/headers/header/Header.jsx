import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import Navigation from "../../navigation/Navigation";
import { useState } from "react";

function Header() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  if (!isLoggedIn) return false;

  return (
    <div className={styles.header}>
      {isLoggedIn && (
        <>
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <span>{user.userName}</span>
          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuIcon}
          >
            <img
              src={`../../public/assets/${isMenuOpen ? "menu.png" : "x.svg"}`}
              alt="menu icon"
            />
          </span>
        </>
      )}
    </div>
  );
}

export default Header;
