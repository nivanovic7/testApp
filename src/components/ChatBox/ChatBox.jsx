import styles from "./ChatBox.module.css";

import SendMessage from "../SendMessage/SendMessage";
import LoadedMessagesList from "../loadedMessagesList/LoadedMessagesList";
import NewMessagesList from "../newMessagesList/NewMessagesList";
import { useEffect, useState } from "react";

function ChatBox({ chatId, setSelectedChatId, isSmallScreen }) {
  const [newMessages, setNewMessages] = useState([]);

  useEffect(() => {
    setNewMessages([]);
  }, [chatId]);

  function chatView() {
    return (
      <div className={styles.container}>
        {isSmallScreen && (
          <button onClick={() => setSelectedChatId(null)}>Back</button>
        )}
        <div className={styles.chat}>
          <LoadedMessagesList chatId={chatId} newMessages={newMessages} />
          <NewMessagesList
            key={chatId}
            chatId={chatId}
            newMessages={newMessages}
            setNewMessages={setNewMessages}
          />
        </div>
        <SendMessage chatId={chatId} setNewMessages={setNewMessages} />
      </div>
    );
  }

  return chatId ? chatView() : <p>Select chat to see messages!</p>;
}

export default ChatBox;
