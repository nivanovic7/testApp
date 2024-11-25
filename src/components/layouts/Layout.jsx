import { Navigate, Route, Routes } from "react-router-dom";
import PersistedLogin from "../persistedLogin/PersistedLogin";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import GuardRoute from "../guardRoute/GuardRoute";
import Dashboard from "../../pages/dashboard/Dashboard";
import Map from "../../components/map/Map";
import Profile from "../../pages/profile/Profile";
import CreatePost from "../../components/createPost/CreatePost";
import Inbox from "../../pages/inbox/Inbox";
import Header from "../headers/header/Header";
import Footer from "../footers/footer/Footer";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route element={<PersistedLogin />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<GuardRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="map" />} />
              <Route path="map" element={<Map />} />
              <Route />
            </Route>
            <Route path="" element={<Profile />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
