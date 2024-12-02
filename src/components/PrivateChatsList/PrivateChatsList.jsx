import styles from "./PrivateChatsList.module.css";
import {
  useAddUserToGroupChatMutation,
  useGetChatsQuery,
} from "../../app/api/messagesApiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

function PrivateChatsList({ chatMembers, groupId, setIsMenuOpen }) {
  const { data, isLoading } = useGetChatsQuery();
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const chatMembersIds = chatMembers.map((member) => member._id);
  const [addUsersToGroupChat] = useAddUserToGroupChatMutation();
  if (isLoading) return <p>Loading</p>;

  const allMembers = data.data
    .filter((chat) => chat.chatType === "private")
    .map((chat) => chat.chatMembers)
    .flat();
  const filteredMembers = allMembers
    .filter((member) => member._id !== currentUserId)
    .filter((member) => {
      return !chatMembersIds.includes(member._id);
    });

  function prepareMemberForAdd(member) {
    setIsSelected(!isSelected);
    if (selectedMembers.includes(member)) {
      setSelectedMembers((state) =>
        state.filter((selected) => selected !== member)
      );
    } else {
      setSelectedMembers((state) => [...state, member]);
    }
  }

  function handleAddUsers() {
    const usersIds = selectedMembers.map((member) => member._id);
    addUsersToGroupChat({ groupId, usersIds });
    setIsMenuOpen(false);
  }

  return (
    <div className={`${styles.container} bg-neutral-100`}>
      {selectedMembers.length > 0 && (
        <button onClick={handleAddUsers}>Add users</button>
      )}
      <ul className={styles.list}>
        {filteredMembers.map((member) => (
          <li
            className={selectedMembers.includes(member) ? styles.selected : ""}
            onClick={() => prepareMemberForAdd(member)}
            key={member._id}
          >
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrivateChatsList;
