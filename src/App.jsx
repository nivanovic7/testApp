import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import GuardRoute from "./components/GuardRoute";
import CreatePost from "./components/CreatePost";
import PersistedLogin from "./components/PersistedLogin";
import Dashboard from "./components/dashboard/Dashboard";
import Inbox from "./components/inbox/Inbox";
import Map from "./components/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />

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

        <Route path="/profile" element={<Profile />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/inbox" element={<Inbox />} />
      </Route>
    </Routes>
  );
}

export default App;
