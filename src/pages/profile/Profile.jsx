import styles from "./Profile.module.css";
import Posts from "../../components/posts/Posts";
import User from "../../components/user/User";
import {
  useGetUserSettingsQuery,
  useSetUserLocationMutation,
} from "../../app/api/userApiSlice";
import { useDispatch } from "react-redux";
import { logOut } from "../../app/slices/authSlice";
import { useEffect } from "react";
import { getDistanceBetweenPoints, getUserLocation } from "../../utils/helpers";
import RecommendedFriendsList from "../../components/recommendedFriendsList/RecommendedFriendsList";

const ALLOWED_DISTANCE_FROM_SAVED_LOCATION = 1; // in kilometers

function Profile() {
  const dispatch = useDispatch();
  const [setUserLocation] = useSetUserLocationMutation();
  const { data: userSettings, isLoading, error } = useGetUserSettingsQuery();

  if (error) {
    dispatch(logOut());
  }

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
      console.log(userSettings.data.userProfileImage);
      if (distanceFromSavedLocation > ALLOWED_DISTANCE_FROM_SAVED_LOCATION) {
        setUserLocation({ latitude, longitude });
      }
    }

    if (userSettings) {
      initUserLocation();
    }
  }, [setUserLocation, userSettings]);

  if (isLoading) return <p>Loading user data...</p>;
  return (
    <div className={`${styles.profileLayout} mx-auto  gap-20 flex-col-sm `}>
      <aside className="max-width-tertiary px-20-md  w-90">
        <User />
      </aside>
      <main className={`${styles.main} max-width-secondary px-20-md  w-90 `}>
        <Posts />
      </main>
      <aside
        className={`${styles.mobileHide} px-20-md max-width-tertiary w-90 d-none-md `}
      >
        {/*<RecommendedFriendsList /> */}
      </aside>
    </div>
  );
}

export default Profile;
