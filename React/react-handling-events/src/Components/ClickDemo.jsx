// in this we will learn about handling-events means how a jsx work  with events.
// yha p hm components ko responsive bnayege acc to action.
// for example jese html ka component h button to is button ko kese responsive bnayege.
import React from 'react'

const ClickDemo = () => {
    function ShowMessage(){
       alert("button clicked")
    }
    // return hmesha jsx ka synatx hoga.jo bhi logic h vo return s bhr rhega kuki hm javascript ko return nhi krte h return bs jsx  ko krte h.
  return (
    <div>
      <button onClick = {ShowMessage}>Click me!</button>
      {/* hm is button k upar event lgayege. jb onclick hoga to ek msg show hoga to uske liye function h showMesaage and is functionk ander hm ek sub function bnayege jo call hoga onlick k upar. jb hm is button p click krege to console p output show */}
    </div>
  )
}

export default ClickDemo
