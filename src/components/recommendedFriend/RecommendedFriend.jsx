import styles from "./RecommendedFriend.module.css";

const AVATAR_PLACEHOLDER_URL = "../../assets/avatar.png";

function RecommendedFriend({ friend }) {
  return (
    <div className={styles.friend} key={friend._id}>
      <img
        src={
          friend.userProfileImage
            ? friend.userProfileImage.imageSmallSource
            : AVATAR_PLACEHOLDER_URL
        }
        alt="profile img"
      />
      <div>
        <div>
          <span className={styles.fullName}>
            {friend.userFirstName} {friend.userLastName}
          </span>
          <span className={styles.userName}> @{friend.userName}</span>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
}

export default RecommendedFriend;
