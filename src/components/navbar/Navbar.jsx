import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
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
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const urlGitHub = 'https://github.com/vselenwall';
    const urlLinkedIn = 'https://www.linkedin.com/in/veronica-selenwall-13b1ab122/';
    const urlInstagram = 'https://www.instagram.com/veronicaselenwall/';

    return (
        <div className="header__container">
            <div className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>

                <div className="navbar__menu-links_icons">
                    <li>
                        <a href={urlGitHub} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href={urlLinkedIn} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </div>

                <Menu/>

                <div className="navbar__menu-mobile">
                    {mobileMenu ? (
                        <RiCloseLine onClick={() => setMobileMenu(false)} />
                    ) : (
                        <RiMenu3Line onClick={() => setMobileMenu(true)} />
                    )}
                    {mobileMenu && (
                        <div className="navbar__menu-mobile_container">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#work">Work</a>
                                <a href="#contact">Contact</a>

                            <div className="navbar__links">
                                <a href={urlGitHub} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href={urlLinkedIn} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            
                        </div>

                    )}
                </div>
            </div>

            <div className="header__info">
                <h1>Hi, I'm Veronica Selenwall</h1>
                <h2>I'm searching for my first job as a junior web developer</h2>
                <button>
                    <a href="#work">My projects</a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
