import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Dashboard from "./features/user/Dashboard";
import Profile from "./features/posts/Profile";
import GuardRoute from "./components/GuardRoute";
import CreatePost from "./features/posts/CreatePost";
import Map from "./features/user/Map";
import Inbox from "./features/messages/Inbox";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  const socket = io.connect("https://laterz.api.exebyte.io");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket");
    });

    return () => {
      socket.off("connect");
      socket.offAny(); // Cleanup for onAny
    };
  }, [socket]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<GuardRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="map" />} />
          <Route path="map" element={<Map />} />
          <Route />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/inbox" element={<Inbox socket={socket} />} />
      </Route>
    </Routes>
  );
}

export default App;
