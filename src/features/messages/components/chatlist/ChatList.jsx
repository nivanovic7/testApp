import ChatListItem from "./ChatListItem";
import styles from "./ChatList.module.css";
import { useGetChatsQuery } from "../../messagesApiSlice";
import CreateGroupChat from "./CreateGroupChat";
import {
  filterChatsByType,
  removeChatsWithOnlyOneMember,
} from "../../../../utils/helpers";

function ChatList({ setSelectedChatId }) {
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
              availableGroupChats={filterChatsByType(data.data, "group")}
              key={chat._id}
              chat={chat}
              setSelectedChatId={setSelectedChatId}
            />
          ))}
        </ul>
      </>
    );
  }

  return <div className={styles.chatList}>{renderChatList()}</div>;
}

export default ChatList;
