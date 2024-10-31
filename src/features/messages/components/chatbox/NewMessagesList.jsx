import { useEffect, useRef, useState } from "react";
import SingleMessage from "./SingleMessage";

function NewMessagesList({ chatId, socket }) {
  const [newMessages, setNewMessages] = useState([]);
  const scrollToBottomTarget = useRef(null);

  useEffect(() => {
    socket.on("newChatMessage", (e) => {
      if (e.chatId === chatId) {
        console.log(e);
        setNewMessages((state) => [...state, e.payload]);
      }
    });

    return () => {
      console.log("off new msg");
      socket.off("newChatMessage");
    };
  }, [chatId, socket]);

  useEffect(() => {
    scrollToBottomTarget.current.scrollIntoView({ behaviour: "smooth" });
  }, [newMessages]);

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
