import React from 'react'

const Status = ({status}) => {
    //let ActiveStatus = true
  return (
    <div>
      <h2>User is {status ? "ONLINE" : "OFFLINE"}</h2>
      {/* using ternary operator */}
    </div>
  )
}

export default Status
