// Array is a  data structure which store collection of items in a continuous memory location.
// random access possible.
// array size is dynamic in js but static in c++ and java.
// let students = ["pankaj","rajat","akanshi","anshika"]
// console.log(students[0])
//  console.log(students);// if u want to print all the elements of an array .
//  for (let i=0; i<students.length; i++){ // print all elements of an array by traversing.
//       console.log(students[i])
//  }
 // in c++ and java array is homogeneous means it store same type of data.
 // but in js array is heterogeneous means it store different type of data.
  // example 
//   let employee = ["Shyam",true,2000.00,355]
//       console.log(employee);
      
//  how to store objects in array     
// example
// let skills = {
//     frontend: "react",
//     backennd: "Express",
//     Database: "MongoDB"
// } 
// let employee = ["Shyam",true,2000.00,355,skills]
//       console.log(employee);
      
//  how to store functions in array     
// example

// const greet = ()=>{
//     console.log("hello ji");
// }
// let employee = ["Shyam",true,2000.00,355,greet]
//       console.log(employee);
//       console.log(employee[4]());

// array can also be created using array constructor .

// there are multiple types of constructor :- default, parameterized.
// let arr = new Array("pankaj","bhavuk","yash")//
// console.log(arr);
// constructor ko call krne k liye object bnana pdta h or object new kwyword s bnta h.

// is array mutable?
// yes array is mutable means hm array ki value ko chng kr skte h.
//example
// let arr = ["pankaj","bhavuk","yash"]
// arr[0] = "Rahul"
// console.log(arr);

// built-in methods.
// push,pop,split,slice,unshift,shift etc.
// if u want to add a new element in the end of an array then use push.
// syntax:-arrayname.push(element name);
// if u want to add a new element in the starting of an array then use unshift.
// syntax:-arrayname.unshift(element name);
// if u want to remove a  element in an array then use push.
// syntax:-arrayname.push(element name);
// index of use hota h ki ye element array m hai ya ni uska index return krta h.agar vo chij array m present nhi h to indexof -1 return krta h.
// syntax:-arrayname.indexof(arrayelement name)
// now we understand map,reduce,filter.
// let cart = ["milk","bread","eggs"]
// cart.push("butter")
// console.log(cart);
// cart.unshift("juice");
// console.log(cart)
// let index = cart.indexOf("eggs")
// console.log(index);
// if(index!== -1){
//     cart.splice(index,1)//remove 1 element from cart.
// }
// console.log(cart);

// filter:- array k ander s chize select krni h to use krege filter.
// filter ek esa function h jo acc to condition decide krta h ki use konse items ko return krna h 
// Map:- jb hme array k hr ek element pr koi operation perform krna ho then we use map.

// example:-
// let marks = [45,67,89,32,76,99,54]
// let student = marks.filter((mark) => mark > 60)
// console.log(student);
// find return the first occurence of data.
// let marks = [45,67,89,32,76,99,54]
// let student = marks.find((mark) => mark > 60)
// console.log(student);
// reduce.
//  find avg by brute force method
// let marks = [45,67,89,32,76,99,54]
// let sum = 0
// for(let i = 0; i<marks.length;i++){
//     sum = sum+marks[i];
// }
// let avg = sum/Marks.length
// console.log(avg);

// find avg by reduce
// reduce m do chize hoti h first  is accumulator and second is current . by default accumulator starting index means 0 hota h and current uske next wala.
//   let totalMarks = marks.reduce((sum,m) => {
//  sum = sum + m;
//  return sum
// },0)
//  let avg = totalMarks/marks.length;
//  console.log(avg);
// here sum is accumulator and m is current.
// sort - use to sort the function.
// console.log(marks.sort()); //it is sort in ascending order.
// includes - ye check krke btata h ki ye element array k ander present h ya ni and return krta h true or false.
// example 
// let ratings = [4.5,3.2,5.0,2.8,4.7]
// console.log(ratings.includes(5.0));
// findIndex - return the first occurence of condition.
// question :- find index of first rating which is below 3.
// let lowIndex = ratings.findIndex(r => r < 3)
// console.log(lowIndex);
// // reverse - this method is use to reverse an array
// console.log(ratings.reverse())

// map - it doesn't chng in original array but chng in copy array.
// example
// let words = ["hey","akanshi","good","morning"]
//  let upper = words.map((word) => word.toUpperCase())
//  console.log(upper)

// array with functions and objects.
// array of objects or array with objects

let orders =[
    {
       id:1,
       product:"laptop",
       price:60000
    },
    {
       id:2,
       product:"mobile",
       price:20000
    },
    {
       id:3,
       product:"headphones",
       price:2000
    },
    {
       id:4,
       product:"tablet",
       price:15000
    },
    
]
let expensive = orders.filter((order) => order.price > 10000)
console.log(expensive);
let totalfund = orders.reduce((sum,order) => {
    sum = sum + order.price
    return sum;
},0)
console.log(totalfund);
let product = orders.map((order) => order.product)
console.log(product)
// sort by price 
let sortedOrders = orders.sort((a,b) => a.price - b.price)
console.log(sortedOrders)

 // ARRAY WITH FUNCTIONS

// for Each loop :- ye do chize consist krta h first data and second index.
 let students = ["akanshi","anshika","kanak"];
 function printStudentName(arr){
    arr.forEach((student,index) => {
        console.log(`${index + 1}.${student}`)
    })
 }
 printStudentName(students);

 // for of loop
 // find total salaries
 let salaries =  [30000, 45000, 50000, 60000]
  function totalsalaries(arr){
      let sum = 0;
      for(let sal of arr){ // here sal is a refernce pointer not  an iterator means sal yha p array m jakr direct value store kr lega jaise phele h 30000 fir 45000 ese.
        sum = sum + sal;
      }
      return sum;
  }
let output = totalsalaries(salaries);
console.log(output);

// for in loop
// example:- display employee info

let employees = {
    firstName: "pankaj",
    age:25,
    department:"IT",
    salary:50000
}
 function showEmployeeInfo(obj){
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`)// heere we don't use dot operator we use bracket operator kuki dot operator s hme ek hi key acccess kr pate or sari key  ko access krne k liye br br likhna pdta lekin bracket operator k ander hmne ek variable pass kr diya h that is key ye object ki hr ek key ko print kr dega.
    }
 }
  console.log(showEmployeeInfo(employees));