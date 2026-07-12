// hm yha p counter application bnayege or use do button s handle krege +button or -button jb hm + krege to count bdhega and jb hm - krege to count gthega.
import React from 'react'

const Counter = () => {
    let count=0;

    function handleIncrement(){
        count += 1;
        console.log(count);
    }
  return (
    <div>
      <h3>Count - {count}</h3>
      <button onClick = {handleIncrement}>Increment</button>
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
