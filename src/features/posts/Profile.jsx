import Posts from "./Posts";
import { Link } from "react-router-dom";
import { useGetUserSettingsQuery } from "../user/userApiSlice";

function Profile() {
  const { data, error, isLoading } = useGetUserSettingsQuery();
  if (error) return <p>Could not load user!</p>;

  if (isLoading) return <p>Loading user data...</p>;

  console.log(JSON.parse(localStorage.getItem("userData")));
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
