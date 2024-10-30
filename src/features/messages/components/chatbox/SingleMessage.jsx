function SingleMessage({ message }) {
  console.log(message);
  return (
    <p
      className={
        message.chatMessageUser._id === currentUserId
          ? styles.userMessage
          : styles.friendMessage
      }
      key={message._id}
    >
      {message.chatMessageText}
    </p>
  );
}

export default SingleMessage;
