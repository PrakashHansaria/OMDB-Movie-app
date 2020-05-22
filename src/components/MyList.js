import React from 'react';
import WishListMovieCard from './WishListMovieCard';

function MyList(props) {
    console.log(props.myList);
    let myList = props.myList;
    // const show = false;/
    const movies = myList.map((movie) => {
        return (
            <WishListMovieCard deleteFromList={props.deleteFromList} key={movie.imdbID} movieobj={movie} showBtn={false}/>
        );
    });
    return (
        <div className="d-flex flex-row justify-content-center">
            <div className="text-center m-3" style={{width:'100%'}}>
                <div className="p-1" style={{background:'grey',color:'white'}}><h3>Wish List</h3></div>
                {myList.length > 0 && <div className="d-flex flex-row mx-3 mt-2 flex-wrap justify-content-around">
                    {movies}
                </div>
                }
                {
                    myList.length === 0 && <div className="d-flex flex-row m-5 flex-wrap justify-content-around">
                    <h4 style={{color:'white'}}>Your Wish List is Empty</h4>
                </div>
                }
            </div>
        </div>
    );
}

export default MyList;