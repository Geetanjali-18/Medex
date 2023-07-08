import React, { useState } from 'react';
import './Style/Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from "../firebase"
import circle from "./stock/circle.png";
import borderDesignLeft from "./stock/borderDesignLeft.png";
import borderDesign from "./stock/borderDesign.png";

function Signup() {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg , setErrorMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitButtonDisabled , setSubmitButtonDisabled] = useState(false);
  const [name, setName] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name , email , password);
   
    // TODO: handle form submission
    setSubmitButtonDisabled('true');
    createUserWithEmailAndPassword(auth , email , password).then(async(res)=>{
      setSubmitButtonDisabled('false');
      setErrorMsg('');
      const user =res.user;
      await updateProfile(user ,{
        displayName: name,
      })
      navigate("/");
      localStorage.setItem('emailHack', email)
      localStorage.setItem('nameHack', name)
      console.log(user);
    })
    .catch((err) =>{
       console.log("Error ", err);
       setErrorMsg("Email already registered");
       setSubmitButtonDisabled('false');
    });
  };

  return (
    <div className='divBody3'>
      

      <div className="body">
        <section className='signup-section'>
        <img className="borderImageLogin" src={borderDesign} />
        <img className="borderImageLogin2" src={borderDesignLeft} />
        <img className="circleLogin" src={circle} />
          <div className="signup-box">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              
              <div className="signupinput-box">
                <span className="icon"><i class="fa-solid fa-file-signature"></i></span>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={handleNameChange}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="signupinput-box">
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

              <div className="signupinput-box">
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

              <b className='errorMsg'>{errorMsg}</b>

              <button className='btnSign' type="submit" disabled={submitButtonDisabled}>Register</button>

              <div className="register-link">
                <p>Already have an account? <a><Link to="/Login">Login In</Link></a></p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;