// let Person={
//     firstName:"pankaj",
//     lastName:"oberoi",
//      job:"software eng",
//      age:25,
//      jobStatus: true,
//      Salary: 2000+ 20000
// }
// console.log(Person);
// console.log(Person.firstName);
// console.log(Person.Salary);


// agar hme key k name k bich m space dena h to hm us key ko double quotes m rkh denge.
//bina double quotes diye hm space wali key ko access nhi kr payege.
// example :-
//  let student = {
//     "First Name" : "akanshi"
//  }
// example of shallow copy in objects
//  let employee1 = {
//     empName:"Shivansh",
//     empID:101,
//     empSalary:20000
//  }
//  let employee2 = employee1;  // it is stored in memory using shallow copy.
// objects are mutable or immutable?
// mutable means jiski value chng ki ja ske.
// objects are mutable

// example of mutable of object.
// let employee1 = {
//     empName:"Shivansh",
//     empID:101,
//     empSalary:20000
//  }
//  employee1.empId = 321
//  console.log(employee1)

// dot operator vs bracket operator
//   let employee = {
//       FirstName:"Shivansh",
//       LastName: "maheshwari",
//       empID:101,
//       empSalary:20000
//  }
// bracket operator

// console.log(employee1['Salary']);

// const nameKey = 'Name'
// console.log(employee['last' + nameKey]);


// const info = prompt("enter the info you want")
// console.log(employee[info]);

// how to add keys in object 
// there are two methods to add key in object.

// 1) using dot operator

// let employee = {
//       FirstName:"Shivansh",
//       LastName: "maheshwari",
//       empID:101,
//       empSalary:20000
//  }
//  employee.location ="pune"
//  console.log(employee);

 // 2) using bracket
//   let employee = {
//       FirstName:"Shivansh",
//       LastName: "maheshwari",
//       empID:101,
//       empSalary:20000
//  }
//   employee['email'] = "abc@gmail.com"
//   console.log(employee);

  //inbuilt functions for objects
  
  // 1) if u want to fetch all the keys of an object then use object.keys() function
  // syntax:- object.keys(object name)
  // 2) if u want to fetch all the values of an object then use object.values() function
  // syntax:- object.values(object name)
  // 3) if u want to check this key is exist in our object or not means ye hmare object m hai ya ni then u use hasOwnProperty and it return true or false.
  // syntax:- objectname.hasOwnProperty("keyname")
  // 4) if u want to delete the key from an object then u use:- delete
  // syntax:- delete objectname.keyname

  // example of inbuilt functions of objects
//   let employee = {
//       FirstName:"Shivansh",
//       LastName: "maheshwari",
//       empID:101,
//       empSalary:20000
//  }
//  console.log(Object.keys(employee));
//  console.log(Object.values(employee));
//  console.log(employee.hasOwnProperty("empID"));
// delete employee.empSalary
//  console.log(employee)  

 // merging of objects
//  let obj1 = {
//    a:1,
//    b:2
//  }
//  let obj2 = {
//    c:3,
//    d:4
//  }
//  let MergedObj = Object.assign({},obj1,obj2)
// console.log(MergedObj);

// merging of objects using spread operator
// let obj1 = {
//    a:1,
//    b:2
//  }
//  let obj2 = {
//    c:3,
//    d:4
//  }
//  let obj3 = {...obj1,...obj2}
//  console.log(obj3);
 // mostly use spread operator for merging of objects.
 
 // Object Freeze
 // object freeze ka mtlb hai jb hme object ki properties ko chng na krna ho kbhi bhi means vo fixed rhe . maens object ki properties ko freeze krna.
 let settings ={
   theme:'dark',
   notifications:true
 }
 Object.freeze(settings)
 settings.theme = "light" // yha ye theme chng nhi hoga setting object ka kuki hmne phele hi boject.freeze use krliya h. 
 console.log(settings)

 // objects in function 
  //example 1
//   let settings ={
//    theme:'dark',
//    notifications:true,
//    wallpaper:function(){
//       console.log("using this u can chng your wallpaper")
//    }
//  }
//  console.log(settings.wallpaper());

 // example 2
//  let user = {
//    name: "Choota bheem",
//    age:15,
//    city:"Dholakpur",
//    profession:"gundagardi"
//  }
//  function printInfo(user){
//    console.log(user)
//  }
//  printInfo(user)