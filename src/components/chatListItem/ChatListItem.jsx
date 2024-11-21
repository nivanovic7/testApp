import { getChatMembersUsernames } from "../../utils/helpers";
import { useAddUserToGroupChatMutation } from "../../app/api/messagesApiSlice";
import styles from "./ChatListItem.module.css";
import ChatItemAvatar from "../ChatItemAvatar/ChatItemAvatar";

function ChatListItem({
  chat,
  setSelectedChatId,
  selectedChatId,
  availableGroupChats = [],
}) {
  const chatMemebers = getChatMembersUsernames(chat, chat.user._id);
  const [addUserToGroupChat] = useAddUserToGroupChatMutation();

  function handleAddToGroup(e) {
    const groupId = e.target.value;
    if (!groupId) return;
    addUserToGroupChat({ groupId, usersIds: [chat._id] });
  }

  function groupList() {
    return (
      <select onChange={handleAddToGroup}>
        <option value={null}>...</option>
        {availableGroupChats.map((group) => (
          <option key={group._id} value={group._id}>
            Add to: {group.chatName}
          </option>
        ))}
      </select>
    );
  }

  return (
    <li
      className={`${styles.chatItem} ${
        selectedChatId === chat._id ? styles.selectedChat : null
      }`}
      onClick={() => setSelectedChatId(chat._id)}
    >
      <ChatItemAvatar members={chat.chatMembers} />
      {chat.chatType === "group" ? (
        <p>{chat.chatName}</p>
      ) : (
        chatMemebers.map((member) => (
          <div key={member._id}>
            <p>{member.userName}</p>
          </div>
        ))
      )}
      <img src="../../assets/menu (1).png" alt="" />
    </li>
  );
}

export default ChatListItem;
