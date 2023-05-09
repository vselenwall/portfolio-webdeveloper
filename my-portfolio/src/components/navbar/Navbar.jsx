import React from 'react';
import { RiMenuMenu3Line, RiCloseLin } from 'react-icons/ri'

// styles
import '../../sass/style.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__menu-links">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar__menu-links_icons">
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                </div>
        </div>
    )
}

export default Navbar