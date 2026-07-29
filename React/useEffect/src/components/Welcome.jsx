// in this component we will understand stages of component life-cycle.- mounting,updating,unmounting.
import React, { useEffect, useState } from 'react'

const Welcome = () => {

        const[count,setCount] = useState(0)

            useEffect(() =>{
                console.log("component mounted") // ek br chlega
            },[]) // ye ek br chlega mounting k tym pr kuki hmne yha koi dependency pass nhi ki h 
            // to jb koi dependency pass na ki jaye to vo sirf ek br chlta h.

        useEffect(() =>{
            //console.log("component mounted")
            console.log("component updated") // jb jb count chng hoga jb jb chlega. 
            // ab ye use effect jb chlega jb array ki ander ki dependency chng hogi means agar count hua 1 to ye ek br print hoga component updated jaise jaise count bdhega utni br ye print hoga.
        },[count])// this is [] dependency array and in this array we pass an state that is count.
        // means ye useEffect is count dependency wale array pr depend h .

// jb bhi component mount hota h to ye callback chlta hi h.
// or jb use effect pheli br chlta h tb component ki mounting hoti h.
// jaise hi hm welcome wale component ko render krayege hm pheli br to jb vo ui k upar mount hoga to use effcet ek br to chlega hi chlega.



  return (
    <div>
      <h1>hello</h1>
      <h1>count-{count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
{/*  FLOW OF THIS = jb bhi + p click krege  to ye setCount ko call krega to setcount count ki value ko chng krega to jaise hi state(count) ki value chng hui vaise hi usestate re-render krega or re-render hote hi useeffect chl jayega kuki count ki value chng hui. */}
    </div>
  )
}

export default Welcome
// real life example of mounting -
// page load 
// api fetch 
// start animation 
// mount hote hi page load krana api fetch krna,animation start krna ye sb use effct krega .