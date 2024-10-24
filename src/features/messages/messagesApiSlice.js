import { apiSlice } from "../../app/api/apiSlice";
import { ADD_CHAT_URL, GET_CHAT_URL } from "../../utils/config";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => GET_CHAT_URL,
    }),

    addToChat: builder.mutation({
      query: (userId) => ({
        url: ADD_CHAT_URL,
        method: "POST",
        body: { user: userId },
      }),
    }),
    getChat: builder.query({
      // todo : create a function for this url's
      query: (chatId) => `${GET_CHAT_URL}/${chatId}/message`,
      //   providesTags: ["Messages"],
    }),

    sendMessage: builder.mutation({
      query: ({ message, chatId }) => ({
        url: `${GET_CHAT_URL}/${chatId}/message/text`,
        method: "POST",
        body: { chatMessageUnique: chatId, chatMessageText: message },
      }),
      //   invalidatesTags: ["Messages"],
    }),
  }),
});

export const {
  useGetChatsQuery,
  useAddToChatMutation,
  useGetChatQuery,
  useSendMessageMutation,
} = messagesApiSlice;