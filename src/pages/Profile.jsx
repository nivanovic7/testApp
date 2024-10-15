import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSettings } from "../features/user/userActions";
import { getOutfits } from "../features/posts/postActions";
import Posts from "../features/posts/Posts";
import { Link } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const { userName } = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUserSettings());
    dispatch(getOutfits());
  }, [dispatch]);

  return (
    <div>
      <h2>Wellcome {userName}</h2>
      <button>
        <Link to="/createPost">New Post</Link>
      </button>

      <h3>Posts</h3>
      {posts.length ? (
        <Posts posts={posts} />
      ) : (
        <p>No posts on this location!</p>
      )}
    </div>
  );
}

export default Profile;
