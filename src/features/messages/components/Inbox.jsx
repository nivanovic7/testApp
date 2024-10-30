import styles from "./Inbox.module.css";

import { useState } from "react";
import ChatBox from "./chatbox/ChatBox";
import ChatList from "./chatlist/ChatList";

function Inbox({ socket }) {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className={styles.inbox}>
      <ChatList setSelectedChatId={setSelectedChatId} />
      {selectedChatId && <ChatBox chatId={selectedChatId} socket={socket} />}
    </div>
  );
}

export default Inbox;

// 1. post / chat/getchat
// 2.  chat chat/id/message

//id 67179261bfd1d977f2db8d0c
