import ClickDemo from "./Components/ClickDemo"
import FormDemo from "./Components/FormDemo"
import GreetUser from "./Components/GreetUser"
import InputDemo from "./Components/inputDemo"
import DynamicUi from "./Components/DynamicUi"


function App() {
  
  // let yourName = "akanshi"
  return (
    <>

    {/* <ClickDemo /> */}
     {/* it means component ko render krwana */}
    {/* <GreetUser name = {yourName}/>  */}
    {/*in greetuser we use props name = key,value = yourname  and for accessing value in props pass a keyname*/}
    {/* <InputDemo /> */}
    {/* <FormDemo /> */}
    <DynamicUi />
    </>
  )
}

export default App
