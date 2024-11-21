import { useEffect, useState } from "react";
import { getUserLocation } from "../../utils/helpers";
import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import {
  useSetUserLocationMutation,
  useUpdateProfileImageMutation,
} from "../../app/api/userApiSlice";

function Dashboard() {
  const [setUserLocation] = useSetUserLocationMutation();
  const [avatar, setAvatar] = useState(null);
  const [updateUserImage] = useUpdateProfileImageMutation();

  async function handleAvatarUpdate() {
    const data = new FormData();
    data.append("userProfileImage", avatar);
    try {
      await updateUserImage(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function initUserLocation() {
      const location = await getUserLocation();
      setUserLocation(location.coords);
    }

    initUserLocation();
  }, [setUserLocation]);

  return (
    <div className={styles.dashboard}>
      <label htmlFor="updateAvatar">
        Update Profile Image
        {avatar ? (
          <button onClick={handleAvatarUpdate}>Update</button>
        ) : (
          <input
            id="updateAvatar"
            style={{ visibility: "hidden" }}
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        )}
      </label>
      <Outlet />
    </div>
  );
}

export default Dashboard;
