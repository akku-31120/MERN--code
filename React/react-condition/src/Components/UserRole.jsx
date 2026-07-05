import React from 'react'
import Admin from "./Admin"
import SEller from "./SEller"
import User from "./User"

const UserRole = ({role}) => {
  return (
    <div>
      {role == "admin" ? <Admin/>: role == "seller"?<SEller />:<User /> 
      }
      
    </div>
  )
}

export default UserRole
// example :- if user role is admin then go to admin dasboard
// if user role is admin then go to admin dasboard
//
