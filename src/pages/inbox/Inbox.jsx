import ChatList from "../../components/ChatList/ChatList";
import ChatBox from "../../components/ChatBox/ChatBox";
import styles from "./Inbox.module.css";

import { useState } from "react";
import CreateGroupChat from "../../components/createGroupChat/CreateGroupChat";

function Inbox() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  function showOneView() {
    return selectedChatId ? (
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
    );
  }

  function showTwoViews() {
    return (
      <>
        <div className={`${styles.sidebar} d-flex f-col bg-neutral-200`}>
          <CreateGroupChat />
          <ChatList
            selectedChatId={selectedChatId}
            setSelectedChatId={setSelectedChatId}
          />
        </div>
        <ChatBox
          isSmallScreen={isSmallScreen}
          chatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
        />
      </>
    );
  }

  return (
    <div className={`${styles.inbox} d-flex`}>
      {isSmallScreen ? showOneView() : showTwoViews()}
    </div>
  );
}

export default Inbox;
