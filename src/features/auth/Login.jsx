import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/ui/Input";
import Form from "../../components/Form";
import FacebookLoginButton from "../../components/FacebookLoginButton";
import ErrorMessage from "../../components/ErrorMessage";
import Mapbox from "../../components/Mapbox";
import { useLoginMutation } from "./authApislice";
import { setCredentials } from "./authSlice";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("nikola851@yahoo.com");
  const [userPassword, setUserPassword] = useState("Password1!");
  // const { loading, error } = useSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login({ userEmail, userPassword }).unwrap();
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Mapbox /> */}
      {/* {error && <ErrorMessage message={error} />} */}
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

      {/* <button disabled={loading}>Login</button> */}
      <button disabled={isLoading}>Login</button>
      <FacebookLoginButton />
    </Form>
  );
}

export default Login;
