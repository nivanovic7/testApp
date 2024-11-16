import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Form from "../../components/Form/Form";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Input from "../../components/input/Input";
// import FacebookLoginButton from "../../components/facebookLoginButton/FacebookLoginButton";
import { useLoginMutation } from "../../app/api/authApislice";
import { setCredentials } from "../../app/slices/authSlice";
import FacebookLoginButton from "../../components/facebookLoginButton/FacebookLoginButton";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const [userEmail, setUserEmail] = useState("nikola851@yahoo.com");
  const [userPassword, setUserPassword] = useState("Password1!");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data: userData } = await login({
        userEmail,
        userPassword,
      }).unwrap();
      dispatch(setCredentials(userData));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form title="Login" onSubmit={handleSubmit}>
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
      <Link to="/register">You don&apos;t have account? Reqister!</Link>
    </Form>
  );
}

export default Login;
