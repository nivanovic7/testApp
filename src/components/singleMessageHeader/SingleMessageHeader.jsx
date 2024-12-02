function SingleMessageHeader({ message }) {
  return (
    <p className="clr-neutral-300">
      <small>
        <i>{message.chatMessageUser.userName}:</i>
      </small>
    </p>
  );
}

export default SingleMessageHeader;
