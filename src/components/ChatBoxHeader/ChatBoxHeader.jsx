import { useSelector } from "react-redux";
import { getUsersFromChat } from "../../utils/helpers";
import styles from "./ChatBoxHeader.module.css";

function ChatBoxHeader({ chatId, data, isSmallScreen, setSelectedChatId }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const usersInChat = getUsersFromChat(data, chatId, currentUserId);
  return (
    <div
      className={`${styles.container} d-flex w-full box-shadow-primary  p-10  bg-neutral-100`}
    >
      {isSmallScreen && (
        <button
          onClick={() => setSelectedChatId(null)}
          className="px-10 bg-transparent border-0"
        >
          <img
            className="img-20"
            src="../../assets/back.svg"
            alt="arrow back"
          />
        </button>
      )}

      <div className={`ml-auto`}>
        {usersInChat
          .map((user) => (
            <span className={`${styles.userName}  fw-700`} key={user._id}>
              {user.userName}
            </span>
          ))
          .reduce((prev, curr) => [prev, ", ", curr])}
      </div>
    </div>
  );
}

export default ChatBoxHeader;
