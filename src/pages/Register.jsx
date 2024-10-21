import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Form from "../components/Form";
import { useRegisterMutation } from "../features/auth/authApislice";
import { REGISTER_CREDENTIALS } from "../utils/config";

function Register() {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userName, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    register({ userEmail, userPassword, userName, ...REGISTER_CREDENTIALS });
    //TODO - Tell user to set location on registering!
    navigate("/profile");
  }

  return (
    <div>
      {/* TODO - add all fields requered for reqistering */}
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
        <button disabled={isLoading}>Register</button>
      </Form>
      <Link to="/login">Already have account? Login</Link>
    </div>
  );
}

export default Register;
