import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import { register } from "../features/auth/authActions";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userName, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(register({ userEmail, userPassword, userName }, navigate));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} title="Register">
        <Input
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Email"
          label="Email"
          required
        />
        <Input
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Password"
          label="Password"
          required
        />
        <Input
          value={userName}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          label="Username"
          required
        />
        <button disabled={loading}>Register</button>
      </Form>
      <Link to="/login">Already have account? Login</Link>
    </div>
  );
}

export default Register;
