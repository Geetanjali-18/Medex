import React from 'react'
import "./Style/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='footerInside' >
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                <li className='footerLi'><h4 className='footerHead'>About Us</h4>
                    <p>At our healthcare organization, we are dedicated to providing patient-centered care with a user-friendly interface, a range of convenient services, and a commitment to holistic wellness.!</p>
                </li>
                <li className='footerLi'><h4 className='footerHead'>Contact Info</h4>
                    <p>
                        <label htmlFor="Address">Address</label>:123 Main Street
                        Suite 456
                        Anytown, INDIA 12345
                        <label htmlFor="Phone">Phone</label>:+91 49595954
                        support@healthwebsite.com
                    </p>
                </li>
                <li className='footerLi'><h4 className='footerHead'>Important Links</h4>
                    <div id="footerLinks" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/client">My Account</Link>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/service">Services</Link>

                    </div>
                </li>
                <li className='footerLi'> <h4 className='footerHead'>Newsletter</h4>
                    <p>Whether you're a patient or simply interested in healthcare, our newsletter is a valuable resource that you won't want to miss. </p>
                    <div className="searchBoxFooter" style={{ border: "2px solid", borderRadius: "20px" }}>
                        <input type="text" id='footerInput' placeholder='EMAIL ADDRESS' style={{ borderRadius: "15px", padding: "2% 0%", border: "none" }} />
                        <button id='subscribeFooterSend'><i class="fa-solid fa-paper-plane"></i></button>

                    </div>
                </li>
            </ul>
            <hr style={{ backgroundColor: "white", width: "80%", margin: "auto" }} />
            <div className="footerDown" style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ padding: "2% 10%", width: "65%" }}>Copyright &#169;2023 All rights reserved</p>
                <ul className='footerDownUl' style={{ listStyle: "none", padding: "2% 27%" }}>
                    <li style={{ padding: "10% 38%" }}><a style={{ textDecoration: "none", color: "white" }} href="https://www.facebook.com/aakashhealthcare/"><i class="fa-brands fa-facebook-f" target="_blank"></i></a></li>
                    <li style={{ padding: "10% 38%" }}><a style={{ textDecoration: "none", color: "white" }} href="https://twitter.com/HealthCareGov?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li style={{ padding: "10% 38%" }}><a style={{ textDecoration: "none", color: "white" }} href="https://www.instagram.com/healthcareinc/?hl=en" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                    <li style={{ padding: "10% 38%" }}><a style={{ textDecoration: "none", color: "white" }} href="https://www.youtube.com/user/healthcaregov" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>

            </div>
        </div>
    )
}

export default Footer