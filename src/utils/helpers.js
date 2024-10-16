import { setAuthHeader, setRefreshToken } from "../api/api";
import * as Yup from "yup";
import { navLinks } from "./config";

export function setTokens(accessToken, refreshToken) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

export function deleteTokens() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
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

export function handleTokens(res) {
  const accessToken = res.data.data.accessToken;
  const refreshToken = res.data.data.refreshToken;

  setAuthHeader(accessToken);
  setRefreshToken();
  setTokens(accessToken, refreshToken);
}

export const validation = Yup.object({
  userPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/\d/, "Password must contain at least one number.")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character."
    )
    .required("Password is required."),

  userEmail: Yup.string().email("Invalid email address").required("Required"),
});

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
