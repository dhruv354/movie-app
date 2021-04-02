// eslint-disable-next-line

import {ADD_MOVIES} from '../actions'
// eslint-disable-next-line
const initialMoviesState = {
    list: [],
    fav: []
}

export default function movies(initialMoviesState, action){
    if(action.type === ADD_MOVIES){
        return {
            ...initialMoviesState,
            list: action.movies
        };
    }
    return initialMoviesState;
}
