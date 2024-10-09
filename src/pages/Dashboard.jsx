import { useEffect } from "react";
import styles from "./Dashboard.module.css";

import { NavLink, Outlet } from "react-router-dom";
import { setCurrentPosition } from "../features/user/userActions";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPosition());
  }, [dispatch]);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <NavLink to="map">Set Location</NavLink>
      <NavLink to="setPassword">Set Password</NavLink>
      <Outlet />
    </div>
  );
}

export default Dashboard;
