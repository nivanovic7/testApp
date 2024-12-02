import styles from "./ChatBox.module.css";

import SendMessage from "../SendMessage/SendMessage";
import LoadedMessagesList from "../loadedMessagesList/LoadedMessagesList";
import NewMessagesList from "../newMessagesList/NewMessagesList";
import { useEffect, useState } from "react";
import { useGetChatsQuery } from "../../app/api/messagesApiSlice";
import ChatBoxHeader from "../ChatBoxHeader/ChatBoxHeader";

function ChatBox({ chatId, setSelectedChatId, isSmallScreen }) {
  const [newMessages, setNewMessages] = useState([]);
  const { data } = useGetChatsQuery();

  useEffect(() => {
    setNewMessages([]);
  }, [chatId]);

  function chatView() {
    return (
      <div className={styles.container}>
        {isSmallScreen && (
          <button onClick={() => setSelectedChatId(null)}>Back</button>
        )}
        {data?.data && <ChatBoxHeader chatId={chatId} data={data.data} />}
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
