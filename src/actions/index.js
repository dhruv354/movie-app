// const exp = 'ADD_MOVIES
// {
//     type: 'ADD_MOVIES';
//     movies: []
// }

export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'

export const addMovies = (movies) => {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

export const addFavourites = (movie) => {
    return {
        type: ADD_FAVOURITES,
        movie
    }
}

export const removeFavourite = (movie) => {

    return{
        type: REMOVE_FAVOURITES,
        movie
    }
}


export const setShowFavourite = (val) => {

    return{
        type: SET_SHOW_FAVOURITES,
        val
    }
}