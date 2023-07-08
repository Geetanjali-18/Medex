import React from 'react'
import "./Style/Navbar.css"
import { useRef } from 'react'
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Link,
//   } from "react-router-dom";


const Navbar = () => {

    const searchDisplay = useRef()
    const searchBoxDisplay = useRef()
    const HomedownNavRef = useRef()
    const ServicedownNavRef = useRef()
    const ContactdownNavRef = useRef()
    const AboutdownNavRef = useRef()
    const LogindownNavRef = useRef()
    const searcher = useRef()

    const menuDisplay = useRef()
    const menuBtn = useRef()
    const handleOnSearchClick = () => {
        searchDisplay.current.style.display = searchDisplay.current.style.display === "block" ? "none" : "block"
        searcher.current.style.backgroundColor = searcher.current.style.backgroundColor === "black" ? "transparent" : "black"
        searcher.current.style.color = searcher.current.style.color === "white" ? "white" : "white"
        // if(searcher.current.style.color === "black"){
        //     searcher.current.style.color = "white"
        // }
        searchBoxDisplay.current.style.transform="translateY(-5px)";
        setInterval(() => {
        searchBoxDisplay.current.style.transform="translateY(0px)";
        }, 50);


    }

    const handleOnMenu = () => {
        menuDisplay.current.style.display = menuDisplay.current.style.display === "block" ? "none" : "block";
        menuBtn.current.style.backgroundColor = menuBtn.current.style.backgroundColor === "black" ? "transparent" : "black"
        menuBtn.current.style.color = menuBtn.current.style.color === "white" ? "white" : "white"

        HomedownNavRef.current.style.transform="translateY(-5px)";
        setInterval(() => {
        HomedownNavRef.current.style.transform="translateY(0px)";
        }, 50);

        ServicedownNavRef.current.style.transform="translateY(-5px)";
        setInterval(() => {
        ServicedownNavRef.current.style.transform="translateY(0px)";
        }, 50);

        ContactdownNavRef.current.style.transform="translateY(-5px)";
        setInterval(() => {
        ContactdownNavRef.current.style.transform="translateY(0px)";
        }, 50);

        AboutdownNavRef.current.style.transform="translateY(-5px)";
        setInterval(() => {
        AboutdownNavRef.current.style.transform="translateY(0px)";
        }, 50);

        LogindownNavRef.current.style.transform="translateY(-5px)";
        setInterval(() => {
        LogindownNavRef.current.style.transform="translateY(0px)";
        }, 50);

    }


    return (
        <>

            <div className="navBlur"></div>


            <nav id='navBar' style={{
                position: "sticky", top: "0", textAlign: "center",
                // backgroundColor:"white",
                zIndex: "5"
            }}>
                <nav className='NavTopLayer'>
                    <ul className='upUl'>
                        <div className="MobileNav1" style={{ display: "flex" }}>
                            <li className='liNavbar'>logo</li>
                            <li className='liNavbar mNSearch' ref={searcher} onClick={handleOnSearchClick}><i class="fa-solid fa-magnifying-glass"></i></li>
                            <li className='liNavbar mNMenu' ref={menuBtn} onClick={handleOnMenu}>MENU</li>

                        </div>
                        <li className='upBlank liNavbar'></li>
                        <div className="moreLi liNavbar" ref={searchDisplay}>
                            <li ref={searchBoxDisplay} className='searchPart'><button className='navSearchBtn'><i class="fa-solid fa-magnifying-glass"></i> </button> <input className='searchInp' placeholder='Search' type="text" /> </li>

                        </div>
                        <li className='liNavbar accountOnNav'><i class="fa-solid fa-user"></i> Account</li>
                    </ul>
                </nav>
                <hr className='navbarGap' />
                <nav className='NavBottomLayer' ref={menuDisplay}>
                    <ul className='downUl'>
                        <li id='HomeNav' ref={HomedownNavRef} className='liNavbar liNavbarDown'><a className='liNavbarDownA' href="">Home</a></li>
                        <li id='ServicesNav' ref={ServicedownNavRef} className='liNavbar liNavbarDown'><a className='liNavbarDownA' href="">Services Offered</a> </li>
                        <li id='ContactNav' ref={ContactdownNavRef} className='liNavbar liNavbarDown'><a className='liNavbarDownA' href="">Contact Us</a> </li>
                        <li id='AboutNav' ref={AboutdownNavRef} className='liNavbar liNavbarDown'><a className='liNavbarDownA' href="">About Us</a> </li>
                        <li id='LoginNav' ref={LogindownNavRef} className='liNavbar liNavbarDown'><a className='liNavbarDownA' href="">Login/Register</a> </li>
                    </ul>
                </nav>
            </nav>
        </>
    )
}

export default Navbar