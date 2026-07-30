// yha do chize chiaye ek to server s connected ho or kis channel pr ho ya kis room id pr ho.
import React, { useEffect, useState } from 'react'
import ServerConnection from './ServerConnection'
const ChatRoom = ({roomId}) => {
     const[serveUrl,setServeUrl] = useState("https://localhost:1234")

     useEffect(() =>{ //mount setup
        const connection = ServerConnection(serveUrl,roomId)
        connection.connect();

        return ()=>{ //unmount
          connection.disconnect();
        }

     },[serveUrl,roomId])

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
