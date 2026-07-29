// hm yha p toggling krege child component k upar jb click kre child dikh jaye jb click kre child ht jaye.
import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const[show,setShow] = useState(true)

  return (
    <div>
        <button onClick={() =>setShow(!show)}>Toggle</button>
        {show && <Child />} {/* // here we use conditional rendering agar show ki value true hui to child dikh jayega or false hui to child ht jayega. */}
    </div>
  )
}

export default Parent
// show ki value true hogi to dikh jayega or false hogi to ht jayega.