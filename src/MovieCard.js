import React from 'react';
import './MovieCard.css';

function MovieCard(props){
        console.log(props)
        const movie = props.movie
        return (
            // <div className='movie-card-container'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='movie-poster' src= {movie.Poster} />
                    </div>
                    <div className='right'>
                        <div className='title'>{movie.Title}</div>
                        <div className='plot'>{movie.Plot}</div>
                        <div className='footer'>
                            <div className='rating'>{movie.Imdb}</div>
                            <button className='favourite-btn'>Favourite</button>
                        </div>
                    </div>
                </div>
            // </div>
        );
}

export default MovieCard;