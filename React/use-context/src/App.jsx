import React, { useState } from 'react'
import College from './College'
import { SubjectContext } from './ContextData'

const App = () => {
  const[subject,setSubject] = useState('')
  return (
    <div style={{ backgroundColor: 'yellow', padding: 10 }}>

      <SubjectContext.Provider value={subject}> 
        {/* ye attribute h value ye chnage nhi hoga */}
        <select  value = {subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="maths">Maths</option>
          <option value="history">History</option>
          <option value="english">English</option>
        </select>
        <h1>Context API</h1>
        <button onClick={()=>setSubject('')}>Clear</button>
        <College />
      </SubjectContext.Provider>

    </div>
  )
}

export default App
// contextAPI -> CollegeComponent -> ClassComponent -> Student Component -> Subject Component
// hme data contextAPI se subject component me bhejna h.
// to data bhej rhe h app.jsx se to provider isme lgayege kuki jis component se data bhejte h usme provider lgate h.
// or data receive krege subject wale component m to useContext isme lgayege.