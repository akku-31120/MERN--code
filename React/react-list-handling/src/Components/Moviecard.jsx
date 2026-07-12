// yha hm nested list dekhege.
// example = movie k title k niche uske genres print hone chaiye. to yha double loop lgega means double map lgege.
import React from 'react'
import './Card.css'

const Moviecard = () => {
    let movies = [
      {
        title:"inception",
        genres:["sci-fi","thriller"] // nested list = list inside list
      }, 
      {
        title:"KGF",
        genres:["Action","Drama"] // nested list = list inside list
      }, 
    ]
  return (
    <div>
      {
        movies.map(movie =>(
           <div key={movie.title} className='card'>
            <h2>{movie.title}</h2>
            <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
           </div> 
        ))
      }
    </div>
  )
}

export default Moviecard
