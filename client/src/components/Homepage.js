import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";
import { useState } from "react";

const Homepage = () => {
  const [LoginStatus, setLoginStatus] = useState(false);

  return (
    <div>
      <Navbar />
      <Login />
      <Register />
    </div>
  );
};

export default Homepage;
