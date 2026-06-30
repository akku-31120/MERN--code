//task is:-
// first we will have list of movies,movieId,movieName,type.
//we will search a movie based on id.
//after getting movie we will find list of cinema halls.
// after getting cinema halls we will get the ticket prices.

let movies =[
    {
       movieId : 101,
       movieName:'hero',
       type:'action'    
    },
    {
       movieId : 102,
       movieName:'Ram lakhan',
       type:'action'
    },
    {
       movieId : 103,
       movieName:'hum sath sath hai',
       type:'loving'
    },
    {
       movieId : 104,
       movieName:'stree 2',
       type:'horror comedy'
    },
    {
       movieId : 105,
       movieName:'welcome to the jungle',
       type:'drama'
    }
]
let cinemas = [
   {
      movieId : 101,
      hallName: 'PVR'
   },
   {
      movieId : 101,
      hallName: 'wave Cinema'
   },
   {
      movieId : 102,
      hallName: 'VVIP'
   },
   {
      movieId : 102,
      hallName: 'KW-DELHI6'
   },
   {
      movieId : 102,
      hallName: 'd-mall'
   },
]
function getMovieId(id){
   let pr =  new Promise((resolve, reject) => {
     setTimeout(() => {
      let movie = movies.find((movie) => movie.movieId === id )
      if(movie){
         resolve(movie);
      }else{
         reject("movie not found in database...")
      }
     }, 3000);
   })
   return pr;
}

function getCinemas(movieId){
   let pr =  new Promise((resolve, reject) => {
       setTimeout(() => {
         let movieCinemas = cinemas.filter((cinema) => cinema.movieId === movieId)
         if(movieCinemas){
            resolve(movieCinemas)
         }else{
            reject("no cinema hall found...")
         }
       }, 5000);
   })
 return pr;  
}
function getTicket(cinemaName){
   let pr = new Promise((resolve, reject) => {
     setTimeout(() =>{
         if(cinemaName === 'PVR'){
            resolve(
               {
                  diamond : 600,
                  gold : 400,
                  Silver : 300
               })
         } else{
            reject("no cinema name found in db...")
         }
     },3000)
   })
    return pr;
}

getMovieId(101)
.then((movie) =>  getCinemas(movie.movieId))
.then((cinemas) => getTicket(cinemas[0].hallName))
.then((ticket) => console.log(ticket))
.catch((err) => console.log(err))


