// console.log("welcome");

// function logger(){
//     console.log("hii");
// }

// logger()// call/invoke/run

// function signature-> parameter

// function juicer(apples,oranges){
// let juice = `juice with ${apples} apples and ${oranges} oranges`
//     console.log(juice);
// }
// juicer(3,4)



// function juicer(apples,oranges){
//     // parameters are local variables.
//     let juice = `juice with ${apples} apples and ${oranges} oranges`
//     console.log(juice);
// }
// juicer(3,4)




// function expression
// ques-> calculate your age.
// CalAge =  function(birthyear){ // anonymous function.
//     const age = 2026 - birthyear
//     return age
// }
//  const AGE = CalAge(2006)
//  console.log(AGE);

//          example 2
//  const juicer = function(apples,oranges){
//     let juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice
//  }
//  console.log(juicer);
//  let glass = juicer(2,2)
//  console.log(glass);
// if we call this juicer function into the top of this function then this will give error because hoisting is come .

                                   // arrow function
                                   // syntax:-()=>{}

    // arrow function in single  line 
    // const calAge = (birthyear) => 2025 - birthyear;
    // console.log(calAge(2000));

    // arrow function in multiple line
   //  const  Retirement = (birthyear) => {
   //     const age = 2025 - birthyear
   //     let retire_duration = 50 - age
   //     return retire_duration  
   //  }
   //  console.log(Retirement(2001));

    // arrow function with  multiple parameters.
   //   const retirement = (birthyear,firstName) => {
   //    const age = 2025 - birthyear;
   //    let retire_duration = 50 - age
   //    return `${firstName} retires in ${retire_duration}`
   //   }
   //   console.log(retirement(2001,"pankaj"));

   // how do default parameters work in js.

   // function greeting (name,message = "Namaste"){
   //    console.log(`${message} ${name}`)
   // }
   // greeting("pankaj")
   // greeting("rajat","hello") // change the default value of message 

   // REST operator symbol = ...
   //       Rest parameters/multiple parameters

   // function sayHello(message,...names){
   //    names.forEach(person => console.log(`${message} ${person}`))
   // }
   // sayHello("Hello","pankaj","bhavuk","khushi","rajat")

   // Nested functions
//    const Cutpieces = function(fruit){
//       return fruit * 4;
//    }
//    const juicer = function(apples,oranges){
//       let applePieces = Cutpieces(apples)
//       let orangePieces = Cutpieces(oranges)
//     let juice = `juice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice
//  }

//  let glass = juicer(2,2)
//  console.log(glass);

//              CALLBACK FUNCTION
  function loginUser(UserName, callback){
        console.log(`user ${UserName} logged in `);
        callback()
  }
  function redirect(){
   console.log("redirecting to dashboard...");
  }
  loginUser("pankaj",redirect)


  //        HIGHER ORDER FUNCTION:- aise function jinke ander hm ek or function ko receive krte h in function k pass itni power hoti h ki ye ek function ko bhi return kr skte h
  //      example 1
  function loginUser(UserName, redirect){
        console.log(`user ${UserName} logged in `);
        redirect()
  }
  function redirect(){
   console.log("redirecting to dashboard...");
  }
  loginUser("pankaj",redirect)

  //      example 2
  function stringManipulator(str,func){
   return func(str)
  }
  function reverseString(s){
   let reversed ="";
   for(let i =s.length-1;i>=0;i--){
      reversed = reversed + s[i];
   }
   return reversed
  }
let result = stringManipulator("hello",reverseString)
console.log(result)
// here func is a callback function and stringManipulator is a higher order function.