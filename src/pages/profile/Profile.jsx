import { useDispatch } from "react-redux";
import { useGetUserSettingsQuery } from "../../app/api/userApiSlice";
import { logOut } from "../../app/slices/authSlice";
import Posts from "../../components/posts/Posts";
import styles from "./Profile.module.css";
import Map from "../../components/map/Map";

function Profile() {
  const { data, error, isLoading } = useGetUserSettingsQuery();
  if (data) console.log(data);
  const dispatch = useDispatch();
  if (error) {
    dispatch(logOut());
  }

  if (isLoading) return <p>Loading user data...</p>;
  return (
    <div className={styles.profileLayout}>
      <aside>
        <Map />
      </aside>
      <main className={styles.main}>
        <Posts />
      </main>
      <aside>Recomendations</aside>
    </div>
  );
}

export default Profile;
