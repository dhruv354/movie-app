

import {ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SET_FAVOURITES} from '../actions'

const initialMoviesState = {
    list: [],
    favourites: [],
    setFavourite: false
}

export default function movies(state = initialMoviesState, action){
    // if(action.type === ADD_FAVOURITES){
    //     return {
    //         ...initialMoviesState,
    //         favourites: action.movies
    //     };
    // }
    // return initialMoviesState;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }

        case ADD_FAVOURITES:
            
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }

        case REMOVE_FAVOURITES:
            //use title to remove desired movie from favourite array
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites : filteredArray
            }

        case SET_FAVOURITES:
            return{
                ...state,
                setFavourite: action.val
            }
        default:
            return state
    }
}
