import { useGetChatQuery } from "../app/api/messagesApiSlice";
import SingleMessage from "./SingleMessage";
import SingleMessageFooter from "./SingleMessageFooter";
import SingleMessageHeader from "./SingleMessageHeader";
import SingleMessageBody from "./SingleMessageBody";

function LoadedMessagesList({ chatId, newMessages }) {
  const { data, isLoading } = useGetChatQuery(chatId, {
    refetchOnMountOrArgChange: true,
  });
  const loadedMessages = data ? data.data : [];
  const noMessages = loadedMessages.length === 0 && newMessages.length === 0;

  if (isLoading) return <p>Loading messages...</p>;

  if (noMessages) return <p>No messages. Start conversation.</p>;

  console.log(loadedMessages);
  return loadedMessages.map((message) => (
    <SingleMessage key={message._id} message={message}>
      <SingleMessageHeader message={message} />
      <SingleMessageBody message={message} />
      <SingleMessageFooter message={message} />
    </SingleMessage>
  ));
}

export default LoadedMessagesList;
