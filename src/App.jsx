import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import GuardRoute from "./components/GuardRoute";
import SetPassword from "./features/auth/SetPassword";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import Map from "./components/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<GuardRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="map" />} />
          <Route path="map" element={<Map />} />
          <Route path="setPassword" element={<SetPassword />} />
          <Route />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/createPost" element={<CreatePost />} />
        {/*  <Route path="/messages" element={<Messages />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
