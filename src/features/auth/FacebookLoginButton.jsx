import FacebookLogin from "react-facebook-login";
import { FACEBOOK_LOGIN_APP_ID } from "../../utils/config";
import { getRegisterCredentialsFromFB } from "../../utils/helpers";
import {
  useFacebookLoginMutation,
  useFacebookRegisterMutation,
} from "./authApislice";
import { useNavigate } from "react-router-dom";

function FacebookLoginButton() {
  const navigate = useNavigate();
  const [facebookLogin] = useFacebookLoginMutation();
  const [facebookRegister] = useFacebookRegisterMutation();

  function componentClicked(e) {
    console.log(e);
  }
  async function responseFacebook(res) {
    const credentials = getRegisterCredentialsFromFB(res);

    try {
      await facebookRegister(credentials).unwrap();
      navigate("/profile");
    } catch (registerError) {
      if (registerError.status === 409) {
        try {
          await facebookLogin(credentials).unwrap();
          navigate("/profile");
        } catch (loginError) {
          console.log(loginError, "LOGIN NOT SUCCESSFULL");
        }
      } else {
        console.log(registerError, "REGISTRATION NOT SUCCESSFULL");
      }
    }
  }

  return (
    <FacebookLogin
      appId={FACEBOOK_LOGIN_APP_ID}
      autoLoad={false}
      fields="email, name, picture, gender, first_name"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}

export default FacebookLoginButton;
