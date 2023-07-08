import React from 'react'
import AppointmentCards from './AppointmentCards'
import "./Style/Appointment.css"
import Sidebar from './Sidebar'
import BookingCard from './BookingCard'
import { useState, useEffect } from 'react'
import Footer from './Footer'

// AppointmentCards
// const appData = [
//   {
//     name: "Aman",
//     email: "asd@asd.com",
//     doctorName: "KEshav",
//     problemDesc: "I am suffering from a fever from a long"
//   },
//   {
//     name: "Aman",
//     email: "asd@asd.com",
//     doctorName: "Raman",
//     problemDesc: "I am suffering from a headache from a long"
//   },

// ]
const host = "https://medexbackend.onrender.com"
const Appointment = () => {

  const [appData, setAppData] = useState([{name:"", email:"", doctorName:"", problemDesc:"", date:""}])


  useEffect(() => {
    const fetchData = async(email) => {
      console.log("fetching ", email)

      const response = await fetch(`${host}/api/client/getAppointmentList`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
      })
      const json = await response.json()
      // setMessage(json)
      console.log(json) 
      const reverseJson = json.reverse();
      setAppData(reverseJson)
      // setAppData(json)
      // console.log("inside the fethcmessage")
      // setSendTo(id)
    }
  
  
  fetchData(localStorage.getItem("emailHack"))
  
    return () => {

  }
}, [])

return (

  <div className='bookSpace' style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "center", paddingBottom:"5%"}}>
    <Sidebar/>
    <h1 className='bookSpaceHead' style={{textAlign:"center"}}>Your Bookings</h1>
    {/* <Sidebar />
      <AppointmentCards num={"01"} heading={"Make Appointment"} />
      <AppointmentCards num={"02"} heading={"Take Treatment"} />
      <AppointmentCards num={"03"} heading={"Registration"} /> */}
    {
      appData.map((i) => {
        return <div className="BookingCards">
          <BookingCard i={i} name={i.name} doctorName={i.doctorName} email={i.email} problemDesc={i.problemDesc} date = {i.date} />

        </div>
      })
    }
    {/* <Footer/> */}
  </div>
)
}

export default Appointment
