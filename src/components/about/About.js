import React from 'react';
import TechStack from './tech_stack/TechStack'
import SubIntro from './intro/SubIntro';
import CodingInfo from './intro/CodingInfo'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'

const About =()=>
  
        <div  id="about" className='about-container'>
            <h1 className='about-header'>About me</h1>
            <div  className= 'intro'>
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
            <Zoom>
              <SubIntro />
            </Zoom>
            <Zoom>
              <CodingInfo  />
            </Zoom>
            <Flip right>
              <TechStack /> 
            </Flip>
            </div>
        </div>

    export default About