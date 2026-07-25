import React from 'react'

const Total = ({qty.price}) => {
  return (
    <div>
      <h2>Total Bill:Rs{qty*price}</h2>
    </div>
  )
}

export default Total
// hm do components ko sync krna chahte h means jo qty quantity.jsx wale component m chng ho vo  yha bhi ho to do component ko sync krne k liye hm state lifting ka use krege.