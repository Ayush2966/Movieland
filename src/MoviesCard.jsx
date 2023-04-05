import React from 'react'

const MoviesCard = ({ movie}) => {
  return ( 
  <div className='movie'>
    <div >
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
    </div>
    <div >
        <img src={movie.Poster !=='N/A' ?movie.Poster : 'https://via.placeholder.com/400'}  alt='{movie1.Title}'/>
    </div>
    <div>
        <span>
            {movie.Type}
        </span>
    </div>

</div>      
    
  )
}

export default MoviesCard
