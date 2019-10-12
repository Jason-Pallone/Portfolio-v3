import React from 'react'
import Flip from 'react-reveal/Flip'
import MarsRoverApiLinks from './Mars_rover_API_links'


const MarsRoverAPI =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Mars Rover API</h1>
        <img src='./gifs/mars-rover-API.gif' alt='mars rover api project' className='gif'></img>
        <p className= 'project-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript icon' />
            <br></br>
            <img src="pc-icon.png" alt="pc icon"/>
            <img src="tablet-icon.png" alt="tablet icon"/>
            <img src="smartphone-icon.png" alt="smartphone icon"/>
            <br></br>
            This is a project using NASAs open API for the Mars Curiosity rover. It gathers photos from the API 
            and displays them with their description.
        </p>
        <Flip top>
            <MarsRoverApiLinks />
        </Flip>
    </div>

export default MarsRoverAPI