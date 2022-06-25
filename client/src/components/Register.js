import { useState } from "react";

const axios = require('axios').default;

const Register = () =>{
    const [regUser, setRegUser] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const addUser = () => {
        axios.post("http://localhost:3001/createUser", {user: regUser, password: regPassword}).then(()=>{
                setRegPassword("");
                setRegUser("");
            });
        };

    return(
        <div className="form">
            <label htmlFor = 'username' className = 'formLabel'>
                Set username:
            </label>
            <input name = 'username' className = 'formInput' onChange={(e) => {
                setRegUser(e.target.value);
            }} />

            <label htmlFor = 'password' className = 'formLabel'>
                Set password:
            </label>
            <input name = 'password' type = "password" className = 'formInput' onChange={(e) => {
                setRegPassword(e.target.value);
            }} />

            <button onClick = {addUser} className = 'submitButton'>Register</button>
        </div>

    )
}

export default Register;