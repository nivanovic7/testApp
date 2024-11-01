import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Form from "../../components/Form";
import FacebookLoginButton from "./FacebookLoginButton";

import { useLoginMutation } from "./authApislice";
import { setCredentials } from "./authSlice";
import { useDispatch } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import { Bounce, toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const [userEmail, setUserEmail] = useState("nikola851@yahoo.com");
  const [userPassword, setUserPassword] = useState("Password1!");
  const credentials = {
    userEmail,
    userPassword,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data: userData } = await login(credentials).unwrap();
      dispatch(setCredentials(userData));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Mapbox /> */}
      {error && <ErrorMessage error={error} />}

      <Input
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        type="email"
        placeholder="email"
        label="Email"
        required
      />
      <Input
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        type="password"
        placeholder="password"
        label="Password"
        required
      />

      <button disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
      <FacebookLoginButton />
    </Form>
  );
}

export default Login;
