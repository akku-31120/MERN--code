//hm yha p productlist function k ander product item ki list receive krege or fir condition lagyege ki list k ander items h to dikha dena or nhi h to show krna no products found.
import React from 'react'


const ProductList = ({products}) => {
  return (
    <div>
      {products.length === 0 ? (
          <h3>No products found!!!!</h3>
      ):(
           products.map((product) => (
           <div key = {product.id} className='card'>
            <h3>{product.name}</h3>
            <p>price : Rs{product.price}</p>
           </div> 
        ))
      )}
        
     
    
    </div>
  )
}

export default ProductList
