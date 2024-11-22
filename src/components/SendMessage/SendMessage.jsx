import styles from "./SendMessage.module.css";

import { useState } from "react";
import {
  useSendAttachmentMutation,
  useSendMessageMutation,
} from "../../app/api/messagesApiSlice";
import { useSelector } from "react-redux";
import {
  generateMessageObj,
  prepareFormData,
  prepareNewMessageObjectType,
} from "../../utils/helpers";

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

    let newMessageObjType = {};
    if (attachment) {
      const data = prepareFormData({
        chatMessageUnique: chatId,
        chatMessageMedia: attachment,
      });

      sendAttachment({ data, chatId });
      newMessageObjType = prepareNewMessageObjectType("media", attachment);
    }

    if (message) {
      sendMessage({ message, chatId });
      newMessageObjType = prepareNewMessageObjectType("text", message);
    }
    setNewMessages((state) => [
      ...state,
      generateMessageObj(
        chatId,
        currentUserId,
        userName,
        newMessageObjType.type,
        newMessageObjType.message
      ),
    ]);
    setMessage("");
    setAttachment(null);
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
        className={`${styles.uploadFile} ${
          attachment && styles.uploadFileReady
        }`}
      >
        &#8679;
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={(e) => setAttachment(e.target.files[0])}
      />
      <button
        className={!message && !attachment ? styles.buttonDisabled : ""}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
