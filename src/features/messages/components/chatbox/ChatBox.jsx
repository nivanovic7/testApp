import styles from "./ChatBox.module.css";

import SendMessage from "./SendMessage";
import LoadedMessagesList from "./LoadedMessagesList";
import NewMessagesList from "./NewMessagesList";

function ChatBox({ chatId, socket }) {
  return (
    <div className={styles.chat}>
      <LoadedMessagesList chatId={chatId} />
      <NewMessagesList key={chatId} chatId={chatId} socket={socket} />
      <SendMessage chatId={chatId} />
    </div>
  );
}

export default ChatBox;
