// this component will act as a parent component.
import { useState } from 'react'
import ChatRoom from './ChatRoom'

const Discord = () => {
    const [roomId,setRoomId] = useState('College')
    const [show,setShow] = useState(false)
  return (
    <div>
      
    <label>
      <select value = {roomId}
        onChange = {e => setRoomId(e.target.value)}>
          <option value="College">College</option>
          <option value="Friends">Friends</option>
          <option value="Family">Family</option>
          <option value="Society">Society</option>
      </select>
    </label>
      <button onClick={() =>setShow(!show)}>
      {show ?'close Chat':'Open Chat'}
      </button>

      {show && <ChatRoom roomId ={roomId}/>}
    </div>
  )
}

export default Discord
// flow of this chatRoom:- start here
// Dicord->ChatRoom->UseChatRoom->ServerConnection
// hmne ek room id lih or usko chng krne ki responsibility select tag ki h vo chng kr deta h uske pass multiple options h.
// uske bd ek button h hmare pass jo chat ko open krta h or close  krta h or  prop ka use krke hmare channel ki room id bhejta h .id jaise clg,family .
// or jo ye select tag m option h jb bhi hm in option ko choose krte h to vo setRoomId k through hmari RoomId ko set krta h or jo bhi value aati h use chatRoom wale component m bhej deta h


