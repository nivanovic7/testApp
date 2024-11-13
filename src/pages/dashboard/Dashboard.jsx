import styles from "./Dashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <NavLink to="map">Set Location</NavLink>
      {/* <NavLink to="setPassword">Set Password</NavLink> */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
