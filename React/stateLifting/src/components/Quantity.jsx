import React from 'react'
import { useState } from 'react'

const Quantity = ({qty, setQty}) => { // state(qty) pass using props
    //  const[qty,setQty] = useState(1)
    //  const price =500
  return (
    <div>
      <h2>Item:butter</h2>
      <button onClick={() => setQty(qty+1)}>+</button>
      <span>{qty}</span>
      <button  onClick={() => setQty(qty-1)}>-</button>
    </div>
  )
}

export default Quantity
// agar hme qty variable ka pta total.jsx ko bhi dena  h to hm state lifting ka use krege.
//App.jsx m do component h or dono ki state same rkhni h ki agar 1 component m chng ho to dusre m bhi ho.
// example :- hmare pass ek cart h or uske ander kch items h or unki quantity h
// 1 item price =100 and qty =4 then total = 100*4 = 400
// agar hme isi example p state lifting lgani h to hm component 1 ka jo state h use lift kr denge means ( daal denge.) App.jsx m.(parent m)
// ab App.jsx se component 2 m daalne k liye props  ka use krege(kuki parent yani ki App.jsx dono componrnt ko same chij de skta h using props )
// ques: jo hmne qty k ander pass kiya h vo parent ko pta chla?
//