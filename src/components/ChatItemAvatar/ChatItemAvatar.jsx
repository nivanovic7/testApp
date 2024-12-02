import { useSelector } from "react-redux";
import styles from "./ChatItemAvatar.module.css";
import { getAvatarImages } from "../../utils/helpers";

const defaultPath = "../../assets/avatar.png";

function ChatItemAvatar({ members }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const images = getAvatarImages(members, currentUserId, defaultPath);

  function getAvatars() {
    if (images.length === 0 || images.length === 1) {
      return (
        <div className={`${styles.singleImageContainer} d-flex align-center`}>
          <img
            className="b-radius-circle img-50"
            src={images.length === 0 ? defaultPath : images[0]}
            alt="avatar"
          />
        </div>
      );
    }

    return (
      <div className={`${styles.groupImageContainer} d-flex align-center`}>
        <img className="b-radius-circle img-50" src={images[0]} alt="avatar" />
        <img className="b-radius-circle img-30" src={images[1]} alt="avatar" />
      </div>
    );
  }

  return getAvatars();
}

export default ChatItemAvatar;
