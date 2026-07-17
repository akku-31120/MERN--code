import React, { useState } from 'react'

const UpdaterFunction = () => {

       let [name,setName] = useState("user")
    function handleClick(){
        setName('akanshi') 
        console.log(name)// setname k parameter m jo bhi pass krege vo as a value pass hoti h state m. 
    }
  return (
    <div>
      <h1>my name is {name}</h1>
      <button onClick = {handleClick}> Click to change name</button>
    </div>
  )
}

export default UpdaterFunction
// ques:- jo name state m value thi phele vo thi user ab h akanshi to after updating the state name m user hoga ya akanshi?
// ans :- after updating the state name m user hi rhega because ye current state ko chng nhi krta h it will return new state after re-rendering or vhi return value hme screen k upar show hoti h .
// means useState ko agle render m jo value return krni h ye vhi lake deta h current value ko chng ni krta.
// use state vhi value return krta h jo agle render m dikahni h  ye actual value ko chng nhi krta.

