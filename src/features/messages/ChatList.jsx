import ChatItem from "./ChatItem";
import styles from "./ChatList.module.css";
import { useGetChatsQuery } from "./messagesApiSlice";

function ChatList({ setSelectedChatId }) {
  const { data, isLoading } = useGetChatsQuery();

  function renderChatList() {
    if (isLoading) {
      return <p>Loading chats</p>;
    }

    return (
      <ul>
        {data.data
          .filter((chat) => chat.chatMembers.length > 1)
          .map((chat) => (
            <ChatItem
              key={chat._id}
              chat={chat}
              setSelectedChatId={setSelectedChatId}
            />
          ))}
      </ul>
    );
  }

  return <div className={styles.chatList}>{renderChatList()}</div>;
}

export default ChatList;
