// this component is use to addnewToDos in list.
import React, { useState } from 'react'

const AddTodo = ({onAddToDo}) => {
 
    const[title,setTitle] = useState('')

  return (
    <div>
      <input type='text' placeholder='Add ToDo'  value={title} onChange={e => setTitle(e.target.value)} />
       {/* // yha hmne value fetch krli jo bhi input tag k ander likhege vo title k ander aa jayegi. */}
      {/* jo bhi input k ander likhege vo title k ander update hota jayega or title yha p h ni to uske liye ek new usestate bnayege  */}
      {/* jb hm add ka button click kre to jo bhi is input tag k ander value h vo hm function ko bhej denge jo bhi props s lekr aaye h to uske liye callback lgayege means event se fetch krege value */}
      <button onClick={() => {
         onAddToDo(title)
         setTitle('')
      }}>Add</button>
    </div>
  )
}

export default AddTodo
