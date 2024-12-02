import { useSelector } from "react-redux";
import { getUsersFromChat } from "../../utils/helpers";
import styles from "./ChatBoxHeader.module.css";

function ChatBoxHeader({ chatId, data }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const usersInChat = getUsersFromChat(data, chatId, currentUserId);
  return (
    <div
      className={`${styles.container} p-10 box-shadow-primary bg-neutral-100`}
    >
      {usersInChat
        .map((user) => (
          <span className={`${styles.userName}  fw-700`} key={user._id}>
            {user.userName}
          </span>
        ))
        .reduce((prev, curr) => [prev, ", ", curr])}
    </div>
  );
}

export default ChatBoxHeader;
