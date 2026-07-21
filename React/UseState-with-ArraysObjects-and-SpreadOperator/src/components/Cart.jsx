// array of objects
//example - shopping cart
import React from 'react'
import { useState } from 'react'

const Cart = () => {

    let[cart,setCart] = useState([
        {id:1,name:"Mobile",price:20000,qty:1},
        {id:2,name:"Headphones",price:2000,qty:1},
    ])

    const increaseQty =(id) =>{
       setCart(
        cart.map(c => c.id===id ? {...c,qty:c.qty+1}:c)
       )
    }
   //increaseQty = ye function us item ki quantity increase krega jis item ki hm id pass krege jaise hmne id pass kri 1 to mobile ki qty increase ho jayegii agar hmne pass kri id 2 to headphone ki quantity increase ho jayegii
   // ab jaise hi user + button p click krega to onClick call ho jayega or vo increase quantity wale function ko call krega jiske ander item ki id pass ki h ..   
    // ab kese pta chlega ki user n konse id wale object k upar click kra h to  uske liye list k upar loop lga denge jaise user n id 2 wale object p click kra h to us object ki ek new copy bna denge or us copy k ander jake uski quantity ki value increase kr denge 
    // here cart is an array of objects in which two objects are present first is mobile and second is headphone.
  return (
    <div>
      {
        cart.map((c)=>{ // to print all items of array of objects hmne ek loop lgaya
            return <div key ={c.id}>
                {c.name} -{c.qty}
                {/* <button >+</button> */}
                <button onClick ={() =>increaseQty(c.id)}>+</button>
                
                {/* this button is for increase the quantity of card. */}
            </div>
        })
      }
    </div>
  )
}

export default Cart
