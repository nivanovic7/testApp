import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import Navigation from "../../navigation/Navigation";
import { useState } from "react";

function Header() {
  const { isLoggedIn, userProfileImage } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  if (!isLoggedIn) return false;

  return (
    <div className={styles.headerWrap}>
      <div className={styles.header}>
        {isLoggedIn && (
          <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <img
              className={styles.profileImage}
              src={userProfileImage?.imageSmallSource}
              alt="profile image"
            />
            <span
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuIcon}
            >
              <img
                src={`../../assets/${isMenuOpen ? "menu.png" : "x.svg"}`}
                alt="menu icon"
              />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
