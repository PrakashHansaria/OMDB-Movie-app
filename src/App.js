import React, { Component } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard'

class App extends Component {
  constructor(props){
    super(props);
    console.log("AppJs List : "+props.movieList)
    this.addToMyList = props.addToMyList;
    this.movieList = props.movieList;
    this.handleInputChange = props.handleInputChange;
    this.searchMovie = props.searchMovie;
    this.myList = props.myList;
  }
  render() {
    let movieList = this.movieList;
    const movies = movieList.map((movie) => {
      return (
        <MovieCard addToList={this.addToMyList} key={movie.imdbID} movieobj={movie} showBtn={true}></MovieCard>
      );
    });
    const background = {
      background: 'grey'
    }
    return (
      <div className="App container-fluid">
        <div className="text-center mt-2" style={background}><h3 className="p-1" style={{color:'white'}}>Search Movie Name</h3></div>
        <Search search={this.searchMovie} handleInputChange={this.handleInputChange}></Search>
        <div>
          {this.movieList.length >0 &&
          <div className="d-flex flex-row justify-content-center" style={background}><h3 className="p-1" style={{color:'white'}}>Movies List</h3></div>
          }
          <div className="d-flex flex-row mx-3 mt-4 flex-wrap justify-content-around">
            {movies}
          </div>
        </div>
      </div>
    );
  }
}

export default App;