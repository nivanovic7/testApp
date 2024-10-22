import ReactPlayer from "react-player";
import styles from "./Post.module.css";
import { useDeleteOutfitMutation } from "./postApiSlice";
import Comments from "./Comments";

function Post({ outfit }) {
  const [deletePost] = useDeleteOutfitMutation();

  async function handleDelete(id) {
    try {
      await deletePost(id).unwrap();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={styles.post} key={outfit._id}>
      <div className={styles.postHeader}>
        <p>{outfit.outfitDescription}</p> <p>by: {outfit.user[0].name}</p>
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
        <button onClick={() => handleDelete(outfit._id)}>Delete Post</button>

        <Comments postId={outfit._id} comments={outfit.outfitPostComment} />
      </div>
    </div>
  );
}

export default Post;
