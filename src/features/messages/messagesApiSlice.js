import { apiSlice } from "../../app/api/apiSlice";
import { ADD_CHAT_URL, GET_CHAT_URL } from "../../utils/config.env";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => GET_CHAT_URL,
      providesTags: ["Conversations"],
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
      // todo : create a function for this url's
      query: (chatId) => `${GET_CHAT_URL}/${chatId}/message`,
      transformResponse: (res) => {
        return { ...res, data: res.data.reverse() };
      },
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
