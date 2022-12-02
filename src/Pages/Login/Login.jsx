import axios from "axios";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    // Login User
    axios({
      method: "POST",
      data: {
        userId: userId,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:8000/login",
    }).then((res) => console.log(res));

    setPassword("");
    setUserId("");
  };

  return (
    <div className="Login">
      <div className="LoginHead">LogIn to Your Account</div>

      <form onSubmit={loginUser} className="LoginForm">
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
