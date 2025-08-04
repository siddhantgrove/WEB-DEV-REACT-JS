import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

function Github() {

    const[data,setData] = useState([])
    useEffect(() => {
       
      fetch('https://www.facebook.com/TYCCommunication')
    .then(response => response.json ()) // string format to convert into json form
    .then(data =>{
        console.log(data);
        setData(data)
    })
     
    }, [])
    
  return (
    <div className='text-center  bg-yellow-800 text-white'>Github Followers{data} </div>
  )
}

export default Github