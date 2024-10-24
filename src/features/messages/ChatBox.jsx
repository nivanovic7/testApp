import styles from "./ChatBox.module.css";

import { useEffect, useState } from "react";
import { useGetChatQuery, useSendMessageMutation } from "./messagesApiSlice";
import { useSelector } from "react-redux";

function ChatBox({ chatId, socket }) {
  const [sendMessage] = useSendMessageMutation();
  const { data, isLoading } = useGetChatQuery(chatId, {
    skip: chatId === true,
  });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const currentUserId = useSelector((state) => state.auth.user.sub);

  useEffect(() => {
    socket.on(chatId, (msg) => {
      console.log(msg);
    });

    socket.onAny((event, ...args) => {
      console.log(`Event chatbox: ${event}`, args);
    });

    return () => {
      socket.off(chatId);
      socket.off(event);
    };
  }, [chatId, socket]);

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit(chatId, "Gello socket");

    if (!message || !chatId) return;
    console.log(chatId);
    sendMessage({ message, chatId });
    setMessages((prev) => [...prev, message]);
    setMessage("");
  }

  return (
    <div className={styles.chat}>
      <h3>USER</h3>
      {isLoading ? (
        "Loading messages"
      ) : (
        <div className={styles.messages}>
          {messages.reverse().map((msg, i) => (
            <p key={i} className={styles.userMessage}>
              {msg}
            </p>
          ))}
          {data.data.map((message) => {
            return (
              <p
                className={
                  message.chatMessageUser._id === currentUserId
                    ? styles.userMessage
                    : styles.friendMessage
                }
                key={message._id}
              >
                {message.chatMessageText}
              </p>
            );
          })}
          {messages.map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Write a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
