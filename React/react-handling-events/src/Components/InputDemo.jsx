import React from 'react'

const InputDemo = () => {
    function handleChange(event){
        console.log("Typed:",event.target.value);
    }
  return (
    <div>
        <label htmlFor='name'>Name:</label> 
        {/* htmlFor means jaise html m for use krte the label m yha htmlFor use krte h.  */}
      <input type="text" id = 'name' placeholder='enter your name' onChange={handleChange} />
    </div>
  )
}

export default InputDemo
// example :-  jese hm browser p kch bhi search krte h jaise mene search kra how to phele mene h likha to bht sare usse related question aate fir o likha fir ho s aate h fir w likha fir how s aate h to hm esi search bar m jo bhi likhege uske aage ki string aayegi random or vo console pr dikhegi.
// h
// ho
// how
