import React from 'react'
import { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {
    const subject = useContext(SubjectContext) // use context k ander vo data chaiye jo context(contextData.jsx) se aayega or vo subjectcontext k ander 
  return (
    <div style={{backgroundColor:'red',padding:10}}>
      <h1>Subject is : {subject}</h1>
    </div>
  )
}

export default Subject
