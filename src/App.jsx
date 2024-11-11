import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Profile from "./features/posts/Profile";
import GuardRoute from "./features/auth/GuardRoute";
import CreatePost from "./features/posts/CreatePost";
import Map from "./features/user/Map";
import PersistedLogin from "./features/auth/PersistedLogin";
import Dashboard from "./features/user/dashboard/Dashboard";
import Inbox from "./features/messages/inbox/Inbox";

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
