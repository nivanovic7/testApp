import { useGetOutfitsQuery } from "./postApiSlice";
import PostLoader from "./PostLoader";
import Post from "./Post";

function Posts() {
  const { data: { data: posts } = {}, isLoading } = useGetOutfitsQuery();

  if (isLoading) {
    return <PostLoader />;
  }
  if (posts.length === 0) {
    return <h2>No posts at this location</h2>;
  }
  return (
    <div>
      {posts.map((outfit) => (
        <Post key={outfit._id} outfit={outfit} />
      ))}
    </div>
  );
}

export default Posts;
