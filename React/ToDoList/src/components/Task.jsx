import React, { useState } from 'react'

const Task = ({todo,onchange,ondelete}) => {
    const[isEditing,setisEditing] = useState(false);
              let todoContent;

          if(isEditing){
              todoContent =(
                <>
                <input
                    value = {todo.title}
                    onChange={e => {
                       onchange =({
                           ...todo,
                           title: e.target.value
                       })
                    }}
                />
                   <button onClick={() =>setisEditing(false)}>Save</button>
               </>
            )

          }else{
              todoContent = (
                <>
                  {todo.title}
                  <button onClick={() => setisEditing(true)}>Edit</button>
                </>
              )
          }

  return (
    <div>
        <input type ="checkbox" 
        checked={todo.name}
        onChange={e => {
          onChange({
            ...todo,
            done:e.target.checked
          })
        }}/>
        {todoContent}
        <button onClick={()=> onDeleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Task
// for example:- this is an array and it contain item1[I1] to is item k liye ek checkbox bnayege fir uska title fir uska button edit or delete kabutton bnayege.
// or jaise hi user edit k button p click kre to input box khul jayega or fir edit k button k bd save ka button aa jayega. to iske liye hm toggling use krege ki ya to editing hogi ya nhi hogi. or save p click krne se purana task ht jayega or nya task aa jayega.
// 