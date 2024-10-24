import { getChatMembersUsernames } from "../../utils/helpers";
import styles from "./ChatItem.module.css";

function ChatItem({ chat, setSelectedChatId }) {
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

export default ChatItem;
