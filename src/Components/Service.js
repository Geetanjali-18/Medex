import React from 'react'
import './Style/CardsJsx.css';
import Sdata from './Sdata';
import Card from "./Cards.jsx"

const Service = () => {

    function ncard(x) {
        return (
            
            <Card
                imgsrc={x.imgsrc}
                title={x.title}
                sname={x.sname}
                link={x.link}
            />
        );
    }

    return (
        <>
        <h1 className='heading_style'>Services</h1>
        <div className="allCards">
            {Sdata.map(ncard)}

        </div>
        </>
    )
}

export default Service