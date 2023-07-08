import React from "react";
import "./navbar.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

{/* <Route exact path="/" element={<Home />} />
<Route exact path = "/About" element = {<About/>}/>
<Route exact path = "/appointment" element = {<Appointment/>}/>
<Route exact path = "/client" element = {<ClientSection/>}/>
<Route exact path = "/clientbill" element = {<ClientSectionBilling/>}/>
<Route exact path = "/prescription" element = {<Prescription/>}/> */}

const Navbar = () => {
  let history = useNavigate()

  const handleOnSignOut = async() => {
    const auth =await getAuth();
    await signOut(auth).then(() => {
    }).catch((error) => {
    });
    await localStorage.removeItem("emailHack")
    await localStorage.removeItem("nameHack")
    await history("/login")
  }

  const navBar = useRef()
  const handleOnCloseNav = () => {
    navBar.current.style.display = "none"
  }
  const handleOnMenuClick = () => {
    navBar.current.style.display = "block"
  }
  const getWhetherProfile = () => {
    if (localStorage.getItem("emailHack")) {
      return "block"
    }
    else {
      return "none"
    }
  }

  const getWhetherSignOutLogin = ()=>{
    if(localStorage.getItem("emailHack")){
      return "Sign out"
    }
    else{
      return "Sign in"
    }

  }
  return (
    <header className="header flex">
      <div className="logoDiv">
        <Link to="" className="logo flex">
          <h1>
           MedEx
            <i className="bx bxs-donate-heart"></i>
          </h1>
        </Link>
        <div className="crossBtn">
          {/* {return {{menuBool}?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-xmark"></i> }} */}
          <div onClick={handleOnMenuClick} className="menuTop"><i class="fa-solid fa-bars"></i></div>
        </div>
      </div>

      <div ref={navBar} className="navBar">
        <ul className="navLists flex">
          <div onClick={handleOnCloseNav} className="CloseTopNav"><i class="fa-solid fa-xmark"></i></div>
          <li className="navItem">
            <Link to="" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/About" className="navLink">
              About
            </Link>
          </li>
          <li className="navItem">
            <Link to="/service" className="navLink">
              Domains
            </Link>
          </li>
          <li className="navItem">
            <Link to="client" className="navLink">
              PatientInfo
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
          <Link to="/booking" style={{ color: "white", listStyle: "none" }}> <button style={{ color: "white" }} className="btn btn2">
            Book Appointment
          </button></Link>
          {/* <hr className="GapForSignOut" /> */}
          <div className="prfNavDiv">
            <button className="profileBtn "><i class="accountPrf fa-solid fa-user"></i></button>
            <ul className="profileBtnUl">

              <Link to="/client" style={{ color: "#222", display: getWhetherProfile() }}> <li>Patient Page</li></Link>
              <Link to="" onClick={handleOnSignOut} style={{ color: "#222" }}><li>{getWhetherSignOutLogin()}</li></Link>
            </ul>
          </div>
        </ul>
      </div>

      <div className="closeNavbar">
        <i class="bx bx-window-close"></i>
      </div>
      <div className="toggleNavbar">
        <i class="bx bx-menu-alt-right"></i>
      </div>
    </header>
  );
};

export default Navbar;