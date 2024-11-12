import { v4 as uuidv4 } from "uuid";
import { navLinks } from "./config.js";

export function getChatMembersUsernames(chat, userId) {
  return chat.chatMembers.filter((chat) =>
    chat._id !== userId ? chat.userName : null
  );
}

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function getNavLinksByStatus(status) {
  return navLinks.filter((link) => link.status === status);
}

export function getRegisterCredentialsFromFB(res) {
  const credentials = {
    facebookID: res.id,
    facebookAccessToken: res.accessToken,
    userEmail: res.email,
    userName: res.name,
    userGender: res.gender || 1,
    facebookDetails: "",
  };

  return credentials;
}

export function generateMessageObj(
  chatId,
  currentUserId,
  userName,
  type,
  message
) {
  const msg =
    type == "text"
      ? { chatMessageText: message }
      : { chatMessageImage: [{ imageSmallSource: message }] };

  return {
    chatId,
    payload: {
      chatMessageUser: { _id: currentUserId, userName },
      _id: uuidv4(),
      ...msg,
      chatMessageType: type.toLowerCase(),
    },
  };
}

export function removeChatsWithOnlyOneMember(conversations) {
  return conversations.filter(
    (chat) => chat.chatMembers.length > 1 || chat.chatType === "group"
  );
}

export function filterChatsByType(chats, type) {
  return chats.filter((chat) => chat.chatType === type);
}

export function prepareNewMessageObjectType(type, item) {
  if (type === "text") {
    return { type, message: item };
  }
  if (type === "media") {
    return { type, message: URL.createObjectURL(item) };
  }
}

export function prepareFormData({ dataObj }) {
  const formData = new FormData();
  Object.entries(dataObj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}
