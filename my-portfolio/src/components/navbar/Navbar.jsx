import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react';

// styles
import '../../sass/style.scss'

const Menu = () => (
    <>
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
    </>
)

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState('false');

    return (
        <div className="navbar">

            <Menu />

            <div className="navbar__menu-links_icons">
                <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </div>

            <div className="navbar__menu-mobile">
                {mobileMenu
                    ? <RiCloseLine onClick={() => setMobileMenu(false)} />
                    : <RiMenu3Line onClick={() => setMobileMenu(true)} />
                }
                {mobileMenu && (
                    <div className="navbar__menu-mobile_container">
                        <div className="navbar__menu-mobile_container-links">
                            <Menu />
                            <div className="navbar__menu-mobile_icons">
                                <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default Navbar