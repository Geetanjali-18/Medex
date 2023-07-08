import React, { useState, useEffect } from "react";
import "./Style/Booking.css";
// import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
// import { db } from "../../firebase";
import settings from "./stock/settings.png";
import download from "./stock/download.png";
import message from "./stock/message.png";
import borderDesign from "./stock/borderDesign.png";
import circle from "./stock/circle.png";
import borderDesignLeft from "./stock/borderDesignLeft.png";
import Sidebar from "./Sidebar";


// useEffect
const Booking = () => {
  const [bookData, setBookData] = useState([{ name: "", email: "", DoctorName: "", problemDesc: "", date: "" }])

  const handleOnChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value })
    console.log(bookData)
  }

  const host = "https://medexbackend.onrender.com"
  const handleSubmit = async (e) => {
    e.preventDefault();

    const SendBookingData = async () => {
      console.log("Sending Dta")
      const response = await fetch(`${host}/api/client/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: bookData.name, email: bookData.email, doctorName: bookData.doctorName, problemDesc: bookData.problemDesc, date: bookData.date })
      });
      const json = await response.json()
      console.log("send successfully", json)


    };
    SendBookingData()
  }

  return (
    <div className="divBody">


      <div className="body">
        <section className="booking-section">
          <div className="image-section">
            <div className="images">
              <img
                className="img1"
                src="https://meditro.themetrades.com/react/static/media/mobile.f82d7322.png"
              />
              <img
                className="img2"
                src="https://meditro.themetrades.com/react/static/media/women.eb5c49c5.png"
              />
              <img className="img3" src={settings} />
              <img className="img4" src={download} />
              <img className="img5" src={message} />
            </div>
          </div>
          {/* <div className='aux-box'></div> */}
          <div className="booking-box">
            <form onSubmit={handleSubmit}>
              <h2>BOOK APPOINTMENT</h2>

              <div className="bookinginput-box">
                <span className="icon">
                  <i class="fa-solid fa-file-signature"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  // value={name}
                  onChange={handleOnChange}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="bookinginput-box">
                <span className="icon">
                  <i class="fa-sharp fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  // value={email}
                  onChange={handleOnChange}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="bookinginput-box">
                <span className="icon">
                  <i class="fa-solid fa-user-doctor"></i>
                </span>
                <input
                  type="text"
                  id="doctor"
                  name="doctorName"
                  required
                  // value={doctor}
                  onChange={handleOnChange}
                />
                <label htmlFor="doctor">Doctor Name</label>
              </div>

              <div className="bookinginput-box">
                <input
                  type="date"
                  id="date"
                  name="date"
                  // value={date}
                  required
                  onChange={handleOnChange}
                />
                <label htmlFor="date"></label>
              </div>

              <div className="bookinginput-box">
                <input
                  type="problem"
                  id="problem"
                  name="problemDesc"
                  // value={date}
                  placeholder="Describe your problem"
                  required
                  onChange={handleOnChange}
                />
                <label htmlFor="date"></label>
              </div>
              <button type="submit" className="bookingButton">+ Confirm</button>
            </form>
          </div>
        </section>
        <img className="img6" src={borderDesign} />
        <img className="borderImageLogin2" src={borderDesignLeft} />
        <img className="circleLogin" src={circle} />
      </div>
    </div>
    
  );
}




export default Booking
