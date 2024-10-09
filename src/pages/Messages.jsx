import { io } from "socket.io-client";
import { API_URL } from "../utils/config";
import { useEffect, useState } from "react";

function Messages() {
  const socket = io(API_URL);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const sendMessage = () => {
    //SEND POST REQUEST
    // if (message) {
    //   socket.emit("message", message);
    //   setMessage("");
    // }
  };

  return (
    <div>
      <h1>Socket.io Chat</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
