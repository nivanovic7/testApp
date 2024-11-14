import { apiSlice } from "./apiSlice";

const CHAT_URL = "chat";
const ADD_CHAT_URL = "chat/getChat";
const MEMBERS = "members";
const MESSAGE = "message";
const MESSAGE_TEXT = "message/text";
const MESSAGE_MEDIA = "message/media";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => CHAT_URL,
      providesTags: ["Conversations"],
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
        console.log(usersIds);
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

    getChat: builder.query({
      query: (chatId) => `${CHAT_URL}/${chatId}/${MESSAGE}`,
      transformResponse: (res) => {
        return { ...res, data: res.data.reverse() };
      },
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
} = messagesApiSlice;
