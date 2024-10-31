import ReactPlayer from "react-player";
import styles from "./Post.module.css";
import { useDeleteOutfitMutation } from "./postApiSlice";
import Comments from "./Comments";
import { useAddToChatMutation } from "../messages/messagesApiSlice";
import { useSelector } from "react-redux";

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

      {outfit.outfitVideos[0] && (
        <ReactPlayer
          url={outfit.outfitVideos[0].imageMediumSource}
          width="100%"
          light={outfit.outfitImages[0].imageMediumSource}
          playing={true}
          // onError={handleError}
          controls={true}
        />
      )}
      <div className={styles.postButtons}>
        <button onClick={handleDelete}>Delete Post</button>

        <Comments postId={outfit._id} comments={outfit.outfitPostComment} />
      </div>
    </div>
  );
}

export default Post;
