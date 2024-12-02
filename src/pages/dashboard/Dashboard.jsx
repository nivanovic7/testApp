import { useState } from "react";
import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import { useUpdateProfileImageMutation } from "../../app/api/userApiSlice";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Outlet />
    </div>
  );
}

export default Dashboard;
