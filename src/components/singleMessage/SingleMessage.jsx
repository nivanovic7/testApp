import { useSelector } from "react-redux";

function SingleMessage({ children, message }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const className =
    message.chatMessageUser._id === currentUserId
      ? "userMessage"
      : "friendMessage";

  return <div className={className}>{children}</div>;
}

export default SingleMessage;
