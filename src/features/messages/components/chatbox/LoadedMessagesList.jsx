import { useSelector } from "react-redux";
import { useGetChatQuery } from "../../messagesApiSlice";

function LoadedMessagesList({ chatId }) {
  const { data, isLoading } = useGetChatQuery(chatId);
  const currentUserId = useSelector((state) => state.auth.user.sub);

  if (isLoading) return <p>Loading messages...</p>;

  if (data.data.length === 0) return <p>No messages. Start conversation.</p>;

  return data.data.map((message) => (
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
  ));
}

export default LoadedMessagesList;
