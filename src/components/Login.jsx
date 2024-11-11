import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./ui/Input";
import Form from "./Form/Form";
import FacebookLoginButton from "./FacebookLoginButton";
import { useLoginMutation } from "../app/api/authApislice";
import { setCredentials } from "../app/api/authSlice";
import { useDispatch } from "react-redux";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

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
