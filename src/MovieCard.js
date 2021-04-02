import React from 'react';
import './MovieCard.css';

import {addFavourites, removeFavourite} from './actions'
class MovieCard extends React.Component{
        // console.log(props)
    
        // componentDidMount = () => {
        //     console.log(this.props.store.getState);
        // }
        handleFavouriteClick = () => {
            const {movie, store} = this.props
            //send a action to the reducer
            store.dispatch(addFavourites(movie))
            // console.log('current state', this.props.store.getState());
        }

        handleUnfavouriteClick = () => {
            const {movie, store} = this.props
            //send a action to the reducer
            store.dispatch(removeFavourite(movie))
            //make isFavourite prop to false
            // this.props.isFavourite = false
        }
        render(){
            const {movie, isFavourite} = this.props;
            // console.log(isFavourite);
            // console.log(this.props.store.getState());

            //return statement
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
                                {   isFavourite
                                    ?<button className='Unfavourite-btn' onClick={this.handleUnfavouriteClick}>Unfavourite</button>
                                    :<button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourite</button>
                                }
                            </div>
                        </div>
                    </div>
                // </div>
            );
        }
}

export default MovieCard;