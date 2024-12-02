import { getChatMembersUsernames } from "../../utils/helpers";
import styles from "./ChatListItem.module.css";
import ChatItemAvatar from "../ChatItemAvatar/ChatItemAvatar";
import PrivateChatsList from "../PrivateChatsList.jsx/PrivateChatsList";
import { useState } from "react";

function ChatListItem({ chat, setSelectedChatId, selectedChatId }) {
  const chatMemebers = getChatMembersUsernames(chat, chat.user._id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <li
      className={`${styles.chatItem} ${
        selectedChatId === chat._id ? "bg-neutral-100" : ""
      } d-flex align-center w-full gap-10`}
      onClick={() => setSelectedChatId(chat._id)}
    >
      <ChatItemAvatar members={chat.chatMembers} />
      {chat.chatType === "group" ? (
        <>
          <p className="mr-auto">{chat.chatName}</p>
          <img
            className="img-30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src="../../assets/menu (1).png"
            alt=""
          />

          {/* //Refactor Make reusable toggle/menu component*/}
          {isMenuOpen && (
            <PrivateChatsList
              groupId={chat._id}
              chatMembers={chatMemebers}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
        </>
      ) : (
        chatMemebers.map((member) => <p key={member._id}>{member.userName}</p>)
      )}
    </li>
  );
}

export default ChatListItem;
