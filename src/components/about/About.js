import React from 'react';
import TechStack from './tech_stack/TechStack'
import Flip from 'react-reveal/Flip'

const About =()=>
        <div id="about" className='about-container'>
            <h1 className='about-header'>About me</h1>
            <div  className= 'intro'>
                <p>
                Hey there! My name is Jason and I really enjoy coding. Everyday i'm working to learn something new, 
                I enjoy creating projects and making ideas come to life. I like to take problems and create an 
                effective solution for that problem. Once I started to learn how to code, there was no going back because 
                it lets me do these things daily and I love it. Learning to code is one of the best decisions i've ever made.
                </p>

                <p> 
                I have experience with JavaScript, HTML, CSS, React.js, AJAX, jQuery, Express.js, Node.js, mongoDB and Redux.
                I also have experience with Git, NPM and GitHub.
                </p>

                <p>
                I am very passionate about coding and learning, I'm a life long learner who
                loves to collaborate with teams to generate success.
                </p>
            <Flip right>
              <TechStack /> 
            </Flip>
            </div>
        </div>      

    export default About