import React from 'react'

const BookingCard = (props) => {
  return (
    <div >
      <div className="bookCard">
        <div className="bookName bookLabelsDiv">
          <div className="bookAsk">Name : </div> <div className="bookAns">{props.name}</div>
        </div>
        <div className="bookEmail bookLabelsDiv">
          <div className="bookAsk">Email : </div> <div className="bookAns">{props.email}</div>
        </div>
        <div className="bookDoctorName bookLabelsDiv">
          <div className="bookAsk">Doctor's Name : </div> <div className="bookAns">{props.doctorName}</div>
        </div>
        <div className="problemDesc bookLabelsDiv">
          <div className="bookAsk">Described Problem : </div> <div className="bookAns">{props.problemDesc}</div>
        </div>
        <div className="problemDesc bookLabelsDiv">
          <div className="bookAsk">Date : </div> <div className="bookAns">{props.date}</div>
        </div>
      </div>

    </div>
  )
}

export default BookingCard