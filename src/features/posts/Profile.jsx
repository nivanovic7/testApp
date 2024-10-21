import Posts from "./Posts";
import { Link } from "react-router-dom";
import { useGetUserSettingsQuery } from "../user/userApiSlice";

function Profile() {
  const { data, isLoading } = useGetUserSettingsQuery();
  return isLoading ? (
    "Loading..."
  ) : (
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
