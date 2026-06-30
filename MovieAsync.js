// 
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


 async function movieSummary(){ // movieSummary bhi promise return krrha h.
   //async vo hota h jisme tym ka pta na chle.
        try{
            let movie = await getMovieId(101)// jb tk ye function complete nhi hojata means ise response jb tk nhi mil jata tb tk ye dusri line nhi chlayega.
            let cinemas = await getCinemas(movie.movieId)
            let ticket = await getTicket(cinemas[0].hallName)
            console.log(ticket);
        } catch(err){
            
        }
}// kisi function s phele agar await likha h means vo function hr haal m promise hai.
      movieSummary()