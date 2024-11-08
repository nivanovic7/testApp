import styles from "./PostHeader.module.css";
import { useAddToChatMutation } from "../messages/messagesApiSlice";
import { useSelector } from "react-redux";

function PostHeader({ outfit }) {
  const [addToChat] = useAddToChatMutation();
  const currentUserId = useSelector((state) => state.auth.user.sub);

  function handleAddToChat() {
    //user cannot add himself to chat
    if (currentUserId === outfit.user[0]._id) return;
    addToChat(outfit.user[0]._id);
  }
  return (
    <div className={styles.postHeader}>
      <p>{outfit.outfitDescription}</p>
      <p className={styles.userName}>
        by: {outfit.user[0].name}
        {currentUserId !== outfit.user[0]._id && (
          <button onClick={handleAddToChat} className={styles.addUser}>
            Add to chat+
          </button>
        )}
      </p>
    </div>
  );
}

export default PostHeader;
