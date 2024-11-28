import { useSelector } from "react-redux";
import styles from "./User.module.css";

function User() {
  const userImage = useSelector((state) => state.auth.userProfileImage);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className={`${styles.userContainer} b-radius-10 box-shadow-tertiary `}>
      <div className={`${styles.profileImageContainer} p-15`}>
        <img
          className={`img-90 b-radius-circle`}
          src={userImage?.imageSmallSource || "../../assets/avatar.png"}
        />
      </div>
      <div className={`${styles.middle} d-flex align-center gap-10 p-15`}>
        <div className={`${styles.userName} d-flex f-col mr-auto`}>
          <span className="fs-600 ">{user.userName}</span>
          <span className="clr-neutral-300">@{user.userName}</span>
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
      <div className={`${styles.stats} d-flex space-btw p-15`}>
        <div className={`d-flex f-col align-center fs-600 clr-accent-primary`}>
          <span>2</span> <span>Pods</span>
        </div>
        <div className={`d-flex f-col align-center fs-600 clr-accent-primary`}>
          <span className="">45</span>
          <span>Followers</span>
        </div>
        <div className={`d-flex f-col align-center fs-600 clr-accent-primary `}>
          <span>5</span>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default User;
