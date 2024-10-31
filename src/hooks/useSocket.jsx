import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const useSocket = (userId) => {
  const token = useSelector((state) => state.auth.accessToken);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Function to connect socket
    const connectSocket = () => {
      if (!socket) {
        const newSocket = io("https://laterz.api.exebyte.io", {
          transports: ["websocket"],
          query: { jwt: token },
        });

        // Set socket instance
        setSocket(newSocket);

        // Event listeners
        newSocket.on("connect", () => {
          console.log("socket connected");
        });

        newSocket.on("disconnect", () => {
          console.log("socket disconnected");
          // Attempt to reconnect
          connectSocket();
        });
      } else {
        socket.connect();
      }
    };

    // Connect socket on mount
    connectSocket();

    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [token, userId, socket]);

  return socket;
};

export default useSocket;
