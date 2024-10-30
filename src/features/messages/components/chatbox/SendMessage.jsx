import { useState } from "react";
import { useSendMessageMutation } from "../../messagesApiSlice";
import styles from "./SendMessage.module.css";

function SendMessage({ chatId }) {
  const [sendMessage] = useSendMessageMutation();
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!message || !chatId) return;
    sendMessage({ message, chatId });
    setMessage("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Write a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
