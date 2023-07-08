import React from 'react'
import PrescriptionCard from './PrescriptionCard'
import "./Style/Prescription.css"
import Sidebar from './Sidebar'
import Footer from './Footer'

const Prescription = () => {

    const prs = [{
        medications:["Stimulants", "Buprenorphine", "Methadone", "Naltrexone"],
        medInteraction:"Overdose may increase the risk of side effects of, potentially leading to increased risk of side effects",
        ProviderCommunicationMobile:"9565645",
        ProviderCommunicationEmail:"asd@abc.com",

    }]
  return (
    <div className='presPage'>
      <Sidebar/>
      <h1 style={{color:"#3c3b58", textAlign:"center", padding:"2%"}}>Prescription</h1>
      <div className="prsSection" style={{display:"flex", justifyContent:"center",}}>
        {prs.map((i)=>{
          return <PrescriptionCard i = {i} med = {i.medications} medInterac = {i.medInteraction} provCommMobile = {i.ProviderCommunicationMobile} provCommEmail = {i.ProviderCommunicationEmail}/>
        })}


      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Prescription