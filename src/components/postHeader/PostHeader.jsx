import styles from "./PostHeader.module.css";
import { useAddToChatMutation } from "../../app/api/messagesApiSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDeleteOutfitMutation } from "../../app/api/postApiSlice";
const AVATAR_PLACEHOLDER_URL = "../../assets/avatar.png";

function PostHeader({ outfit }) {
  const [addToChat] = useAddToChatMutation();
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const userId = outfit.user[0]._id;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deletePost] = useDeleteOutfitMutation();

  async function handleDelete() {
    try {
      await deletePost(outfit._id).unwrap();
    } catch (err) {
      console.log(err);
    }
  }

  function handleAddToChat() {
    if (currentUserId === userId) return;
    addToChat(userId);
  }

  return (
    <div className={styles.postHeader}>
      <div className={styles.userInfo}>
        <img
          className={styles.avatar}
          src={AVATAR_PLACEHOLDER_URL}
          alt="avatar icon"
        />
        <div>
          <p className={styles.userName}> {outfit.user[0].name}</p>
          <p className={styles.created}>{outfit.created}</p>
        </div>
        <div className={styles.dropdownWrap}>
          <img
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={styles.toggle}
            src="../../assets/menu (1).png"
            alt="three dots toggle"
          />
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              {userId === currentUserId && (
                <button onClick={handleDelete}>Delete Post</button>
              )}
              {currentUserId !== userId && (
                <button onClick={handleAddToChat} className={styles.addUser}>
                  Add to chat+
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <p className={styles.desc}>{outfit.outfitDescription}</p>
    </div>
  );
}

export default PostHeader;

// OPTIONS TO ADD TO DROPDOWN ON USERNAME
