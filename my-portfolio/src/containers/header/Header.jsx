import React from 'react';

// styles
import '../../sass/style.scss'

const Header = () => {
    return (
        <div className="header">
            <nav className="header__navbar">Navbar</nav>
            <div className="header__picture">Picture</div>
            <h1 className="header__hero-text">Herotext</h1>
        </div>
    )
}

export default Header