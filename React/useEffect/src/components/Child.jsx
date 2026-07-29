import React, { useEffect } from 'react'

const Child = () => {

        useEffect(() =>{
            console.log("child mounted") // with setup function
              return () =>{
                console.log("child Unmount") // with cleanup function // jb child screen s ht ta h to cleanup function chlta h means chlid unmount.
              } 
        },[])

  return (
    <div>
         unmounted state
    </div>
  )
}

export default Child
