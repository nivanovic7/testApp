import styles from "./postFooter.module.css";

import { useDeleteOutfitMutation } from "../../app/api/postApiSlice";
import Comments from "../comments/Comments";
import { useSelector } from "react-redux";
import { useState } from "react";

function PostFooter({ id, comments, userId }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const [isOpen, setIsOpen] = useState(false);
  async function handleDelete() {
    try {
      await deletePost(id).unwrap();
    } catch (err) {
      console.log(err);
    }
  }
  const [deletePost] = useDeleteOutfitMutation();
  return (
    <div className={styles.postFooter}>
      <div className={styles.footerButtons}>
        <button
          className={styles.button}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <img src="../../public/assets/comment.svg" alt="comm" />
          Comments({comments.length})
        </button>
        {userId === currentUserId && (
          <button onClick={handleDelete}>Delete Post</button>
        )}
      </div>
      {isOpen && <Comments postId={id} comments={comments} />}
    </div>
  );
}

export default PostFooter;
