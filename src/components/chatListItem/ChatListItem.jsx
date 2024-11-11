import { getChatMembersUsernames } from "../../utils/helpers";
import { useAddUserToGroupChatMutation } from "../../app/api/messagesApiSlice";
import styles from "./ChatListItem.module.css";

function ChatListItem({ chat, setSelectedChatId, availableGroupChats = [] }) {
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
    <li className={styles.chatItem} onClick={() => setSelectedChatId(chat._id)}>
      {chat.chatType === "group" ? (
        <p>{chat.chatName}</p>
      ) : (
        chatMemebers.map((member) => (
          <div key={member._id}>
            <p>{member.userName}</p>
            {groupList()}
          </div>
        ))
      )}
    </li>
  );
}

export default ChatListItem;
