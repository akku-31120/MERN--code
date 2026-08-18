// yha do chize chiaye ek to server s connected ho or kis channel pr ho ya kis room id pr ho.
import React, { useEffect, useState } from 'react'
//import ServerConnection from './ServerConnection'
import UseChatRoom from './UseChatRoom'

const ChatRoom = ({roomId}) => {
     const[serveUrl,setServeUrl] = useState("https://localhost:1234")

     UseChatRoom({serveUrl:serveUrl,roomId:roomId})

    //  useEffect(() =>{ //mount and setup
    //     const connection = ServerConnection(serveUrl,roomId)
    //     connection.connect();

    //     return ()=>{ //unmount
    //       connection.disconnect();
    //     }

    //  },[serveUrl,roomId])

  return (
    <div>
      <label>
        <input type ='text'
        value={serveUrl} 
        onChange={e => setServeUrl(e.target.value)}/>
      </label>
      <h1>welcome to the {roomId} room</h1>
    </div>
  )
}

export default ChatRoom
// jb hme ek hi logic ko br br use krna ho to hm use wrap kr lete h custom book m means aoni ek custom book create krte h .jaise yha p connect or disconnect h ye br br use hota h jb server ka url chng hota h ya to connect hoga ya disconnect.
// hm line no 11 to 19 ke logic ko ek function m dalege or is function ko as a custom book use krege.or ye kaam hm useChatRoom wale component m krege.


// flow of this chatRoom:- ab is chatroom k ander input tag h ye input tag url ko show krta h jo hm currently fill kr rhe h vo url.
// or server k url ko hmne as a state consider kiya h which is serveUrl or input tag m pass kiya h.
// or in case agar hm server ka url chng krte h to hme purana connection tod ke nya connection  krna h or room id ko bhi chng krte h to bhi purana connection tod k nye connection p jana.
// or ye jo logic h purana connection tod k nye p jana ye logic hmne UseChatRoom wale component m lga diya h ye component nhi h basically ek function h ya custom book h.