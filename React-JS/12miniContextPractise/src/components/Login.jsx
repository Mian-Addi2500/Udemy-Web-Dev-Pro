import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <div>
      <h1>LogIn Page</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="password"
        value={pass}
        placeholder="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
