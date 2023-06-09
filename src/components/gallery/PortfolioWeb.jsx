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
                    <p>I was tasked with creating a website for Ånimmens Fiskevårdsförening.
                        They already had a domain name but no existing webpage.
                        The website was supposed to be easy to navigate and include their most important information.
                        This assignment was carried out through my own company.
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
                    <p>Glimåkra Folk High School was tired of using physical meal vouchers to receive payments
                        in the school cafeteria. Together with my classmate Simon, we chose to work on this for our final project.
                        We created a system that manages payments and balances for participants and staff.
                        The kitchen staff should also be able to see who is making purchases and administer various options for snacks.
                        I primarily worked with React and Frontend, which includes everything in the "client" folder.
                        I also designed the interface using Figma and SASS.

                    </p>
                    <a href="https://github.com/SeaManMoonSon/Examensprojekt.git">www.github.com/finalproject</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/foodtruck-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Hawaii Foodtruck Restaurant</h4>
                    <h5>API / JS  CSS</h5>
                    <p>This was the fourth case that we had to work on during my education,
                        which means it was done about 2 years ago.
                        We were tasked with designing a restaurant app that fetched various food establishments
                        from an API. Then, we had to sort the information in different ways.
                    </p>
                    <a href="https://github.com/vselenwall/case4.git">www.github.com/hawaiifood</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/todo-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Todo App</h4>
                    <h5>JavaScript / CSS</h5>
                    <p>A few weeks into our education, we learned JavaScript,
                        and that's when I did my very first case using pure JavaScript.
                        The requirements were to create a todo app where users could add new tasks,
                        edit existing ones, delete tasks, and mark tasks as completed.
                    </p>
                    <a href="https://vselenwall.github.io/case3-javascript/">www.github.com/todo</a>
                </div>
            </div>

            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/exploreapp-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>Explore App</h4>
                    <h5>Node.js / EJS / CSS / MVC-model</h5>
                    <p>During this case, we worked on creating authentications using Node.js.
                        The requirements were to be able to create a user, log in with a user, and then allow the user to create,
                        edit, and delete posts. I choosed to create a website where users could share their best hiking trails
                        with each other. Additionally, we learned about the MVC model in this case.
                    </p>
                    <a href="https://github.com/vselenwall/case9.git">www.github.com/exploredalsland</a>
                </div>
            </div>


            <div className="projects__single-project">
                <div className="projects__single-project_img">
                    <img src={process.env.PUBLIC_URL + "/media/figma2-portfolio.jpg"} alt="A picture of a website" />
                </div>
                <div className="projects__single-project__text">
                    <h4>My Portfolio</h4>
                    <h5>React / SASS</h5>
                    <p>
                        When I created this website, I used React and styled it using SASS.
                        I enjoy working with React and SASS, so it was important for me to showcase my latest skills in this area.
                        Throughout all the projects at the education, we have also worked with Figma and created both LoFi and HiFi
                        designs for all our projects. That's why I have chosen to include an image from my HiFi design in Figma as a
                        mockup for this project that you are currently viewing.
                    </p>
                    <a href="https://github.com/vselenwall/portfolio-webdeveloper.git">www.github.com/portfolio</a>
                </div>
            </div>


        </div>
    )
}

export default Projects