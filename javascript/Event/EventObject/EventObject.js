// let eventButton = document.querySelector("#eventbtn")
// eventButton.addEventListener('dblclick',function(event){// here we pass a parameter which is event kch bhi naam de skte h event ki jgah
//     console.log("button clicked");
//     console.log(event);
//     console.log(event.type);//event ka type btayega - ans is click
//     console.log(event.target);// event ka target btayega - ans is eventButton
//     console.log(event.timeStamp);// kis time p kra 
//     console.log(event.clientX,event.clientY);// x and y  btayega
//     event.target.innerText = "details in console"// it means jo bhi event perform hua h or jis target pr hua h uska innertext chng krke ye krdo jo diya h .
// })
// let Name = document.querySelector("#name")
// Name.addEventListener('change',(event)=>{
//      console.log(event.target.value) // jo bhi hm name m enter krege vo console pr print ho jayega.
// })
// jb hm kisi target k upar event lgate h to us event ki details listener(function) k ander chli jati h.
// to hmne is eventButton k upar event lgaya h to ab iski kch properties or event name function k ander yani ki eventlistener k ander chla gya or  agar hm unproperties ko recieve krna chahte h to hm is function k parameter m kch bhi naam dekr unhe receive kr skte h.

// mouse move
// let Trackarea = document.getElementById("trackarea")
// let coords =  document.getElementById("coords");
// Trackarea.addEventListener('mousemove',(e) => { // mouse move jb trigger hota h jb mouse kisi particular area k ander jake move krega tbhi event br br trigger hota h jb mouse br br move hota h  
//     coords.textContent = `X: ${e.offsetX} Y:${e.offsetY}`; // agar hme event  k ander s x or y ki value lani h to hm offset ki value bhi la skte h.
// })

// agar hme dynamically koi chij add ya remove krani h to ese krege-
// example is when u double click on any button then something is add or remove hona chaiye.

// let container = document.getElementById('container');
// container.addEventListener("dblclick",() => {
//     const newDiv = document.createElement('div')
//     newDiv.textContent = "newBox";
//     newDiv.style.cssText = "width:80px; height:88px; background : red; margin:5px;"
//     container.appendChild(newDiv);
// })

// line no 27 to 33 means jb hm double click krege to ek box add hoga.

// let container = document.getElementById('container');
// let button =  document.getElementById("addBox")
// button.addEventListener("dblclick",() => {
//     const box = document.createElement('div');
//     box.className = "box";
//     box.style.cssText = `width:60px; height:60px;
//                          background.hsl(${Math.random()*360},70%,60%);
//                          display:inline-block; margin:5px;`
// container.appendChild(box);
// box.addEventListener('click',() => box.remove())                  
// });

//example 2 :-  when we hover on a button then a tooltip ani chaiye.
let word = document.getElementById("word")
let tooltip = document.createElement('span');
tooltip.textContent = "i am a tooltip"
tooltip.style.cssText = "position:absolute; background:black; color:white; padding:5px; display:none;"
document.body.appendChild(tooltip);
word.addEventListener('mouseover',(e) => {
    tooltip.style.display = "block"
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = (e.pageY + 20) + "px;"
})
word.addEventListener('mouseout',(e) => {
 tooltip.style.display = "none";
})