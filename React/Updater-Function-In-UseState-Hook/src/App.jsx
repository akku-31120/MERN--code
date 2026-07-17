import { useState } from 'react'
//import UpdaterFunction from './Components/UpdaterFunction'
//import BasicForm from './Components/BasicForm'
import Counter from './Components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      {/* <UpdaterFunction /> */}
      {/* <BasicForm /> */}
      <Counter />
   </>
  )
}

export default App
