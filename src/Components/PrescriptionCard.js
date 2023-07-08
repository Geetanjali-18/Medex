import React from 'react'

const PrescriptionCard = (props) => {
  return (
    <div className='presCard'>
      
        <div className="medications" style={{display:"flex", flexDirection:"column"}}>
          <h3 className='medH3'>Medications</h3>
          <div className="medicalsProvided presDiv" style={{display:"flex", flexDirection:"column"}}>
            {
              props.med.map((i)=>{
                return <div className='medicalsNamePrescription' style={{display:"flex", flexDirection:"column"}}>{i} </div>
              })
            }
          </div>

        </div>
        <hr style={{margin:"2%"}} />
        <div className="medicalInteraction presDiv" style={{padding:"1%" , fontWeight:"700"}}>Note : 
          {props.medInterac}
        </div>
       
    </div>
  )
}

export default PrescriptionCard;