import React, { useState } from 'react'

const Counter = () => {

        const[speed,setSpeed] = useState(0)

        function increment(){
            setSpeed(s => s+1)// this arrow function will act as a updater function.
        }

  return (
    <div>
      <h1>fan speed :{speed}</h1>

      <button onClick={() => {
         increment();
         increment();
         increment();
      }}>
        +3
        </button>
        {/* use of this button = in this button agar fan 1speed p chl rha h to hm use 5 pr kr denge  means 3 ka increment krege. */}
        {/* hmne is increment function ko 3 br call kra taki 3 ka increment ho jaye but esa nhi hua kuki hm apni state ko ek br m 3-4 br chng krana chah rhe h to hm iske liye updater function use krege. */}
        {/* UpdaterFunction = jb state ko ek br m 3-4 br change krana ho to use krte h updater function. */}

      <button onClick = {() =>{increment()}}>+1</button>
      {/* use of this button = in this button agar fan 1speed p chl rha h to hm use 2 pr kr denge agar 2pr chl rha h to 3 pr kr denge means 1 ka incerement krege  */}

    </div>
  )
}

export default Counter
