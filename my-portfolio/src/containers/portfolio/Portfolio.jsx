import React from 'react';
import { useState } from 'react';

//components
import Gallery from '../../components/gallery/PortfolioPhoto';
import Projects from '../../components/gallery/PortfolioWeb';

// styles
import '../../sass/style.scss'

const Portfolio = () => {
    const [showProject, setShowProject] = useState(true);
    const [showGallery, setShowGallery] = useState(false);

    const handleShowProject = () => {
        setShowProject(true);
        setShowGallery(false);
    }

    const handleShowGallery = () => {
        setShowProject(false);
        setShowGallery(true);
    }


    return (
        <div className="portfolio__container">

            <h3>Portfolio</h3>

            <div className="portfolio__btns">
                <button onClick={handleShowProject} className={showProject ? 'triggered-btn' : ''}>Web Development</button>
                <button onClick={handleShowGallery} className={showGallery ? 'triggered-btn' : ''}>Photography</button>
            </div>


            <div className="portfolio__show">
                {showProject && <Projects />}
                {showGallery && <Gallery />}
            </div>
        </div>
    )
}

export default Portfolio