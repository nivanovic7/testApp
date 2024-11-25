export const navLinks = [
  { path: "login", text: "login", status: "public" },
  { path: "register", text: "register", status: "public" },
  { path: "", text: "", status: "private" },
  { path: "dashboard", text: "dashboard", status: "private" },
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
