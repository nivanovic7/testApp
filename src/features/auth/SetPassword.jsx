import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordRequest, changePassword } from "./authActions";
import { useState } from "react";

function SetPassword() {
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.user.user);

  function handleRequestReset(e) {
    e.preventDefault();
    dispatch(forgotPasswordRequest(userEmail));
    setIsRequestSent(true);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    dispatch(
      changePassword({
        userEmail,
        passwordChangeCode: code,
        userPassword: password,
      })
    );
  }

  return !isRequestSent ? (
    <form onSubmit={handleRequestReset}>
      <h2>Request Password!</h2>

      <button>Send password Request</button>
    </form>
  ) : (
    <form onSubmit={handlePasswordChange}>
      <h2>Please enter the code we sent you and your new password!</h2>

      <label htmlFor="code">Code</label>
      <input
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        type="text"
      />

      <label htmlFor="password">New Password</label>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button>Confirm</button>
    </form>
  );
}

export default SetPassword;
