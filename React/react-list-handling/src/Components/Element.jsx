// if we want to add multiple component for same template then use list handling.
// and also hm loops bhi use kr payege list ki wjah s .
//import React from 'react'
// agar hme list ka use krna h to hm curly braces{} ka use krge.kuki curlybraces hmare js ko inject krne m help krte h html k ander.
const Element = () => {
  return (
    <div>
        
           {/* {[10,20,30,40]}  => 1st method*/} 
           {/* {10}{20}{30}{40}{50} => 2nd method */}
           {/* {[<p key ={"1"}>Item1</p>, <p key ={"2"}>Item2</p>, <p key ={"3"}>Item3</p>, <p key ={"4"}>Item4</p>]} // multiple elements in list 
           // if ur elements name is same then use key. and key should be unique like id. */}

    </div>
  )
}

export default Element
// example = 