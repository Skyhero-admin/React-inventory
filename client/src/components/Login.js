import { useState } from "react";
const axios = require("axios").default;

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const LogUserIn = () => {
    axios
      .get("http://127.0.0.1:3001/login", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
         user: username, password: pass })
      .then((res) => {
        console.log(res);
        setUsername("");
        setPass("");
        if (res.length >= 1) {
          console.log(res);
          console.log("You are logged in");
          return true;
        }
      });
  };

  return (
    <div className="form">
      <label htmlFor="username" className="formLabel">
        Username:
      </label>
      <input
        name="username"
        className="formInput"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label htmlFor="password" className="formLabel">
        Password:
      </label>
      <input
        name="password"
        type="password"
        className="formInput"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />

      <button className="submitButton" onClick={LogUserIn}>
        Log In
      </button>
    </div>
  );
};

export default Login;
