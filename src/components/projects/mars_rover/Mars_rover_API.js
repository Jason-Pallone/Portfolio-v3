import React from 'react'
import Flip from 'react-reveal/Flip'
import TechIcons from '../../icons/tech-icons/Tech-icons'
import DeviceIcons from '../../icons/device icons/Device-icons'
import MarsRoverApiLinks from './Mars_rover_API_links'


const MarsRoverAPI =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Mars Rover API</h1>
        <img src='./gifs/mars-rover-API.gif' alt='mars rover api project' className='gif'></img>
        <p className= 'project-description'>
            <TechIcons />
            <DeviceIcons />
            This is a project that uses NASAs open API for the Mars Curiosity rover. It gathers images from the API 
            and displays the images with basic information. This project was created using JavaScript, HTML and CSS.
        </p>
        <Flip top>
            <MarsRoverApiLinks />
        </Flip>
    </div>

export default MarsRoverAPI