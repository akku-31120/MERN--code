console.log("welcome to node js");
const math = require('./math')
// const math = require('../math') // .. ka meaning h hm niche h or upar ja rhe h.
// const area = require('./area')
// const volume = require('./volumes/volume')
//console.log(math)
// agar hme math.js file link krni h index.js k sth to hm require ka use krege or ./ se sari file  or folderes aa jayege jitni bhi hmari h.
// require ek esa function jo kisi bhi chij ko include krne k kaam aata h
// jo bhi module user bnayega vo hmesha ./ se start hoga means kisi path se or jo module phele s bne h unme hme koi path nhi dena bs us module ka naam de denge.

let result = math.add(20,30)
console.log(result);

 result = math.subtract(20,30)
console.log(result);

// add(31,12) // jb function receive hua to eese likhege.
// math.add(31,12)
// math.subtract(5,31)

// let result = area.Area_Circle(3.14, 4)
// console.log(result);
//  result = area.Area_Rectangle(3,4)
// console.log(result);
//  result = area.Area_Righttriangle(2, 5)
// console.log(result);

//  let result = volume.volume_cone(2, 3)
//  console.log(result)
//  result = volume.volume_cube(3)
//  console.log(result)