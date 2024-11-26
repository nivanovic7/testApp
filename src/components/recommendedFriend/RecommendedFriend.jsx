import styles from "./RecommendedFriend.module.css";

const AVATAR_PLACEHOLDER_URL = "../../assets/avatar.png";

function RecommendedFriend({ friend }) {
  return (
    <div
      className={`${styles.friend} d-flex gap-10 align-center`}
      key={friend._id}
    >
      <img
        className={`img-56 b-radius-circle`}
        src={
          friend.userProfileImage
            ? friend.userProfileImage.imageSmallSource
            : AVATAR_PLACEHOLDER_URL
        }
        alt="profile img"
      />
      <div className={`d-flex f-col gap-10 `}>
        <div className={` d-flex gap-10`}>
          <span className={` fw-700`}>
            {friend.userFirstName} {friend.userLastName}
          </span>
          <span className={` clr-neutral-400`}>@{friend.userName}</span>
        </div>
        <button
          className={`${styles.button} b-radius-round bg-accent-primary clr-neutral-100`}
        >
          Follow
        </button>
      </div>
    </div>
  );
}

export default RecommendedFriend;
