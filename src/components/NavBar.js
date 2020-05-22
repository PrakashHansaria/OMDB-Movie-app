import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" style={{color: 'white'}}>OMDB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav" >
                    <li className="nav-item active" >
                        <Link className="nav-link" to="/" style={{color: 'white'}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/wishlist" style={{color: 'white'}}>WishList</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;