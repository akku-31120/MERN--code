// events in keyboard
// 1)key down = press down a key
// 2)key up   = release a key
// 3)key press = hold a key 

// document.addEventListener("keydown",(event) => {
//     console.log(event);
//    document.getElementById("output").textContent = `you pressed: ${event.key} (code: ${event.code})`;
// }) // hmne pure document pr addeventlistener lga diya h.

// detect keyboard shortcuts
// example = hm apne pass s keyboard k shortcuts bnayege like ctrl+s ,alt+tab or ye jo km krte h hm vo ni krayege inse jo hme psnd h vo kreyege jaise ctrl+s save krta h to hm ye ni krayege usse .

document.addEventListener('keydown',(event) => {
    if(event.ctrlkey && event.key === 's'){
        event.preventDefault();//stops browser to "save page" action.
        alert("custom save shortcut triggered")
    }
})
// preventDefault ye ek esa function h jo kaam ko rok dega jaise hmne press kra ctrl+s to ye abhi k liye use save nhi krega.
// is function ko lgane s ye hua ki jaise hm ctrl+s dba kr koi document save krte h vo save wala pop up ab nhi ayyega. 

// ex-3 => moving a box with arrow keys.

// const box = document.querySelector(".box")
// let topPos = 100;
// let leftPos = 100;
// document.addEventListener("keydown",(e) => {
//     console.log(e);
//     const step = 10;
//     if(e.key === 'ArrowUp') topPos -= step;
//     if(e.key === 'ArrowDown') topPos += step;
//     if(e.key === 'ArrowLeft') leftPos -= step;
//     if(e.key === 'ArrowRight') leftPos += step;
//     box.style.top = topPos + "px";
//     box.style.left = leftPos + "px";
// })