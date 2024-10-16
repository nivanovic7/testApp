import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSettings } from "../features/user/userActions";
import { getOutfits } from "../features/posts/postActions";
import Posts from "../features/posts/Posts";
import { Link } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  const { userName } = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUserSettings());
    dispatch(getOutfits());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Wellcome {userName}</h2>
      <button>
        <Link to="/createPost">New Post</Link>
      </button>

      {loading ? (
        <h2>Loading posts...</h2>
      ) : posts.length ? (
        <Posts posts={posts} />
      ) : (
        <p>No posts on this location!</p>
      )}
    </div>
  );
}

export default Profile;
