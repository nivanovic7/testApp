import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/ui/Input";
import Form from "../components/Form";
import FacebookLoginButton from "../components/FacebookLoginButton";
import ErrorMessage from "../components/ErrorMessage";
import Mapbox from "../components/Mapbox";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("nikola851@yahoo.com");
  const [userPassword, setUserPassword] = useState("Password1!");
  const { loading, error } = useSelector((state) => state.auth);

  async function handleSubmit(e) {
    e.preventDefault();
    const credentials = { userEmail, userPassword };
    dispatch(login({ credentials, navigate }));
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Mapbox /> */}
      {error && <ErrorMessage message={error} />}
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

      <button disabled={loading}>Login</button>
      <FacebookLoginButton />
    </Form>
  );
}

export default Login;
