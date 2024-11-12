import { Link } from "react-router-dom";
import { useGetUserSettingsQuery } from "../../api/userApiSlice";
import { useDispatch } from "react-redux";
import { logOut } from "../../slices/authSlice";
import Posts from "../../../components/posts/Posts";

function Profile() {
  const { data, error, isLoading } = useGetUserSettingsQuery();
  const dispatch = useDispatch();
  if (error) {
    dispatch(logOut());
  }

  if (isLoading) return <p>Loading user data...</p>;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Wellcome {data.data.userName}</h2>
      <button>
        <Link to="/createPost">New Post</Link>
      </button>
      <Posts />
    </div>
  );
}

export default Profile;