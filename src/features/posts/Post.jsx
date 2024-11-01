import styles from "./Post.module.css";
import { useDeleteOutfitMutation } from "./postApiSlice";
import Comments from "./Comments";
import { useAddToChatMutation } from "../messages/messagesApiSlice";
import { useSelector } from "react-redux";
import CustomCarousel from "../../components/CustomCarousel";

function Post({ outfit }) {
  const [deletePost] = useDeleteOutfitMutation();
  const [addToChat] = useAddToChatMutation();
  const currentUserId = useSelector((state) => state.auth.user.sub);

  function handleAddToChat() {
    if (currentUserId === outfit.user[0]._id) return;
    addToChat(outfit.user[0]._id);
  }

  async function handleDelete() {
    try {
      await deletePost(outfit._id).unwrap();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={styles.post}>
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
      <CustomCarousel
        outfitVideos={outfit.outfitVideos}
        outfitImages={outfit.outfitImages}
      />
      <div className={styles.postButtons}>
        <button onClick={handleDelete}>Delete Post</button>

        <Comments postId={outfit._id} comments={outfit.outfitPostComment} />
      </div>
    </div>
  );
}

export default Post;
