import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Movies from './Movie';

const MovieList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
        <div className='Search d-flex justify-content-center mt-5'>
            <input 
                type='text' 
                placeholder='Search for a movie...' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button>Search</button>
        </div>    

        <div className='d-flex justify-content-center flex-wrap mt-5'>
            {Movies.filter(movie => 
                movie.titre.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((MovieItems, index) => (
                <MovieCard key={index} {...MovieItems} />
            ))}
        </div>
        </>
    );
}

export default MovieList;
