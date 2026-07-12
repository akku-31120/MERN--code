import React from 'react'

const GreetUser = () => {
    function sendGreetings(){
        alert(`Hello ${name}`)
    }
  return (
    <div>
      <button onDoubleClick={sendGreetings}>Greet Me!</button>
    </div>
  )
}

export default GreetUser
// example hm user ka naam lekr aayege or jb button p click krege to vo hme greetings dega.
