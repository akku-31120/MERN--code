 // agar hme koi bhi chij dynamically screen pr dikhani h using react to kese krege.
 import React from 'react'
 
 const DynamicUi = () => {
      function handleChange(event){
         const inputvalue = document.getElementById('liveInput').value;
         document.getElementById('liveOutput').innerHTML = inputvalue || "whatever you type appear here.." 
         
      }
   return (
     <div>
       <input type='text' placeholder='type something...' onChange = {handleChange}  id = "liveInput" />
       <h3>output:</h3>
       <p id = "liveOutput">whatever you type will appear here..</p>
     </div>
   )
 }
 
 export default DynamicUi
 // example ye tha ki agar hm kch type kre to vo aa jaye vrna jo hmne msg de rkha h vhi rhe.
 // to ise krne k liye sbse phele input tag ki value fetch kri id se or use ek variable m dala which is inputvalue
 // then p tag ki value fetch kri fir uspe innerhtml lgayi ki inputvalue(jo bhi value hm placeholder m likhege ) ho ya to jo msg diya h vo ho.
 
 