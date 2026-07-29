// example of nested array of objects
        // {
        //     name:"jw",
        //     rooms:[
        //         {

        //         },
        //         {

        //         }
        //     ]
        // }
import React, { useState } from 'react'
const Hotel = () => {

    let[hotel,setHotel] = useState({
        name:"jw",
        rooms:[
            {id:1,type:"delux",booked:false},
            {id:2,type:"suite",booked:false}
        ]
    })
const bookedRoom = (id) =>{
    setHotel({
        ...hotel,
        rooms:hotel.rooms.map(room =>room.id===id ? {...room,booked:true}:room)
    })
}
  return (
    <div>
        <h2>{hotel.name}</h2>
        {
           hotel.rooms.map(room =>(
            <div key={room.id}>
                {room.type} - {room.booked?"booked":"Available"}
                {/* <button>Book</button> */}
                <button onClick={() => bookedRoom(room.id)}>Book</button>
                <button>Unbook</button>
            </div>
           ))
        }
      
    {/* jaise hi user button p click krega room ko book krne k liye */}
    </div>
  )

}
export default Hotel;
// h.w  make book button toggle button => if room is booked then available ,if room is available then booked



