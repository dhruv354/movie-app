// const exp = 'ADD_MOVIES
// {
//     type: 'ADD_MOVIES';
//     movies: []
// }

export const ADD_MOVIES = 'ADD_MOVIES'

export const addMovies = (movies) => {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}