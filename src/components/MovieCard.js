import React from 'react';
import './style.css'
function MovieCard(props) {
    const divStyle = {
        width: '300px'
    };
    const cardStyle = {
        'border-radius': '5%'
    }
    const imgStyle = {
        width: '250px',
        height: '270px',
        'border-radius': '5%'
    }
    return (
        <div className="m-2" style={divStyle}>
            <div className="card text-center" style={cardStyle}>
                <img src={props.movieobj.Poster} style={imgStyle} className="card-img-top mt-2 mx-auto" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.movieobj.Title}</h5>
                    <p className="card-text">
                        Year : {props.movieobj.Year}<br/>Type : {props.movieobj.Type}
                    </p>
                    { props.showBtn &&
                    <button onClick={()=>{props.addToList(props.movieobj);}} className="btn btn-dark">Add To WishList</button>
                    }
                    { !props.showBtn &&
                    <button onClick={()=>{props.deleteFromList(props.movieobj);}} className="btn btn-danger">Remove From WishList</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieCard;




