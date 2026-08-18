// this is not a component this is a function or custom book.
// ye component isliye nhi h kuki ye jsx ka syntax nhi return kr rha .component vo hota h jo jsx ka syntax return krta h.
import  {useEffect} from 'react'
import ServerConnection from './ServerConnection'

const UseChatRoom = ({serveUrl,roomId}) => {
  useEffect(() =>{ //mount and setup

        const options ={
            serveUrl:serveUrl,
            roomId :roomId
        }
        const connection = ServerConnection(options)
        connection.connect();

        return ()=>{ //unmount
          connection.disconnect();
        }

     },[serveUrl,roomId])
}
// ye function do value lega serveUrl,roomId or is effcet wale logic ko run krna

export default UseChatRoom