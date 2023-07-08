import React from 'react'
import "./Style/Client.css"
import profileImg from "./stock/ProfileImg.jpg"
import borderDesign from "./stock/borderDesign.png"
import borderDesignLeft from "./stock/borderDesignLeft.png"
import circle from "./stock/circle.png"
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ClientSection = () => {
    let history = useNavigate()
    const personalInfo = {
        Name: "Keshav",
        Age: "32",
        DateOfBirth: "1991",
        EmployeeID: "12A",
        Occupation: "Data Scientist",
        PersonalContact: "651651",
        OtherContact: "66513",
        Gender: "Male",
        Email: localStorage.getItem("emailHack"),
        Address: {
            Country: "India",
            City: "New Delhi",
            Place: "Dwarka Mor"
        }
    }
    useEffect(() => {
          if(localStorage.getItem('emailHack')){
      
          }
          else{
            history("/login")
          }
        
          return () => {
            
          }
        }, [])

    return (<div style={{ backgroundColor: "#EDF1FD", position: "absolute", top: "0" }}>
                <Sidebar />

                <img src={borderDesign} id="clientimg1"></img>
                <img src={borderDesignLeft} id="clientimg2"></img>
                <img src={circle} id="clientimg3"></img>
                <div id="personalInfo" style={{  borderRadius: "15px" }}>
                    <div className="upperCardPersonalInfo" style={{ paddingLeft: "5%" }} >
                        <img id='prfImg' src={profileImg} alt="" />
                        <div id='upperRightCardDiv' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div className="upperRightCard">
                                <div id='personalInfoName' className="InfoRight"> {personalInfo.Name}</div>
                                <div id='personalInfoOccupation' className="InfoRight"> {personalInfo.Occupation}</div>
                                <div id='personalInfoAddress' className="InforRight">{personalInfo.Address.Country}, {personalInfo.Address.City}, {personalInfo.Address.Place}</div>

                            </div>
                        </div>

                    </div>

                    <div id="writtenPersonalInfo">

                        <div className="infoProvided">
                            <label htmlFor="Age">Age</label> <div id='ageSection' className="profileGiveGap InfoRight"><div id="finalInfo">{personalInfo.Age}   </div></div>
                        </div>
                        <div className="infoProvided">
                            <label htmlFor="dob">Date Of Birth</label> <div id='BirthSection' className="profileGiveGap InfoRight"> {personalInfo.DateOfBirth}</div>
                        </div>

                        <div className="infoProvided">
                            <label htmlFor="Personal Contact">Personal Contact</label> <div id='ContactSection' className="profileGiveGap InfoRight"> {personalInfo.PersonalContact}</div>
                        </div>
                        <div className="infoProvided">
                            <label htmlFor="Gender">Gender</label> <div id='genderSection' className="profileGiveGap InfoRight"> {personalInfo.Gender}</div>
                        </div><div className="infoProvided">
                            <label htmlFor="Email">Email</label> <div id='emailSection' className="profileGiveGap InfoRight"> {personalInfo.Email}</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default ClientSection