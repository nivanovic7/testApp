import styles from "./CreateGroupChat.module.css";

import { useState } from "react";
import { useCreateGroupChatMutation } from "../../app/api/messagesApiSlice";

function CreateGroupChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatName, setChatName] = useState("");
  const [createGroupChat] = useCreateGroupChatMutation();

  function handleSubmit(e) {
    e.preventDefault();
    createGroupChat(chatName);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isOpen && (
        <>
          <input
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            type="text"
            placeholder="Chat name"
          />
          <button type="submit">Ok</button>
        </>
      )}
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "x" : "Create group chat"}
      </button>
    </form>
  );
}

export default CreateGroupChat;
