import './App.css';
import React from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import data from './data'

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
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
  }
  render(){
    const movies = this.props.store.getState();
    // console.log(movies);
    return (
      <div className="App">
      <Navbar />
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className ='tab'>Favourites</div>
        </div>

        <div className='movie-list'>
          {movies.map((movie, index) => {
          return <MovieCard movie = {movie} key = {index} />
          })}
        </div> 
      </div>

      </div>
  );
      }
}

export default App;
