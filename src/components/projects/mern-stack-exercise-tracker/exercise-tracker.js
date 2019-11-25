import React from 'react'
import Flip from 'react-reveal/Flip'
import DeviceIcons from '../../icons/device icons/Device-icons'
import ExerciseTrackerLinks from './exercise-tracker-links'


const ExerciseTracker =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Full Stack Exercise Tracker</h1>
        <img src='./gifs/exercise-tracker.gif' alt='mern stack exercise tracker project' className='gif'></img>
        <p className= 'project-description'>
        <img className='techStack-icon react' src='/React-icon.png' alt='React icon'></img>
        <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/nodejs.png" alt='Node.js icon' />
        <img className='techStack-icon express' src='/Express-icon.png' alt='express icon' />
        <img className='techStack-icon' src='/MongoDB-icon.png' alt='mongoDB icon' />
        <img className='techStack-icon' src='/Bootstrap-icon.png' alt='bootstrap icon' />
        <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <DeviceIcons />
            This is a Full Stack project, created using the MERN stack (mongoDB, Express.js, React, Node.js). Designed
            using Bootstrap and custom CSS. This is an exercise tracker app, that you can add a user by any name then
            add an exercise, duration they did the exercise and the date they did the exercise. Then you can edit or delete
            the exercise log as needed. All information is saved to MonogoDB using Express/Node for the Backend and using
            React on the Front-end. This app is fully responsive for all devices, check out the live demo!
        </p>
        <Flip top>
            <ExerciseTrackerLinks />
        </Flip>
    </div>

export default ExerciseTracker