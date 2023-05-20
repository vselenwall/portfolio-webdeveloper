import React from 'react';

// components
import Navbar from '../../components/navbar/Navbar'

// styles
import '../../sass/style.scss'

const Header = () => {
    return (
        <div className="header__container">
             <Navbar />
            <div className="header__info">
            <h1>Hi, I'm Veronica Selenwall</h1>
            <h2>I'm searching for my frist job as a junior web developer</h2>
            <button>My projects</button>
            </div>
        </div>
    )
}

export default Header