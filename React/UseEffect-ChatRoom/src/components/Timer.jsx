//  in this component useeffect k ander setInterval use krege.

import { useEffect, useState } from "react"
const Timer = () => {
    let[count,setCount] = useState(0)
    useEffect(()=>{
        const timeInterval= setInterval(() =>{
            setCount(c=>c+1)
        },1000)
        return()=> clearInterval(timeInterval)
    },[])
  return (
    <div>
      <h3>{count}</h3>
    </div>
  )
}

export default Timer
