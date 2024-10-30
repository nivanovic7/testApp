import styles from "./ChatBoxMessages.module.css";

function ChatBoxMessages({ children }) {
  return <div className={styles.messages}>{children}</div>;
}

export default ChatBoxMessages;
