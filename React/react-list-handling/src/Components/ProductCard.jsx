// hm ek product card bnayege or  array se us product card k ander data aayega or hm us data ko map krege fir.
import React from 'react'
import './Card.css'
import ProductList from './ProductList'

const ProductCard = () => {
    //[{},{},{}] = here we use json format means array of objects.
    let products = [
        {
            id:1,
            name:"shoes",
            price:999
        },
        {
            id:2,
            name:"watch",
            price:2999
        },
        {
            id:3,
            name:"Headphones",
            price:3999
        },
        {
            id:4,
            name:"Phone",
            price:19999
        }
    ]
  return (
    <div>
        {/* {
        products.map((product) => (
           <div key = {product.id} className='card'>
            <h3>{product.name}</h3>
            <p>price : Rs{product.price}</p>
           </div> 
        ))
        } */}
      {/* <span>name</span>
          <span>price</span>  ye hme br br copy paste krna pdta isliye hm map ka use krege.*/ }

          <ProductList products = {products} />
    </div>
  )
}
// here jb hm map lgake arrow function lga rhe h to hm javascript m {} lgate the but yha p () bracket lgege.vrna output ni aayegi see in line no 32 arrow k bd () lge h na ki {}.
export default ProductCard
