import React, {useState, useEffect}  from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MoviesCard from './MoviesCard';
//a5393007
const API_URL = 'https://www.omdbapi.com?apikey=a5393007'


const App = () => {
    const[movies, setMovies]=useState([]);
    const[searchTerm, setSearchTerm]=useState([]);

    const searchMovies=async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('avengers');
 
    },[]); 

  return (   
    <div className='app'>
    <h1> MoviesLand</h1>
        <div className='search'>
        <input type='text' className='search-box' placeholder='Search for a movie...'
             value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>

            <img src={SearchIcon} 
            alt='search-icon' 
            className='search-icon'
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0 ?    
            (<div className='container'>
                {movies.map((movie) => (
                    <MoviesCard movie={movie} key={movie.imdbID}/>
                ))}
            </div>
            ): (
            <div className='empty'>
            <h2> No movies found</h2>
        </div>   
            )
        }
    </div>
      
    
  )
}

export default App
