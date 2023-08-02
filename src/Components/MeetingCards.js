import React from 'react'
import './card.css'
const MeetingCards = (props) => {
  return (
    <div>
    <div className='card'>
      <img src={'https://source.unsplash.com/1600x800/?'+ props.img}/>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p>{props.date}</p>
    </div>
    </div>
  )
}

export default MeetingCards
