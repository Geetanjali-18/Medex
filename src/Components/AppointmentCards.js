import React, { useRef } from 'react'
// import { useRef } from 'react'

const AppointmentCards = (props) => {
  const appCard = useRef()
  const handleOnMouseOverCards = () =>{
    // appCard.current.style.backgroundImage = "linear-gradient(90deg, black 0%, black 50%, #F27733 50%, #F27733 100%)"
  }

  return (
    <>
      <div ref={appCard} id='appointmentCard' onMouseOver={handleOnMouseOverCards}>
          {/* <div className="orangeMaker"></div> */}
          <h1 id='appHead1'>{props.num}</h1>
          <h2 id='appHead2'>{props.heading}</h2>
          <p id='appPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat voluptate repel</p>
          <button id='appBtn' style={{ display:"flex"}}><div id='viewMoreParaDiv'> View More </div><div id='viewMoreArrowDiv'> <i class="fa-sharp fa-solid fa-angle-right"></i></div></button>

      </div>
    
    </>
  )
}

export default AppointmentCards