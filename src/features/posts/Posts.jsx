import { useDispatch } from "react-redux";
import styles from "./Posts.module.css";
import { deleteOutfit } from "./postActions";
import ReactPlayer from "react-player";
import Comments from "./Comments";
import { useGetOutfitsQuery } from "./postApiSlice";

function Posts() {
  const { data: { data: posts } = {}, isLoading } = useGetOutfitsQuery();

  // function handleDelete(id) {
  //   dispatch(deleteOutfit(id));
  // }

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
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
                // onError={handleError}
                controls={true}
              />
            )}
            <div className={styles.postButtons}>
              {/* <button onClick={() => handleDelete(outfit._id)}>
                Delete Post
              </button> */}
              <Comments comments={outfit.outfitPostComment} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
