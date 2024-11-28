import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import Navigation from "../../navigation/Navigation";
import { useState } from "react";

function Header() {
  const { isLoggedIn, userProfileImage } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  if (!isLoggedIn) return false;

  return (
    <div className={`${styles.headerWrap} d-flex px-20-md box-shadow-primary`}>
      <div
        className={`${styles.header} d-flex align-center mx-auto max-width-primary w-90 px-20 `}
      >
        {isLoggedIn && (
          <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <img
              className={`${styles.profileImage} img-48 b-radius-circle`}
              src={
                userProfileImage?.imageSmallSource || "../../assets/avatar.png"
              }
              alt="profile image"
            />
            <span
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuIcon}
            >
              <img
                className={`img-48 `}
                src={`../../assets/${isMenuOpen ? "menu.svg" : "x.svg"}`}
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
