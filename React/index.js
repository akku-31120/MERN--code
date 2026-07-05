// let h1 = document.createElement("h1")
// h1.innerHTML = "learning React";
// let rootE1 = document.getElementById("root");
// rootE1.appendChild(h1);

// how to create a element using react.

// let h1 = React.createElement("h1",null,"hello react")
// // jb hm react s element create krte h to tin parameter pass krte h.first tag name, third  is us element ka text ky hoga.
// let rootE1 = document.getElementById("root");
// // agar hme screen k upar kch bhi dikhana h using react to hm react dom ka use krege.
// ReactDOM.render(h1,rootE1);// it means hm h1 tag ko rootE1 k ander dal rhe h.
// 

// how to create a element inside another element
// yha p hmne div k ander h1 tag create kiya h.
let element = React.createElement(
    "div",
    null,
    React.createElement("h1",null,"React learning")
);
let rootE1 = document.getElementById("root");
ReactDOM.render(element, rootE1);

// this makes code complex
// so we use React with JSX => javascript XML.means javscript m html likhege.

// let element = <h1>hello JSX format</h1>
// let rootE1 = document.getElementById("root");
// ReactDOM.render(element, rootE1);

// this show an error of < bracket.
// to remove this error we covert this code into javascript because browser only understand js not an html,css here the browser not understand <> angular bracket.

// babel => it is a compiler that convert jsx into js.