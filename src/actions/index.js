// const exp = 'ADD_MOVIES
// {
//     type: 'ADD_MOVIES';
//     movies: []
// }

export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'
export const SET_FAVOURITES = 'SET_FAVOURITES'

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


export const Show_Favourite = (val) => {

    return{
        type: SET_FAVOURITES,
        val
    }
}