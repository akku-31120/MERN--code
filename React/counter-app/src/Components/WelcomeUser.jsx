//   yha p hm div k ander ek input box bnayege or  jo bhi hm input box m dalenge to vo value chng hogi  or ui pr show hogi with the greeting.


import React, { useState } from 'react'

const WelcomeUser = () => {
    const [name,setName] = useState("Guest");
  return (
    <div>
      <h2>Hello, {name}</h2>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default WelcomeUser
