import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Outlet />
    </div>
  );
}

export default Dashboard;
