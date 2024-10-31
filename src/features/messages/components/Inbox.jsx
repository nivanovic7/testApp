import styles from "./Inbox.module.css";

import { useState } from "react";
import ChatBox from "./chatbox/ChatBox";
import ChatList from "./chatlist/ChatList";

function Inbox({ socket }) {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className={styles.inbox}>
      <ChatList setSelectedChatId={setSelectedChatId} />
      {selectedChatId ? (
        <ChatBox chatId={selectedChatId} socket={socket} />
      ) : (
        <h3>Please select user to start chat!</h3>
      )}
    </div>
  );
}

export default Inbox;
