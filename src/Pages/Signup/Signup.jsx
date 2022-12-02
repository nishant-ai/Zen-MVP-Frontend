import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");

  const clearFields = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUserId("");
  };

  const createUser = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      clearFields();
      return;
    }

    const user = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      userId,
    };

    // POST User
    const userRes = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/`,
      user
    );
    console.log(userRes);
    clearFields();
  };

  return (
    <div className="Signup">
      <div className="SignupHead">Create Account</div>

      <form onSubmit={createUser} className="SignupForm">
        <input
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          type="text"
          placeholder="User ID"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
