import { useDispatch } from "react-redux";
import styles from "./Posts.module.css";
import { deleteOutfit } from "./postActions";

function Posts({ posts }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteOutfit(id));
  }
  return (
    <div className={styles.postList}>
      {posts.map((outfit) => {
        return (
          <div className={styles.post} key={outfit.createdAt}>
            <p>{outfit.outfitDescription}</p>
            <img
              className={styles.image}
              src={outfit?.outfitImages[0]?.imageMediumSource}
              alt="Outfit image"
            />
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
