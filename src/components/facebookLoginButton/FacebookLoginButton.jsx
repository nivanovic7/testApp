import { getRegisterCredentialsFromFacebookResponse } from "../../utils/helpers";
import {
  useFacebookLoginMutation,
  useFacebookRegisterMutation,
} from "../../app/api/authApislice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCredentials,
  setUserProfileImage,
} from "../../app/slices/authSlice";
import { LoginSocialFacebook } from "reactjs-social-login";

function FacebookLoginButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [facebookLogin] = useFacebookLoginMutation();
  const [facebookRegister] = useFacebookRegisterMutation();

  async function handleFacebookResponse(res) {
    const credentials = getRegisterCredentialsFromFacebookResponse(res.data);
    console.log(credentials);
    try {
      await facebookRegister(credentials).unwrap();
      navigate("/login");
    } catch (registerError) {
      if (registerError.status === 409) {
        try {
          const data = await facebookLogin(credentials).unwrap();
          dispatch(setCredentials(data));
          console.log(credentials);
          dispatch(
            setUserProfileImage({
              imageSmallSource: credentials.userProfileImage,
            })
          );
          navigate("/");
        } catch (loginError) {
          console.log(loginError, "FB LOGIN NOT SUCCESSFULL");
        }
      } else {
        console.log(registerError, "FB REGISTRATION NOT SUCCESSFULL");
      }
    }
  }

  return (
    <div>
      <LoginSocialFacebook
        fields="name, email, username, image"
        appId={import.meta.env.VITE_FACEBOOK_LOGIN_APP_ID}
        onLoginStart={(start) => console.log(start)}
        onResolve={(res) => {
          handleFacebookResponse(res);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <button type="button">Login with Facebook</button>
      </LoginSocialFacebook>
    </div>
  );
}

export default FacebookLoginButton;
