import { apiSlice } from "../../app/api/apiSlice";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => import.meta.env.VITE_CHAT_URL,
      providesTags: ["Conversations"],
    }),

    createGroupChat: builder.mutation({
      query: (chatName) => ({
        url: import.meta.env.VITE_CHAT_URL,
        method: "POST",
        body: { chatName },
      }),
      invalidatesTags: ["Conversations"],
    }),

    addUserToGroupChat: builder.mutation({
      query: ({ groupId, usersIds }) => {
        console.log(usersIds);
        return {
          url: `${import.meta.env.VITE_CHAT_URL}/${groupId}/members`,
          method: "POST",
          body: usersIds,
        };
      },
    }),

    addToChat: builder.mutation({
      query: (userId) => ({
        url: import.meta.env.VITE_ADD_CHAT_URL,
        method: "POST",
        body: { user: userId },
      }),
      invalidatesTags: ["Conversations"],
    }),

    getChat: builder.query({
      query: (chatId) => `${import.meta.env.VITE_CHAT_URL}/${chatId}/message`,
      transformResponse: (res) => {
        return { ...res, data: res.data.reverse() };
      },
    }),

    sendMessage: builder.mutation({
      query: ({ message, chatId }) => ({
        url: `${import.meta.env.VITE_CHAT_URL}/${chatId}/message/text`,
        method: "POST",
        body: { chatMessageUnique: chatId, chatMessageText: message },
      }),
    }),
    sendAttachment: builder.mutation({
      query: ({ data, chatId }) => ({
        url: `${import.meta.env.VITE_CHAT_URL}/${chatId}/message/media`,
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
