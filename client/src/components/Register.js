import { useState } from "react";

const axios = require("axios").default;

const Register = () => {
  const [regUser, setRegUser] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const addUser = () => {
    console.log(regUser, regPassword);
    axios
      .post("http://127.0.0.1:3001/createUser", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        user: regUser,
        password: regPassword,
      })
      .then(() => {
        setRegPassword("");
        setRegUser("");
      });
  };

  return (
    <div className="form">
      <label htmlFor="username" className="formLabel">
        Set username:
      </label>
      <input
        name="username"
        className="formInput"
        onChange={(e) => {
          setRegUser(e.target.value);
        }}
      />

      <label htmlFor="password" className="formLabel">
        Set password:
      </label>
      <input
        name="password"
        type="password"
        className="formInput"
        onChange={(e) => {
          setRegPassword(e.target.value);
        }}
      />

      <button onClick={addUser} className="submitButton">
        Register
      </button>
    </div>
  );
};

export default Register;
