import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TaskList from './TaskList';


let nextId = 3;// jb koi next task add ho to ye id rkh di jayegi or fir agar dusra next task add ho to is id m +1 ho jaye.
let initialToDos = [
    {id:0,title:'Buy milk',done:true},//task 1
    {id:1,title:'goto gym',done:false},// task 2
    {id:2,title:'meetings',done:false} // task 3
]
// array hm changes nhi kr payege to ye initialToDo as a state use krege.

const TaskApp = () => {
  const[todos,setTodos] = useState(initialToDos)
 
       console.log(todos)
      function handleAddToDo(title) { //is function m title pass krege  task ka jo bhi task add kna h uska title.or ye title AddToDo.jsx wale component s aara h.
        // to task ko add krne k liye phele existing array ki copy bnayege using spread operator fir jo bhi task add krna h use add kr denge(existing array,{})// is curly braces ka mtlb h existing array ke sth ek or object means task add ho gya.
            setTodos([...todos,{
                id:nextId++,
                title:title,
                done:false
            }])
      }

      function handleChangeToDo(updatedTodo) {
            setTodos(todos.map(i => {
                if(i.id === updatedTodo.id){
                    return updatedTodo
                }else{
                    return i;
                }
            }))
      }
      function handleDeleteToDo() {
        setTodos(
            todos.filter(i => i.id!== Id)
        )
      }
  
  return (
     <div>
        <AddTodo onAddToDo ={handleAddToDo} /> {/* // is component ko chlane k liye ek logic ki need hogi or vo h ye function handleAddToDo. kuki is function k ander hi new todos add honge.to is function ko hme pass krna pdega via props addTodo m. */}
        <TaskList todos = {todos} onChangeTodo = {handleChangeToDo} onDeleteTodo = {handleDeleteToDo} /> 
        {/*  */}
     </div>
  )
}

export default TaskApp
// here taskApp is parent component for using state lifting