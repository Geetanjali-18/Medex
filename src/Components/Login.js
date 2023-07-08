import React, { useState } from 'react';
import './Style/Login.css';
import {Link , useNavigate} from 'react-router-dom'
import circle from "./stock/circle.png";
import borderDesignLeft from "./stock/borderDesignLeft.png";
import { signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from "../firebase"
import borderDesign from "./stock/borderDesign.png";
function Login() {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg , setErrorMsg] = useState('');
  const [submitButtonDisabled , setSubmitButtonDisabled] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log( email , password);
    // TODO: handle form submission
    setSubmitButtonDisabled('true');
    signInWithEmailAndPassword(auth , email , password).then(async(res)=>{
      setSubmitButtonDisabled('false');
      const user =res.user;
      setErrorMsg('')
      navigate("/");
      localStorage.setItem('emailHack', email)
      localStorage.setItem('nameHack', "name")
      console.log(user);
    })
    .catch((err) =>{
      setErrorMsg("Invalid username or password");
       console.log("Error ", err);
       setSubmitButtonDisabled('false');
    });
    // TODO: handle form submission
  };

  return (
    <div className='divBody2'>
      <div className="body">
        <section className='login-section'>
        <img className="borderImageLogin" src={borderDesign} />
        <img className="borderImageLogin2" src={borderDesignLeft} />
        <img className="circleLogin" src={circle} />
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <h2>LOGIN</h2>

              <div className="input-box">
                <span className="icon"><i class="fa-sharp fa-solid fa-envelope"></i></span>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-box">
                <span className="icon"><i className="fa-solid fa-lock"></i></span>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="remember-forgot2">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember me
                </label>
                <a href="#">Forgot Password?</a>
              </div>
              <b className='error'>{errorMsg}</b>
              <button type="submit" className='loginButton'>Login</button>

              <div className="register-link2">
                <p>Don't have an account? <a><Link to="/Signup">Register</Link></a></p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;