import React from 'react'
import {useRef} from 'react'
import './pages.css'
import create from'.././images/create.gif'
import {useNavigate} from 'react-router-dom';

const AddMeeting = () => {

  const navigate=useNavigate()


const meetingTitle=useRef(null); 
const meetingImage=useRef(null); 
const meetingDatetime=useRef(null); 
const meetingDetails=useRef(null); 

function submitHandler(event){
  event.preventDefault();


  const title=meetingTitle.current.value
  const image=meetingImage.current.value
  const date=meetingDatetime.current.value
  const description=meetingDetails.current.value


  const meetingData={
    title:title,
    image:image,
    date:date,
    description:description

  }
  //  console.log(meetingData);
  fetch('https://meeting-27468-default-rtdb.firebaseio.com/meetings.json',{
    method:'post',
    body:JSON.stringify(meetingData)
  }).then(()=>{
    navigate('/')
  })
}

  return (
    <div>
      <form onSubmit={submitHandler}>
    <div className='container text-center'>
      {/* <img src={create} alt="create" className='error1'/> */}
    <h1 className='title mt-5 centered-title'>Create New Meetings</h1>

    <p className='desc'>Description of the meetings</p>

<p1 className='p2'>We provided a short description of every meeting details with the date, check the ones suitable for your searches, and you're all set! </p1>
    <input className='input' placeholder='Enter the meeting title' ref={meetingTitle}></input>
    <input className='input' ref={meetingImage} placeholder='Enter the image keyword'></input>

    <input className='input' type="date" ref={meetingDatetime} placeholder='Enter the image keyword'></input>
    <textarea placeholder='Enter the details'ref={meetingDetails} className='input'></textarea>
    {/* <button className='btn mt-1'>Create Meeting</button> */}
    <button type="submit" className='btn'>Create Meeting</button>
    </div>
    </form>

  </div>
  )
}

export default AddMeeting
