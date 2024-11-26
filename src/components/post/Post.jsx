import styles from "./Post.module.css";

import CustomCarousel from "../CustomCarousel/CustomCarousel";
import PostHeader from "../postHeader/PostHeader";
import PostFooter from "../postFooter/PostFooter";

function Post({ outfit }) {
  return (
    <div className={`${styles.post} box-shadow-secondary b-radius-15 `}>
      <PostHeader outfit={outfit} />
      <CustomCarousel
        outfitVideos={outfit.outfitVideos}
        outfitImages={outfit.outfitImages}
      />
      <PostFooter
        userId={outfit.user[0]._id}
        id={outfit._id}
        comments={outfit.outfitPostComment}
      />
    </div>
  );
}

export default Post;
