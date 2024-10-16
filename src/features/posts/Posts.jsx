import { useDispatch } from "react-redux";
import styles from "./Posts.module.css";
import { deleteOutfit } from "./postActions";
import ReactPlayer from "react-player";
import Comments from "./Comments";

function Posts({ posts }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteOutfit(id));
  }

  function handleError(e) {
    console.log(e);
  }

  return (
    <div className={styles.postList}>
      {posts.map((outfit) => {
        if (
          !outfit.outfitImages[0]?.imageMediumSource ||
          !outfit.outfitVideos[0]?.imageMediumSource ||
          !outfit.outfitDescription
        )
          return null;
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
                onError={handleError}
                controls={true}
              />
            )}
            <div className={styles.postButtons}>
              <button onClick={() => handleDelete(outfit._id)}>
                Delete Post
              </button>
              <Comments postId={outfit._id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
