import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SingleMessage from "./SingleMessage";

function NewMessagesList({ socket, chatId }) {
  const [newMessages, setNewMessages] = useState([]);
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const scrollToBottomTarget = useRef(null);

  useEffect(() => {
    scrollToBottomTarget.current.scrollIntoView({ behaviour: "smooth" });
  }, [newMessages]);

  useEffect(() => {
    socket.on("newChatMessage", (e) => {
      if (e.chatId === chatId) {
        setNewMessages((state) => [...state, e.payload]);
      }
    });
    return () => socket.off("newChatMessage");
  }, [socket, chatId]);

  return (
    <>
      {newMessages.map((msg) => (
        <SingleMessage key={msg._id} message={msg} />
      ))}
      <p ref={scrollToBottomTarget}></p>
    </>
  );
}

export default NewMessagesList;
