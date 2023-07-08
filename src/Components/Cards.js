import React from 'react'
import "./Style/Card.css"

const Cards = (props) => {
  return (
    <div className='card d-block w-50'>
        <p>{props.para}</p>
        <span>-{props.name}, {props.age}</span>
    </div>
  )
}

export default Cards