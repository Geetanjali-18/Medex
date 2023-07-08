import React from "react";
// import "./"


function Card(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="pic_1" className='card__img harImage' />
                    <div className='card__info'>
                        <span className='card__category'>{props.title}</span>
                        <h3 className='card__title'>{props.sname}</h3>
                        <span className="spanUseKarunga"><a href={props.link} target="_blank"></a></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
