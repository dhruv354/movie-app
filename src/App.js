// eslint-disable-next-line
import './App.css';
import React from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import data from './data'
import {addMovies, setShowFavourite} from './actions'

class App extends React.Component{
  

  componentDidMount(){
    const {store} = this.props;
    //subscribe method to listen to state change
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate()
    })
    //make api call
    //dispatch an action

    //here we are hardcoding our action so should ideally avoid it
    //rather we should call a function by importing it from our action folder
   /* store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })*/

    store.dispatch(addMovies(data));
  }

  handleTabChange = (val) => {
    this.props.store.dispatch(setShowFavourite(val))
  }

  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState()
    const index = favourites.indexOf(movie)
    
    if(index !== -1){
      //found that movie
      return true
    }
    //movie not found
    return false
  }
  render(){
    const {store} = this.props;
    const { list, favourites, setFavourite } = this.props.store.getState()
    const displayMovies = setFavourite ? favourites : list
    // console.log(movies);
    // console.log(store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${setFavourite ? '' : 'active-tab'}`} onClick={() => this.handleTabChange(false)}>Movies</div>
            <div className={`tab ${setFavourite ? 'active-tab' : ''}`} onClick={() => this.handleTabChange(true)}>Favourites</div>
          </div>
          <div className='movie-list'>
            {displayMovies.map((movie, index) => {
            return (
              <MovieCard 
                movie = {movie} 
                key = {index} 
                store={this.props.store}
                isFavourite = {this.isMovieFavourite(movie)}
                />);
            })}
          </div> 
          {displayMovies.length === 0 ? <div className='no-movies'>No movies to display!</div> : null}
        </div>
      </div>
  );
      }
}

export default App;
