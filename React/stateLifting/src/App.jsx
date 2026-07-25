import { useState } from 'react'
//import Quantity from './components/Quantity'
//import Total from './components/Total'
import SearchApp from './components/SearchApp'


function App() {
  
// const[qty,setQty] = useState(0)// state liftinh
//     const price =500 

  return (
   <>
      {/* <Quantity /> */}
      {/* <Quantity qty={qty} setQty={setQty} />
    <h2>{qty}:qty in parent component </h2>
    <Total qty={qty} price={price}/> */}

    <SearchApp />
   </>
)}

export default App
//Q:- jo changes child(Quantity and Total.jsx) k ander ho rhe h ky vo parent m hoge?
// ans yes because jo do button bnaye h quantity.jsx m vo child h or jb hm unpe click krege to unki value k sth sth jo value ui p show hori h  "qty in parent component " msg k sth usme bhi chng hora h it means ye sync m h it means it is statelifting.
// StateLifitng =  jo chngs hme apne kisi particular component m krane h  to us component ki state ko parent m pass kr denge ab vo parent props k through un componrnt ko niche bhej dega.