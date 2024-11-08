import { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";
import useSocket from "../../../../hooks/useSocket";
import { useSelector } from "react-redux";
import SingleMessageHeader from "./SingleMessageHeader";
import SingleMessageFooter from "./SingleMessageFooter";
import SingleMessageBody from "./SingleMessageBody";

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

  console.log(newMessages);
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
