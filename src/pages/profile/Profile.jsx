import { useDispatch } from "react-redux";
import {
  useGetUserSettingsQuery,
  useSetUserLocationMutation,
} from "../../app/api/userApiSlice";
import { logOut } from "../../app/slices/authSlice";
import Posts from "../../components/posts/Posts";
import styles from "./Profile.module.css";
import User from "../../components/user/User";
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
    <div className={styles.profileLayout}>
      <aside>
        <User />
      </aside>
      <main className={styles.main}>
        <Posts />
      </main>
      <aside className={styles.mobileHide}>
        <RecommendedFriendsList />
      </aside>
    </div>
  );
}

export default Profile;
