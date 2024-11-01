import styles from "./ChatBox.module.css";

import SendMessage from "./SendMessage";
import LoadedMessagesList from "./LoadedMessagesList";
import NewMessagesList from "./NewMessagesList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

function ChatBox({ chatId }) {
  // const token = useSelector((state) => state.auth.accessToken);
  // const socket = io.connect("https://laterz.api.exebyte.io", {
  //   transports: ["websocket"],
  //   query: { jwt: token },
  // });

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to socket");
  //   });
  //   return () => {
  //     console.log("OFF");
  //     socket.off("connect");
  //   };
  // }, [chatId, socket]);
  return (
    <div className={styles.chat}>
      <LoadedMessagesList chatId={chatId} />
      <NewMessagesList key={chatId} chatId={chatId} />
      <SendMessage chatId={chatId} />
    </div>
  );
}

export default ChatBox;
