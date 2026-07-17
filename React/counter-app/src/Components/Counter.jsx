// hm yha p counter application bnayege or use do button s handle krege +button or -button jb hm + krege to count bdhega and jb hm - krege to count gthega.
import React, { useState } from 'react'

const Counter = () => {

    // let count=0;
    // function handleIncrement(){
    //     count += 1;
    //     console.log(count);
    //  }


      // const arr = useState(5)// this usestate function will act as a hook and we pass 0 as initial value jaise hmne count variable m set kiya tha ki count = 0 ese hi hmne count = 0 na krke initial value dedi use state m.
      // console.log(arr); // output:-[0,f] 0 is inital value f is function and 0 is a state and f is a setstate means jo naam state ka hoga vhi naam setstate m jo state h uska hoga.

      // jaise hmari state ka naam count h to hmari function ka naam setcount hoga. 
      // hm is initial value ko chng krne k liye apne array ko deconstruct krege (it means array m se koi bhi chij fetch krna rather than whole array) using function or hm is initial value ko manually  chng nhi krenge means count+=1 like this.

      let[count,setCount] = useState(0); // keep always on th e top. it is statemanagement - jis bhi value ko chng krna h use state bnado and us state ko chng krne k liye ek function bna denge setstate_name
       // setCount function k do kaam h phela state ki value ko chng krna dusra component ko re-render krwana.
      function handleIncrement(){
          setCount(count+1)
      }
      
      function handleDecrement(){
            setCount(count-1)
      }
      // first the initial value 0 is assign to count.
      // ye setcount ka kaam h count ki value chng krna or without this function hm count ki value chng nhi kr payege.
      function reset(){
        setCount(count=0) // another way is setCount(0)
      }
      return (
    <div>
      <h3>Count - {count}</h3>
      
      <button onClick = {handleIncrement}>Increment</button>
      <button onClick = {handleDecrement}>Decrement</button>
      <button onClick = {reset}>Reset</button>

      {/* using arrow function */}

        {/* <button onClick = {()=>setCount(count+1)}>Increment</button>
        <button onClick = {()=>setCount(count-1)}>Decrement</button> */}

      {/* <h1>Count - {arr[0]}</h1> */}


    </div>
  )
}

export default Counter
// jb bhi hm kisi chij ki value ko chng krte h and we want to reflect that value on our UI to us value ko hm component ka state bolte h.
//count is a variable that holds a value. and jo Counter component h ye only ek  br render hota h to ek br render hone ki wjah s jb count ki value chng hogi to vo hmare ui pr show ni hogi to hm is counter component ko jb jb re-render krayege jb jb count ki value bdhegi.
// so here count variable act as a state for counter component.
// jis bhi chij ki value hm apne component k ander chng krte h use state kehte h  ex:- variable jaise hmne count ki value chng kri to count state hogya.
// here variables represent as a state.
// agar hme kisi bhi variable ki value ko change krna hai whether it is a boolean value, string value , numerical value kch bhi value ho to vo agar hme chng krni h  apne component k ander after hitting a event to us value ko apne ui pr update krane k liye hme ye pta hona chaiye ki us component ki hm kis state ko update kra rhe h.
// means agar data ui k upar show krna h to component ko re-render krna pdta h.
// for example:- jese ek hmne notes ka application bnaya to jo bhi hm new notes add krege,update krege, delete krege to jo add krne pr,delete krne pr,update krne pr note aayega vo state hogi.
// react provide some basic function to re-render our component:-
// 1) usestate() = is function ko hm react package k ander se import krege and ye function help krega hmari re-render krane k liye or re-render jb hoga jb state chng hogi.
// usestate() is also called react hook and is hook ka kaam h component ko re-render krwana jb state chng ho.
// different -diff hook hoti h.
// usestate() = in usestate we pass initial value(means state) as a parameter and it return array with state/initial value


// **jb bhi hm kisi hook wale function ka use krege to vo hmesha component k top m bna hona chaiye.