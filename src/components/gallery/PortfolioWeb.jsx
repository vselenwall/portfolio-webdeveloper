import React from 'react';

// styles
import '../../sass/style.scss'

const Projects = () => {
    return (
        <div className="projects__container">

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/web/animmen.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Ånimmens Fiskevårdsförening</h4>
                    <h5>Wordpress</h5>
                    <p>Jag fick i uppdrag att göra en hemsida till Ånimmens Fiskevårdsförening.
                        De hade redan ett domännamn, men ingen befintlig sida.
                        Sidan skulle vara enkel att navigera och innehålla deras viktigaste information.
                        Det här uppdrag genomfördes genom mitt eget företag.
                    </p>
                    <a href="http://animmen.net/">www.animmen.net</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/glimgrub-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>GlimGrub</h4>
                    <h5>MERN-stack</h5>
                    <p>Glimåkra Folkhögskola var trötta på att använda sig av fysiska matkuponger för att ta betalt i skolans matsal. Tillsammans med min
                        klasskompis Simon valde vi att jobba med detta i vårt examensarbete. Vi skapade ett system som hanterar betalningar samt saldo för deltagare/personal. 
                        Kökspersonal ska även kunna se vilka som handlar och kunna administrera olika alternativ av fika. Jag jobbade mest med React och Frontend, dvs. allt som ligger i mappen "client". 
                        Jag gjorde även designen med hjälpt av Figma och SASS.
                        
                    </p>
                    <a href="https://github.com/SeaManMoonSon/Examensprojekt.git">www.github.com/examensarbete</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/foodtruck-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Hawaii Foodtruck Restaurant</h4>
                    <h5>API / JS / CSS</h5>
                    <p>Det här var det fjärde caset som vi fick göra under min utbildning, dvs. att det 
                        gjordes för ca 2 år sedan. Vi fick i uppgift att utforma en restaurangapp som hämtade
                        olika matställen från ett API. Därefter skulle vi sortera informationen på olika sätt.
                    </p>
                    <a href="https://github.com/vselenwall/case4.git">www.github.com</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/todo-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Todo App</h4>
                    <h5>JavaScript / CSS</h5>
                    <p>Några veckor in på vår utbildning lärde vi oss JavaScript och då
                        gjorde jag mitt allra första case i ren JavaScript. Kraven var att
                        skapa en todo-app där man kunde lägga till nya saker att göra, redigera befintliga,
                        ta bort samt markera tasks som klara.
                    </p>
                    <a href="https://vselenwall.github.io/case3-javascript/">www.github/vselenwall.com</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/exploreapp-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Explore App</h4>
                    <h5>Node.js / EJS / CSS / MVC-model</h5>
                    <p>Under det här caset jobbade vi med att skapa authentifications med hjälp av Node.js.
                        Kraven var att vi skulle kunna skapa en användare, logga in med en användare och sedan skulle denna användare
                        kunna lägga upp en post, redigera samt ta bort. Jag valde att göra en sida där användare
                        skulle kunna dela sina bästa vandringsleder med varandra. Vi lärde oss även MVC-modellen i detta case.
                    </p>
                    <a href="https://github.com/vselenwall/case9.git">www.github.com</a>
                </div>
            </div>


            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/figma2-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>My Portfolio</h4>
                    <h5>React / SASS</h5>
                    <p>När jag skapade den här sidan använde jag mig av React och stylade med hjälp av SASS.
                        Jag tycker om att jobba med React och SASS, därför kändes det viktigt för mig att visa upp
                        mina senaste kunskaper inom detta. Genom alla projekt har vi även arbetat med Figma och skapat
                        såväl LoFi som HiFi för alla våra projekt. Därför har jag valt att lägga in en bild från min HiFi i Figma
                        som mockup till det här projektet, som du nu tittar på. 
                    </p>
                    <a href="https://github.com/vselenwall/portfolio-webdeveloper.git">www.github.com</a>
                </div>
            </div>
            

        </div>
    )
}

export default Projects