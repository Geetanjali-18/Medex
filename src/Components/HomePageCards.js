import React from 'react'
import "./Style/HomePageCards.css"

const HomePageCards = (props) => {
  return (
    <div className='cardHome' style={{display:"flex", flexDirection:"column"}}>
        <div className="LogoHomeCard">{props.logo}</div>
        <h3 className="heading">{props.heading}</h3>
        <p className="para">{props.para}</p>
    </div>
  )
}

export default HomePageCards