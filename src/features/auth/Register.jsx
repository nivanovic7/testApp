import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Form from "../../components/Form";
import { useRegisterMutation } from "./authApislice";
import { REGISTER_CREDENTIALS } from "../../utils/config";
import ErrorMessage from "../../components/ErrorMessage";

function Register() {
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userName, setName] = useState("");
  const credentials = {
    userEmail,
    userPassword,
    userName,
    ...REGISTER_CREDENTIALS,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await register(credentials).unwrap();
      //TODO - Tell user to set location on registering!
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {/* TODO - add all fields requered for reqistering */}
      <Form onSubmit={handleSubmit} title="Register">
        {error && <ErrorMessage error={error} />}
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
