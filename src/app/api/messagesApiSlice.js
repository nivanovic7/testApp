import { apiSlice } from "./apiSlice";

const CHAT_URL = "chat";
const ADD_CHAT_URL = "chat/getChat";
const MESSAGE = "message";
const MESSAGE_TEXT = "message/text";
const MESSAGE_MEDIA = "message/media";
const MEMBERS = "members";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => CHAT_URL,
      providesTags: ["Conversations"],
    }),
    getChat: builder.query({
      query: (chatId) => `${CHAT_URL}/${chatId}/${MESSAGE}`,
      transformResponse: (res) => {
        return { ...res, data: res.data.reverse() };
      },
    }),
    createGroupChat: builder.mutation({
      query: (chatName) => ({
        url: CHAT_URL,
        method: "POST",
        body: { chatName },
      }),
      invalidatesTags: ["Conversations"],
    }),

    addUserToGroupChat: builder.mutation({
      query: ({ groupId, usersIds }) => {
        return {
          url: `${CHAT_URL}/${groupId}/${MEMBERS}`,
          method: "POST",
          body: usersIds,
        };
      },
    }),

    addToChat: builder.mutation({
      query: (userId) => ({
        url: ADD_CHAT_URL,
        method: "POST",
        body: { user: userId },
      }),
      invalidatesTags: ["Conversations"],
    }),

    sendMessage: builder.mutation({
      query: ({ message, chatId }) => ({
        url: `${CHAT_URL}/${chatId}/${MESSAGE_TEXT}`,
        method: "POST",
        body: { chatMessageUnique: chatId, chatMessageText: message },
      }),
    }),
    sendAttachment: builder.mutation({
      query: ({ data, chatId }) => ({
        url: `${CHAT_URL}/${chatId}/${MESSAGE_MEDIA}`,
        method: "POST",
        body: data,
      }),
    }),
    getGroupMembers: builder.query({
      query: (chatId) => `${CHAT_URL}/${chatId}/${MEMBERS}`,
    }),
  }),
});

export const {
  useGetChatsQuery,
  useAddToChatMutation,
  useGetChatQuery,
  useSendMessageMutation,
  useSendAttachmentMutation,
  useCreateGroupChatMutation,
  useAddUserToGroupChatMutation,
  useGetGroupMembersQuery,
} = messagesApiSlice;
