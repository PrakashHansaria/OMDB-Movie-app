import React from 'react';

function Search(props) {
    return (
        <div className="row m-5">
            <div className="input-group mb-3">
            <input type="text" className="form-control" id="movieinput" onChange={props.handleInputChange} placeholder="Movie Search" aria-label="Movie Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-secondary" id="basic-addon2" onClick={props.search}>Search</button>
            </div>
            </div>       
        </div>
    )
}

export default Search;