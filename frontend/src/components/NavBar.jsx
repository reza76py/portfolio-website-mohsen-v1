import React, { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <button className="navbar-toggle" onClick={toggleMenu}>
                    &#9776; {/* Hamburger Icon */}
            </button>
                
            
            <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
                <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
                <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
