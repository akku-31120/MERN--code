// yha p hm dummy  data lenge or us dummy data k according decide krege ki jo hmare pass APi ka call aaya h vo kis person k liye aaya h or usi person ka data find krke ui k upar bhj denge. 
// assume that API.js will act as a backend.

const userDetails = {
    pankaj:"he is a software developer",
    khushi:"she is into fashion designing",
    raj:"he is into UI/UX"
}
// yha p kaam ye h ki jb bhi is API.js k upar ek request aaye to is data k ander se us user ka specific data find krke component ko return krna h.

export function fetchDetails(user){
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(userDetails[user] || "No bio is available for this user") // agar hme ye pankaj,khushi, raj in user k name milte h to inhe return kr denge otherwise no bio is available for this user msg aayega.
            },2000)
        })
}
// this function fetch details for a specific user.