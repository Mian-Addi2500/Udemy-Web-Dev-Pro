// Q ky data bhjna hi to  1st of all we import some things like [useState] and [useContext] hook and isi ky sath sy hi hmra [context] ka doc yhn sy start hota h jo [react] wala h
import React, { useState, useContext } from "react";
// now we also import [userContext] too

import UserContext from "../context/UserContext";

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  // now see how to use this [UserContext]

  const { setUser } = useContext(UserContext);

  //   now the Q is ky ya [setUser] khn sy aa gya hm ny to declear hi ni kia to is ka answer h ky hm ny value set kr ky bhjni hn to hm ny [UserContextProvider] mn state pass ki thi [user or setUser] ki or us ko [value] mn pass kia tha [user ko b or setUser] ta ky agr muhjy user sy koi [data] chyea to mn us [user]  wo [data] ly ln lekin agr [user] field mn mean [state] mn agr koi value [add] krni ho to hmry pass method h na [setUser] wala us ko kam mn leany gy or us [setUser] ka access hmen kis chz sy mil rha h wo hmen mil rha h [useContext] sy

   const handleSubmit = (e) => {
     e.preventDefault();
     setUser({ username, password });
     // now by this we sent data 🔺
   };
 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

// now how to get data ? for this we go to [Profile.jsx] file
