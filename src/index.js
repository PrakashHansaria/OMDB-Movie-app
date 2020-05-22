import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyList from './components/MyList';
import NavBar from './components/NavBar';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.addToMyList = this.addToMyList.bind(this);
        this.deleteFromList = this.deleteFromList.bind(this);
        this.state = {
            movie: '',
            movieList: [],
            myList: []
        }
        axios.get(`http://localhost:9999/omdb-service/getwishlist`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    myList: res.data
                })
            })
    }
    handleInputChange = (event) => {
        this.setState({
            movie: event.target.value
        })
    }
    updateWishList = () => {
        axios.get(`http://localhost:9999/omdb-service/getwishlist`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    myList: res.data
                })
            })
    }
    searchMovie = () => {
        let movie = this.state.movie;
        axios.get(`http://www.omdbapi.com/?apikey=ab7cbec7&s=${movie}`)
            .then(res => {
                console.log()
                if (res.data.Search === undefined) {
                    alert('Movie Not Found');
                    return;
                }
                let oldList = this.state.movieList;
                oldList.splice(0, oldList.length);
                for (let i = 0; i < res.data.Search.length; i++) {
                    if (res.data.Search[i].Poster === "N/A") {
                        res.data.Search[i].Poster = "https://bitsofco.de/content/images/2018/12/broken-1.png";
                    }
                    oldList.push(res.data.Search[i]);
                }
                this.setState({
                    movieList: oldList
                })
                console.log(this.state.movieList)
                document.getElementById('movieinput').value = '';
                this.setState({
                    movie: ''
                })
            })
    }
    deleteFromList = (movie) => {
        console.log(movie)
        axios.delete(`http://localhost:9999/omdb-service/deletemovie/${movie.imdbID}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.updateWishList()
            })
    }
    addToMyList = (movie) => {
        let myList = this.state.myList;
        if (myList.length === 10) {
            alert("Your WishList is Full!!!");
            return;
        }

        let movieList = this.state.movieList;
        let index;
        for (let i = 0; i < movieList.length; i++) {
            if (movieList[i].imdbID === movie.imdbID) {
                index = i;
            }
        }
        axios.post(`http://localhost:9999/omdb-service/addmovie`, {
            imdbID: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            type: movie.Type
        })
            .then(res => {
                if (res.status !== 200) {
                    alert("Movie Not Added to Wishlist")
                }
                if(res.data === false){
                    alert("Movie already in WishList")
                }else{
                    movieList.splice(index, 1);
                }
                console.log(res);
                
                this.updateWishList();
            })
        this.setState({
            movieList: movieList
        })
        console.log(this.state.myList)
    }
    render() {
        const divBack = {
            'background': '#0f2027',
            'background': '-webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);',
            'background': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            'min-height': '100vh',
            'margin-bottom': '0px'
        }
        return (
            <div className="App" style={divBack}>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact render={() => <App addToMyList={this.addToMyList} movieList={this.state.movieList} handleInputChange={this.handleInputChange} searchMovie={this.searchMovie} myList={this.state.myList} />}></Route>
                        <Route path="/wishlist" render={() => <MyList myList={this.state.myList} deleteFromList={this.deleteFromList} />}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
ReactDOM.render(<Navigation />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
