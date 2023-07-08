import React from 'react'
import "./Style/HomePageCards.css"

const HomePageCards = (props) => {
  return (
    <div className='cardHomeArticle' style={{display:"flex", flexDirection:"row"}}>
        <div className="LogoHomeCard" style={{width:"4%", margin:"1%"}}>.</div>
        {/* <h3 className="heading">{props.heading}</h3> */}
        <p className="articlePara para">{props.para}</p>
    </div>
  )
}

export default HomePageCards