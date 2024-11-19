import styles from "./PostHeader.module.css";
import { useAddToChatMutation } from "../../app/api/messagesApiSlice";
import { useSelector } from "react-redux";
const AVATAR_PLACEHOLDER_URL =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

function PostHeader({ outfit }) {
  const [addToChat] = useAddToChatMutation();
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const postUser = outfit.user[0]._id;

  console.log(outfit);

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
      </div>
      <p className={styles.desc}>{outfit.outfitDescription}</p>
    </div>
  );
}

export default PostHeader;

// OPTIONS TO ADD TO DROPDOWN ON USERNAME
// {currentUserId !== postUser && (
//   <button onClick={handleAddToChat} className={styles.addUser}>
//     Add to chat+
//   </button>
// )}

// function handleAddToChat() {
//   if (currentUserId === postUser) return;
//   addToChat(postUser);
// }
