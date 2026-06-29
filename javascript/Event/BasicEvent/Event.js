  //const button = document.querySelector("#btn2")
// there are two methods to implement event in a modern way -
// 1)addEventListener = this is a function and in this function we pass two parameter first is event name and second is eventlistener( means function).
// 2)removeEventListener = 
// function greet(){ // use multiple function using modern way
//     alert("welcome user")
// }
// function changeColor(){
//     button.style.backgroundColor  = "lightgreen"
// }
// button.addEventListener("click",greet);
// button.addEventListener("dblclick",greet);
// button.addEventListener("dblclick",changeColor);

// here button is eventTarget , click is EventName and greet is EventListener.
// events in addEventListener are- click, doubleclick, upkey, downkey, submit, input etc.. search in google.

// function printMessage(){
//      let Msgbox = document.querySelector("#message")
//      let msg = document.createElement("h2")
//      msg.innerText = "response have been submitted"
//      Msgbox.append(msg)
// }


// button.addEventListener("click",printMessage)

let login = document.querySelector("#lgn")
document.querySelector("#details").style.display = "none";

function application(){
let screen = document.querySelector("#details");
screen.style.display = "block";

let salary = Number(prompt("enter your salary"));// number isliye use kiya taki salary no m covert ho jaye vo phele string m thi.
let salaryE1 = document.createElement("h3")
salaryE1.innerText = "your given salary is:" + salary;
screen.append(SalaryE1);


let bonuss = document.getElementById("bonus")
bonuss.addEventListener("click",function(){
salary+=2000;
salaryE1.innerText = "your given salary after bonus is:" + salary;
})



}
login.addEventListener("click",application)

// mouseover and mouseout event
const Box = document.querySelector(".box")
Box.addEventListener("mouseover",()=>{
    Box.style.background = "lightgreen"
})
Box.addEventListener("mouseout",()=>{
    Box.style.background = "red"
})