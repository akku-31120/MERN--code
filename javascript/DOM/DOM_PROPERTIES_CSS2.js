// kisi element ko class deni h using javascript  to  phele us element ko fetch krege phele fir elementname.className = "class ka name " de denge
// let element1 = document.getElementById("p1");
// let element2 = document.getElementById("p2");
// let element3 = document.getElementById("p3");

// element1.className = "redText";
// element2.className = "blueText";
// element3.className = "greenText";

// element1.className = "background";

// agar hmne kisi element ko styling de rkhi h or hm us element ko ek or styling dena cha rhe h using class name to jo us element p phele wali styling thi vo ht jayegi or jo hmne ab di h styling using class name vo lg jayegi. claasName us phele wali styling ko replace kr dega nyi wali styling se.
// jese is example p hmne elment1 ko phele styling di ye element1.className = "redText"; then fir dubara ye di element1.className = "background"; to ab ye phele wali redtext wali ht jayegi or background wali lgegi bs.
// but agar hme element k upar phele wali or new wali styling dono add krni h to hm className m add kr denge.

// example of existing + new styling.
// element1.className = "background redText";
// console.log(element1.className);

// className return string.
// className m remove krna ho to vo sari class likhege dubara jo remove ni krni or vo wali classes ni likhege jine remove krna h means jaise 3 class h or hme 3rd wali remove krni h to 1,2 likh denge 3rd nhi likhege.

//     CLASSLIST
//  classList = jo bhi claases hmne element k upar lga rkhi h unhe return krta h list m 
//  let container = document.querySelector("#box")
// console.log(container.classList);
// container.classList.add("underline"); // add class using classList.
// also ye existing class ki property ko bhi apply krta h or new class ki bhi blki className nhi krta tha.
// let mode = prompt("please enter the mode")
// if(mode == "dark"){
//     container.classList.add("darkMode");
// }
// else if(mode == "light"){
//      container.classList.add("lightMode");
// }
// else{
//     alert("please enter a valid mode")
// }


// remove and add are inbulit methods of classlist.
//differnce between className and classList
//className - isme hmari new class existing class s overwrite ho jati h.
//classList - isme add ka use krke new class add hoti h existing m.
// in classList - there is a remove method to remove class.but in chlidName there is no remove method but vo class ni likhte jo remove krni h baki sari class likhte h dubara s remove krne k liye className m.
// in className - there is no toogle method but in classList there is toggle method.

// how to add multiple classes using classList
// container.classList.add("lightMode","underline");
// console.log(container.classList);

// contains() = ye method btata h ki hmara jo bhi element h uske upar ye class exist krti  h ya ni. ye true false return krta h.
// console.log(container.classList.contains("font"));
// container.classList.add("font");
// console.log(container.classList.contains("font"));

// toggle()  - ya to hta dena ya lga dena it means jaise hmare pass koi new class h or hm toggle lgana chahte h to ab toggle dekhega ki ye class phele s h ya nhi h  agar nhi h to toggle lga k jo bhi class h vo add hojayegi means class k ander jo bhi property h vo apply ho jayegi lekin agar hm isi class p dubara toggle lgayege to vo class ki properties ht jayegi it means toggle ht jayega ab
let container = document.querySelector("#para")
container.classList.toggle("highlight"); // toggle lg gya class k upar
container.classList.toggle("highlight"); // toggle ht gya class k upar s.