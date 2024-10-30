import { getChatMembersUsernames } from "../../../../utils/helpers";
import styles from "./ChatListItem.module.css";

function ChatListItem({ chat, setSelectedChatId }) {
  const chatMemebers = getChatMembersUsernames(chat, chat.user._id);

  function handleClick() {
    setSelectedChatId(chat._id);
  }

  return (
    <li className={styles.chatItem} onClick={handleClick}>
      {chatMemebers.map((member) => {
        return <span key={member._id}>{member.userName}</span>;
      })}
    </li>
  );
}

export default ChatListItem;
