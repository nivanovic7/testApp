import { useSelector } from "react-redux";

function SingleMessage({ message }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);

  return (
    <p
      className={
        message.chatMessageUser._id === currentUserId
          ? "userMessage"
          : "friendMessage"
      }
      key={message._id}
    >
      {message.chatMessageText}
    </p>
  );
}

export default SingleMessage;
