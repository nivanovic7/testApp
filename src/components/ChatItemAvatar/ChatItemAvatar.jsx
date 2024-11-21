import { useSelector } from "react-redux";
import styles from "./ChatItemAvatar.module.css";

const avatarPath = "../../assets/avatar.png";

function ChatItemAvatar({ members }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const images = members
    .filter((member) => member._id !== currentUserId)
    .map((member) =>
      member.userProfileImage
        ? member.userProfileImage.imageSmallSource
        : avatarPath
    );

  function getAvatars() {
    if (images.length === 0) {
      return (
        <div className={styles.singleImageContainer}>
          <img src={avatarPath} alt="avatar" />
        </div>
      );
    }
    if (images.length === 1) {
      return (
        <div className={styles.singleImageContainer}>
          <img src={images[0]} alt="avatar" />
        </div>
      );
    }

    return (
      <div className={styles.groupImageContainer}>
        <img src={images[0]} alt="avatar" />
        <img src={images[1]} alt="avatar" />
      </div>
    );
  }
  return getAvatars();
}

export default ChatItemAvatar;
