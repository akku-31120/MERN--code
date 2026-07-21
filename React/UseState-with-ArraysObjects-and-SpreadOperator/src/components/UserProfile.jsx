// example of nested objects
import React, { useState } from 'react'

const UserProfile = () => {
    const[user,setUser] = useState({
        name:"akanshi",
        address:{
         city:"pune",
         pincode:"411057"
        }
    })

    let changeCity = ()=>{
        setUser({
            ...user,// pure object ki copy
            address:{
                ...user.address,//user k andeer address wale object ki copy.
                city:"mumbai"
            }
        })
    }
    
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.address.city}</p>
      <button onClick={changeCity}>Switch location</button>
      {/* jb hm is switch button wale button p click krege to hm location switch krke kisi or location p poch jayege. 
       for example:- jaise kisi company k do location h pune or bombay to jaise agar pune h to bytton p click krke bombay ho jayega or vice-versa*/}
    </div>
  )
}

export default UserProfile
// yha pr hm nested objects bnayege
// {
// name:""
// address:{
//     city:"",
//     pincode:""
//          }
// }
//objects are immutable - objects change nhi ho skte isliye hm objects ki copy bnate h.