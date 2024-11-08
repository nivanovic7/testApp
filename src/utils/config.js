export const API_URL = "https://laterz.api.exebyte.io/api/";
export const REFRESH_TOKEN_URL = "auth/refresh-token";
export const LOGIN_URL = "auth/login";
export const FACEBOOK_LOGIN_URL = "auth/facebook/login";
export const FACEBOOK_REGISTER_URL = "auth/facebook/register";
export const REGISTER_URL = "auth/register";
export const GET_USER_SETTINGS_API = "user/settings/getUser";
export const UPDATE_USER_SETTINGS_API = "user/settings";
export const DELETE_USER_URL = "user/settings/deactivate";
export const FORGOT_PASSWORD_REQUEST_URL = "auth/forgot-password/request";
export const VERIFY_USER_CODE_URL = "auth/forgot-password/verify";
export const CHANGE_PASSWORD_URL = "auth/forgot-password/change";
export const OUTFITS_URL = "outfits";
export const CREATE_OUTFIT_URL = "outfits/new";
export const CHAT_URL = "chat";
export const ADD_CHAT_URL = "chat/getChat";

export const FACEBOOK_LOGIN_APP_ID = "3046302348851990";

export const navLinks = [
  { path: "login", text: "login", status: "public" },
  { path: "register", text: "register", status: "public" },
  { path: "dashboard", text: "dashboard", status: "private" },
  { path: "profile", text: "profile", status: "private" },
  { path: "inbox", text: "inbox", status: "private" },
];

export const REGISTER_CREDENTIALS = {
  userFirstName: "Milivoje",
  userLastName: "Ivic",
  userDateOfBirth: "1992-05-12",
  userCategory: [],
  userRelationshipStatus: "married",
  userLanguages: [1],
  userLocation: {
    latitude: 17.9,
    longitude: 47,
    googleResponse: {},
    country: "NSW, Australia",
    state: "Some state",
    town: "Sydney",
    postCode: 78000,
    address: "Veljka Mlađenovića bb",
    description: "Location description",
  },
  userAccountType: "client",
  userGender: 2,
};
