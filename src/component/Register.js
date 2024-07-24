import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    try {
      const response = axios.post("http://localhost:8888/pages/register", { email, password })
      
        .then((res) => {
          console.log(res.data, "register data");

          if (res.data.msg === "This email is already exist") {
            alert(res.data.msg);
            navigate("/login");
          } else {
            localStorage.setItem("token", res.data.token);
          }
        });
        console.log(response.data, "response data"); //handle the response as needed
    } catch (error) {
      console.error("registration failed", error);
    }
  };
  return (
    <div>
      <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
