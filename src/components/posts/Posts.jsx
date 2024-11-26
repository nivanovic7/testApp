import { useGetOutfitsQuery } from "../../app/api/postApiSlice";
import Post from "../post/Post";
import PostLoader from "../postLoader/PostLoader";
import styles from "./Posts.module.css";

function Posts() {
  const { data: { data: posts } = {}, isLoading } = useGetOutfitsQuery();

  if (isLoading) {
    return <PostLoader />;
  }
  if (posts.length === 0) {
    return <h2>No posts at this location</h2>;
  }
  return (
    <div className={`${styles.posts} d-flex f-col gap-20`}>
      {posts.map((outfit) => (
        <Post key={outfit._id} outfit={outfit} />
      ))}
    </div>
  );
}

export default Posts;
