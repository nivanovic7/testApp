import { useState } from "react";
import { useCreateGroupChatMutation } from "../app/api/messagesApiSlice";

function CreateGroupChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatName, setChatName] = useState("");
  const [createGroupChat] = useCreateGroupChatMutation();

  function handleSubmit(e) {
    e.preventDefault();
    createGroupChat(chatName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Create group chat"}
      </button>

      {isOpen && (
        <>
          <input
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            type="text"
            placeholder="Chat name"
          />
          <button type="submit">Confirm</button>
        </>
      )}
    </form>
  );
}

export default CreateGroupChat;
