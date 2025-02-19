import styles from "./CreateGroupChat.module.css";

import { useState } from "react";
import { useCreateGroupChatMutation } from "../../app/api/messagesApiSlice";

function CreateGroupChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatName, setChatName] = useState("");
  const [createGroupChat] = useCreateGroupChatMutation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!chatName) return;
    createGroupChat(chatName);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} d-flex gap-5 p-15 `}
    >
      {isOpen && (
        <>
          <input
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            type="text"
            placeholder="Chat name"
            required
          />

          <button className="border-0" type="submit">
            <img
              className="img-20 bg-transparent"
              src="../../assets/ok.svg"
              alt="confirm icon"
            />
          </button>
        </>
      )}
      <button
        className="bg-transparent border-0"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img
            className="img-20"
            src="../../assets/cancel.svg"
            alt="cancel icon"
          />
        ) : (
          "Add group"
        )}
      </button>
    </form>
  );
}

export default CreateGroupChat;
