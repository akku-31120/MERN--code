import React from 'react'
import { useState } from 'react'

const Profile = () => {

       const[user,setUser] = useState({
            name:"user",
            age: 0
        })

    // const user =
    //  {
    //     name:"pankaj",
    //     age:25
    // }
    // console.log("original",user)
    // let copy = {...user}// spread operator =  ye copy bna k dega user object ki
    // console.log("copy",copy)

  return (
    <div>
      {/* Profile */}
        <h2>Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <input placeholder='enter name' onChange={(e) => setUser({...user,name:e.target.value})}/>

        <button onClick={() => setUser({...user,age:user.age+1})}>Increase Age</button>
    </div>
  )
}

export default Profile
// spread operator copy bna k deta h objects ki.
// use state only readonlymode m kaam krta h ki jb hm re-render kre apne component ko to vo sirf jo next state m hme value dikhani h vhi dikhata h actual value ko chng nhi krta.