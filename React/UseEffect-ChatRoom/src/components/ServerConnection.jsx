// import React from 'react'

const ServerConnection = (serveUrl,roomId) => {
  return {
    connect(){
        console.log(`connecting to ${serveUrl} server and with Channel ${roomId}`)
    },
    disconnect(){
        console.log(`disconnecting from ${serveUrl} server and with Channel ${roomId}`)

    }
}
}

export default ServerConnection
// server s connection krege yha p.
// ek dummy API bnayege jo  room ka connection bithayega ki hm is server p h or is room p h or agar server ya room chng hua to us according vo usko disconnect krke nya connection establish krega.
// yha p hmne js ka format return kra h or use ereturn krne k liye return keyword k aage curly braces lgayege{}.agar ye braces() lgaye to error ayegi.
//disonnect = agar server k url m change hua ya roomId m to disconnect hoga.
