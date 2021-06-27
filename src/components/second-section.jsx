import React from 'react';
import CardOne from "../assets/img/spaceinvaders-pacman.jpg";
import CardTwo from "../assets/img/sunnyside-copycat.jpg";
import CardThree from "../assets/img/loopstudios-copycat.jpg";
import CardFour from "../assets/img/project-coming-soon.png";
import CardFive from "../assets/img/testimonials-grid-section.jpg"

const SecondSection = () => {
    return  <section className="all-projects">
                <h2 className="h2-projects">Projects</h2>
                <div className="projects-col">
                    <div className="project">
                        <a href="https://laura-vln.github.io/PewPew/" target="blank"><img class="project-img" src={CardOne} alt="Screenshot of a project : Space Invaders X Pac-Man." /></a>
                        <p>Play with keyboard</p>
                        <p>Canvas, JS</p>
                    </div>
                    <div className="project">
                        <a href="https://laura-vln.github.io/fm-sunnyside/" target="blank"><img class="project-img" src={CardTwo} alt="Screenshot of a project : Frontend Mentor exercise - Copycat of Sunnyside." /></a>
                        <p>Responsive landing page</p>
                        <p>HTML, CSS/Sass, JS</p>
                    </div>
                </div>
                <div className="projects-col">
                    <div className="project">
                        <a href="https://laura-vln.github.io/fm-loopstudio/" target="blank"><img class="project-img" src={CardThree} alt="Screenshot of a project : Frontend Mentor exercise - Copycat of Loopstudios." /></a>
                        <p>Responsive landing page</p>
                        <p>HTML, CSS/Sass, JS</p>
                    </div>
                    <div className="project">
                        <a href="https://laura-vln.github.io/fm-testimonials-grid/" target="blank"><img class="project-img" src={CardFive} alt="Screenshot of a project : Testimonials Grid Section" /></a>
                        <p>Responsive testimonials grid section</p>
                        <p>HTML, CSS/Sass, Css-Grid</p>
                    </div>
                </div>
                <div className="projects-col">
                    {/* <div className="project" id="breathing">
                        <a href="https://github.com/Laura-VLN" target="blank"><img class="project-img" src={CardFour} alt="A project is coming on Monday, June 28, 2021" /></a>
                        <p></p>
                    </div> */}
                    {/* <div className="project">
                        <a href="" target="blank"><img class="project-img" src="" alt="Screenshot of a project : " /></a>
                        <p></p>
                        <p></p>
                    </div> */}
                </div>
            </section>
}

export default SecondSection;