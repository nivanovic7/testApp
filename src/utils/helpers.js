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

export function getRegisterCredentialsFromFacebookResponse(data) {
  console.log(data);
  const credentials = {
    facebookID: data.userID,
    facebookAccessToken: data.accessToken,
    userEmail: data.email,
    userName: data.name,
    userGender: data.gender || 1,
    facebookDetails: "",
    userProfileImage: data.picture.data.url,
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

export function prepareFormData(dataObj) {
  const formData = new FormData();
  Object.entries(dataObj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });
  return formData;
}
export function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function getUsersFromChat(data, chatId, currentUserId) {
  const currentChat = data.filter((chat) => chat._id === chatId);
  const userNamesInChat = currentChat[0].chatMembers.filter(
    (member) => member._id !== currentUserId
  );
  return userNamesInChat;
}

export function getAvatarImages(members, currentUserId, defaultPath) {
  return members
    .filter((member) => member._id !== currentUserId)
    .map((member) =>
      member.userProfileImage
        ? member.userProfileImage.imageSmallSource
        : defaultPath
    );
}

export function getDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
  const R = 6371;

  // Convert degrees to radians
  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
