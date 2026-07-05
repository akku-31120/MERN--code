import React from 'react'

const Offer = ({price}) => {
  return (
    <div>
      <p>Price : Rs{price}</p> <br />
      {price < 500 && <span>Limited time offer</span>}
      {/* span tag ki value true hogi */}
    </div>
  )
}

export default Offer
