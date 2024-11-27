import { useState } from "react";
import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import { useUpdateProfileImageMutation } from "../../app/api/userApiSlice";

function Dashboard() {
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

  return (
    <div className={styles.dashboard}>
      <label htmlFor="updateAvatar">
        <button> Update Profile Image</button>
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
