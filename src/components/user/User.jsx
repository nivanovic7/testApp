import { useSelector } from "react-redux";
import styles from "./User.module.css";

function User() {
  const { imageSmallSource } = useSelector(
    (state) => state.auth.userProfileImage
  );
  return (
    <div className={`${styles.userContainer} `}>
      <div className={`${styles.profileImageContainer} p-10`}>
        <img className={`img-50 b-radius-circle`} src={imageSmallSource} />
      </div>
      <div className={`${styles.middle} d-flex align-center gap-10`}>
        <div className={`${styles.userName} d-flex f-col mr-auto`}>
          <span>Sam smith</span> <span>@samsmih</span>
        </div>
        <button className={`d-flex align-center b-radius-round bg-transparent`}>
          <img
            className={`img-20`}
            src="../../assets/settings.svg"
            alt="settings icon"
          />
          Settings
        </button>
        <img
          className={`img-20`}
          src="../../assets/menu (1).png"
          alt="menu icon"
        />
      </div>
      <div className={`${styles.stats} d-flex space-btw`}>
        <div className={`d-flex f-col align-center`}>
          <span>2</span> <span>Pods</span>
        </div>
        <div className={`d-flex f-col align-center `}>
          <span>45</span> <span>Followers</span>
        </div>
        <div className={`d-flex f-col align-center `}>
          <span>5</span> <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default User;
