// remove - ye jitne bhi htl documnet m h3 h un sbko remove kr dega.
// let heading = document.querySelector("h3");
// heading.remove();
// agar kisi child ko remove krna ho to use krege -removechild
// child ko remove krne k liye sbse phele parent ko lekr aana pdega.
//  let main = document.querySelector("");
//  let e1 = document.querySelector("h3")
// main.removechild(e1)
// to manipulate/chng css using js we will always chng in style
// to chng in css properties  first always fetch the element. and apply a property .style
//  let element = document.querySelector("div")
//  console.log(element.style);
//   let color = prompt ("enter the color for ur room")
//  element.style.backgroundColor = color; // so we can see that how the css properties chng using css.
 // agar hme existing properties chng krni h elemnt ki means jaise div m background color nhi lga tha to vo hmne lgaya vo alag s property hogyi but usme border jo h uska vo uske sth h  means alag s nhi lgana pdra to agar hme vo chng krna h to ese krege-
//  element.style.width = "500px";
//  element.style.fontSize = "50px";
//  element.style.border = "7px solid red";

 // rather than br br element.style. likhne se agar if u want to handle multiple properties in a single time then use cssText.
//  element.style.cssText = "background-color:blue; color:white; font-size:50px; text-decoration:underline;"; // so we can see that ek br m hi multiple properties chng hogyi.
 
 //setAttribute() and getAttribute()
 // hm in dono s apne element ka attribute chng krege
  
 // ques is if user is student then fill email compulsary and if teacher then not compulsary. form tag waala code k liye h ye question .
  let role = prompt("please enter your role");
 if(role == 'student'){
  let mail = document.querySelector("#email");
  mail.setAttribute("required","true");
 }