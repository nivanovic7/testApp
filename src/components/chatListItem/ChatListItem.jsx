import { getChatMembersUsernames } from "../../utils/helpers";
import styles from "./ChatListItem.module.css";
import ChatItemAvatar from "../ChatItemAvatar/ChatItemAvatar";
import ListItemGroup from "../listItemGroup/ListItemGroup";

function ChatListItem({ chat, setSelectedChatId, selectedChatId }) {
  const chatMemebers = getChatMembersUsernames(chat, chat.user._id);

  return (
    <li
      className={`${styles.chatItem} ${
        selectedChatId === chat._id ? "bg-neutral-100" : ""
      } d-flex align-center w-full gap-10 p-15`}
      onClick={() => setSelectedChatId(chat._id)}
    >
      <ChatItemAvatar members={chat.chatMembers} />
      {chat.chatType === "group" ? (
        <ListItemGroup chat={chat} chatMembers={chatMemebers} />
      ) : (
        chatMemebers.map((member) => <p key={member._id}>{member.userName}</p>)
      )}
    </li>
  );
}

export default ChatListItem;
