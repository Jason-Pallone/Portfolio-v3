import React from 'react'
import Flip from 'react-reveal/Flip'
import TechIcons from '../../icons/tech-icons/Tech-icons'
import DeviceIcons from '../../icons/device icons/Device-icons'
import GiphyLinks from './Giphy-links'



const GiphyAPI =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Giphy API</h1>
        <img src='./gifs/giphy-api.gif' alt='giphy api project' className='gif'></img>
        <p className= 'project-description'>
            <TechIcons />
            <DeviceIcons />
            This is a project using Giphy API, you can search for Gifs and click on any gif to be brought
            to the source of that gif. This project was created using JavaScript, HTML and CSS.
        </p>
        <Flip top>
            <GiphyLinks />
        </Flip>
    </div>

export default GiphyAPI