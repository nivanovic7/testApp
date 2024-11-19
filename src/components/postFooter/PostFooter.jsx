import styles from "./postFooter.module.css";

import { useDeleteOutfitMutation } from "../../app/api/postApiSlice";
import Comments from "../comments/Comments";

function PostFooter({ id, comments }) {
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
      <button onClick={handleDelete}>Delete Post</button>

      <Comments postId={id} comments={comments} />
    </div>
  );
}

export default PostFooter;
