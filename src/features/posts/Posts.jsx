import { useDispatch } from "react-redux";
import styles from "./Posts.module.css";
import { deleteOutfit } from "./postActions";
import ReactPlayer from "react-player";

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
        return (
          <div className={styles.post} key={outfit.createdAt}>
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
            <p>{outfit.outfitDescription}</p>
            <button onClick={() => handleDelete(outfit._id)}>
              Delete Post
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
