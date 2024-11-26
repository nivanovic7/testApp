import { useDispatch, useSelector } from "react-redux";
import {
  useGetRecommendedFriendsQuery,
  useGetUserSettingsQuery,
  useSetUserLocationMutation,
} from "../../app/api/userApiSlice";
import { logOut } from "../../app/slices/authSlice";
import Posts from "../../components/posts/Posts";
import styles from "./Profile.module.css";
import User from "../../components/user/User";
import { useEffect } from "react";
import { getDistanceBetweenPoints, getUserLocation } from "../../utils/helpers";

const ALLOWED_DISTANCE_FROM_SAVED_LOCATION = 1; // in kilometers
const AVATAR_PLACEHOLDER_URL = "../../assets/avatar.png";

function Profile() {
  const { data, error, isLoading } = useGetRecommendedFriendsQuery();
  const [setUserLocation] = useSetUserLocationMutation();
  const { data: userSettings } = useGetUserSettingsQuery();

  useEffect(() => {
    async function initUserLocation() {
      const {
        coords: { longitude, latitude },
      } = await getUserLocation();
      const savedLatitude = userSettings.data.userCurrentLocation.latitude;
      const savedLongitude = userSettings.data.userCurrentLocation.longitude;

      const distanceFromSavedLocation = getDistanceBetweenPoints(
        latitude,
        longitude,
        savedLatitude,
        savedLongitude
      );

      if (distanceFromSavedLocation > ALLOWED_DISTANCE_FROM_SAVED_LOCATION) {
        setUserLocation({ latitude, longitude });
      }
    }

    if (userSettings) {
      initUserLocation();
    }
  }, [setUserLocation, userSettings]);

  let recommendedFriendShortList;

  if (!isLoading) {
    recommendedFriendShortList = data.data.slice(0, 5);
  }
  const dispatch = useDispatch();
  if (error) {
    dispatch(logOut());
  }

  if (isLoading) return <p>Loading user data...</p>;
  return (
    <div className={styles.profileLayout}>
      <aside>
        <User />
      </aside>
      <main className={styles.main}>
        <Posts />
      </main>
      <aside className={styles.mobileHide}>
        <div className={styles.recommendedFriendsWrap}>
          <h3>Recomended friends</h3>
          <div>
            {recommendedFriendShortList.map((friend) => (
              <div className={styles.friend} key={friend._id}>
                <img
                  src={
                    friend.userProfileImage
                      ? friend.userProfileImage.imageSmallSource
                      : AVATAR_PLACEHOLDER_URL
                  }
                  alt="profile img"
                />
                <div>
                  <div>
                    <span className={styles.fullName}>
                      {friend.userFirstName} {friend.userLastName}
                    </span>
                    <span className={styles.userName}> @{friend.userName}</span>
                  </div>
                  <button>Follow</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Profile;
