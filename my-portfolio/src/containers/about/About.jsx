import React from 'react';

// styles
// import '../../sass/style.scss'

const About = () => {
    return (
        <div className="about__container">

            <div className="about__img"></div>

            <div className="about__text">
                <h3>About me</h3>

                <h4>I’m ready to start my career as a Junior Web Developer</h4>
                <p>My name is Veronica and I am 30 years old,
                    currently living in the big city of Mellerud with my dog Charlie.
                    But we're curious about move to another place.
                    I work as a commercial photographer in my own company
                    but have now also trained in web development.</p>

                    <p>It's time for me to have my first job as a junior web developer
                        and it feels exciting! I have studied a 2-year vocational education
                        with a focus on the practical aspects.</p>

                    <p>I like to work on making the web accessible to everyone,
                        mainly by working with design and the frontend part of the web development.</p>

                    <h4>What I've been studying</h4>
                    <p className="about__text-lang">html / css / sass / js / react / wordpress / php / node.js / figma / express / websocket / ejs / docker / git</p>

                    <h4>Studies</h4>

                        <div className="about__text-studies">
                            <ul>
                                <li>Glimåkra Folkhögskola · Web Developer 3 years</li>
                                <li>Umeå University · Technical Media 3 years</li>
                                <li>Other courses · Strategical communication, project leading, digital marketing, creative writing</li>
                            </ul>
                        </div>
                    

                    <p className="about__text-cv">Download my full resumé</p>

            </div>
        </div>
    )
}

export default About