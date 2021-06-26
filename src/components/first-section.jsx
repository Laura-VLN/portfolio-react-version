import React from 'react';
import profilepic from "../assets/img/laura-vilain-profile-pic-white.png";
import logohtml from "../assets/img/logos-technos/html5.png";
import logocss from "../assets/img/logos-technos/css3.png";
import logosass from "../assets/img/logos-technos/sass.png"
import logobootstrap from "../assets/img/logos-technos/bootstrap.png";
import logojs from "../assets/img/logos-technos/js.png";
import logonode from "../assets/img/logos-technos/nodejs.png";
import logoreact from "../assets/img/logos-technos/react.png";
import logowp from "../assets/img/logos-technos/wordpress.png";


const FirstSection = () => {
    return  <section className="all-infos">
                <div className="personal-infos">
                    <img className ="profile-pic" src={profilepic} alt="Profile picture of Laura Vilain." />
                    <h1>Laura Vilain</h1>
                    <h2>Front-End Web Developer</h2>
                </div>
                <div className="all-technos">
                    <div class="four-technos">
                        <img src={logohtml} alt="" />
                        <img src={logocss} alt="" />
                        <img src={logosass} alt="" />
                        <img src={logobootstrap} alt="" />
                    </div>
                    <div className="four-technos">
                        <img src={logojs} alt="" />
                        <img src={logonode} alt="" />
                        <img src={logoreact} alt="" />
                        <img src={logowp} alt="" />
                    </div>
                </div>
                <div className="about">
                    <p>
                        Passionate about technology, I decided to become a web developer after working as an Account & Social Media Manager.
                    </p>
                    <p>
                        BeCode's intensive training allowed me to make a choice and to move towards the front-end.
                    </p>
                    <p>
                        I mainly use HTML, Sass and JavaScript but I'm currently learning React.js and Redux.
                    </p>
                </div>
            </section>
}

export default FirstSection;