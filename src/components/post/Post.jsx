import styles from "./Post.module.css";

import CustomCarousel from "../CustomCarousel/CustomCarousel";
import PostHeader from "../postHeader/PostHeader";
import PostFooter from "../postFooter/postFooter";

function Post({ outfit }) {
  return (
    <div className={styles.post}>
      <PostHeader outfit={outfit} />
      <CustomCarousel
        outfitVideos={outfit.outfitVideos}
        outfitImages={outfit.outfitImages}
      />
      <PostFooter id={outfit._id} comments={outfit.outfitPostComment} />
    </div>
  );
}

export default Post;
