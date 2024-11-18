import styles from "./Post.module.css";

import CustomCarousel from "../CustomCarousel/CustomCarousel";
import PostHeader from "../postHeader/PostHeader";
import Comments from "../comments/Comments";
import { useDeleteOutfitMutation } from "../../app/api/postApiSlice";

function Post({ outfit }) {
  const [deletePost] = useDeleteOutfitMutation();

  async function handleDelete() {
    try {
      await deletePost(outfit._id).unwrap();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.post}>
      <PostHeader outfit={outfit} />
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
