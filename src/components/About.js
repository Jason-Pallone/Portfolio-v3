import React from 'react';
import TechStack from './TechStack'

const About =()=>

        <div  id="about" className='about-container'>
            <h1 className='about-header'>
            About
            </h1>
            <hr className='about-hr'></hr>

            <div className='about-me-container'>
                <div className='intro'>
                    <p>
                        My name is Jason Pallone, I'm a Full Stack Developer who specializes in React, and I love to learn!
                        I am currently seeking my first role as a Junior Developer.
                        I have experience with HTML, CSS, JavaScript, React.js, AJAX, jQuery, Express.js, node.js, mongoDB and redux.
                        I also have experience with GIT. I am very passionate about coding and learning, I'm a life long learner who
                        loves to collaborate with teams to generate success.
                    </p>
                    <p className='sub-intro'>
                        Coding has become a big part of my life and I cannot wait to make it my career!
                    </p>
                    <p className='about'>
                        I've been coding since 2018, learning to code was one of the best decisions i've ever made.
                        Everyday I learn more about code, each time I learn more, I fall more in love.
                    </p>
                <TechStack />
                </div>
            </div>
        </div>

    export default About