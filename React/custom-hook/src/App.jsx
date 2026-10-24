import React from 'react'
import useToggle from './useToggle'

const App = () => {
  const[value,toggleValue] = useToggle(true)
  console.log("val----",value)
  return (
    <div>
      <h1>custom hook</h1>
      <button onClick={toggleValue}>Toggle Heading</button>
        <button onClick={()=>toggleValue(false)}>Hide Heading</button>
          <button onClick={()=>toggleValue(true)}>Show Heading</button>
          {
            value? <h1>Custom Hooks </h1> : null
          }
    </div>
  )
}

export default App
