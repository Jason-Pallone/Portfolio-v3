import React from 'react'
import Flip from 'react-reveal/Flip'
import GiphyLinks from './Giphy-links'


const GiphyAPI =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Giphy API</h1>
        <img src='./gifs/giphy-api.gif' alt='giphy api project' className='gif'></img>
        <p className= 'project-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript icon' />
            <br></br>
            <img src="pc-icon.png" alt="pc icon"/>
            <img src="tablet-icon.png" alt="tablet icon"/>
            <img src="smartphone-icon.png" alt="smartphone icon"/>
            <br></br>
            This is a project using Giphy API, you can search for Gifs and click on any gif to be brought
            to the source of that gif.
        </p>
        <Flip top>
            <GiphyLinks />
        </Flip>
    </div>

export default GiphyAPI