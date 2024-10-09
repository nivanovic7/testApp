import FacebookLogin from "react-facebook-login";
import { facebookRegister } from "../features/auth/authActions";
import { useDispatch } from "react-redux";
import { FACEBOOK_LOGIN_APP_ID } from "../utils/config";
import { getRegisterCredentialsFromFB } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

function FacebookLoginButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function componentClicked() {
    console.log("Clicked");
  }

  function responseFacebook(res) {
    const credentials = getRegisterCredentialsFromFB(res);
    console.log(res);
    dispatch(facebookRegister({ credentials, navigate }));
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
