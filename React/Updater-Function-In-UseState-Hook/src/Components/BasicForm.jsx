// here we use two states in a single component.
import React, { useState } from 'react'

const BasicForm = () => {
    let [name,setName] = useState("Admin")
    let [age,setAge] = useState(0)
  return (
    <div>
      Name: <input onChange={e => setName(e.target.value)} /> 
      Age:<input onChange={e => setAge(e.target.value)} />
      {/* jo bhi input m value hogi use hmne fetch kra h target.value se */}
      <h2>hello {name}, your age is {age}</h2>
    </div>
  )
}

export default BasicForm
// ques :- when we use two states in a single component then the states are properly independent or not?
// ans is :- states are properly independent.
// jis bhi chij  ki state chng hui h use hi re-render krta h jaise ki name dalne k baad hm age dalre h to age ki state chng hui h to age 0 s 20 hogyi  name vhi rha jo hmne dala to name pr koi effect nhi pd rha . means age state k chng hone se re-render hone s name state pr koi effect nhi pda.
// mtlb ek state k re-render hone se dusri chng nhi hori
//  it is called virtual dom ki jitni chij ki jrurt h vhi chng hui .
//