import React from 'react'

const FormDemo = () => {
        const handleSubmit = (event)=>{
            event.preventDefault()
            console.log("form submitted")
        }
       
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        Name: <input type = "text" placeholder='Enter Your name'/> <br />
        Email: <input type = 'email' placeholder='Enter your email' /> <br />
        Password: <input type = "password" placeholder='Enter your password' /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormDemo
// yha hmne  pure form tag k upar event lga diya onsubmit.