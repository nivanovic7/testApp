import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useSocket from "../../hooks/useSocket";
import SingleMessage from "../singleMessage/SingleMessage";
import SingleMessageHeader from "../singleMessageHeader/SingleMessageHeader";
import SingleMessageFooter from "../singleMessageFooter/SingleMessageFooter";
import SingleMessageBody from "../singleMessageBody/SingleMessageBody";

function NewMessagesList({ chatId, newMessages, setNewMessages }) {
  const scrollToBottomTarget = useRef(null);
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const socket = useSocket(chatId);

  useEffect(() => {
    if (socket) {
      socket.on("newChatMessage", (e) => {
        const friendId = e.payload.chatMessageUser._id;
        if (currentUserId !== friendId)
          setNewMessages((state) => [...state, e]);
      });

      return () => {
        socket.off("newChatMessage");
      };
    }
  }, [chatId, socket, currentUserId, setNewMessages]);

  useEffect(() => {
    scrollToBottomTarget.current.scrollIntoView({ behaviour: "smooth" });
  }, [newMessages]);

  return (
    <>
      {newMessages.map((msg) => {
        return (
          <SingleMessage key={msg.payload._id} message={msg.payload}>
            <SingleMessageHeader message={msg.payload} />
            <SingleMessageBody message={msg.payload} />
            <SingleMessageFooter message={msg.payload} />
          </SingleMessage>
        );
      })}
      <p ref={scrollToBottomTarget}></p>
    </>
  );
}

export default NewMessagesList;
