import styles from "./SingleMessage.module.css";

import { useSelector } from "react-redux";

function SingleMessage({ children, message }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);

  return (
    <div
      className={
        message.chatMessageUser._id === currentUserId
          ? "userMessage"
          : "friendMessage"
      }
    >
      {children}
    </div>
  );
}

export default SingleMessage;
