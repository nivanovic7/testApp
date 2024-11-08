function SingleMessageHeader({ message }) {
  return (
    <p className="messageUserName">
      <small>
        <i>{message.chatMessageUser.userName}:</i>
      </small>
    </p>
  );
}

export default SingleMessageHeader;
