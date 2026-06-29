                   // DOM SELECTORS

// how to fetch HTML element
// we can fetch elements using id, class, tagname.
// 1) getElementById(); - if u want to fetch element by id
// document use krege pure page ko access krne k liye kuki html document objcet k ander wrap h or hm html k element ko fetch kr rhe h.

//  let heading = document.getElementById("heading 1");
//  console.log(heading);

 // 2)getElementByClass(); = if u want to fetch element by class jb hm elements ko class k through fetch krte h  to vo ek list m aate h kuki bht sare elements ko same class di jati h.

// let elements = document.getElementsByClassName("sample")
// console.log(elements);

// getElementByTagName(); = if u want to fetch element by tagName or jb hm elements ko tagName k through fetch krte h  to vo ek list m aate h kuki bht sare sam tag ho skte h ek html document m. 

// let element = getElementByTagName("p")
// console.log(element) 

// getElementBytagNAme - return a collection of same tag

//queryselector :- ye ek element ko tino s fetch kr skta h id,class or tag name se.

// let element = document.querySelector("#heading 1")
// console.log(element) 
// let element2 = document.querySelector(".sample")
// console.log(element2)

// jb hm query selector k through class ko fetch krte h to vo hme collection return ni krta vo hme us class ki first occurence return krta h.

// let element3 = document.querySelector("p");
// console.log(element3);

// jb hm query selector k through tag ko fetch krte h to vo hme collection return ni krta vo hme us tag ki first occurence return krta h.it means html document m jaise 2 p tag h to first wala p tag jo hoga vo return krega.

// querySelectorAll - jb hme sare elements fetch krne ho to hm querselectorAll ka use krte h.

// let data = document.querySelectorAll("p");
// console.log(data);

// querySelectorAll - ye nodelist return krta h.
// difference between nodelist and html collection.
 

                              // DOM MANIPULATION PROPERTIES
// how to manipulate html elements by selecting it.
// how to manipulate css elements by selecting it using java script.

// 1)inner text = us text ko return krta h jo element k ander hota h.
let e1 = document.querySelector("p")
console.log(e1.innerText);

// inner text vs textContent
let e2 = document.querySelector("p")
console.log(e2.textContent)// it can read the text as well it can read the properties.

let e3 = document.querySelector("p");
console.log(e3.innerHTML); // ye sb kch return krta h jo bhi us tag k sth h.
e3.innerText = "have a nice day";


let name = prompt("welcome user,please enter your name")
if(name){
    e3.innerText = "welcome"+name + "nice to meet you";
}
else{
    element.innerText = "hello user nice to meet you";
}
// adding elements to your DOM
// 1) create
// 2) add
 let heading = document.createElement("h1");
let section  = document.querySelector(".screen")
// append child = ye ky krta h jo bhi hmara dom h uske ander jo hmne element bnaya h usko add krta h dom m
section.appendChild()