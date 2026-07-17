// ek button hoga uspe toggle lgayege means jo value true hogi vo false ho jayegi or jo false vo true ho jayegi means light theme dark m chng hojayega or dark theme light m chng ho jayega.
import React from 'react'
import { useState } from 'react';
const Theme = () => {
    const[dark,setDark] = useState(false);
  return (
    <div style = {{background : dark? "black":"white",
        color:dark?"white":"black" // it means agar theme dark ho to text ka color white ho jaye or theme white ho to text ka color black ho jaye.
    }}>
        <h1>hello</h1>
      <button onClick={()=>setDark(!dark)}>Theme</button>
    </div>
  )
}

export default Theme
// toggle krne k liye hmne not operator use kiya h !
//!dark means jb bhi button p click krege to agar theme dark hogi to vo light ho jayegi kuki hmne !Dark kiya h means dark ki value false h means button p click krne pr !Dark hojayegi means !false means true means light ho jayegii.

// if boolean value of dark = false then chng bg into white.
// and if a user click on a button then chng bg into black(dark).means if a value of dark = true then chng bg into black.