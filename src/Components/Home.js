import React from 'react'
import logo from '../logo.svg';
import landingPage from "./stock/landingpage.png"
import "./Style/Home.css"
import wwoBg from "./stock/homePagewwo.png"
import HomePageCardsArticles from "./HomePageCardsArticles"
import HomeSwipeCard from "./HomeSwipeCard"
import borderDesign from "./stock/borderDesign.png"
import borderDesignLeft from "./stock/borderDesignLeft.png"
import circle from "./stock/circle.png";
import doctorImage from "./stock/doctorImage.png"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//page2

import page2i from "./stock/page2.i.jpg"
import page2ii from "./stock/page2.ii.jpg"
import page2iii from "./stock/page2.iii.jpg"
import page2iv from "./stock/page2.iv.jpg"

//page3

import wwoffer from "./stock/whatweoffer.jpg"
import HomePageCards from './HomePageCards';

const Home = () => {
  let history = useNavigate()
  // useEffect(() => {
  //   if(localStorage.getItem('emailHack')){

  //   }
  //   else{
  //     history("/login")
  //   }
  
  //   return () => {
      
  //   }
  // }, [])
  
  return (
    <div id='HomePage'>

      <section className="HomePage1">
        <img src={borderDesign} id="img1"></img>
        <img src={borderDesignLeft} id="img2"></img>
        <img src={circle} id="img3"></img>
        <div className="page1Left">
          <h1>Leading the Way in Patient-Centered <span>Healthcare</span> Services</h1>
          <p>
          Providing patient-centered care, we also prioritize creating a user-friendly interface that enhances the patient experience. We understand that navigating the healthcare system can be daunting, and we strive to make it as easy and intuitive as possible for our patients.
          </p>
          <Link to="/signup"><button className="btn1 more" style={{cursor:"pointer"}}>Get Started </button></Link>
          <Link to = "/booking"><button className="btn1" style={{cursor:"pointer"}}>Free Consultation</button></Link>
        </div>
        <div className="page1Right">
          <img src={doctorImage} id="home_img"></img>
        </div>
      </section>

      <div className="HomePage3">
        {/* <img src={wwoBg} alt="" style={{ position: "absolute", width: "33%", right: "0" }} /> */}
        <div className="page3headImg" style={{ display: "flex" }} >
          <div className="page3init">
            <h1 className='wwoHead1' style={{}}>What We Offer</h1>
            <p className='wwoP'>At our healthcare organization, we offer a range of convenient and accessible services to help our patients manage their healthcare needs. Here are some of the key services we provide</p>
          </div>
          <div className="page3imgDiv" style={{ width: "50%" }}>
            <img id='page3img' style={{ width: "25%" }} src={wwoffer} alt="" />

          </div>

        </div>
        <div className="allCardsHome" style={{ display: "flex", flexWrap: "wrap" }}>
          <HomePageCards logo={<i class="fa-solid fa-leaf"></i>} heading={<b style={{color:"#f17732"}}>Online Appointment Booking</b>} para={"We offer a user-friendly online platform that allows patients to schedule appointments with their healthcare provider at their convenience. "} />

          <HomePageCards logo={<i class="fa-solid fa-chart-simple"></i>} heading={<b style={{color:"#f17732"}}>Prescription Refills</b>} para={"Our digital platform allows patients to request prescription refills with just a few clicks. We work closely with our patients' healthcare providers to ensure timely and accurate prescription renewals, with the added convenience of online access."} />

          <HomePageCards logo={<i class="fa-solid fa-coins"></i>} heading={<b style={{color:"#f17732"}}>Virtual Consultations</b>} para={"We offer virtual consultations for patients who prefer the convenience of a remote appointment."} />

          <HomePageCards logo={<i class="fa-solid fa-building-columns"></i>} heading={<b style={{color:"#f17732"}}>Access to Medical Records</b>} para={" Our online platform provides patients with secure access to their medical records, allowing them to review their healthcare history, track their progress, and stay informed about their healthcare needs."} />

          <HomePageCards logo={<i class="fa-solid fa-mustache"></i>} heading={<b style={{color:"#f17732"}}>Patient Education</b>} para={"We believe that patient education is an essential component of healthcare, which is why we provide a range of resources to help our patients learn about their conditions, treatments, and overall health."} />

          <HomePageCards logo={<i class="fa-solid fa-percent"></i>} heading={<b style={{color:"#f17732"}}>Wellness Programs</b>} para={"We believe in taking a holistic approach to healthcare, which is why we offer a range of wellness programs to help patients achieve and maintain optimal health. Our wellness programs include nutrition counseling, fitness classes, stress management, and more."} />


        </div>

        <div className="page3BtnSection" style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ border: "none", backgroundColor: "#1EDE82", color: "#0D1F3D" }}>Get Started <i class="fa-sharp fa-solid fa-angle-right"></i></button>
          <button id='page3Consultation' style={{ border: "3px solid white", color: "white", backgroundColor: "transparent" }}>Free Consultation</button>
        </div>

      </div>


      <div className="HomePage4">
        <h1>Latest Articles</h1>
        <div className="imgSetPg4">
          <img src="https://unsplash.com/photos/7jjnJ-QA9fY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHx8fDE2Nzk4MzA1OTM&force=true" alt="" />
          <img src="https://unsplash.com/photos/xM_1ZYHOc9E/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGRvY3RvcnN8ZW58MHx8fHwxNjc5ODMwNTkz&force=true" alt="" />
          <img src="https://unsplash.com/photos/NFvdKIhxYlU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjB8fGRvY3RvcnN8ZW58MHx8fHwxNjc5ODMwNTkz&force=true" alt="" />
          <img src="https://unsplash.com/photos/3ewkNkfJj2k/download?force=true" alt="" />

        </div>
        <p >

          <HomePageCardsArticles para={"Boosts immune function: Studies have shown that regular meditation can help to increase the activity of natural killer cells, which are responsible for fighting off viruses and cancer cells in the body."} />
          <HomePageCardsArticles para={"Reduces inflammation: Chronic inflammation is linked to a range of health problems, including heart disease, diabetes, and cancer. Meditation has been shown to reduce inflammation in the body, which can help to prevent these diseases."} />
          <HomePageCardsArticles para={"Lowers blood pressure: High blood pressure is a major risk factor for heart disease and stroke. Regular meditation has been shown to help lower blood pressure, which can reduce your risk of these conditions."} />
          <HomePageCardsArticles para={"Improves sleep: If you have trouble falling asleep or staying asleep, meditation may be able to help. Studies have shown that meditation can improve the quality of sleep and help people with insomnia get more restful sleep."} />
          <HomePageCardsArticles para={"Reduces stress and anxiety: Meditation is perhaps best known for its ability to reduce stress and anxiety. It can help to calm the mind and promote feelings of relaxation, which can have a positive impact on mental health."} />
          <HomePageCardsArticles para={"Incorporating regular meditation into your daily routine can have a wide range of health benefits. Whether you're looking to boost your immune function, improve your sleep, or reduce stress and anxiety, meditation is a simple and effective way to support your overall health and well-being."} />


        </p>
      </div>


    </div>
  )
}

export default Home