import GreetMessage from "./Components/GreetMessage"
import Status from "./Components/Status"
import Offer from "./Components/Offer";
import UserRole from "./Components/UserRole"
function App() {
  
  // let isLoggedIn = false // jese  yha p false h to ye boolean value h to hm any condition , any boolean, any status inke base pr hi decide krna h ki hme konsa component render krna h .
    //  let isLoggedIn = prompt("enter your status : true or false")
    // let price = 400
    //let ActiveStatus = true;
    let role  = "user"
  return (
    <>
      {/* <GreetMessage status = {isLoggedIn}></GreetMessage> */}
      {/* <Status status = {ActiveStatus}/> */}
      {/* <Offer price = {price} /> */}
      <UserRole role = {role} />


    </>
  )
}

export default App
