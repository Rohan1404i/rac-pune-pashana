import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

import {useCookies} from 'react-cookie';
import Header from "../header/Header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['isUser']);

    const handleLogin = async (e) => {
      e.preventDefault();
      if(email==='admin@gmail.com'&& password==='admin'){
                setCookie('loggedIn',true)
window.location.href='/admin'
      }
     
    };
  return (
    <div className='loginWholeCont'>
      <Header />
      <h2 className='loginTitle'>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          {/* <label>Email:</label> */}
          <input className='inputCont'
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input className='inputCont'
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='submitBtn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
