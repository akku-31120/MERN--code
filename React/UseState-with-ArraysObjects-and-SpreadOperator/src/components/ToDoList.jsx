import React, { useState } from 'react'

const ToDoList = () => {

    const[tasks,setTasks] = useState([])
        function addTask(e){
           e.preventDefault()
            setTasks([...tasks,e.target[0].value])
            console.log(e);
        }

  return (
    <div>
        <form onSubmit={(e) => addTask(e)}>
            <input placeholder='Enter the name' />
            <button>Submit</button>
        </form>
      {/* <button onClick={addTask}>Add Task</button> */}
      <ul>
        {tasks.map((task) =><li key = {task}>{task}</li> )}
      </ul>
    </div>
  )
}

export default ToDoList
// when we add new item-to input tag khali hojana chaiye