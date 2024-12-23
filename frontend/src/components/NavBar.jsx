import React, {useState, useEffect} from "react";


const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
            </ul>
        </nav>

    );

};

export default NavBar;
