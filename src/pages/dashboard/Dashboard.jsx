import { useEffect } from "react";
import { getUserLocation } from "../../utils/helpers";
import styles from "./Dashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSetUserLocationMutation } from "../../app/api/userApiSlice";

function Dashboard() {
  const [setUserLocation] = useSetUserLocationMutation();

  useEffect(() => {
    async function initUserLocation() {
      const location = await getUserLocation();
      setUserLocation(location.coords);
    }

    initUserLocation();
  }, [setUserLocation]);

  return (
    <div className={styles.dashboard}>
      <NavLink to="map">Set Location</NavLink>
      <Outlet />
    </div>
  );
}

export default Dashboard;
