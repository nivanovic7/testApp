import { useState } from "react";
import PrivateChatsList from "../PrivateChatsList/PrivateChatsList";

function ListItemGroup({ chat, chatMembers }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <p className="mr-auto">{chat.chatName}</p>
      <img
        className="img-30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        src="../../assets/menu (1).png"
        alt=""
      />

      {isMenuOpen && (
        <PrivateChatsList
          groupId={chat._id}
          chatMembers={chatMembers}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
}

export default ListItemGroup;
