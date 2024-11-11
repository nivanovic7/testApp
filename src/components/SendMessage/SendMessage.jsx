import styles from "./SendMessage.module.css";

import { useState } from "react";
import {
  useSendAttachmentMutation,
  useSendMessageMutation,
} from "../../app/api/messagesApiSlice";
import { useSelector } from "react-redux";
import { generateMessageObj, sendImage } from "../../utils/helpers";

function SendMessage({ chatId, setNewMessages }) {
  const { sub: currentUserId, userName } = useSelector(
    (state) => state.auth.user
  );
  const [sendMessage] = useSendMessageMutation();
  const [sendAttachment] = useSendAttachmentMutation();
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!attachment && !message) return;
    const prepareObj = { type: "", message: null };
    if (attachment) {
      sendImage(prepareObj, sendAttachment, attachment, chatId);
    }
    if (message) {
      sendMessage({ message, chatId });
      prepareObj.type = "text";
      prepareObj.message = message;
    }

    setNewMessages((state) => [
      ...state,
      generateMessageObj(
        chatId,
        currentUserId,
        userName,
        prepareObj.type,
        prepareObj.message
      ),
    ]);
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
      <label
        style={{ backgroundClip: "white" }}
        title="Upload file"
        htmlFor="file-upload"
        className={styles.uploadFile}
      >
        {attachment ? <span>&#x21ef;</span> : <span> &#x21d1;</span>}
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={(e) => setAttachment(e.target.files[0])}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
