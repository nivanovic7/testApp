import ChatList from "../../components/ChatList/ChatList";
import ChatBox from "../../components/ChatBox/ChatBox";
import styles from "./Inbox.module.css";

import { useState } from "react";

function Inbox() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  return (
    <div className={styles.inbox}>
      <ChatList setSelectedChatId={setSelectedChatId} />
      {selectedChatId && <ChatBox chatId={selectedChatId} />}
      {!selectedChatId && <h3>Please select user to start chat!</h3>}
    </div>
  );
}

export default Inbox;
