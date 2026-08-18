import  { useEffect, useState } from 'react'

const Tracker = () => {
    const[position,setPosition] = useState({x:0,y:0}) //is useState k ander do value hogi first one is key value pair for x coordinate and second is key value pair for y coordinate.and starting m hmne x or y ki value 0 li h.

    useEffect(() => {
        function handlePosition(e){ // jb event (pointermove) trigger hoga tb ye function chlega.or ye function x or y ke coordinates chng krega.
           // console.log(e); //o/p:- m br br pointerEvent ka object aara h console p to ye br br isliye aara h kuki jaise hi hm apne cursor ko browser p khi bhi move kra rhe h utni br ye function call ho rha h .
                setPosition({x:e.clientX,y:e.clientY})
                console.log({x:e.clientX,y:e.clientY})// o/p:- iski o/p h jaise jaise cursor move hora h browser pr vaise vaise x or y ki value chng ho ri h or vo console p dikh rhi h.
                // ab hme krna h ki hmara cursor k sth sth tracker bhi move ho to uske liye hm ye x or y ki value ko state ko de denge or vo state hmare components ko re-render kregi or re-render hote hi ye tracker move ho jayega or css ki property lga denge styling k liye.
            // clientX,clienty = ye vo value h jo o/p aari h hmari pointerEvent k object ki use jb open krege to hme vo clientx,or clienty ki value dera h means jaise jaise x or y ki value chng hori h vo value h ye.
        }
      //mounting state
        console.log("in useEffect") // o/p:- ye console pr ek hi br aara h kuki dependency array khali h to only mounting k tym pr dikhega 1 br. function bhi useeffect k ander h but vo br br call hora h is wjah s bht sare pointer move k array aarhe h means x and y ki value chng ho rhi h
        window.addEventListener('pointermove',handlePosition) // window objwct k upar eventlistener lgaya h  pointer move.
        // is line ka mtlb h jb hmara component mount ho to ye event window(window object) ke upar paste krdena or ye function handlePosition listen kr dena means chla dena.

        //unmounting state
        return() => {
          window.addEventListener('pointermove',handlePosition)
        }
    },[]) // agar dependency array khali h it means ek br kaam krega use effect.

  return (
    <div>
      <div style ={{
        height: '20px',
        width: '20px',
       borderRadius: '100%',
       backgroundColor: 'pink',
       position:'absolute',
       transform:`translate(${position.x}px,${position.y}px)`

      }}>Tracker</div> 

      {/* is div ko use krege as a tracker */}
      {/* yha hm krege ki jaise hmara cursor move ho vaise hi tracker bhi move ho */}
      {/* cursor k sth sth tracker move krne k liye hm is tracker ki position ki property window k according chng krni h or jo x or y coordinates aaye vhi position rkhni h. */}
      {/* basically hm tracker move kr rhe h on every re-render or re-render jb hoga jb state chng hogi means usestate hit hogi */}
    </div>
  )
}

export default Tracker
// jo hmara browser h uska control window object k ander h to hm window object pr ek event lgayege or vo event ek listener(function) ko call krega ki jb bhi browser k upar cursor khi bhi move ho to x or y k corrdinates chng ho.
// or x and y hmari state h to jb bhi state ki value chng hogi to component re-render hoga.