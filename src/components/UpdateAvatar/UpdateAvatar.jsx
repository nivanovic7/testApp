import styles from "./UpdateAvatar.module.css";

import { useState } from "react";
import { useUpdateProfileImageMutation } from "../../app/api/userApiSlice";
function UpdateAvatar() {
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
    <label htmlFor="updateAvatar">
      <img
        className={`${styles.updateImageIcon} img-20 bg-neutral-100 b-radius-circle`}
        src="../../assets/add.svg"
        alt="add icon"
      />
      <input
        style={{ visibility: "hidden" }}
        className="b-radius-round"
        id="updateAvatar"
        type="file"
        onChange={(e) => setAvatar(e.target.files[0])}
      />
      {avatar && (
        <div className={`${styles.buttons}`}>
          <button
            className={`${styles.confirmButton}`}
            onClick={handleAvatarUpdate}
          >
            Update
          </button>
          <button>Cancel</button>
        </div>
      )}
    </label>
  );
}

export default UpdateAvatar;
