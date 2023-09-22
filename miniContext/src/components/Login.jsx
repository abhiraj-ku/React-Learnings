// import { useState, useContext } from "react";
// import userContext from "../Context/UserContext";

// function Login() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useContext(userContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser({ userName, password });
//   };
//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//         placeholder="UserName pls...."
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password dede bhai pls...."
//       />
//       <button onClick={handleSubmit}>Login kr bsdk</button>
//     </div>
//   );
// }

// export default Login;

import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
