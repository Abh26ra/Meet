
import {useState, useEffect} from 'react';
import React from 'react'
import './pages.css'
import welcome from '.././images/wel3.webp'
import MeetingCards from '../Components/MeetingCards'


import moment from 'moment';

const Home = () => {
  

  

//for loading
const [loading,setLoading]=useState(true)
const [meetings,setMeetings]=useState([]);

  useEffect(()=>{

      //use them as promise
fetch('https://meeting-27468-default-rtdb.firebaseio.com/meetings.json')
.then(function(response){
  return response.json();
})
.then(function(data){
  // console.log(data);
  //we will fetch the data one by one then push it to array of object
  const meetingArray=[];
  for(const key in data){
    const meeting={
      id:key,
      ...data[key]//copy all the data
    };
    meetingArray.push(meeting);
    // console.log(meetingArray);
  }
  setMeetings(meetingArray);

  //after fetch loading over
  setLoading(false);
     });

},[]);




  return (
    <div>
     
      <div className='container text-center'>
      {/* <img src={welcome} alt="welcome" className='error'/> */}

      <h1 className='title mt-5 centered-title'>Welcome to Bahe Meeting Details</h1>
      <p1 className='p2'>We provided a short description of every meeting details with the date, check the ones suitable for your searches, and you're all set! </p1>
      <p className='desc'>Description of meetings</p>

      <div className={loading ? 'loading' :'d-none'}>Loading......</div>

      <div className='meeting-container'>
          {

            //to filter the meeting accor.to date and we use package moment to to that.
            meetings.filter((meeting)=>{
              let date = new Date(); // current date
              let current = moment(date).format('YYYY-MM-DD');
              let meetingDate = moment(meeting.date, 'YYYY-MM-DD'); // data date
             
              console.log(current);
              console.log(meetingDate);

              //compare both dates
              if(meetingDate.isSameOrAfter(current)){
                return meeting;
              }
            }) .map((meeting)=>{
                
              let date=moment(meeting.date).format("MMMM Do YYYY");
              return <MeetingCards title={meeting.title} img={meeting.image} desc={meeting.description} date={date}/>
            })

           
          }

      </div>
      
      </div>
    
    </div>
  
  )
}

export default Home
