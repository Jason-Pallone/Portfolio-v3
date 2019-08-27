import React from 'react';
import TechStack from './TechStack'
import SubIntro from './SubIntro';
import CodingInfo from './CodingInfo'

const About =(props)=>
  
        <div  id="about" className='about-container'>
            <h1 className='about-header'>About me</h1>

            
            <div  className={ props.showAbout ? 'intro fade-in' : 'hidden'}>
                <p>
                My name is Jason Pallone, I'm a Front End Developer.
                I love to learn and I am currently seeking a new role as a Developer.
                </p>

                <p> 
                I have experience with JavaScript, HTML, CSS, React.js, AJAX, jQuery, Express.js, Node.js, mongoDB and Redux.
                I also have experience with Git and GitHub.
                </p>

                <p>
                I am very passionate about coding and learning, I'm a life long learner who
                loves to collaborate with teams to generate success.
                </p>

                <SubIntro showSubIntro={props.showSubIntro} />
                <CodingInfo showCodingInfo={props.showCodingInfo} />
                <TechStack showStack={props.showStack} /> 
            </div>
        </div>

    export default About