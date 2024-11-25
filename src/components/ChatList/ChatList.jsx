import styles from "./ChatList.module.css";
import { useGetChatsQuery } from "../../app/api/messagesApiSlice";
import CreateGroupChat from "../createGroupChat/CreateGroupChat";
import { removeChatsWithOnlyOneMember } from "../../utils/helpers";
import ChatListItem from "../chatListItem/ChatListItem";

function ChatList({ setSelectedChatId, selectedChatId }) {
  const { data, isLoading } = useGetChatsQuery();

  function renderChatList() {
    if (isLoading) {
      return <p>Loading chats</p>;
    }

    return (
      <>
        <CreateGroupChat />
        <ul>
          {removeChatsWithOnlyOneMember(data.data).map((chat) => (
            <ChatListItem
              key={chat._id}
              chat={chat}
              setSelectedChatId={setSelectedChatId}
              selectedChatId={selectedChatId}
            />
          ))}
        </ul>
      </>
    );
  }

  return <div className={styles.chatList}>{renderChatList()}</div>;
}

export default ChatList;
