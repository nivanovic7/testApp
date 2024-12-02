function SingleMessageBody({ message }) {
  if (message.chatMessageType === "text") {
    return (
      <p className="b-radius-round messageText clr-neutral-100">
        {message.chatMessageText}
      </p>
    );
  }

  if (message.chatMessageType === "media") {
    return (
      <div>
        <img
          style={{ maxWidth: "100px" }}
          src={message.chatMessageImage[0].imageSmallSource}
          alt="image message"
        />
      </div>
    );
  }
}

export default SingleMessageBody;
