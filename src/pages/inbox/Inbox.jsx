import ChatList from "../../components/ChatList/ChatList";
import ChatBox from "../../components/ChatBox/ChatBox";
import styles from "./Inbox.module.css";

import { useState } from "react";
import CreateGroupChat from "../../components/createGroupChat/CreateGroupChat";

function Inbox() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className={`${styles.inbox} d-flex`}>
      {isSmallScreen ? (
        selectedChatId ? (
          <ChatBox
            isSmallScreen={isSmallScreen}
            chatId={selectedChatId}
            setSelectedChatId={setSelectedChatId}
          />
        ) : (
          <div className={`${styles.sidebar} d-flex f-col bg-neutral-200`}>
            <CreateGroupChat />
            <ChatList
              selectedChatId={selectedChatId}
              setSelectedChatId={setSelectedChatId}
            />
          </div>
        )
      ) : (
        <>
          <div className={`${styles.sidebar} d-flex f-col bg-neutral-200`}>
            <CreateGroupChat />
            <ChatList
              selectedChatId={selectedChatId}
              setSelectedChatId={setSelectedChatId}
            />
          </div>
          {selectedChatId ? (
            <ChatBox chatId={selectedChatId} />
          ) : (
            <h3>Please select user to start chat!</h3>
          )}
        </>
      )}
    </div>
  );
}

export default Inbox;
