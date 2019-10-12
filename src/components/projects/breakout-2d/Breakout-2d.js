import React from 'react'
import Flip from 'react-reveal/Flip'
import BreakoutLinks from './Breakout-links'


const Breakout2D =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Breakout 2D</h1>
        <img src='./gifs/Breakout-2D.gif' alt='breakout game' className='gif'></img>
        <p className= 'project-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript icon' />
            <br></br>
            This game is PC/Laptop only as of right now, but can still be viewed in mobile.
            This is the game known as breakout, it is created using JavaScript, HTML canvas and CSS. 
            The game has game over and winning messages. It also keeps tracks of your score and current
            lives before the game ends. 
        </p>
        <Flip top>
            <BreakoutLinks />
        </Flip>
    </div>

export default Breakout2D