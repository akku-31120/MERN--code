import React from 'react'

const Fruit_Item = () => {
  let fruits = ["Mango","Apple","litchi","banana"]
  return (
    <div>
      <ul>
        <li>{fruits[0]}</li>
        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    </div>
  )
}

export default Fruit_Item
// hme is li tag k ander array ki value access krni thi to hm uske liye curlybraces lgayege or jo bhi value access krni h vo index k base pr kr lenge.
// {fruits[0]} = for access one value
// using loop = for access multiple values.here we use map.
// map ka use hm jb krte h jb hme array k hr ek element k upar kch kaam krna ho.