import React from 'react';
import Fade from 'react-reveal/Fade';

//Components
import ReviewerLinks from './reviewerLinks'
import DeviceIcons from '../../icons/device icons/Device-icons';
import TechIcons from '../../icons/tech-icons/Tech-icons';




const Reviewer = ()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Reviewer</h1>
        <img src='./gifs/reviewer-gif.gif' alt='reviewer gif' className='gif'></img>
        <p className='project-description'>
            <TechIcons />
            <div className='exercise-icons-container'>
              <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/nodejs.png" alt='Node.js icon' />
              <img className='techStack-icon express-icon-exercise-app' src='/Express-icon.png' alt='express icon' />
              <img className='techStack-icon sql-icon-apps' src='/sql-icon.png' alt='sql icon' />
            </div>
            <img className='techStack-icon sequelize-icon-apps' src='/Sequelize-icon.png' alt='sequelize icon' />
            <br></br>
            <DeviceIcons />
            This is movie review app. The user can create a movie review, read/retrieve a movie review, update a movie review
            and delete movie reviews. This app was created using vanilla JavaScript on the front end, with Node.js and Express
            for the back end. All information is saved to the database using SQL/Sequelize. The design is done
            using HTML and custom hand written CSS.
        </p>
        <Fade top>
            <ReviewerLinks />
        </Fade>
    </div>


export default Reviewer