import FacebookLogin from "react-facebook-login";

import { getRegisterCredentialsFromFB } from "../../utils/helpers";
import {
  useFacebookLoginMutation,
  useFacebookRegisterMutation,
} from "./authApislice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

function FacebookLoginButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [facebookLogin] = useFacebookLoginMutation();
  const [facebookRegister] = useFacebookRegisterMutation();

  async function responseFacebook(res) {
    const credentials = getRegisterCredentialsFromFB(res);

    try {
      await facebookRegister(credentials).unwrap();
      navigate("/profile");
    } catch (registerError) {
      if (registerError.status === 409) {
        try {
          const { data: userData } = await facebookLogin(credentials).unwrap();
          dispatch(setCredentials(userData));
          navigate("/profile");
        } catch (loginError) {
          console.log(loginError, "FB LOGIN NOT SUCCESSFULL");
        }
      } else {
        console.log(registerError, "FB REGISTRATION NOT SUCCESSFULL");
      }
    }
  }

  return (
    <FacebookLogin
      appId={import.meta.REACT_APP_FACEBOOK_LOGIN_APP_ID}
      autoLoad={false}
      fields="email, name, picture, gender, first_name"
      callback={responseFacebook}
    />
  );
}

export default FacebookLoginButton;
