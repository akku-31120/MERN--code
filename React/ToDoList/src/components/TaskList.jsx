import React from 'react'
import Task from './Task'

const TaskList = ({todos,onChangeTodo,onDeleteTodo}) => {
  return (
    <div>
      <ol>
        {todos.map(todo =>(
          <li key={todo.id}>
            <Task todo={todo} onchange ={onChangeTodo} onDeleteTodo={onDeleteTodo} /> 
            {/* tasklist will act as a parent for our task */}
            {/* {todo.title} */}
          </li>
        ))}
      </ol>
       {/* // ye ordered list sare task ko print kregii. */}
    </div>
  )
}

export default TaskList
