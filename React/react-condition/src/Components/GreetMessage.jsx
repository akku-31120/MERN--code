// short form is rafce => react arrow function component export.


import React from 'react'
import Login from "./Login"

const GreetMessage = (props) => {
  // console.log(props);
  // console.log(props.status);
   console.log(props.status);
    // <div>
    //   <h2 className = "Welcome"> Welcome User!🎉</h2>
    // </div>// jo bhi ye component return kr rha h hm uske upar condition lgayege.

    if(props.status ){
      return <h2 className="Welcome">Welcome User!🎉</h2> 
    }
    else{
      return<Login/>
    }

}

export default GreetMessage
// hm yha className ki jgah class use nhi kr skte kuki js m ye reserved keyword h.