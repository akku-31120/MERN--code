import React, { useEffect, useState } from 'react'

const Users = () => {

     const[loggedIn,setLoggedIn] = useState(false)
        console.log(loggedIn);
        useEffect(() =>{
            alert("hello") //it will get called on every re-render.
            // setInterval(() => console.log("running"),1000) // ab ye useEffcet mounting k tym to chlega hi chlega
            // setInterval lgane se console p running likha ra h or vo ek br nhi aara hr 1 sec bd vo do br aara h bdhta jara h to ye bug h agar hm strict mode nhi lgate to hme ye pta bhi nhi chlta ki back of the scenes m running br br likha aara h. to is bug s hme koi dikkat nhi hogi hme to srf strictmode s pta chla h ki ye bug h.
        })
  return (
    <div>
        <h1>Use Effect</h1>
      {/* <button onClick={() => setLoggedIn(!loggedIn)}>Click to LogIn</button> */}
    </div>
  )
}

export default Users
// agar use effect k ander koi dependency nhi h sirf setup function h  to vo hr render k upar ek  new effect generate krta h  that effect is to call a alert function.
// agar use Effect ko hr re-render k upar call krna h to ese krege:-
// useEffect(() =>{
//             alert("hello")
//         })
// interview question :-bina dependency k useeffect kitni br chlta h ?
// ans vo hr re-render p chlta h.
// ab ye hello ka alert jb hm ise localhost p jake check krege to ye do br render hoga means do br alert aayega button p click krne pr.