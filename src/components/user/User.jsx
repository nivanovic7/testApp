import styles from "./User.module.css";

function User() {
  return (
    <div className={styles.userContainer}>
      <div className={styles.bgImage}>
        <img src="../../assets/avatar.png" alt="profile image" />
      </div>
      <div className={styles.middle}>
        <div className={styles.userName}>
          <span>Sam smith</span> <span>@samsmih</span>
        </div>
        <button>
          <img src="../../assets/settings.svg" alt="settings icon" />
          Settings
        </button>
        <img src="../../assets/menu (1).png" alt="menu icon" />
      </div>
      <div className={styles.stats}>
        <div>
          <span>2</span> <span>Pods</span>
        </div>
        <div>
          <span>45</span> <span>Followers</span>
        </div>
        <div>
          <span>5</span> <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default User;
