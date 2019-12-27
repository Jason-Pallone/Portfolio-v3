import React from 'react';
import Fade from 'react-reveal/Fade';

//Components
import BreakoutLinks from './Breakout-links';
import TechIcons from '../../icons/tech-icons/Tech-icons';


const Breakout2D =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Breakout 2D</h1>
        <img src='./gifs/Breakout-2D.gif' alt='breakout game' className='gif'></img>
        <p className= 'project-description'>
            <TechIcons />
            <img src="pc-icon.png" alt="pc icon"/>
            <br></br>
            This game is PC/Laptop only as of right now, but can still be viewed in mobile.
            This is the game known as breakout, it is created using JavaScript, HTML canvas and CSS. Break all the bricks 
            to win the game! There is a message displayed once the player has won or lost the game, as well
            the game keeps tracks of your score and current lives while playing.
        </p>
        <Fade top>
            <BreakoutLinks />
        </Fade>
    </div>

export default Breakout2D