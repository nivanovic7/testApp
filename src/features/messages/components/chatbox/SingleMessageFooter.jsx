function SingleMessageFooter({ message }) {
  return (
    <p style={{ color: "gray", fontSize: "10px", textAlign: "right" }}>
      <small>
        <i>{message.messageTime}</i>
      </small>
    </p>
  );
}

export default SingleMessageFooter;
